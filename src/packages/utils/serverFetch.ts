import "server-only";
import { envAppConfig } from "../env/app.env";
import { envPublicConfig } from "../env/public.env";

type ServerFetchOptions = {
  revalidate?: number;
  headers?: HeadersInit;
};

export const serverFetch = async <T>(
  endpoint: string,
  options?: ServerFetchOptions,
): Promise<T> => {
  const baseUrl = endpoint.startsWith("http") ? "" : envPublicConfig.SITE_URL;

  const url = `${baseUrl}${endpoint}`;

  const response = await fetch(url, {
    method: "GET",

    next:
      envAppConfig.NODE_ENV === "production"
        ? {
            revalidate: options?.revalidate ?? 86400,
          }
        : undefined,

    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...options?.headers,
    },
  });

  if (!response.ok) {
    throw new Error(
      `Server fetch failed: ${response.status} ${response.statusText}`,
    );
  }

  return response.json() as Promise<T>;
};
