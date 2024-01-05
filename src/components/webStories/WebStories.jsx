"use client";

import React, { useState, useEffect } from "react";

const WebStories = () => {
  const [stories, setStories] = useState([]);
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/story/getStoryById?id=${id}`;

        const response = await fetch(endpoint);
        const data = await response.json();

        setStories(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return stories &&
    Array.isArray(stories.stories) &&
    stories.stories.length > 0 ? (
    <>
      <head>
        <meta charset="utf-8" />
        <title>{stories.title}</title>
        <link
          rel="canonical"
          href={`https://www.bloggersground.com/stories?id=${stories._id}`}
        />
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,initial-scale=1"
        />

        <script async src="https://cdn.ampproject.org/v0.js"></script>

        <script
          async
          custom-element="amp-story"
          src="https://cdn.ampproject.org/v0/amp-story-1.0.js"
        ></script>

        <script
          async
          custom-element="amp-video"
          src="https://cdn.ampproject.org/v0/amp-video-0.1.js"
        ></script>

        <meta name="title" content={stories.title} />
        <meta
          name="description"
          content={
            stories.metaDescription
              ? stories.metaDescription
              : stories.description
          }
        />
        <meta name="category" content={stories.category} />
        <meta name="lang" content="en" />

        <meta property="og:title" content={stories.title} />
        <meta
          property="og:description"
          content={
            stories.metaDescription
              ? stories.metaDescription
              : stories.description
          }
        />
        <meta
          property="og:url"
          content={`https://www.bloggersground.com/stories?id=${stories._id}`}
        />
        <meta property="og:site_name" content="bloggersGround" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:genre" content="web story" />
        <meta
          property="og:image"
          content={
            Array.isArray(stories.stories) && stories.stories.length > 0
              ? stories.stories[0].url
              : ""
          }
          width="1200"
          height="628"
        />
        <meta
          property="og:image"
          content={
            Array.isArray(stories.stories) && stories.stories.length > 0
              ? stories.stories[0].url
              : ""
          }
          width="1080"
          height="1080"
        />
        <meta
          property="og:image"
          content={
            Array.isArray(stories.stories) && stories.stories.length > 0
              ? stories.stories[0].url
              : ""
          }
          width="600"
          height="315"
        />
        <meta
          property="og:image"
          content={
            Array.isArray(stories.stories) && stories.stories.length > 0
              ? stories.stories[0].url
              : ""
          }
          width="800"
          height="800"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={stories.title} />
        <meta
          name="twitter:description"
          content={
            stories.metaDescription
              ? stories.metaDescription
              : stories.description
          }
        />
        <meta name="twitter:creator" content="bloggersGround" />
        <meta name="twitter:creator:id" content="1467726470533754880" />
        <meta name="twitter:image" content={stories.stories[0].url} />

        <style jsx>{`
          body {
            -webkit-animation: amp-start 8s steps(1, end) 0s 1 normal both;
            -moz-animation: amp-start 8s steps(1, end) 0s 1 normal both;
            -ms-animation: amp-start 8s steps(1, end) 0s 1 normal both;
            animation: amp-start 8s steps(1, end) 0s 1 normal both;
          }

          @-webkit-keyframes amp-start {
            from {
              visibility: hidden;
            }
            to {
              visibility: visible;
            }
          }

          @-moz-keyframes amp-start {
            from {
              visibility: hidden;
            }
            to {
              visibility: visible;
            }
          }

          @-ms-keyframes amp-start {
            from {
              visibility: hidden;
            }
            to {
              visibility: visible;
            }
          }

          @-o-keyframes amp-start {
            from {
              visibility: hidden;
            }
            to {
              visibility: visible;
            }
          }

          @keyframes amp-start {
            from {
              visibility: hidden;
            }
            to {
              visibility: visible;
            }
          }
        `}</style>

        <link
          href="https://fonts.googleapis.com/css?family=Oswald:200,300,400"
          rel="stylesheet"
        />
        <style jsx>{`
          amp-story {
            font-family: "Oswald", sans-serif;
            color: #fff;
          }
          amp-story-page {
            background-color: #000;
          }
          h1 {
            font-weight: bold;
            color: white;
            font-size: 2.875em;
            line-height: 1.174;
          }
          p {
            font-weight: normal;
            font-size: 1.3em;
            line-height: 1.5em;
            color: #fff;
          }
          q {
            font-weight: 300;
            font-size: 1.1em;
          }
          amp-story-grid-layer.bottom {
            align-content: end;
          }
          amp-story-grid-layer.noedge {
            padding: 0px;
          }
          amp-story-grid-layer.center-text {
            align-content: center;
          }
          .wrapper {
            display: grid;
            grid-template-columns: 50% 50%;
            grid-template-rows: 50% 50%;
          }
          .banner-text {
            text-align: center;
            background-color: #000;
            line-height: 2em;
          }
          /* Add your global styles outside the nested style block */
          body {
            -webkit-animation: none;
            -moz-animation: none;
            -ms-animation: none;
            animation: none;
          }
        `}</style>
      </head>

      <body>
        <amp-story
          standalone
          title="Joy of Pets"
          publisher="AMP tutorials"
          publisher-logo-src="assets/AMP-Brand-White-Icon.svg"
          poster-portrait-src="assets/cover.jpg"
        >
          {Array.isArray(stories.stories) &&
            stories.stories.map((obj, index) => {
              const isImageType = obj && obj.type === "image";
              const showSwipeUp = obj.swipeUpLink;

              return isImageType ? (
                <amp-story-page key={index} id={`cover-${index}`}>
                  <amp-story-grid-layer template="fill">
                    <amp-img
                      src={obj.url}
                      width="720"
                      height="1280"
                      layout="responsive"
                    ></amp-img>
                  </amp-story-grid-layer>
                  <amp-story-grid-layer template="vertical">
                    <h1>{obj.storyTitle}</h1>
                    <p>{obj.storyDescription}</p>
                  </amp-story-grid-layer>
                  {showSwipeUp && (
                    <amp-story-cta-layer>
                      <a href={obj.swipeUpLink} target="_blank">
                        <amp-story-swipe-up
                          layout="nodisplay"
                          call-to-action="Read more"
                        ></amp-story-swipe-up>
                      </a>
                    </amp-story-cta-layer>
                  )}
                </amp-story-page>
              ) : (
                <amp-story-page id={`cover-${index}`}>
                  <amp-story-grid-layer template="fill">
                    <amp-video
                      autoplay
                      loop
                      width="720"
                      height="1280"
                      poster={obj.url}
                      layout="responsive"
                    >
                      <source src={obj.url} type="video/mp4" />
                    </amp-video>
                  </amp-story-grid-layer>
                  <amp-story-grid-layer template="vertical">
                    <h1>{obj.storyTitle}</h1>
                  </amp-story-grid-layer>
                  <amp-story-grid-layer template="vertical" class="bottom">
                    <p>{obj.storyDescription}</p>
                  </amp-story-grid-layer>
                  {showSwipeUp && (
                    <amp-story-cta-layer>
                      <a href={obj.swipeUpLink} target="_blank">
                        <amp-story-swipe-up
                          layout="nodisplay"
                          call-to-action="Read more"
                        ></amp-story-swipe-up>
                      </a>
                    </amp-story-cta-layer>
                  )}
                </amp-story-page>
              );
            })}

          <amp-story-bookend
            src="bookend.json"
            layout="nodisplay"
          ></amp-story-bookend>
        </amp-story>
      </body>
    </>
  ) : (
    <></>
  );
};

export default WebStories;
