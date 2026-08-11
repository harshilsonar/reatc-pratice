import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import {
    HiOutlineSparkles,
    HiOutlineShieldCheck,
    HiOutlineTruck,
    HiOutlineHeart,
} from "react-icons/hi";

const Home = () => {

    const categories = [
        {
            title: "Gold Jewellery",
            subtitle: "Timeless Elegance",
            image: "/Ring.jpg",
            link: "/goldjwellerey",
        },
        {
            title: "Necklaces",
            subtitle: "Graceful Statements",
            image: "/neck.webp",
            link: "/necklaces",
        },
        {
            title: "Earrings",
            subtitle: "Elegant Details",
            image: "/earring.avif",
            link: "/earrings",
        },
        {
            title: "Bracelets",
            subtitle: "Luxury On Your Wrist",
            image: "/bracelet.jpg",
            link: "/bracelets",
        },
    ];

    return (
        <div className="bg-[#faf8f3] text-[#2f2418]">

            {/* ================= HERO ================= */}

            <Link to="/necklaces">
                <section className="relative h-[90vh] min-h-[600px] overflow-hidden group">

                    <img
                        src="/hero.png"
                        alt="Luxury Jewellery"
                        className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                    />

                    {/* Overlay */}

                    <div className="absolute inset-0 bg-black/10"></div>

                    {/* Hero Content */}

                    <div className="absolute inset-0 flex items-center justify-center text-center">

                        <div className="text-white drop-shadow-lg">

                            <p className="uppercase tracking-[8px] text-sm md:text-base mb-5">
                                The Art of Elegance
                            </p>

                        </div>

                    </div>

                </section>
            </Link>


            {/* ================= INTRO ================= */}

            <section className="py-24 px-6 text-center bg-[#f8f5ef]" style={{marginTop:"5%"}}>

                <p className="uppercase tracking-[6px] text-[#b8860b] text-sm font-semibold">
                    PJ Jewellers
                </p>

                <h2 className="mt-4 text-4xl md:text-5xl font-serif text-[#3a2d1b]">
                    Where Elegance Meets Craftsmanship
                </h2>

                <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-7"></div>

                <p className="max-w-9xl mx-auto mt-7 text-gray-600 leading-8">
                    Discover exquisite jewellery crafted with precision,
                    passion and timeless elegance. Every piece is designed
                    to become a part of your most beautiful memories.
                </p>

            </section>


            {/* ================= CATEGORIES ================= */}

            <section className="py-24 px-6">

                <div className="text-center mb-14">

                    <p className="uppercase tracking-[6px] text-[#b8860b] text-sm font-semibold">
                        Explore
                    </p>

                    <h2 className="text-4xl md:text-5xl font-serif mt-3">
                        Our Collections
                    </h2>

                </div>


                <div className="max-w-[1500px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

                    {categories.map((category) => (

                        <Link
                            key={category.title}
                            to={category.link}
                            className="group relative h-[430px] overflow-hidden rounded-2xl"
                        >

                            <img
                                src={category.image}
                                alt={category.title}
                                className="w-full h-full object-cover transition duration-1000 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent"></div>

                            <div className="absolute bottom-0 left-0 right-0 p-7 text-white">

                                <p className="text-sm tracking-[3px] uppercase opacity-80">
                                    {category.subtitle}
                                </p>

                                <h3 className="text-3xl font-serif mt-2">
                                    {category.title}
                                </h3>

                                <span className="inline-block mt-4 border-b border-white pb-1 text-sm">
                                    Discover Collection →
                                </span>

                            </div>

                        </Link>

                    ))}

                </div>

            </section>


            {/* ================= SECOND BANNER ================= */}

            <Link to="/goldjwellerey">

                <section className="relative h-[75vh] min-h-[500px] overflow-hidden group" style={{marginTop:"5%"}}>

                    <img
                        src="/hero1.png"
                        alt="Gold Jewellery Collection"
                        className="w-full h-full object-cover transition duration-[2000ms] group-hover:scale-105"
                    />

                    {/* <div className="absolute inset-0 bg-black/20"></div> */}

                   
                </section>

            </Link>


            {/* ================= WHY PJ ================= */}

            <section className="py-24 px-6 bg-[#f8f5ef]" style={{marginTop:"30px",marginBottom:"45px"}}>

                <div className="text-center mb-16">

                    <p className="uppercase tracking-[6px] text-[#b8860b] text-sm font-semibold">
                        The PJ Promise
                    </p>

                    <h2 className="text-4xl md:text-5xl font-serif mt-3">
                        Why Choose Us
                    </h2>

                </div>


                <div className="max-w-9xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

                    <div className="text-center group">

                        <div className="mx-auto w-16 h-16 rounded-full bg-white shadow flex items-center justify-center text-[#b8860b] group-hover:scale-110 transition duration-500" style={{marginLeft:"40%"}}>
                            <HiOutlineSparkles size={30} />
                        </div>

                        <h3 className="font-serif text-xl mt-5">
                            Exquisite Craftsmanship
                        </h3>

                        <p className="text-gray-500 text-sm mt-3 leading-6">
                            Every piece is crafted with attention to detail.
                        </p>

                    </div>


                    <div className="text-center group">

                        <div className="mx-auto w-16 h-16 rounded-full bg-white shadow flex items-center justify-center text-[#b8860b] group-hover:scale-110 transition duration-500"style={{marginLeft:"40%"}}>
                            <HiOutlineShieldCheck size={30} />
                        </div>

                        <h3 className="font-serif text-xl mt-5">
                            Certified Jewellery
                        </h3>

                        <p className="text-gray-500 text-sm mt-3 leading-6">
                            Quality and authenticity you can trust.
                        </p>

                    </div>


                    <div className="text-center group">

                        <div className="mx-auto w-16 h-16 rounded-full bg-white shadow flex items-center justify-center text-[#b8860b] group-hover:scale-110 transition duration-500"style={{marginLeft:"40%"}}>
                            <HiOutlineTruck size={30} />
                        </div>

                        <h3 className="font-serif text-xl mt-5">
                            Secure Delivery
                        </h3>

                        <p className="text-gray-500 text-sm mt-3 leading-6">
                            Your precious jewellery delivered safely.
                        </p>

                    </div>


                    <div className="text-center group">

                        <div className="mx-auto w-16 h-16 rounded-full bg-white shadow flex items-center justify-center text-[#b8860b] group-hover:scale-110 transition duration-500"style={{marginLeft:"40%"}}>
                            <HiOutlineHeart size={30} />
                        </div>

                        <h3 className="font-serif text-xl mt-5">
                            Made With Love
                        </h3>

                        <p className="text-gray-500 text-sm mt-3 leading-6">
                            Jewellery made for your unforgettable moments.
                        </p>

                    </div>

                </div>

            </section>



         


          

        </div>
    );
};

export default Home;