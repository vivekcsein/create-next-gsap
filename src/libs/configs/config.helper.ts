import { envGithubConfig } from "./config.env";

// Helper functions to safely access localStorage (only in browser)
export const getLocalStorageItem = <T = unknown>(
  key: string,
  fallback: T
): T => {
  if (typeof window !== "undefined" && window.localStorage) {
    const item = window.localStorage.getItem(key);
    try {
      return item ? (JSON.parse(item) as T) : fallback;
    } catch {
      return fallback;
    }
  }
  return fallback;
};
export const setLocalStorageItem = (key: string, value: unknown) => {
  if (typeof window !== "undefined" && window.localStorage) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
};
export const removeLocalStorageItem = (key: string) => {
  if (typeof window !== "undefined" && window.localStorage) {
    window.localStorage.removeItem(key);
  }
};

export const putLocalStorageItem = (key: string, value: unknown) => {
  if (typeof window !== "undefined" && window.localStorage) {
    const existing = window.localStorage.getItem(key);
    let arr: unknown[] = [];
    if (existing) {
      try {
        arr = JSON.parse(existing);
        if (!Array.isArray(arr)) arr = [];
      } catch {
        arr = [];
      }
    }
    arr.push(value);
    window.localStorage.setItem(key, JSON.stringify(arr));
  }
};

/**
 * Generates a full image URL from a Git repository path.
 * @param images - An array of image objects or a single image path string.
 * @param Index - Optional index to select an image from the array.
 * @returns Full URL to the image.
 */
export const imageURLFromGit = (
  images: Omit<{ src: string; alt?: string }[], never> | string,
  Index?: number
) => {
  const gitDestination = envGithubConfig.GITHUB_IMAGE_URL;

  if (gitDestination) {
    const newIndex = Index ?? 0;
    if (typeof images === "string") {
      return gitDestination + images;
    } else {
      const imagePath =
        Array.isArray(images) &&
        images.length > newIndex &&
        images[newIndex]?.src
          ? images[newIndex].src.startsWith("/")
            ? images[newIndex].src
            : "/" + images[newIndex].src
          : "/placeholder.png";
      return gitDestination + imagePath;
    }
  } else {
    return "/placeholder.png";
  }
};
