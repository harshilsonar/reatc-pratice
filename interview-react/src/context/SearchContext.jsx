import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {

    const [allProducts, setAllProducts] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {

        Promise.all([
            axios.get("http://localhost:3000/goldjwellerey"),
            axios.get("http://localhost:3000/earrings"),
            axios.get("http://localhost:3000/necklaces"),
            axios.get("http://localhost:3000/bracelets"),
        ])
            .then((responses) => {

                const gold = responses[0].data.map((item) => ({
                    ...item,
                    category: "goldjwellerey",
                }));

                const earrings = responses[1].data.map((item) => ({
                    ...item,
                    category: "earrings",
                }));

                const necklaces = responses[2].data.map((item) => ({
                    ...item,
                    category: "necklaces",
                }));

                const bracelets = responses[3].data.map((item) => ({
                    ...item,
                    category: "bracelets",
                }));

                setAllProducts([
                    ...gold,
                    ...earrings,
                    ...necklaces,
                    ...bracelets,
                ]);

            });

    }, []);


    const filteredProducts = allProducts.filter((item) =>
        item.title
            ?.toLowerCase()
            .includes(search.toLowerCase())
    );


    return (
        <SearchContext.Provider
            value={{
                search,
                setSearch,
                allProducts,
                filteredProducts,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
};

export default SearchProvider;