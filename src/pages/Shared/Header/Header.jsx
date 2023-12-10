import React from "react";
import logo from "../../../assets/logo.png";
import moment from 'moment';
const Header = () => {
  return (
    <div className=" text-center py-7">
      <div className="flex justify-center">
        <img className="text-center" src={logo} alt="" />
      </div>
      <p className="pt-3">Journalism Without Fear or Favour</p>
      <p className="font-bold">
      {
        moment().format("dddd, MMMM D, YYYY")
      }
      </p>
    </div>
  );
};

export default Header;
