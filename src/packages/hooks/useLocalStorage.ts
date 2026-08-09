"use client";

import { useCallback, useEffect, useState } from "react";
import { readStorage, writeStorage } from "@/packages/utils/storage";

/**
 * useLocalStorage.ts
 * --------------------------------------------------------------
 * Persist a piece of React state to localStorage, kept in sync across
 * tabs/windows via the `storage` event.
 *
 * State always *initializes* to `fallback` — even on the client — and
 * only picks up the real stored value inside a `useEffect` after mount.
 * This is deliberate: Next.js server-renders with no access to
 * localStorage, so the first client render must match that server output
 * exactly or React throws a hydration mismatch. Reading localStorage
 * synchronously in the initializer would make the first client render
 * differ from the server-rendered HTML whenever a stored value already
 * exists. The one-render delay before the real value appears is the
 * accepted tradeoff for that safety — see useMounted.ts if a component
 * needs to gate rendering entirely until then instead.
 *
 *   const [theme, setTheme] = useLocalStorage("theme", "system");
 */
export const useLocalStorage = <T>(
  key: string,
  fallback: T,
): [T, (value: T | ((previous: T) => T)) => void] => {
  const [value, setValue] = useState<T>(fallback);

  // Pick up the real persisted value after mount (client-only). `fallback`
  // is intentionally excluded from deps so passing a new object/array
  // literal each render doesn't re-trigger this read.
  // biome-ignore lint/correctness/useExhaustiveDependencies: fallback intentionally excluded, see comment above
  useEffect(() => {
    setValue(readStorage(key, fallback));
  }, [key]);

  // Cross-tab sync: another tab writing this key updates us too.
  // biome-ignore lint/correctness/useExhaustiveDependencies: fallback intentionally excluded, same reasoning as the effect above
  useEffect(() => {
    const handleStorageEvent = (event: StorageEvent) => {
      if (event.key !== key) return;
      setValue(readStorage(key, fallback));
    };

    window.addEventListener("storage", handleStorageEvent);
    return () => window.removeEventListener("storage", handleStorageEvent);
  }, [key]);

  const setPersistedValue = useCallback(
    (next: T | ((previous: T) => T)) => {
      setValue((previous) => {
        const resolved = next instanceof Function ? next(previous) : next;
        writeStorage(key, resolved);
        return resolved;
      });
    },
    [key],
  );

  return [value, setPersistedValue];
};
