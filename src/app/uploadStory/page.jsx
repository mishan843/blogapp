"use client";
import React, { useState } from "react";

const UploadStory = () => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [storyTitle, setStoryTitle] = useState("");
  const [storyDescription, setStoryDescription] = useState("");
  const [storyUrl, setStoryUrl] = useState("");
  const [storyType, setStoryType] = useState(""); // New state for story type
  const [swipeUpLink, setSwipeUpLink] = useState(""); // New state for swipeUpLink

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      _id: id,
      title,
      description,
      category,
      metaDescription,
      stories: {
        storyTitle,
        storyDescription,
        url: storyUrl,
        type: storyType, // Include story type in the data
        swipeUpLink, // Include swipeUpLink in the data
      },
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/story/addUpdateStory`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        setId("");
        setTitle("");
        setDescription("");
        setCategory("");
        setMetaDescription("");
        setStoryTitle("");
        setStoryDescription("");
        setStoryUrl("");
        setStoryType("");
        setSwipeUpLink(""); // Clear swipeUpLink after submission
      } else {
        console.error("Failed to submit story. Status:", response.status);
      }
    } catch (error) {
      console.error("Error submitting story:", error);
    }
  };

  return (
    <div className="upload-story-container">
      <h1>Upload Story</h1>
      <form onSubmit={handleSubmit} className="story-form">
        <label>
          ID:
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </label>

        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        <label>
          Category:
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </label>

        <label>
          Meta Description:
          <textarea
            value={metaDescription}
            onChange={(e) => setMetaDescription(e.target.value)}
          />
        </label>

        <label>
          Story Title:
          <input
            type="text"
            value={storyTitle}
            onChange={(e) => setStoryTitle(e.target.value)}
          />
        </label>

        <label>
          Story Description:
          <textarea
            value={storyDescription}
            onChange={(e) => setStoryDescription(e.target.value)}
          />
        </label>
        <label>
          Story Type:
          <select
            value={storyType}
            onChange={(e) => setStoryType(e.target.value)}
          >
            <option value="">Select Type</option>
            <option value="image">Image</option>
            <option value="video">Video</option>
          </select>
        </label>
        <label>
          Swipe Up Link:
          <input
            type="text"
            value={swipeUpLink}
            onChange={(e) => setSwipeUpLink(e.target.value)}
          />
        </label>
        <label>
          Story URL:
          <input
            type="text"
            value={storyUrl}
            onChange={(e) => setStoryUrl(e.target.value)}
          />
        </label>

        <button type="submit">Upload Story</button>
      </form>

      <style jsx>{`
        .upload-story-container {
          max-width: 600px;
          margin: 0 auto;
        }

        .story-form {
          display: flex;
          flex-direction: column;
        }

        label {
          margin-bottom: 10px;
        }

        input,
        textarea {
          width: 100%;
          padding: 8px;
          margin-top: 5px;
          box-sizing: border-box;
        }

        button {
          background-color: #4caf50;
          color: white;
          padding: 10px;
          border: none;
          cursor: pointer;
        }

        button:hover {
          background-color: #45a049;
        }
      `}</style>
    </div>
  );
};

export default UploadStory;
