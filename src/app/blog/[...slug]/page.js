import SingleBlog from "@/components/singleBlog/SingleBlog";


export const generateMetadata = ({ searchParams, params }) => {

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/blog/getblogbyid/?id=${searchParams.id}`
      );

      if (response.ok) {
        let result = await response.json();
        console.log(result)
        return {
          title: `${result.title}`,
          description: `${result.metaDescription ? result.metaDescription : result.description}`,
          category: result.category,
          keywords: result.keywords,
          openGraph: {
            title: `${result.title}`,
            description: `${result.metaDescription ? result.metaDescription : result.description}`,
            url: `https://bloggersground.com/blog/${result.title
              .toLowerCase()
              .replace(/[^\w\s]/gi, '').replace(/\s+/g, '-')}?id=${result._id}`, // Uncomment this line
            siteName: "bloggersGround",
            locale: "en_US",
            type: "website",
            images: [
              {
                url: `${result.coverImage}`,
                width: 1200,
                height: 628, // Facebook share image size
              },
              {
                url: `${result.coverImage}`,
                width: 1080,
                height: 1080, // Instagram square image size
              },
              {
                url: `${result.coverImage}`,
                width: 600,
                height: 315, // Twitter share image size
              },
              {
                url: `${result.coverImage}`,
                width: 800,
                height: 800, // WhatsApp share image size
              },

            ],
          },
          twitter: {
            card: 'summary_large_image',
            title: `${result.title}`,
            description: `${result.metaDescription ? result.metaDescription : result.description}`,
            creator: 'bloggersGround',
            creatorId: '1467726470533754880',
            images: [`${result.coverImage}`],
          },
          alternates: {
            canonical: `${process.env.DOMAIN}blog/${result.title
              .toLowerCase()
              .replace(/[^\w\s]/gi, '').replace(/\s+/g, '-')}?id=${result._id}`,
          },
        };
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return fetchData();

};

export default function Page({ result }) {
  return (
    <div>
      <SingleBlog data={result} />
    </div>
  );
}


