import React from "react";
import Marquee from "react-fast-marquee";
import LeftSideNav from "../../component/LeftSideNav";
import NavBar from "../../component/NavBar";
import RightSideNav from "../../component/RightSideNav";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="lg:mx-20">
      {/* marque: latest news section  */}
      <div className=" bg-gray-400 py-2 px-3 flex rounded-md ">
        <button className="h-10 w-20 rounded-lg text-white bg-red-500">
          Latest
        </button>
        <Marquee className="text-white">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Marquee>
      </div>
      {/* nav bar section  */}
      <NavBar />
      {/* main news section  */}
      <div className="grid grid-cols-4 gap-10">
        {/* left side nav bar */}
        <div>
          <LeftSideNav />
        </div>
        {/* news part  */}
        <div className="col-span-2">
          <Outlet />
        </div>
        {/* right side nav bar  */}
        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
