module.exports = {
  siteMetadata: {
    title: 'Building Vermont',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    //plugins for images
    `gatsby-remark-copy-linked-files`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 400,
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'http://localhost:1337',
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          'building',
          'architect',
          'event',
          'post',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        showCaptions: 'true',
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/icons8-home-64.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
};
