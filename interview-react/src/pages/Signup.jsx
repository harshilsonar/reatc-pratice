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
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100 flex items-center justify-center p-6">
  <div className="max-w-5xl w-full h-100 bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

    {/* Left Side */}
    <div className="hidden lg:flex items-center justify-center bg-gradient-to-b from-yellow-700 to-yellow-900 p-10">
      <div className="text-center text-white">
        <img
          src="/pj.png"
          alt="Jewellery"
          className="w-52 mx-auto drop-shadow-2xl hover:scale-110 transition duration-500"
        />

        <h2 className="text-4xl font-bold mt-6 tracking-wide">
          Golden Aura
        </h2>

        <p className="mt-3 text-yellow-100">
          Luxury Jewellery Collection
        </p>
      </div>
    </div>

    {/* Right Side Form */}
    <div className="p-10 mt-5">

      <h1 className="text-4xl font-bold text-yellow-700 text-center">
        Create Account
      </h1>

      <p className="text-center text-gray-500 mt-2 mb-8">
        Join our premium jewellery family.
      </p>

     <form onSubmit={handlesubmit} className="space-y-6 ">

  {/* Name */}
  <div>
    <label className="block mb-2 text-sm font-semibold text-gray-700">
      Full Name
    </label>

    <input
      type="text"
      placeholder="Enter your full name"
      name="name"
      value={user.name}
      onChange={handlechange}
      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:border-yellow-600 focus:ring-2 focus:ring-yellow-200 outline-none transition-all duration-300"
    />
  </div>

  {/* Email */}
  <div>
    <label className="block mb-2 text-sm font-semibold text-gray-700">
      Email Address
    </label>

    <input
      type="email"
      placeholder="Enter your email"
      name="email"
      value={user.email}
      onChange={handlechange}
      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:border-yellow-600 focus:ring-2 focus:ring-yellow-200 outline-none transition-all duration-300"
    />
  </div>

  {/* Password */}
  <div>
    <label className="block mb-2 text-sm font-semibold text-gray-700">
      Password
    </label>

    <input
      type="password"
      placeholder="Enter your password"
      name="password"
      value={user.password}
      onChange={handlechange}
      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:border-yellow-600 focus:ring-2 focus:ring-yellow-200 outline-none transition-all duration-300"
    />
  </div>

  {/* Button */}
  <button
    type="submit"
    className="w-full py-3 rounded-xl bg-gradient-to-r from-yellow-600 to-yellow-700 text-white font-semibold text-lg shadow-lg hover:shadow-2xl hover:scale-[1.02] active:scale-95 transition-all duration-300"
  >
    Create Account
  </button>

</form>
      <p className="text-center mt-8 text-gray-600">
        Already have an account?

        <span className="text-yellow-700 font-semibold cursor-pointer ml-2 hover:underline">
          Login
        </span>
      </p>

    </div>

  </div>
</div>
  );
};
export default Signup;