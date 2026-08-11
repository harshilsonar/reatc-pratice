import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.get("http://localhost:3000/users")
      .then((res) => {

        const foundUser = res.data.find((item) => {
          return (
            item.email === user.email &&
            item.password === user.password
          );
        });

        if (foundUser) {
          alert("Login Successful");
          localStorage.setItem("isAuth", "true");
          navigate("/");
        } else {
          alert("Invalid Email or Password");
        }

      });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative flex items-center justify-center px-6 py-10"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1920&auto=format&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-7xl w-full">

        <h1 className="text-center text-white text-xl font-bold mb-10">
          Create New Customer Account
        </h1>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="hidden lg:block">

            <img
              src="/neck.webp"
              alt=""
              className="rounded-3xl w-full h-[700px] object-cover"
            />

            <div className="grid grid-cols-2 gap-4 mt-4">

              <img
                src="/Ring.jpg"
                alt=""
                className="rounded-3xl h-56 w-full object-cover"
              />

              <img
                src="/earring.avif"
                alt=""
                className="rounded-3xl h-56 w-full object-cover"
              />

            </div>

          </div>
          <div className="bg-[#f8f3ec] rounded-3xl p-10 shadow-2xl">

            <h1 className="text-5xl font-light text-center">
              Let's Get Started!
            </h1>

            <hr className="my-8" />

            <form
              onSubmit={handleSubmit}
              className="w-full max-w-lg mx-auto flex flex-col gap-8 mt-8"
            >

              {/* Email */}
              <div className="flex flex-col gap-3">
                <label className="text-gray-700 font-medium text-sm tracking-wide" style={{ marginLeft: "50px" }}>
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full h-10  border border-gray-300 bg-white px-5 text-base shadow-sm focus:border-black focus:ring-2 focus:ring-gray-200 outline-none transition-all duration-300"
                  style={{ marginLeft: "50px" }} />
              </div>

              {/* Password */}
              <div className="flex flex-col gap-3">
                <label className="text-gray-700 font-medium text-sm tracking-wide" style={{ marginLeft: "50px" }}>
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full h-10  border border-gray-300 bg-white px-5 text-base shadow-sm focus:border-black focus:ring-2 focus:ring-gray-200 outline-none transition-all duration-300"
                  style={{ marginLeft: "50px" }} />
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  className="w-5 h-5 mt-1 accent-black cursor-pointer"
                  style={{ marginLeft: "50px" }} />

                <p className="text-sm text-gray-600 leading-6">
                  By creating an account, you agree to our{" "}
                  <span className="font-semibold text-black cursor-pointer hover:underline">
                    Terms & Conditions
                  </span>{" "}
                  and{" "}
                  <span className="font-semibold text-black cursor-pointer hover:underline">
                    Privacy Policy
                  </span>.
                </p>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full h-14 rounded-xl bg-black text-white text-lg font-semibold tracking-wide hover:bg-gray-900 transition-all duration-300 shadow-lg"
                style={{ marginLeft: "50px" }}>
                Welcome Back
              </button>

              {/* Login */}
              <div className="border-t border-gray-300 pt-6 text-center" style={{ marginLeft: "50px" }}>
                <p className="text-gray-600">
                  Create New Account?

                  <span
                    onClick={() => navigate("/signin")}
                    className="ml-2 font-semibold text-black cursor-pointer hover:underline"
                  >
                    Register
                  </span>
                </p>
              </div>
            </form>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Login;