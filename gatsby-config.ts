'use strict';
import { resolve } from 'path';
import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `shiraya-ma.github.io`,
    siteUrl: `https://docs.shiraya.ma`,
  },
  trailingSlash: 'never',
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  // graphqlTypegen: true,
  graphqlTypegen: false,
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@": resolve(__dirname, 'src')
        }
      }
    },
    "gatsby-plugin-layout",
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //   },
    // },
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-output`,
      options: {
        // default values
        publicPath: 'docs',
        rmPublicFolder: false
      }
    }
  ]
};

export default config;
