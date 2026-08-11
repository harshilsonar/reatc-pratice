import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineHeart,
  HiOutlineMenu,
  HiOutlineShoppingBag,
  HiOutlineX,
} from "react-icons/hi";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";
import { SearchContext } from "../context/SearchContext";

function Navbar() {
  const { cart } = useContext(CartContext)
  const [open, setOpen] = useState(false);
  const { wishlist } = useContext(WishlistContext);
  const [showSearch, setShowSearch] = useState(false);

  const {
    search,
    setSearch,
    filteredProducts
  } = useContext(SearchContext);

  const links = [
    { name: "Home", path: "/" },
    { name: "Rings", path: "/goldjwellerey" },
    { name: "Earrings", path: "/earrings" },
    { name: "Necklaces", path: "/necklaces" },
    { name: "Bracelets", path: "/bracelets" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-yellow-100 shadow-lg">
      <div className="max-w-9xl mx-auto px-6">
        <div className="flex items-center justify-between h-24">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
          >
            <div className="rounded-full p-1 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 shadow-lg">
              <img
                src="/pj.png"
                alt="Golden Aura"
                className="w-16 h-16 object-contain transition-all duration-500 group-hover:rotate-12 group-hover:scale-110"
              />
            </div>

            <div>
              <h1 className="text-3xl font-extrabold bg-gradient-to-r from-yellow-500 via-yellow-700 to-yellow-500 bg-clip-text text-transparent">
                Golden Aura
              </h1>

              <p className="text-[11px] uppercase tracking-[5px] text-gray-500">
                Premium Jewellery
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-10">
            {links.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="relative text-gray-700 font-semibold hover:text-yellow-700 transition-all duration-300 group"
                >
                  {item.name}

                  <span className="absolute left-0 -bottom-2 w-0 h-[3px] rounded-full bg-gradient-to-r from-yellow-400 to-yellow-700 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Icons */}
          <div className="hidden lg:flex items-center gap-4">

            {/* ================= SEARCH ================= */}

            <div className="relative">

              <button
                onClick={() => setShowSearch(!showSearch)}
                className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center hover:bg-yellow-700 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12 shadow"
              >
                <HiOutlineMagnifyingGlass size={22} />
              </button>


              {/* Search Dropdown */}

              {showSearch && (
                <div className="absolute top-14 right-0 w-[420px] z-[100]">

                  {/* Search Input */}

                  <div className="bg-white rounded-2xl shadow-2xl border border-[#d4af37] p-3">

                    <div className="flex items-center">

                      <HiOutlineMagnifyingGlass
                        size={22}
                        className="text-[#b8860b] ml-3"
                      />

                      <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search jewellery..."
                        autoFocus
                        className="w-full px-4 py-3 outline-none text-gray-700 bg-transparent"
                      />

                    </div>

                  </div>


                  {/* Search Results */}

                  {search && (
                    <div className="mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">

                      {filteredProducts.length > 0 ? (

                        filteredProducts
                          .slice(0, 6)
                          .map((item) => (

                            <Link
                              key={`${item.category}-${item.id}`}
                              to={`/product/${item.category}/${item.id}`}
                              onClick={() => {
                                setSearch("");
                                setShowSearch(false);
                              }}
                              className="flex items-center gap-4 p-4 hover:bg-[#faf7ef] transition duration-300"
                            >

                              {/* Product Image */}

                              <div className="w-16 h-16 bg-[#faf8f3] rounded-xl flex items-center justify-center">

                                <img
                                  src={item.images?.[0]}
                                  alt={item.title}
                                  className="w-14 h-14 object-contain"
                                />

                              </div>


                              {/* Product Information */}

                              <div className="flex-1 min-w-0">

                                <h3 className="text-sm font-medium text-gray-800 truncate">
                                  {item.title}
                                </h3>

                                <p className="text-[#b8860b] font-semibold mt-1">
                                  {item.price}
                                </p>

                              </div>


                              <span className="text-gray-400 text-lg">
                                →
                              </span>

                            </Link>

                          ))

                      ) : (

                        <div className="p-7 text-center">

                          <div className="text-3xl mb-2">
                            ✨
                          </div>

                          <p className="text-gray-600 font-medium">
                            No jewellery found
                          </p>

                          <p className="text-xs text-gray-400 mt-1">
                            Try another product name
                          </p>

                        </div>

                      )}

                    </div>
                  )}

                </div>
              )}

            </div>


            {/* ================= WISHLIST ================= */}

            <Link to="/wishlist">

              <div className="relative">

                <button
                  className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center hover:bg-yellow-700 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12 shadow"
                >

                  <HiOutlineHeart size={22} />

                </button>


                {wishlist.length > 0 && (

                  <span className="absolute -top-2 -right-2 bg-red-600 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center">
                    {wishlist.length}
                  </span>

                )}

              </div>

            </Link>


            {/* ================= CART ================= */}

            <Link to="/cart">

              <button
                className="relative w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center hover:bg-yellow-700 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12 shadow"
              >

                <HiOutlineShoppingBag size={22} />


                {cart.length > 0 && (

                  <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center animate-pulse">

                    {cart.length}

                  </span>

                )}

              </button>

            </Link>


            {/* ================= SIGN IN ================= */}

            <Link to="/signin">

              <button
                className="ml-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-700 text-white font-semibold shadow-lg hover:shadow-yellow-400/40 hover:scale-105 transition-all duration-300"
              >
                Sign In
              </button>

            </Link>

          </div>
          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-gray-700"
          >
            {open ? (
              <HiOutlineX size={32} />
            ) : (
              <HiOutlineMenu size={32} />
            )}
          </button>

        </div>
      </div>

      {/* Golden Bottom Border */}
      <div className="h-[2px] bg-gradient-to-r from-yellow-300 via-yellow-600 to-yellow-300"></div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white overflow-hidden transition-all duration-500 ease-in-out ${open
          ? "max-h-screen opacity-100 translate-y-0"
          : "max-h-0 opacity-0 -translate-y-5"
          }`}
      >
        <div className="border-t">

          {links.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 text-lg font-medium border-b hover:bg-yellow-50 hover:text-yellow-700 transition-all duration-300"
            >
              {item.name}
            </Link>
          ))}

          <div className="flex justify-center gap-5 py-6">

            <button className="w-11 h-11 rounded-full bg-gray-100 flex justify-center items-center hover:bg-yellow-700 hover:text-white transition">
              <HiOutlineMagnifyingGlass size={22} />
            </button>

            <button className="w-11 h-11 rounded-full bg-gray-100 flex justify-center items-center hover:bg-yellow-700 hover:text-white transition">
              <HiOutlineHeart size={22} />
            </button>

            <button className="relative w-11 h-11 rounded-full bg-gray-100 flex justify-center items-center hover:bg-yellow-700 hover:text-white transition">
              <HiOutlineShoppingBag size={22} />

              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center">
                0
              </span>
            </button>

          </div>

          <div className="px-6 pb-6">
            <Link to="/signin">
              <button className="w-full py-3 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-700 text-white font-semibold hover:scale-105 transition-all duration-300">
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