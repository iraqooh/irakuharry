import type { NextConfig } from "next";

if (process.platform === "win32") {
  process.env.ESBUILD_BINARY_PATH =
    "node_modules/esbuild/esbuild.exe";
}

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "cdn.hashnode.com",
        port: "",
        pathname: "/res/**"
      }
    ],
  },
};

export default nextConfig;
