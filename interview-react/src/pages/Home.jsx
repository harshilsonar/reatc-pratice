import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>

      {/* Hero Section */}
      <section className="relative h-[100vh] pt-5">

        <img
          src="/hero.png"
          alt="Jewellery Banner"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        {/* <div className="absolute inset-0 bg-black/50 flex items-center">

          <div className="max-w-7xl mx-auto px-8 text-white">

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Timeless <br />
              Jewellery Collection
            </h1>

            <p className="mt-6 text-lg md:w-[500px] text-gray-200">
              Discover handcrafted gold and diamond jewellery
              designed for every special moment.
            </p>

            <button className="mt-8 px-8 py-4 bg-yellow-600 hover:bg-yellow-700 text-lg font-semibold transition duration-300">
              Shop Now
            </button>

          </div>

        </div> */}

      </section>

    <Link to="/goldjwellerey">    
     <section className="relative h-[90vh]" style={{marginTop:"15px"}}>
     <img src="/hero1.png" 
        alt="gold Banner" 
        className="w-full h-full mt- object-fit-cover "/>
      </section></Link>

    </div>
  );
};

export default Home;