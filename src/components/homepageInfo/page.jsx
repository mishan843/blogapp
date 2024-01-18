"use client";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import "./style.css"; // Import your CSS file

const HomePageInfo = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const topics = [
    {
      title: "Our Diverse Topics",
      content:
        "Stay updated on the latest trends in finance and world finance. From insightful articles on Exeter Finance to discussions about financial management, we're your source for informed perspectives.",
    },
    {
      title: "Fashion Trends",
      content:
        "Dive into the world of fashion with Bloggers Ground. Discover the latest trends, fashion nova releases, and expert advice on men's fashion. Elevate your style with our curated content.",
    },
    {
      title: "Coding Curiosity",
      content:
        "Unleash your coding curiosity with Bloggers Ground. Learn about the fundamentals of coding, explore scratch coding projects, and discover insights into various coding languages.",
    },
    {
      title: "Travel Guides",
      content:
        "Plan your next adventure with our travel guides and uncover the best travel deals. From exotic destinations to budget-friendly options, Bloggers Ground has the information you need for memorable journeys.",
    },
    {
      title: "Technology Insights",
      content:
        "Stay ahead in the dynamic world of technology. Explore the latest developments, get insights into information technology, and stay informed about blockchain technology and technology news.",
    },
    {
      title: "Food Exploration",
      content:
        "Indulge your taste buds with our food-related content. From the best Chinese and Jamaican food spots to exploring the richness of Indian cuisine. Additionally, get insights into fast food options and explore local favorites near you.",
    },
  ];

  return (
    <div className={`card ${isDropdownOpen ? "expanded" : ""}`}>
      <div className="static-info">
        <h2 onClick={toggleDropdown}>
          <BsChevronDown className="arrow-icon" /> {topics[0].title}
        </h2>
        {isDropdownOpen && (
          <ul>
            {topics.slice(1).map((topic, index) => (
              <li key={index}>
                <p>{topic.content}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default HomePageInfo;
