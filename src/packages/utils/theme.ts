import { THEME_STORAGE_KEY } from "../configs/theme.config";

// Theme init script — driven entirely by system preference (prefers-color-scheme)
export const themeInitScript = `
(function () {
  try {
    var storageKey = "${THEME_STORAGE_KEY}";
    var stored = localStorage.getItem(storageKey);
    var theme =
      stored === "light" || stored === "dark"
        ? stored
        : (window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light");

    var root = document.documentElement;

    var applyTheme = function (isDark) {
      root.classList.toggle("dark", isDark);
    };

    applyTheme(theme.matches);
    theme.addEventListener("change", function (e) {
      applyTheme(e.matches);
    });
  } catch (_) {}
})();
`;
