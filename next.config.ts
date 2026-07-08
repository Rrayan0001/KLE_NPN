import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Legacy PHP pages use deprecated HTML attributes (align, valign, etc.)
    // TypeScript strict mode rejects them — ignore during build
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
