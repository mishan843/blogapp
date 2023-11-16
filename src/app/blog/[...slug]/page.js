import SingleBlog from "@/components/singleBlog/SingleBlog";



export const generateMetadata = ({ searchParams, params }) => {

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/blog/getblogbyid/?id=${searchParams.id}`
      );

      if (response.ok) {

        let result = await response.json();
        return {
          title: `${result.title}`,
          description: `${result.description.slice(0, 60)}`,
          category: 'technology',

          openGraph: {
            title: `${result.title}`,
            description: `${result.description.slice(0, 60)}`,
            url: `https://www.bloggersground.com/blog/${result.title
              .toLowerCase()
              .replace(/\s+/g, "-")}/${result._id}`, // Uncomment this line
            siteName: "bloggersGround",
            images: [
              {
                url: `${result.coverImage}`,
                width: 1200,
                height: 630, // Facebook share image size
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
                width: 540,
                height: 540, // WhatsApp share image size
              },
            ],
          },
          twitter: {
            card: 'summary_large_image',
            title: `${result.title}`,
            description: `${result.description.slice(0, 60)}`,
            creator: 'bloggersGround',
            creatorId: '1467726470533754880',
            images: [`${result.coverImage}`],
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


