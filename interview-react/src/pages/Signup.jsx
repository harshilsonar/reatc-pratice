import React from 'react'

const Signup = () => {
     return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-96 bg-white border border-gray-300 rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6">
          Sign Up
        </h1>

        <div className="mb-4">
          <label className="block mb-2 font-medium">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border border-gray-400 rounded-lg p-2 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-400 rounded-lg p-2 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-medium">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full border border-gray-400 rounded-lg p-2 focus:outline-none focus:border-blue-500"
          />
        </div>

        <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
          Sign Up
        </button>

        <p className="text-center mt-5 text-gray-600">
          Already have an account?
          <span className="text-blue-600 cursor-pointer ms-2 hover:underline">
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup