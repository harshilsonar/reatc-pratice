import React, { useEffect, useState } from "react";
import axios from "axios";

const GoldJewellery = () => {
  const [rings, setRings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/fingerRings")
      .then((res) => {
        setRings(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to fetch data. Is json-server running?");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <h1 className="text-center text-xl font-semibold mt-20">
        Loading...
      </h1>
    );
  }

  if (error) {
    return (
      <h1 className="text-center text-red-600 text-xl mt-20">
        {error}
      </h1>
    );
  }
return (
  <div className=" w-full h-full bg-gray-50 ">
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {rings.map((item) => (
        <div
          key={item.id}
          className="group border border-gray-200 "
        >
          {/* Image */}
          <div className="relative h-80 bg-white flex items-center justify-center">

            {item.tag && (
              <div className="absolute top-3 left-0">
                <span className="bg-purple-100 text-purple-700 text-xs px-4 py-1">
                  {item.tag}
                </span>
              </div>
            )}

            <button className="absolute top-4 right-4 text-3xl text-purple-700 hover:text-red-500">
              ♡
            </button>

            <img
              src={item.images?.[0]}
              alt={item.title}
              className="w-64 h-64 object-contain   "
            />

          </div>

          {/* Details */}
          <div className="p-5">
            <h2 className="text-[17px] leading-6 h-14 overflow-hidden">
              {item.title}
            </h2>

            <h3 className="text-3xl font-bold text-purple-900 mt-4">
              {item.price}
            </h3>

            <p className="text-gray-600 text-sm mt-6">
              Check Pick Up In-Store or Delivery
            </p>

            <button className="flex items-center gap-2 text-purple-700 mt-2 text-sm">
              📍 Set your Location
            </button>
          </div>
        </div>
      ))}

    </div>
  </div>
);
};

export default GoldJewellery;