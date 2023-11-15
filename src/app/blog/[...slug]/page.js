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

              },
            ],
          },
          twitter: {
            card: 'summary_large_image',
            title: 'Next.js',
            description: 'The React Framework for the Web',
            siteId: '1467726470533754880',
            creator: '@nextjs',
            creatorId: '1467726470533754880',
            images: ['https://nextjs.org/og.png'],
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


