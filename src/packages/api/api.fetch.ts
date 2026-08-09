import { serverFetch } from "../utils/serverFetch";

export const getLayoutData = async () => {
  return serverFetch("/api/layout", {
    revalidate: 86400,
  });
};
