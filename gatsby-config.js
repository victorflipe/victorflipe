/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.victorflipe.com`
  },
  plugins: [{
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: "victorflipe dev",
      short_name: "Victor Felipe DEV",
      description: "Meu blog pessoal",
      icon: `./src/images/myprofile-circle.png`,
      start_url: `/`,
      display: `standalone`,
      cache_busting_mode: `none`
    }
  }],
}
