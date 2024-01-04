"use client";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import "./style.css"; // Import your CSS file

const HomePageInfo = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={`card ${isDropdownOpen ? "expanded" : ""}`}>
      <div className="static-info">
        <h2 onClick={toggleDropdown}>
          <BsChevronDown className="arrow-icon" /> Our Diverse Topics
        </h2>
        {isDropdownOpen && (
          <>
            <ul>
              <li>
                <p>
                  Stay updated on the latest trends in finance and world
                  finance. From insightful articles on Exeter Finance to
                  discussions about financial management, we&apos;re your source
                  for informed perspectives.
                </p>
              </li>
              <li>
                <p>
                  Dive into the world of fashion with Bloggers Ground. Discover
                  the latest trends, fashion nova releases, and expert advice on
                  men&apos;s fashion. Elevate your style with our curated
                  content.
                </p>
              </li>
              <li>
                <p>
                  Unleash your coding curiosity with Bloggers Ground. Learn
                  about the fundamentals of coding, explore scratch coding
                  projects, and discover insights into various coding languages.
                </p>
              </li>
              <li>
                <p>
                  Plan your next adventure with our travel guides and uncover
                  the best travel deals. From exotic destinations to
                  budget-friendly options, Bloggers Ground has the information
                  you need for memorable journeys.
                </p>
              </li>
              <li>
                <p>
                  Stay ahead in the dynamic world of technology. Explore the
                  latest developments, get insights into information technology,
                  and stay informed about blockchain technology and technology
                  news.
                </p>
              </li>
              <li>
                <p>
                  Indulge your taste buds with our food-related content. From
                  the best Chinese and Jamaican food spots to exploring the
                  richness of Indian cuisine. Additionally, get insights into
                  fast food options and explore local favorites near you.
                </p>
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default HomePageInfo;
