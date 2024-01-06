"use client";
import React, { useState } from "react";

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/blog/uploadImage`;

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      if (!selectedFile) {
        alert("Please select a file");
        return;
      }

      const formData = new FormData();
      formData.append("image", selectedFile);

      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setImageUrl(data.URL);
        alert(`Image uploaded successfully. URL copied to clipboard.`);
      } else {
        alert("Failed to upload image");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleCopyLink = () => {
    if (imageUrl) {
      navigator.clipboard.writeText(imageUrl);
      alert(`Image URL copied to clipboard: ${imageUrl}`);
    } else {
      alert("No image URL available");
    }
  };

  return (
    <div>
      <h1>Image upload</h1>
      <input type="file" accept="image/*" />

      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Image</button>
      {imageUrl && (
        <div>
          <p>Image URL: {imageUrl}</p>
          <button onClick={handleCopyLink}>Copy Link</button>
          <button onClick={handleCopyLink}>Copy Link</button>{" "}
          <button onClick={handleCopyLink}>Copy Link</button>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
