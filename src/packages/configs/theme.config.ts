/**
 * themes.config.ts
 * --------------------------------------------------------------
 * Single source of truth for layout/motion tokens that need to be
 * read from JavaScript (not just CSS) — e.g. `useBreakpoints`.
 *
 * Keep these numbers in sync with the Tailwind v4 defaults used in
 * `globals.css`. If you customize a breakpoint in your Tailwind
 * `@theme`, update it here too.
 */

/** Tailwind v4 default breakpoints, in pixels. */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export type BreakpointKey = keyof typeof BREAKPOINTS;

/**
 * Shared motion durations (ms), so components animate in sync
 * instead of every file inventing its own "0.2s ease" constant.
 */
export const MOTION_DURATION = {
  instant: 100,
  fast: 150,
  base: 250,
  slow: 400,
} as const;

export type MotionDurationKey = keyof typeof MOTION_DURATION;

// theme configs
export const THEME_STORAGE_KEY = "theme";

export const themeConfig = {
  storageKey: THEME_STORAGE_KEY,
  defaultTheme: "system",
  enableSystem: true,
} as const;
