import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Statik dosyalar, API ve Next içsel yolları hariç her şeyi eşle
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
