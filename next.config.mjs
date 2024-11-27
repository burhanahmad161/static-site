/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Enable static export mode
    trailingSlash: true,  // Ensure a trailing slash for all exported paths (GitHub Pages requires this for routing)
  };
  
  export default nextConfig;
  