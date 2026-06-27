"use client";

import { useMemo, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTexture, Float } from "@react-three/drei";

/* Yumuşak altın radyal hâle dokusu (canvas ile üretilir) */
function useGlowTexture() {
  return useMemo(() => {
    const c = document.createElement("canvas");
    c.width = c.height = 256;
    const ctx = c.getContext("2d")!;
    const g = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
    g.addColorStop(0, "rgba(212,175,55,0.55)");
    g.addColorStop(0.4, "rgba(212,175,55,0.18)");
    g.addColorStop(1, "rgba(212,175,55,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 256, 256);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  }, []);
}

/* ---- Anka düzlemi: siyah zemini saydamlaştıran + küllerinden doğuş shader'ı ---- */
function PhoenixPlane({ scrollRef }: { scrollRef: React.RefObject<number> }) {
  const texture = useTexture("/brand/phoenix.jpeg");
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  const glow = useGlowTexture();

  const group = useRef<THREE.Group>(null);
  const mat = useRef<THREE.ShaderMaterial>(null);
  const glowMat = useRef<THREE.MeshBasicMaterial>(null);
  const reveal = useRef(0);
  const { viewport, pointer } = useThree();

  const img = texture.image as { width: number; height: number } | undefined;
  const aspect = img && img.height ? img.width / img.height : 1;

  const uniforms = useMemo(
    () => ({
      uMap: { value: texture },
      uTime: { value: 0 },
      uReveal: { value: 0 },
      uExit: { value: 0 },
    }),
    [texture],
  );

  useFrame((_, delta) => {
    // Açılış: küllerinden doğuş (aşağıdan yukarı dissolve), easeOutCubic
    reveal.current = Math.min(1, reveal.current + delta / 2.4);
    const eased = 1 - Math.pow(1 - reveal.current, 3);

    if (mat.current) {
      mat.current.uniforms.uTime.value += delta;
      mat.current.uniforms.uReveal.value = eased;
      mat.current.uniforms.uExit.value = scrollRef.current ?? 0;
    }
    if (glowMat.current) {
      // Hâle açılışta nabız gibi güçlenip sabitlenir
      glowMat.current.opacity = 0.35 + eased * 0.55;
    }
    if (group.current) {
      // Fare parallax — hafif 3B eğilme
      const tx = pointer.x * 0.2;
      const ty = pointer.y * 0.15;
      group.current.rotation.y += (tx - group.current.rotation.y) * 0.05;
      group.current.rotation.x += (-ty - group.current.rotation.x) * 0.05;
      // Scroll'a bağlı büyüme + yukarı süzülme
      const p = scrollRef.current ?? 0;
      group.current.position.y = 0.1 + p * 1.1;
      const s = (0.92 + eased * 0.08) * (1 + p * 0.2);
      group.current.scale.setScalar(s);
    }
  });

  const size = Math.min(viewport.width, viewport.height) * 0.7;

  return (
    <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.6}>
      <group ref={group} position={[0, 0.1, 0]}>
        {/* Ambiyans hâlesi (sahte bloom) */}
        <mesh position={[0, 0, -0.6]} scale={[size * 1.7, size * 1.7, 1]}>
          <planeGeometry args={[1, 1]} />
          <meshBasicMaterial
            ref={glowMat}
            map={glow}
            transparent
            depthWrite={false}
            blending={THREE.AdditiveBlending}
            opacity={0.8}
            toneMapped={false}
          />
        </mesh>
        <mesh scale={[size * aspect, size, 1]}>
          <planeGeometry args={[1, 1, 1, 1]} />
          <shaderMaterial
            ref={mat}
            transparent
            depthWrite={false}
            uniforms={uniforms}
            vertexShader={`
              varying vec2 vUv;
              void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
              }
            `}
            fragmentShader={`
              uniform sampler2D uMap;
              uniform float uTime;
              uniform float uReveal;
              uniform float uExit;
              varying vec2 vUv;
              void main() {
                vec4 tex = texture2D(uMap, vUv);
                float lum = max(tex.r, max(tex.g, tex.b));
                // Siyah zemini parlaklığa göre saydamlaştır
                float alpha = smoothstep(0.05, 0.22, lum);
                // Scroll çıkışı: alttan (kuyruktan) yukarı dağılarak sönme
                float exitLine = uExit * 1.3 - 0.2;
                alpha *= smoothstep(exitLine, exitLine + 0.18, vUv.y);

                // İnce ışık süzülmesi (tarayan parıltı)
                float sweep = 0.12 * sin(vUv.y * 9.0 - uTime * 1.3);
                vec3 col = tex.rgb * (1.08 + sweep);

                // Küllerinden doğuş: aşağıdan yukarı açılan maske
                float mask = 1.0 - smoothstep(uReveal, uReveal + 0.14, vUv.y);
                // Açılan kenarda ateş çizgisi (sıcak parıltı)
                float revealing = 1.0 - smoothstep(0.82, 1.0, uReveal);
                float edge = smoothstep(0.16, 0.0, abs(vUv.y - uReveal)) * revealing;
                vec3 hot = mix(col, vec3(1.0, 0.72, 0.3), edge * 0.85);

                float a = alpha * mask + edge * alpha * 0.5;
                gl_FragColor = vec4(hot + vec3(edge * 0.5, edge * 0.3, edge * 0.05), clamp(a, 0.0, 1.0));
              }
            `}
          />
        </mesh>
      </group>
    </Float>
  );
}

/* ---- Yükselen altın korlar (scroll + fare tepkili, açılışta patlama) ---- */
function Embers({
  count = 110,
  scrollRef,
}: {
  count?: number;
  scrollRef: React.RefObject<number>;
}) {
  const points = useRef<THREE.Points>(null);
  const { viewport, pointer } = useThree();

  const sprite = useMemo(() => {
    const c = document.createElement("canvas");
    c.width = c.height = 64;
    const ctx = c.getContext("2d")!;
    const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, "rgba(255,240,190,1)");
    g.addColorStop(0.3, "rgba(230,190,90,0.8)");
    g.addColorStop(1, "rgba(230,190,90,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 64, 64);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  }, []);

  const { positions, speeds } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 9;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2;
      speeds[i] = 0.15 + Math.random() * 0.4;
    }
    return { positions, speeds };
  }, [count]);

  useFrame((state, delta) => {
    if (!points.current) return;
    const pos = points.current.geometry.attributes.position
      .array as Float32Array;
    const topY = viewport.height / 2 + 1;
    const t = state.clock.elapsedTime;
    // Açılışta korlar daha hızlı yükselir (doğuş patlaması)
    const burst = t < 2.6 ? 1.8 - t / 3.25 : 1;
    // Scroll'da yükseliş hızlanır
    const scrollBoost = 1 + (scrollRef.current ?? 0) * 1.6;
    const px = pointer.x * (viewport.width / 2);

    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] += speeds[i] * delta * burst * scrollBoost;
      // Hafif yatay salınım + imlece doğru nazik sürüklenme
      pos[i * 3] +=
        Math.sin(t * 0.5 + i) * delta * 0.08 +
        (px - pos[i * 3]) * delta * 0.012;
      if (pos[i * 3 + 1] > topY) {
        pos[i * 3 + 1] = -topY;
        pos[i * 3] = (Math.random() - 0.5) * 9;
      }
    }
    points.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        map={sprite}
        size={0.16}
        sizeAttenuation
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.9}
      />
    </points>
  );
}

