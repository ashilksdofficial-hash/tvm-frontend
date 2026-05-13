import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://thevapesinmumbai.com";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${base}/products/disposables`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/products/pod-systems`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/products/eliquids`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/products/nicotine-pouches`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/products/tobacco`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/blog/best-vape-shops-mumbai`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/vape-delivery-mumbai-guide`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/where-to-buy-vapes-mumbai`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/elfbar-mumbai`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/caliburn-pod-system-mumbai`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/zyn-nicotine-pouches-mumbai`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/trusted-vape-delivery-mumbai`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/nicotine-content-guide-mumbai`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];
}
