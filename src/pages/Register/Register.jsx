import React, { useContext, useState } from "react";
import NavBar from "../../component/NavBar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, updateProfileData } = useContext(AuthContext);
//   control register button for checking terms and condition 
  const [Accepted, setAccepted] = useState(false);
  const handleTerms = (e) => {
    setAccepted(e.target.checked);
  };
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        updateProfileData(name, photo);
        toast.success("Account Created Successfully");
      })
      .catch((error) => toast.error(error.message));
    form.reset();
  };

  return (
    <div className="lg:mx-48">
      <NavBar />
      <div className="mt-10 p-10 py-20 bg-blue-100 rounded-md  lg:mx-52 m-auto shadow-xl">
        <h2 className="text-center text-4xl font-bold">
          Register your account
        </h2>
        <hr className="border-1 border-black my-10" />
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label
              htmlFor="name"
              className="block text-xl  font-medium text-gray-600"
            >
              Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              autoComplete="off"
              className="mt-1 p-4 w-full border rounded-md"
              placeholder="Enter your Name"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="photo"
              className="block text-xl  font-medium text-gray-600"
            >
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              required
              autoComplete="off"
              className="mt-1 p-4 w-full border rounded-md"
              placeholder="Enter your Photo URL"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="email"
              className="block text-xl  font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              autoComplete="off"
              className="mt-1 p-4 w-full border rounded-md"
              placeholder="Enter your Email Address"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="password"
              className="block text-xl  font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              autoComplete="off"
              className="mt-1 p-4 w-full border rounded-md"
              placeholder="Enter your Password"
            />
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input
                onClick={handleTerms}
                name="accept"
                type="checkbox"
                className="mr-2"
              />
              <span className="text-sm text-gray-600">
                Accept{" "}
                <Link to="/terms" className="text-blue-500">
                  Terms and Conditions
                </Link>
              </span>
            </label>
          </div>
          <button
            type="submit"
            disabled={!Accepted}
            className="w-full bg-gray-500 text-white p-5 rounded-md hover:bg-gray-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
