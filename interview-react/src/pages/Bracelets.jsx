import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { WishlistContext } from '../context/WishlistContext'

const Bracelets = () => {
    const [bracelets, setBracelets] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const { addWishlist, removewishlist, wishlist } = useContext(WishlistContext)

    const isWishlisted = (item) => {
        return wishlist.some(
            (wish) =>
                wish.id === item.id &&
                wish.category === "bracelets"
        );
    }

    useEffect(() => {
        axios
            .get("http://localhost:3000/bracelets")
            .then((res) => {
                setBracelets(res.data);
            })
            .catch((err) => {
                setError("error braceletes is not rendering")
            })

        const timer = setTimeout(() => {
            setLoading(false)
        }, 1000);

        return () => clearTimeout = (timer)

    }, [])


    if (loading) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-white z-50">

                <div className="relative flex items-center justify-center">

                    {/* Outer Rotating Ring */}
                    <div className="absolute w-36 h-36 rounded-full border-4 border-yellow-200 border-t-yellow-600 animate-spin"></div>

                    {/* Inner Rotating Ring */}
                    <div className="absolute w-28 h-28 rounded-full border-4 border-transparent border-b-yellow-500 animate-spin [animation-direction:reverse] [animation-duration:1.5s]"></div>

                    {/* Logo */}
                    <img
                        src="/pj.png"
                        alt="Logo"
                        className="w-20 h-20 object-contain animate-pulse drop-shadow-[0_0_20px_rgba(234,179,8,0.6)]"
                    />

                </div>

            </div>
        );
    }
    return (
        <div className=" w-full h-full bg-gray-50 ">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                {bracelets.map((item) => (
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

                            <button
                                onClick={() =>
                                    isWishlisted(item)
                                        ? removeWishlist(item.id, "bracelets")
                                        : addWishlist({
                                            ...item,
                                            category: "bracelets",
                                        })
                                }
                                className="absolute top-4 right-4 text-3xl"
                            >
                                {isWishlisted(item) ? "❤️" : "🤍"}
                            </button>

                            <Link to={`/product/bracelets/${item.id}`}> <img
                                src={item.images?.[0]}
                                alt={item.title}
                                className="w-64 h-64 object-contain   "
                            />
                            </Link>
                        </div>

                        {/* Details */}
                        <div className="p-5">
                            <h2 className="text-[17px] leading-6 h-12 overflow-hidden text-gray-800 font-medium">
                                {item.title}
                            </h2>

                            {/* Price Section */}
                            <div className="mt-4 flex items-center gap-3">

                                <h3 className="text-2xl font-semibold text-[#B8860B]">
                                    {item.price}
                                </h3>

                                {item.oldPrice && (
                                    <span className="text-gray-400 line-through text-lg">
                                        {item.oldPrice}
                                    </span>
                                )}

                            </div>

                            {/* Offer */}
                            {item.offer && (
                                <div className="mt-3">
                                    <span className="inline-block bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
                                        {item.offer}
                                    </span>
                                </div>
                            )}

                            {/* <button className="flex items-center gap-2 bg-gradient-to-r from-purple-10 to-yellow-900 text-white font-semibold hover:scale-105 transition-all duration-300">
                                ADD TO CART
                            </button> */}

                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Bracelets