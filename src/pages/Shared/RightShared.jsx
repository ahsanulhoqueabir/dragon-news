import React from "react";
import {
  FaGooglePlusG,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import qz1 from "../../assets/qZone1.png";
import qz2 from "../../assets/qZone2.png";
import qz3 from "../../assets/qZone3.png";

const RightShared = () => {
  return (
    <div>
      {/* log in with google and github  */}
      <div className="flex gap-2 flex-col">
        <h2 className="text-lg font-bold pb-4">Login With </h2>
        <div className="flex gap-2 items-center p-2 border-2 justify-center cursor-pointer border-black">
          <FaGooglePlusG className="" /> Login with Google
        </div>
        <div className="flex gap-2 items-center p-2 border-2 justify-center cursor-pointer border-black">
          <FaGithub className="" /> Login with GitHub
        </div>
      </div>
      {/* social link  */}
      <div className="mt-5">
        <h2 className="text-lg font-bold pb-4">Find Us On </h2>
        <div className=" divide-y border-2 border-black ">
          <p className="pl-3 py-2 flex gap-3 items-center">
            <FaFacebook /> <a href="">Facebook</a>
          </p>
          <p className="pl-3 py-2 flex gap-3 items-center">
            <FaTwitter /> <a href="">Twitter</a>
          </p>
          <p className="pl-3 py-2 flex gap-3 items-center">
            <FaInstagram /> <a href="">Instagram</a>
          </p>
        </div>
      </div>
      {/* Q-zone part  */}
      <div className=" bg-gray-200 mt-6 px-3">
        <h2 className="text-lg font-bold py-4">Q-Zone </h2>

        <img src={qz1} alt="" />
        <img src={qz2} alt="" />
        <img src={qz3} alt="" />
      </div>
    </div>
  );
};

export default RightShared;
