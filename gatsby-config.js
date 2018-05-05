const languages = require('./src/data/languages')

module.exports = {
  siteMetadata: {
    title: `SUPERSTARS`,
    email: `info@superstars.jp`,
    description: `Hello! we are SUPERSTARS`,
    languages
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'en',
        useLangKeyLayout: false
      }
    }
  ],
  // pathPrefix: `superstars`
}
