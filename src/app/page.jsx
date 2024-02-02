import Page from "./homepage";
export const metadata = {
  title: {
    default: "BloggersGround: Finance, Fashion, Coding, Tech, Travel Guide",
    template: "%s - bloggersGround",
  },
  description:
    "Get expert insights on finance, style inspiration, coding techniques, technology and travel tips from bloggersGround. Explore endless possibilities with us.",
  keywords: ["Fashion blogs", "travel blogs", "finance blog", "blogging"],
  openGraph: {
    title: "BloggersGround: Finance, Fashion, Coding, Tech, Travel Guide",
    description:
      "Get expert insights on finance, style inspiration, coding techniques, technology and travel tips from bloggersGround. Explore endless possibilities with us.",
    url: process.env.DOMAIN,
    siteName: "bloggersGround",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dcmgkwzbw/image/upload/v1704999574/fsa2ypfhdfx4lixrtnpp.jpg",
        width: 1200,
        height: 600,
      },
      {
        url: "https://res.cloudinary.com/dcmgkwzbw/image/upload/v1704999574/fsa2ypfhdfx4lixrtnpp.jpg",
        width: 1080,
        height: 1080, // Instagram square image size
      },
      {
        url: "https://res.cloudinary.com/dcmgkwzbw/image/upload/v1704999574/fsa2ypfhdfx4lixrtnpp.jpg",
        width: 600,
        height: 315, // Twitter share image size
      },
      {
        url: "https://res.cloudinary.com/dcmgkwzbw/image/upload/v1704999574/fsa2ypfhdfx4lixrtnpp.jpg",
        width: 540,
        height: 540, // WhatsApp share image size
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `BloggersGround: Finance, Fashion, Coding, Tech, Travel Guide `,
    description: `Get expert insights on finance, style inspiration, coding techniques, technology and travel tips from bloggersGround. Explore endless possibilities with us.`,
    creator: "bloggersGround",
    images: [
      `https://res.cloudinary.com/dcmgkwzbw/image/upload/v1704999574/fsa2ypfhdfx4lixrtnpp.jpg`,
    ],
  },
  alternates: {
    canonical: `${process.env.DOMAIN}`,
  },
  appleTouchIcon: "https://www.bloggersground.com/favicon.ico",
  appleTouchIconPrecomposed: "https://www.bloggersground.com/favicon.ico",
  themeColor: "#ffffff", // Add the desired theme color
};
export default Page;
