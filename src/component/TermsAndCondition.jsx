import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Header from "../pages/Shared/Header/Header";
import { FaCheckCircle, FaReply } from "react-icons/fa";
import { Link } from "react-router-dom";

const TermsAndCondition = () => {
  const { terms } = useContext(AuthContext);
  return (
    <div className="mx-3 lg:mx-32">
      <Header />
      <div className="flex items-center">
        <hr className="w-full  border-2 border-black" />
        <h2 className="w-full text-3xl text-center font-bold">
          Terms and Conditions
        </h2>
        <hr className="w-full border-2 border-black" />
      </div>
      <div className="grid lg:grid-cols-2 gap-5">
        {terms.map((item) => {
          return (
            <div key={item.title} className="my-10 ">
              <h2 className="text-lg font-bold py-2 flex items-center gap-2">
                {" "}
                <FaCheckCircle className="text-green-500" /> {item.title}
              </h2>
              <p className=" border-l-2 border-emerald-400 px-3">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
      <p className="flex justify-center">
        <Link to='/register' className="flex bg-blue-100 px-5 py-2 rounded-md items-center gap-2 cursor-pointer">
          <FaReply /> Go Back
        </Link>
      </p>
    </div>
  );
};

export default TermsAndCondition;
