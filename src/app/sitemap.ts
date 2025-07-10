import { MetadataRoute } from "next";
// change your url to your domain
const url = "https://sparkverse.in";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      //put your production url here
      url: `${url}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
