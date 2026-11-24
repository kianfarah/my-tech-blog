import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // A stray package-lock.json in the home folder made Next guess the wrong
  // workspace root; pin it to this project.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
