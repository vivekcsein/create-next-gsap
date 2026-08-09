"use client";

import { useEffect, useState } from "react";

/**
 * useDebounce.ts
 * --------------------------------------------------------------
 * Returns a debounced copy of `value` that only updates after `delayMs`
 * has passed without `value` changing again. Classic use: a search input
 * where you don't want to fire a request on every keystroke.
 *
 *   const [query, setQuery] = useState("");
 *   const debouncedQuery = useDebounce(query, 300);
 *
 *   useEffect(() => {
 *     if (debouncedQuery) searchService.search(debouncedQuery);
 *   }, [debouncedQuery]);
 */
export const useDebounce = <T>(value: T, delayMs = 300): T => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => setDebouncedValue(value), delayMs);
    return () => clearTimeout(timeoutId);
  }, [value, delayMs]);

  return debouncedValue;
};
