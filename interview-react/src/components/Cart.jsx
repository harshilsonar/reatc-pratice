import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { HiOutlineTrash } from "react-icons/hi";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  const removeProduct = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const total = cart.reduce((sum, item) => {
    const price = Number(String(item.price).replace(/[^\d]/g, ""));
    return sum + price;
  }, 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-yellow-700">
          Your Cart is Empty
        </h1>

        <p className="text-gray-500 mt-3">
          Add your favourite jewellery to the cart.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-4xl font-bold mb-10">
        Shopping Cart
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">

        {/* Left */}
        <div className="lg:col-span-2 space-y-5">

          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow p-5 flex gap-5"
            >

              <img
                src={item.images?.[0]}
                alt={item.title}
                className="w-36 h-36 object-contain"
              />

              <div className="flex-1">

                <h2 className="text-xl font-semibold">
                  {item.title}
                </h2>

                <h3 className="text-yellow-700 font-bold text-2xl mt-2">
                  {item.price}
                </h3>

                <button
                  onClick={() => removeProduct(item.id)}
                  className="flex items-center gap-2 text-red-500 mt-6"
                >
                  <HiOutlineTrash size={20} />
                  Remove
                </button>

              </div>

            </div>
          ))}

        </div>

        {/* Right */}
        <div className="bg-white rounded-xl shadow p-6 h-fit">

          <h2 className="text-2xl font-bold mb-6">
            Order Summary
          </h2>

          <div className="flex justify-between mb-4">
            <span>Items</span>
            <span>{cart.length}</span>
          </div>

          <div className="flex justify-between mb-4">
            <span>Shipping</span>
            <span className="text-green-600">FREE</span>
          </div>

          <div className="border-t pt-4 flex justify-between text-2xl font-bold">
            <span>Total</span>
            <span>₹ {total.toLocaleString()}</span>
          </div>

          <button className="w-full mt-8 bg-yellow-700 hover:bg-yellow-800 text-white py-3 rounded-lg font-semibold">
            Proceed To Checkout
          </button>

        </div>

      </div>

    </div>
  );
};

export default Cart;