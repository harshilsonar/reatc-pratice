import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Handle Input Change
const handlechange = (e) => {
  setuser({
    ...user,
    [e.target.name]: e.target.value,
  });
};

const navigate =useNavigate() ;


 const handlesubmit = (e) => {
    e.preventdefault()
    console.log(user)

    setuser({
        name:"",
        email:"",
        password:""
    });
     navigate("/");
    
 };
  
 

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-96 bg-white border border-gray-300 rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6">
          Sign Up
        </h1>

        <form onSubmit={handlesubmit}>
          {/* Name */}

          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              value={user.name}
              onChange={handlechange}
              className="w-full border border-gray-400 rounded-lg p-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Email */}

          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={user.email}
              onChange={handlechange}
              className="w-full border border-gray-400 rounded-lg p-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Password */}

          <div className="mb-6">
            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={user.password}
              onChange={handlechange}
              className="w-full border border-gray-400 rounded-lg p-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Button */}

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-5 text-gray-600">
          Already have an account?
          <span className="text-blue-600 cursor-pointer ms-2 hover:underline">
            Login
          </span>
        </p>
      </div>
    </div>
  );
};
export default Signup;