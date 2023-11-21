
import MainPage from '@/components/mainPage/MainPage'
import React from 'react'

export const generateMetadata = ({ searchParams, params }) => {
  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/blog/getAllBlogs?categoryFilter=${searchParams.categoryFilter}&searchFilter=blog`
      );

      if (response.ok) {
        let result = await response.json();
        let data = result.data
        return {
          title: `Category page- ${data.map((item) => (item.category))}`,
          description: `Category description about`,
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

export default function Page (){
  return (
   <div>
    <MainPage />                                                
   </div>
  )
}


