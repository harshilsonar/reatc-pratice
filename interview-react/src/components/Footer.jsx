import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-25" style={{marginTop:"10px"}}>

      {/* Top CTA */}

    <div className="bg-[#f8f5ef] border-y border-yellow-200">
  <div className="max-w-8xl mx-auto px-6 py-20 flex flex-col items-center">

    <p className="tracking-[6px] uppercase text-[#c49a2c] text-sm font-semibold">
      Golden Aura
    </p>

    <h2 className="text-5xl font-serif mt-4 text-gray-900 text-center">
      Timeless Luxury
    </h2>

    <p className="mt-6 text-gray-500 text-lg leading-8 text-center max-w-2xl">
      Every masterpiece is handcrafted to celebrate elegance,
      beauty and unforgettable moments.
    </p>

    <Link to="/goldjwellerey">
      <button className="mt-10 px-10 py-4 rounded-full bg-[#c49a2c] text-white hover:bg-black duration-300">
        Explore Collection
      </button>
    </Link>

  </div>
</div>
      {/* Main Footer */}

      <div className="bg-white">

        <div className="max-w-9xl mx-auto px-6 py-20 grid lg:grid-cols-4 md:grid-cols-2 gap-14">

          {/* Logo */}

          <div>

            <h1 className="text-4xl font-bold text-[#c49a2c]">
              Golden Aura
            </h1>

            <p className="tracking-[5px] text-sm mt-2 text-gray-400 uppercase">
              Premium Jewellery
            </p>

            <div className="w-24 h-[2px] bg-[#c49a2c] mt-8 mb-8"></div>

            <p className="text-gray-500 leading-8">
              Crafted with precision and inspired by timeless elegance,
              our jewellery is designed to make every celebration
              unforgettable.
            </p>

          </div>

          {/* Collections */}

          <div>

            <h3 className="text-xl font-semibold mb-8">
              Collections
            </h3>

            <div className="space-y-5 text-gray-500">

              <Link
                to="/goldjwellerey"
                className="block hover:text-[#c49a2c] duration-300"
              >
                Gold Rings
              </Link>

              <Link
                to="/earrings"
                className="block hover:text-[#c49a2c] duration-300"
              >
                Earrings
              </Link>

              <Link
                to="/necklaces"
                className="block hover:text-[#c49a2c] duration-300"
              >
                Necklaces
              </Link>

              <Link
                to="/bracelets"
                className="block hover:text-[#c49a2c] duration-300"
              >
                Bracelets
              </Link>

            </div>

          </div>

          {/* Company */}

          <div>

            <h3 className="text-xl font-semibold mb-8">
              Company
            </h3>

            <div className="space-y-5 text-gray-500">

              <a href="#" className="block hover:text-[#c49a2c]">
                About Us
              </a>

              <a href="#" className="block hover:text-[#c49a2c]">
                Contact
              </a>

              <a href="#" className="block hover:text-[#c49a2c]">
                Privacy Policy
              </a>

              <a href="#" className="block hover:text-[#c49a2c]">
                Terms & Conditions
              </a>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold mb-8">
              Visit Us
            </h3>

            <p className="text-gray-500 leading-8">
              Golden Aura Jewellery
              <br />
              Surat, Gujarat
              <br />
              India
            </p>

            <p className="mt-6 text-gray-500">
              +91 98765 43210
            </p>

            <p className="text-gray-500">
              support@goldenaura.com
            </p>

            {/* Social */}

            <div className="flex gap-4 mt-8">

              <div className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#c49a2c] hover:text-white hover:border-[#c49a2c] duration-300 cursor-pointer">
                <FaInstagram />
              </div>

              <div className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#c49a2c] hover:text-white hover:border-[#c49a2c] duration-300 cursor-pointer">
                <FaFacebookF />
              </div>

              <div className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#c49a2c] hover:text-white hover:border-[#c49a2c] duration-300 cursor-pointer">
                <FaPinterestP />
              </div>

              <div className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#c49a2c] hover:text-white hover:border-[#c49a2c] duration-300 cursor-pointer">
                <FaYoutube />
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-gray-200">

        <div className="max-w-9xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500 text-sm">
            © 2026 Golden Aura. All Rights Reserved.
          </p>

          <p className="text-gray-400 text-sm mt-3 md:mt-0">
            Crafted with ❤️ for timeless elegance.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;