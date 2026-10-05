module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("assets");

  return {
    pathPrefix: "/spoonfuls-of-chia/",
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site",
    },
  };
};
