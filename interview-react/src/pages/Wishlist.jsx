import React, { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { Link } from "react-router-dom";
import { HiOutlineHeart } from "react-icons/hi";
import { FaStar, FaShippingFast } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const Wishlist = () => {

    const { wishlist, removeWishlist } = useContext(WishlistContext);

    return (
        <div className="min-h-screen bg-[#faf8f3] overflow-hidden">

            {/* ================= HERO ================= */}

            <section className="relative overflow-hidden bg-gradient-to-br from-[#fffdf8] via-[#f8f3ea] to-[#efe2c5] py-24">

                <div className="absolute -left-20 top-10 w-72 h-72 rounded-full bg-yellow-300/20 blur-[120px] animate-pulse"></div>

                <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-amber-300/20 blur-[120px] animate-pulse"></div>

                <div className="max-w-9xl mx-auto text-center relative z-10">

                    <p className="tracking-[8px] uppercase text-[#b8860b] font-semibold">
                        Luxury Collection
                    </p>

                    <h1 className="mt-5 text-6xl font-serif text-[#2f2418]">
                        My Wishlist
                    </h1>

                    <div className="w-36 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-7"></div>

                    <p className="mt-6 text-gray-600 text-lg">
                        Every masterpiece deserves a place in your collection.
                    </p>

                </div>

            </section>

            {/* ================= EMPTY ================= */}

            {wishlist.length === 0 ? (

                <div className="max-w-9xl mx-auto py-28 text-center">

                    <div className="bg-white rounded-[40px] p-16 shadow-xl border border-[#efe2c5]">

                        <HiOutlineHeart
                            className="mx-auto text-[#d4af37]"
                            size={70}
                        />

                        <h2 className="mt-6 text-4xl font-serif text-[#2f2418]">
                            Your Wishlist is Empty
                        </h2>

                        <p className="mt-5 text-gray-500">
                            Save your favourite jewellery pieces and they will appear here.
                        </p>

                        <Link
                            to="/"
                            className="inline-block mt-10 px-10 py-4 rounded-full bg-gradient-to-r from-[#8d6b21] via-[#d4af37] to-[#8d6b21] text-white font-semibold hover:scale-105 duration-300"
                        >
                            Continue Shopping
                        </Link>

                    </div>

                </div>

            ) : (

                <section className="max-w-[1700px] mx-auto px-8 py-16">

                    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-10">

                        {wishlist.map((item) => (

                            <div
                                key={`${item.category}-${item.id}`}
                                className="luxury-card group"
                            >

                                {/* IMAGE */}

                                <div className="relative h-[340px] bg-gradient-to-b from-[#fffefb] to-[#f8f3e8] overflow-hidden flex justify-center items-center">

                                    <div className="shine"></div>

                                    <img
                                        src={item.images?.[0]}
                                        alt={item.title}
                                        className="w-64 h-64 object-contain duration-700 group-hover:scale-110 group-hover:rotate-3"
                                    />

                                    <button
                                        onClick={() =>
                                            removeWishlist(
                                                item.id,
                                                item.category
                                            )
                                        }
                                        className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white shadow-lg flex justify-center items-center hover:bg-red-500 hover:text-white duration-300"
                                    >
                                        <HiOutlineHeart size={22} />
                                    </button>

                                    {item.offer && (
                                        <span className="absolute top-5 left-5 bg-green-600 text-white px-4 py-2 rounded-full text-xs shadow-lg">
                                            {item.offer}
                                        </span>
                                    )}

                                </div>

                                {/* DETAILS */}

                                <div className="p-7">

                                    <h2 className="text-[22px] font-serif text-[#2f2418] leading-8 h-16 overflow-hidden">
                                        {item.title}
                                    </h2>

                                    <div className="flex items-center mt-4">

                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />

                                        <span className="ml-2 text-gray-500">
                                            4.9
                                        </span>

                                    </div>

                                    <div className="flex items-center gap-3 mt-6">

                                        <h2 className="text-3xl font-bold text-[#b8860b]">
                                            {item.price}
                                        </h2>

                                        {item.oldPrice && (
                                            <span className="line-through text-gray-400">
                                                {item.oldPrice}
                                            </span>
                                        )}

                                    </div>

                                    <div className="flex flex-wrap gap-2 mt-6">

                                        <span className="flex items-center gap-1 bg-yellow-100 text-[#8d6b21] px-3 py-2 rounded-full text-xs">

                                            <MdVerified />

                                            BIS Hallmarked

                                        </span>

                                        <span className="flex items-center gap-1 bg-green-100 text-green-700 px-3 py-2 rounded-full text-xs">

                                            <FaShippingFast />

                                            Free Shipping

                                        </span>

                                    </div>

                                    {/* Buttons yahan continue honge... */}
                                    <div className="flex gap-4 mt-8">

                                        {/* Remove Button */}

                                        <button
                                            onClick={() => removeWishlist(item.id, item.category)}
                                            className="relative flex-1 overflow-hidden rounded-full border border-red-500 group h-12"
                                        >
                                            <span className="absolute inset-0 bg-red-500 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>

                                            <span className="relative z-10 flex items-center justify-center h-full text-red-500 font-semibold group-hover:text-white transition-colors duration-300">
                                                Remove
                                            </span>
                                        </button>

                                        {/* View Product */}

                                        <Link
                                            to={`/product/${item.category}/${item.id}`}
                                            className="flex-1"
                                        >
                                            <button className="relative w-full h-12 rounded-full overflow-hidden bg-gradient-to-r from-[#8d6b21] via-[#d4af37] to-[#8d6b21] group">

                                                {/* Shine */}

                                                <span className="absolute top-0 -left-full w-1/2 h-full bg-white/40 skew-x-[-20deg] group-hover:left-[140%] duration-700"></span>

                                                <span className="relative z-10 text-white font-semibold">
                                                    View Product
                                                </span>

                                            </button>
                                        </Link>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </section>

            )}

        </div>
    );
};

export default Wishlist;