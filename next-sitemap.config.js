/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://mamakustudio.com", // ganti dengan domain kamu
  generateRobotsTxt: false, // otomatis bikin robots.txt
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/api/*"], // biar endpoint API ga masuk ke sitemap
  transform: async (config, path) => {
    // Set prioritas per halaman
    let priority = 0.7;

    if (path === "/") priority = 1.0; // Home lebih penting
    if (path.startsWith("/mamaku-architecture-projects")) priority = 0.9; // portofolio utama
    if (path.startsWith("/about-mamaku-studio")) priority = 0.6;
    if (path.startsWith("/contact-architecture-mamaku")) priority = 0.5;

    return {
      loc: path, // path halaman
      changefreq: config.changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
