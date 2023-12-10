import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import RightSideNav from "../../component/RightSideNav";
import { FaArrowLeft } from "react-icons/fa";
import EditorInsights from "../../component/EditorInsights";

const News = () => {
  const { image_url, title, details, category_id } = useLoaderData();

  return (
    <div className="grid lg:grid-cols-4 gap-5 lg:mx-20">
      <div className="col-span-3">
        {/* news details part  */}
        <div>
        <h2 className="text-lg mb-5 font-bold text-gray-500">Dragon News</h2>
        <div className="border-2  p-4 border-gray-400">
          <img src={image_url} className="w-full object-cover" alt="" />
          <h2 className="text-xl font-bold my-3">{title}</h2>
          <p className="text-lg">{details}</p>

          <button className=" bg-red-400 rounded-md px-3 py-1">
            <Link className="flex items-center gap-2" to={`/category/${category_id}`}>
              <FaArrowLeft /> All news in this category
            </Link>
          </button>
        </div>
        </div>
        {/* editor insights  */}
        <EditorInsights id={category_id} />
      </div>
      <div>
        <RightSideNav />
      </div>
    </div>
  );
};

export default News;
