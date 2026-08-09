import { envAppConfig } from "../env/app.env";
import { envPublicConfig } from "../env/public.env";

export const appConfig = Object.freeze({
  app: {
    name: envPublicConfig.APP_NAME,
    version: envPublicConfig.APP_VERSION,
    description: envPublicConfig.APP_DESCRIPTION,
    environment: envAppConfig.NODE_ENV,
    locale: "en",
    timezone: "UTC",
  },

  site: {
    url: envPublicConfig.SITE_URL,
    name: envPublicConfig.APP_NAME,
    title: envPublicConfig.SITE_TITLE,
    description: envPublicConfig.APP_DESCRIPTION,

    logoUrl: envPublicConfig.LOGO_URL,
    ogImageUrl: envPublicConfig.OG_IMAGE_URL,

    theme: envPublicConfig.ACTIVE_THEME,
  },

  git: {
    imageUrl: envPublicConfig.GIT_IMAGE_URL,
  },

  author: {
    name: envPublicConfig.AUTHOR_NAME,
    email: envPublicConfig.AUTHOR_EMAIL,
  },

  logging: {
    enabled: envAppConfig.NODE_ENV !== "production",
    stackTrace: envAppConfig.NODE_ENV !== "production",
  },

  headers: {
    requestId: "X-Request-Id",
    traceId: "X-Trace-Id",
    poweredBy: "X-Powered-By",
  },

  pagination: {
    defaultPage: 1,
    defaultLimit: 20,
    maxLimit: 100,
  },

  routes: {
    home: "/",
    about: "/about",

    docs: "/documentation",
    openapi: "/openapi",

    robots: "/robots.txt",
    sitemap: "/sitemap.xml",
    favicon: "/favicon.ico",

    blogs: "/blogs",
    contact: "/contact",
    careers: "/careers",
    dashboard: "/dashboard",
    profile: "/profile",
  },

  keywords: [
    "shadcn",
    "react",
    "typescript",
    "gsap",
    "framer-motion",
    "animations",
  ],
});

export type AppConfig = typeof appConfig;
