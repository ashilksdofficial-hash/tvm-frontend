import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://thevapesinbangalore.in";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${base}/products/disposables`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/products/pod-systems`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/products/eliquids`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/products/nicotine-pouches`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/products/tobacco`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/blog/best-vape-shops-bangalore`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/vape-delivery-bangalore-guide`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/where-to-buy-vapes-bangalore`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/elfbar-bangalore`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/caliburn-pod-system-bangalore`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/zyn-nicotine-pouches-bangalore`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/trusted-vape-delivery-bangalore`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/nicotine-content-guide`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];
}
