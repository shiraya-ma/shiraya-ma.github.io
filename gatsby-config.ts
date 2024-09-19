'use strict';
import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `shiraya-ma.github.io`,
    siteUrl: `https://docs.shiraya.ma`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  // graphqlTypegen: true,
  graphqlTypegen: false,
  plugins: [
    "gatsby-plugin-layout",
    "gatsby-plugin-postcss",
    // "gatsby-plugin-sitemap", {
    //   resolve: 'gatsby-plugin-manifest',
    //     options: {
    //       "icon": "src/images/icon.png"
    //   }
    // }
  ]
};

export default config;
