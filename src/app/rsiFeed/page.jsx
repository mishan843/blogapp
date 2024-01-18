"use client";
import { useState, useEffect } from "react";
import { parseString } from "xml2js";

const FeedComponent = () => {
  const [xmlData, setXmlData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://blogapp-q8b0.onrender.com/blog/generateRssFeed"
        );
        const xmlText = await response.text();

        // Parse the XML data
        parseString(xmlText, { trim: true }, (err, result) => {
          if (err) {
            console.error("Error parsing XML:", err);
          } else {
            setXmlData(result);
          }
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {xmlData ? (
        <pre>{JSON.stringify(xmlData, null, 2)}</pre>
      ) : (
        <p>Loading XML data...</p>
      )}
    </div>
  );
};

export default FeedComponent;
