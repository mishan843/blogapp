"use client";
import React from "react";

const XmlPage = () => {
  const generateXmlContent = () => {
    const xmlData = `<?xml version="1.0" encoding="UTF-8"?>
      <rss xmlns:media="http://search.yahoo.com/mrss/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/" version="2.0">
        <channel>
          <title>FetchRSS</title>
          <description>FetchRSS</description>
          <pubDate>Fri, 24 Nov 2023 07:09:04 +0000</pubDate>
          <link>https://fetchrss.com</link>
          <atom:link href="http://fetchrss.com/rss/652fcccae02f7d0c95397913652fc665e02f7d0c95397912.xml" rel="self" type="application/rss+xml"/>
          <generator>https://fetchrss.com</generator>
          <image>
            <link>https://fetchrss.com</link>
            <url>https://www.google.com/s2/favicons?domain=https://fetchrss.com</url>
            <title>FetchRSS</title>
          </image>
          <item>
            <title>Feed does not exist</title>
            <link>https://fetchrss.com</link>
            <dc:creator>FetchRSS</dc:creator>
            <guid isPermaLink="false">https://fetchrss.com</guid>
          </item>
        </channel>
      </rss>`;

    return xmlData;
  };

  return (
    <div>
      <pre>{generateXmlContent()}</pre>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
        }
      `}</style>
      <style jsx>{`
        pre {
          font-family: "Courier New", monospace;
          white-space: pre-wrap;
        }
      `}</style>
    </div>
  );
};

export default XmlPage;
