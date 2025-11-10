import Image from "@11ty/eleventy-img";
import { DateTime } from "luxon";

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

    eleventyConfig.addAsyncShortcode("galleryImage", async (src, alt) => {
        let metadata = await Image(src, {
            widths: [300, null],
            formats: ["webp"],
            outputDir: "./_site/img/",
            urlPath: "/img/"
        });

        let imageAttributes = {
            alt,
            sizes: "100vw",
            loading: "lazy",
            decoding: "async"
        };

        return Image.generateHTML(metadata, imageAttributes);
    });


    eleventyConfig.addFilter("niceDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_FULL);
    });

    eleventyConfig.addPassthroughCopy("src/assets/images");
    eleventyConfig.addPassthroughCopy("./CNAME");
    eleventyConfig.addPassthroughCopy("src/favicon.png");
}