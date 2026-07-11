import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineHeart, HiOutlineMenu, HiOutlineShoppingBag, HiOutlineX } from "react-icons/hi";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Rings", path: "/rings" },
    { name: "Earrings", path: "/earrings" },
    { name: "Necklaces", path: "/necklaces" },
    { name: "Collections", path: "/collections" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md">
      <div className="max-w-8xl mx-auto px-4">
        <div className="flex items-center justify-between h-25">

          {/* Logo */}
          <Link
  to="/"
  className="flex items-center gap-3 group ps-5"
>
  <img
    src="/pj.png"
    alt="Jewellery Logo"
    className="w-20 h-20 object-contain transition-all duration-300 group-hover:rotate-6 group-hover:scale-110"
  />

  <div className="flex flex-col">
    <h1 className="text-2xl font-bold text-yellow-700">
      Golden Aura
    </h1>

    <p className="text-xs text-gray-500 tracking-widest uppercase">
      Premium Jewellery
    </p>
  </div>
</Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8 font-medium">
            {links.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="relative text-gray-700 hover:text-yellow-700 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-yellow-700 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Icons */}
          <div className="hidden lg:flex items-center gap-4">

            <button className="hover:text-yellow-700 transition hover:scale-125">
              <HiOutlineMagnifyingGlass size={24} />
            </button>

            <button className="hover:text-yellow-700 transition hover:scale-125">
              <HiOutlineHeart size={24} />
            </button>

            <button className="hover:text-yellow-700 transition hover:scale-125 relative">
              <HiOutlineShoppingBag size={24} />
              <span className="absolute -top-2 -right-2 bg-yellow-700 text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>

            <Link to="/signin">
              <button className="ml-3 px-6 py-2 rounded-full bg-yellow-700 text-white hover:bg-yellow-800 transition duration-300 hover:scale-105 shadow-lg">
                Sign In
              </button>
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <HiOutlineX  size={30} />
            ) : (
              <HiOutlineMenu size={30} />
            )}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="bg-white border-t">

          {links.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 border-b hover:bg-yellow-50 hover:text-yellow-700 transition"
            >
              {item.name}
            </Link>
          ))}

          <div className="flex justify-center gap-6 py-5">

            <HiOutlineMagnifyingGlass size={24} />
            <HiOutlineHeart size={24} />
             <HiOutlineShoppingBag   size={24} />

          </div>

           <div className="px-6 pb-6">
            <Link to="/signin">
              <button className="w-full  text-white  rounded-full hover:bg-yellow-800 transition">
                Sign In
              </button> 
             </Link>
          </div>   

        </div>
      </div>
    </nav>
  );
}

export default Navbar;