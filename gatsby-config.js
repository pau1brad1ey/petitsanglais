module.exports = {
  siteMetadata: {
    title: `Petits Anglais - Carcassonne, France`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-9907395-9',
        head: true
      }
    }
  ]
}