export default function PhoenixScene({
  scrollRef,
  onUnrecoverable,
}: {
  scrollRef: React.RefObject<number>;
  /* Bağlam düşüp belirli sürede geri gelmezse (gerçekten ölü) çağrılır. */
  onUnrecoverable?: () => void;
}) {
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 640;

  return (
    <Canvas
      dpr={isMobile ? [1, 1.25] : [1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
        failIfMajorPerformanceCaveat: false,
        preserveDrawingBuffer: false,
      }}
      camera={{ position: [0, 0, 6], fov: 42 }}
      style={{ background: "transparent" }}
      onCreated={({ gl }) => {
        const canvas = gl.domElement;
        let deadTimer: ReturnType<typeof setTimeout> | null = null;

        // Bağlam kaybında: preventDefault → tarayıcı geri yüklemeyi dener.
        // Birkaç saniyede geri gelmezse gerçek son çareye (CSS) düş.
        canvas.addEventListener("webglcontextlost", (e) => {
          e.preventDefault();
          if (deadTimer) clearTimeout(deadTimer);
          deadTimer = setTimeout(() => onUnrecoverable?.(), 4000);
        });
        canvas.addEventListener("webglcontextrestored", () => {
          if (deadTimer) {
            clearTimeout(deadTimer);
            deadTimer = null;
          }
        });
      }}
    >
      <PhoenixPlane scrollRef={scrollRef} />
      <Embers scrollRef={scrollRef} count={isMobile ? 55 : 110} />
    </Canvas>
  );
}
