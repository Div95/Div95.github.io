module.exports = {
  siteMetadata: {
    title: 'Divya Sharma',
    description: 'Software Engineer',
    author: '@div95',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: ['./src/sass'],
      },
    },
  ],
};
