module.exports = {
  siteMetadata: {
    title: "covid19hk",
    siteUrl: "https://covid19hk.org",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "qwertyuiop1234567890",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
        display: "standalone",
        start_url: `/`,
        background_color: "#f3de64"
      },
    },
    "gatsby-plugin-remove-serviceworker",
    // **
    // * Temporarily disabled due to inefficient development process
    // **
    // {
    //   resolve: `gatsby-plugin-offline`,
    //   options: {
    //     workboxConfig: {
    //       runtimeCaching: [
    //         {
    //           urlPattern: /\//,
    //           handler: `NetworkFirst`,
    //           options: {
    //             networkTimeoutSeconds: 1,
    //           }
    //         }
    //       ]
    //     }
    //   }
    // },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false, // Print removed selectors and processed file names
        develop: true, // Enable while using `gatsby develop`
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      }
    }
  ],
};
