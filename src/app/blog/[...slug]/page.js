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
                width: 1200,
                height: 1200
              },
            ],
          },
          openGraph: {
            title: `${result.title}`,
            description: `${result.description.slice(0, 60)}`,
            url: `https://www.bloggersground.com/blog/${result.title
              .toLowerCase()
              .replace(/\s+/g, "-")}/${result._id}`, // Uncomment this line
            siteName: "bloggersGround",
            images: [
              {
                url: `${result.coverImage}`
              },
            ],
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


