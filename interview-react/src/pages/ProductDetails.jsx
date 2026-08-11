import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
    const {addcart} = useContext(CartContext)
    const { category, id } = useParams();

    const [product, setProduct] = useState(null);
    const [mainImage, setMainImage] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        setLoading(true);

        axios
            .get(`http://localhost:3000/${category}/${id}`)
            .then((res) => {

                setProduct(res.data);

                if (res.data.images && res.data.images.length > 0) {
                    setMainImage(res.data.images[0]);
                } else {
                    setMainImage("");
                }

                setLoading(false);

            })
            .catch(() => {

                setError("Product Not Found");
                setLoading(false);

            });

    }, [category, id]);

    if (loading) {
        return (
            <h1 className="text-center text-2xl mt-20">
                Loading...
            </h1>
        );
    }

    if (error) {
        return (
            <h1 className="text-center text-3xl mt-20 text-red-500">
                {error}
            </h1>
        );
    }

    return (
        <div className="bg-[#faf7f2] min-h-screen py-12">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-16">

                    {/* LEFT */}

                    <div className="flex gap-5">

                        {/* Thumbnails */}

                        <div className="flex flex-col gap-4">

                            {product.images?.map((img, index) => (

                                <img
                                    key={index}
                                    src={img}
                                    onClick={() => setMainImage(img)}
                                    className={`w-24 h-24 object-cover rounded-xl cursor-pointer border-2 transition duration-300
              ${mainImage === img
                                            ? "border-yellow-600"
                                            : "border-gray-200 hover:border-yellow-500"
                                        }`}
                                />

                            ))}

                        </div>

                        {/* Main Image */}

                        <div className="flex-1 bg-white rounded-3xl shadow-xl p-10">

                            {mainImage ? (
                                <img
                                    src={mainImage}
                                    alt=""
                                    className="w-full h-[650px] object-contain hover:scale-110 transition duration-500"
                                />
                            ) : (
                                <div className="h-[650px] flex justify-center items-center">
                                    No Image
                                </div>
                            )}

                        </div>

                    </div>

                    {/* RIGHT */}

                    <div className="sticky top-28 h-fit">

                        <p className="uppercase tracking-[5px] text-yellow-700 text-sm">
                            Premium Jewellery
                        </p>

                        <h1 className="text-5xl font-serif mt-3 text-gray-900 leading-tight">
                            {product.title}
                        </h1>

                        <div className="flex items-center gap-3 mt-5">

                            <span className="text-yellow-500 text-xl">
                                ★★★★★
                            </span>

                            <span className="text-gray-500">
                                (248 Reviews)
                            </span>

                        </div>

                        <h2 className="text-4xl font-bold text-[#B8860B] mt-8">
                            {product.price}
                        </h2>

                        <div className="mt-8 space-y-4 text-gray-600">

                            <div className="flex justify-between border-b pb-3">
                                <span>Gold Purity</span>
                                <span>18KT</span>
                            </div>

                            <div className="flex justify-between border-b pb-3">
                                <span>Availability</span>
                                <span className="text-green-600">In Stock</span>
                            </div>

                            <div className="flex justify-between border-b pb-3">
                                <span>Certification</span>
                                <span>BIS Hallmarked</span>
                            </div>

                        </div>

                        <div className="flex gap-5 mt-10">

                            {/* Add to Cart */}

                            <button onClick={()=>{
                                addcart({
                                    ...product,
                                    category:category
                                })
                            }}   className="relative overflow-hidden flex-1 border-2 border-[#b8860b] rounded-full py-4 text-[#b8860b] font-semibold text-lg group">

                                <span className="absolute inset-0 bg-gradient-to-r from-[#9c7a2d] via-[#d4af37] to-[#9c7a2d] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>

                                <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                                    ADD TO CART
                                </span>

                            </button>

                            {/* Buy Now */}

                            <button className="relative overflow-hidden flex-1 border-2 border-[#b8860b] rounded-full py-4 text-[#b8860b] font-semibold text-lg group">

                                <span className="absolute inset-0 bg-gradient-to-r from-[#9c7a2d] via-[#d4af37] to-[#9c7a2d] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>

                                <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                                    BUY NOW
                                </span>

                            </button>

                        </div>

                        <div className="flex justify-between mt-10 text-gray-600">

                            <button>♡ Wishlist</button>

                            <button>↗ Share</button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default ProductDetails;