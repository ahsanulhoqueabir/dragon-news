import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../../component/NewsCard";

const Category = () => {
  const data = useLoaderData();
//   console.log(data);
  return (
    <div>
      {/* <p>hi category {data.length}</p> */}
      <div className="flex flex-col gap-5">
        {data.map((item, index) => {
          return <NewsCard key={index} news={item} />;
        })}
      </div>
    </div>
  );
};

export default Category;
