require(`dotenv`).config();

module.exports = {
  siteMetadata: {
    title: 'Portfolio',
    description: "Philip Johnston's online development portfolio",
    siteUrl: process.env.SITE_URL || 'http://localhost:8000'
  },
  plugins: ['@reflexjs/gatsby-theme-base']
};
