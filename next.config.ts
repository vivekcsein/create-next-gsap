import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  sassOptions: { includePaths: [path.join(process.cwd(), "styles", "saas")] },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.githubusercontent.com" },
      { protocol: "https", hostname: "i.ibb.co" },
    ],
  },
};
export default nextConfig;
