import React from "react";

export default function Category({ Setselectedcategory }) {
  const categories = [
    "Cleaning",
    "Kitchen",
    "Bathroom",
    "Paper",
    "Rags",
  ];

  return (
    <div className="categoty-buttons">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => Setselectedcategory(category)}
          className={category.toLowerCase()}
        >
          {category}
        </button>
      ))}
    </div>
  );
}