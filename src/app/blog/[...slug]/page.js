
import SingleBlog from "@/components/singleBlog/SingleBlog";


export default function Page(){

  return (
   <div>
    <SingleBlog />
   </div>
  );
};

export function generateMetadata() {
  // Check if running on the client side
  if (typeof window !== 'undefined') {
    const status = localStorage.getItem("blog");
    const blogData = JSON.parse(status);
    return {
      title: (blogData.title),
      description: `sdfsdfsfsdfdsf`
    };
  }
}