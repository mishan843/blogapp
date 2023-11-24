"use client";
import React, { useEffect, useState } from "react";
// import xmlJs from "xml-js";
const XMLDisplay = () => {
  const articles = [
    {
      title: "First",
      description: "description",
      pubDate: "pubDate",
      link: "link",
    },
  ];
  return `
  <rss version="2.0">
    <channel>
      <title>Google Publisher RSS Feed</title>
      <description>A feed of articles from Google Publisher</description>
      <link>https://publisher.google.com</link>
      ${articles.map((article) => {
        return `
          <item>
            <title>${article.title}</title>
            <description>${article.description}</description>
            <pubDate>${article.pubDate}</pubDate>
            <link>${article.link}</link>
          </item>
        `;
      })}
    </channel>
  </rss>
`;
};

export default XMLDisplay;
