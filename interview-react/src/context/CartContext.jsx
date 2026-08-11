import React, { Children, createContext, useState } from 'react'

export const CartContext = createContext();

const CartProvider = ({children})=>{
    const [cart , setCart] = useState([])

    const addcart = (product)=>{
        setCart((prevCart)=>[
            ...prevCart,
            product
        ])
    }

    return(
        <CartContext.Provider value={{cart,setCart,addcart}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider