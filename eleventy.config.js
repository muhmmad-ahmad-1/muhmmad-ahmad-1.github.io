import markdownIt from "markdown-it";

export default function (eleventyConfig) {
  // ---- passthrough -------------------------------------------------------
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/files": "files" });
  eleventyConfig.addWatchTarget("src/assets/css/");

  // ---- markdown ----------------------------------------------------------
  const md = markdownIt({ html: true, linkify: true, typographer: true });
  eleventyConfig.setLibrary("md", md);

  // Renders a markdown string from inside a template. Used for the news bodies
  // in src/_data/news.js so they can carry bold text and links.
  eleventyConfig.addFilter("markdownInline", (value) =>
    value ? md.renderInline(String(value)) : ""
  );

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"],
  };
}
