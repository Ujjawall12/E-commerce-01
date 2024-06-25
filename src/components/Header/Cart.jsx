import React, { useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, decreaseQuantity, clearCart } = useCart();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const { isAuthenticated, checkUserExists } = useAuth();

  const handleRemoveItem = (productId) => {
   removeFromCart(productId);
  };

  const handleDecreaseQuantity = (product) => {
   decreaseQuantity(product);
  };

  const handleContinueShopping = () => {
   navigate('/');
  };

  const handleCheckout = () => {
   if (!isAuthenticated) {
   navigate('/signup', { state: { from: '/cart' } });
   } else {
   setShowModal(true);
   }
  };  

  const handleCloseModal = () => {
   setShowModal(false);
   clearCart();
   navigate('/');
  };

  return (
  <div className='bg-blue-50'>
   <div className="w-10/12 mx-auto my-5 p-5 bg-gray-100 rounded-lg shadow-lg">
   <h2 className="text-3xl font-bold mb-5">Shopping Cart</h2>
   {cartItems.length === 0 ? (
     <p>Your cart is empty.</p>
   ) : (
     <div className="space-y-4">
      {cartItems.map((item) => (
      <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
         <div className="flex-1 ml-4">
         <p className="font-semibold text-xl">{item.name}</p>
         <p>Price: Rs. {item.price}</p>
         <div className="flex items-center mt-1 space-x-2">
         <button
           onClick={() => handleDecreaseQuantity(item)}
           className="py-1 px-3 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition duration-300"
         >
           -
         </button>
         <span className="mx-2 text-xl">{item.quantity}</span>
         <button
           onClick={() => addToCart(item)}
           className="py-1 px-3 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition duration-300"
         >
           +
         </button>
         </div>
         <p className="mt-2">Total: Rs. {item.price * item.quantity}</p>
        </div>
        <button
         onClick={() => handleRemoveItem(item.id)}
         className="py-1 px-3 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
        >
         Remove
        </button>
      </div>
      ))}
     </div>
   )}
   <div className="flex justify-between items-center mt-5">
     <button
      onClick={handleContinueShopping}
      className="py-2 px-3 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300 text-sm"
     >
      Continue Shopping
     </button>
     <div>
      <button
      onClick={handleCheckout}
      disabled={cartItems.length === 0}
      className={`py-2 px-4 rounded transition duration-300 ${cartItems.length === 0 ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
      >
      Checkout Rs. {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
      </button>
     </div>
   </div>

   {showModal && (
     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-5 rounded-lg shadow-lg max-w-md w-full">
      <h3 className="text-xl font-semibold mb-4">Order Confirmation</h3>
      <p>Your cart is out of delivery. Thank you for your purchase!</p>
      <button
        onClick={handleCloseModal}
        className="mt-4 py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition duration-300"
      >
        Close
      </button>
      </div>
     </div>
   )}
   </div>
   </div>
  );
};

export default Cart;






















