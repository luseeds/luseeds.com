// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require("tailwindcss")
const purgecss = require("@fullhuman/postcss-purgecss")

const postcssPlugins = [tailwind()]

if (process.env.NODE_ENV === "production") postcssPlugins.push(purgecss())

module.exports = {
  siteName: "Luseeds",
  siteDescription:
    "Seeds of knowledge on a healthy, ethical and sustainable lifestyle.",
  siteUrl: "https://luseeds.com",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Project",
        path: "./content/projects/**/*.md"
      }
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 600000
      }
    }
  ],
  templates: {
    Project: "/projects/:path"
  },
  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link"
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule("svg")
    svgRule.uses.clear()
    svgRule.use("vue-svg-loader").loader("vue-svg-loader")
  }
}
