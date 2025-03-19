import React from "react";

const Article = ({ title, description }) => {
  return (
    <div className="w-1/2 bg-[#020202] flex items-center ">
      <div className="pl-15 text-white w-2/3">
        <h2 className="text-3xl font-bold mb-4 font-[Helvetica]">{title}</h2>
        <p className="font-[Helvetica] text-xl font-thin">{description}</p>
      </div>
    </div>
  );
};

export default Article;
