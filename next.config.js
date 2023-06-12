const nextConfig = {
    trailingSlash: false,
    exportPathMap: async (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) => {
      return {
        "/": { page: "/" },
        "/about-us": { page: "/about-us" },
        "/mission": { page: "/mission" },
        "/services": { page: "/services" },
        "/contact-us": { page: "/contact-us" },
        "/careers": { page: "/careers" }
      };
    },
};

module.exports = nextConfig;
