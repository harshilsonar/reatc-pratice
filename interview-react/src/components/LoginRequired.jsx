import React, { useEffect } from "react";
import { HiOutlineHeart, HiOutlineX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
const LoginRequired = ({ onClose }) => {
    const navigate = useNavigate();
    useEffect(() => {

        const timer = setTimeout(() => {
            onClose();
        }, 5000);

        return () => clearTimeout(timer);

    }, [onClose]);

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm">

            <div className="relative w-[420px] bg-[#fffdf8] rounded-[30px] shadow-[0_25px_80px_rgba(0,0,0,0.25)] border border-[#e8d7ad] overflow-hidden animate-[popup_.5s_ease-out]">

                {/* Gold Glow */}

                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#d4af37]/20 blur-3xl rounded-full"></div>

                {/* Close */}

                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#b8860b] hover:text-white transition duration-300"
                >
                    <HiOutlineX size={20} />
                </button>

                <div className="relative p-10 text-center">

                    {/* Heart */}

                    <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-[#fff8df] to-[#ead28b] flex items-center justify-center shadow-lg animate-pulse">

                        <HiOutlineHeart
                            size={40}
                            className="text-[#b8860b]"
                        />

                    </div>

                    <p className="mt-6 uppercase tracking-[4px] text-xs text-[#b8860b] font-semibold">
                        Luxury Collection
                    </p>

                    <h2 className="mt-3 text-3xl font-serif text-[#3a2d1b]">
                        Sign In Required
                    </h2>

                    <p className="mt-4 text-gray-500 leading-6">
                        Please sign in or create an account to add
                        your favourite jewellery to your wishlist.
                    </p>

                    <div className="flex gap-3 mt-8">

                        <button
                            onClick={onClose}
                            className="flex-1 py-3 rounded-full border border-[#b8860b] text-[#b8860b] hover:bg-[#b8860b] hover:text-white transition duration-300"
                        >
                            Later
                        </button>

                        <button
                            onClick={() => navigate("/signin")}
                            className="flex-1 py-3 rounded-full bg-gradient-to-r from-[#8d6b21] via-[#d4af37] to-[#8d6b21] text-white font-semibold hover:scale-[1.03] transition-all duration-300"
                        >
                            Sign In
                        </button>

                    </div>

                    {/* 5 Second Progress */}

                    <div className="mt-6 h-[2px] bg-gray-200 overflow-hidden rounded-full">

                        <div className="h-full bg-[#d4af37] animate-[progress_5s_linear]"></div>

                    </div>

                    <p className="text-xs text-gray-400 mt-2">
                        This message will close automatically
                    </p>

                </div>

            </div>

        </div>
    );
};

export default LoginRequired;