

import React from "react";

import newsData from "../news.json";

export default function Newscontainer() {
  return (
    <div className="news-container">
      <h1 className="news-title">News</h1>

      <div className="news-grid">
        {newsData.map((item) => (
          <div className="news-card" key={item.id}>
           
            <div className="news-image-wrapper">
              <img src={item.image} alt={item.title} />

             
              <p className="news-date">{item.date}</p>
            </div>

            
            <div className="news-content">
              <h1>{item.title}</h1>

              <p className="news-description">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}