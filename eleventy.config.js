export const config = {
    dir: {
        // input
        includes: "_includes",
        layouts: "_includes/layouts",
        input: "src",
        data: "_data",

        // output
        output: "_site"
        }
};

export default function (eleventyConfig)
{
    eleventyConfig.addPassthroughCopy("src/assets");
}