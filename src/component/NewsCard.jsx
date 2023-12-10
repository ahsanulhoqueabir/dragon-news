// import moment from "moment/moment";
import moment from "moment";
import React, { useState } from "react";
import {
  FaBookmark,
  FaEye,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  //   console.log(news);

  const { _id, author, title, image_url, details, rating, total_view } = news;
  return (
    <div className="border-2 border-gray-300">
      {/* top part  */}
      <div className="flex p-3 bg-gray-300 items-center">
        <div className="flex-1 flex gap-3 items-center">
          <img className=" h-10 rounded-full" src={author.img} alt="" />
          <div>
            <h2 className="font-bold">{author.name}</h2>
            <p>{moment(author.published_date).format("YYYY-MM-D")}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <FaBookmark />
          <FaShareAlt />
        </div>
      </div>
      {/* news details part  */}
      <div className="py-3 px-3">
        <h2 className="font-bold text-xl ">{title}</h2>
        <img src={image_url} className="py-5" alt="" />
        <p className=" text-lg">
          {details.length < 250 ? (
            <> {details} </>
          ) : (
            <>
              {details.slice(0, 250)} . . .{" "}
              <Link className="text-red-500 font-bold" to={`/news/${_id}`}>
                {" "}
                Read More
              </Link>{" "}
            </>
          )}
        </p>
      </div>
      {/* bottom part  */}
      <div className="flex py-3 px-3">
        <div className="grow flex items-center">
          <Rating
            placeholderRating={rating?.number}
            readonly
            emptySymbol={<FaRegStar />}
            placeholderSymbol={<FaStar className=" text-yellow-600" />}
            fullSymbol={<FaStar className=" text-yellow-500" />}
          ></Rating>
          <span>{rating?.number}</span>
        </div>
        <div className="flex gap-2 items-center text-gray-500">
          {total_view && (
            <>
              <FaEye /> {total_view}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
