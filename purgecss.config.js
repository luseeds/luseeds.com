class TailwindExtractor {
  static extract(content) {
    return content.match(/[\w-/:]+(?<!:)/g) || []
  }
}

module.exports = {
  content: [
    "./src/**/*.vue",
    "./src/**/*.js",
    "./src/**/*.html",
    "./content/**/*.md"
  ],
  whitelist: [
    "body",
    "html",
    "img",
    "a",
    "g-image",
    "g-image--lazy",
    "g-image--loaded",
    "active"
  ],
  extractors: [
    {
      extractor: TailwindExtractor,
      extensions: ["vue", "js", "md", "html"]
    }
  ]
}
