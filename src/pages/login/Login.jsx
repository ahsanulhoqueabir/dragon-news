import React from "react";
import NavBar from "../../component/NavBar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { LoggedInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from.pathname || "/";
  //   handle log in function
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    LoggedInUser(email, password)
      .then((result) => {
        const user = result.user;
        toast.success(`Welcome Mr. ${user.displayName}`);
        navigate(from,{replace:true});
      })
      .catch((error) => toast.error(error.message));
    form.reset();
  };
  return (
    <div className="lg:mx-48">
      <NavBar />
      <div className="mt-10 p-10 py-20 bg-blue-100 rounded-md  lg:mx-52 m-auto shadow-xl">
        <h2 className="text-center text-4xl font-bold">Login your account</h2>
        <hr className="border-1 border-black my-10" />
        <form onSubmit={handleLogin} autoComplete="off" className="">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-xl  font-medium text-gray-600"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              required
              autoComplete="off"
              name="email"
              className="mt-1 p-4 w-full border rounded-md"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-xl font-medium text-gray-600"
            >
              Password
            </label>
            <input
              required
              type="password"
              id="password"
              name="password"
              className="mt-1 p-4 w-full border rounded-md"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-5 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
          <p className="pt-7 text-center">
            Dont’t Have An Account ?{" "}
            <Link to="/register" className="text-red-600">
              {" "}
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
