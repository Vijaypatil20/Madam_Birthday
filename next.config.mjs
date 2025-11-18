// next.config.mjs or next.config.js
const nextConfig = {
  output: "export",   // this makes Next.js do static export
  basePath: "/Madam_Birthday",  // IMPORTANT: this should match your repo name
  images: {
    unoptimized: true   // disable Next.js image optimization for static export
  }
};
export default nextConfig;
