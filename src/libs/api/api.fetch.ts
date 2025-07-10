"server only";
import { envAppConfig } from "../configs/config.env";
import { envRootLayoutConfig } from "../configs/config.env";

export const callFetchAPI = async (
  endpoint: string,
  revalidateTime?: number
) => {
  try {
    const res = await fetch(`${endpoint}`, {
      method: "GET",
      // cache: "no-cache",
      // Revalidate every after 1 day seconds
      next:
        envAppConfig.APP_ENV === "production"
          ? { revalidate: revalidateTime ? revalidateTime : 24 * 60 * 60 }
          : undefined,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      // mode: 'cors',
      credentials: "same-origin",
    });
    return res.json();
  } catch (err) {
    console.error(err + "Failed to fetch data");
  }
};

// Fetch root layout data from the API
// This is used in src/app/layout.tsx
export const getRootLayoutAPI = async () => {
  const data = await callFetchAPI(envRootLayoutConfig.rootLayoutAPI);
  return data.rootLayoutData;
};
