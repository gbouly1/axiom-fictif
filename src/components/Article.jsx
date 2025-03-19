import React from "react";

const Article = ({ img, title, description }) => {
  return (
    <div className="h-[50vh] flex col">
      <img src={img} alt={img} className="bg-green-500 w-full" />
      <div className="bg-blue-500 w-full ">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Article;
