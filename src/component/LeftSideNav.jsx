import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div>
        <h2 className="text-xl font-bold text-slate-500">All Caterogy</h2>
        <div className="flex flex-col">
          {categories.map((category) => (
            <Link
              className="py-2 px-2 text-slate-500 hover:bg-gray-500 hover:text-white"
              key={category.id}
              to={`/category/${category.id}`}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default LeftSideNav;
