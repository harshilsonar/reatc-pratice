import { createContext, useState } from "react";


export const WishlistContext = createContext();


const WishlistProvider = ({ children }) => {
    const [wishlist, setwishlist] = useState([])


    const addWishlist = (product) => {

        const exist = wishlist.find
            (
                (item) =>
                    item.id === product.id &&
                    item.category === product.category
            );
        if (!exist) {
            setwishlist([...wishlist, product])
        }
    };
    const removeWishlist = (id, category) => {
        setwishlist(
            wishlist.filter(
                (item) =>
                    !(item.id === id && item.category === category)

            )
        )
    }

    return (
        <WishlistContext.Provider
            value={{
                wishlist,
                addWishlist,
                removeWishlist,
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
};

export default WishlistProvider;