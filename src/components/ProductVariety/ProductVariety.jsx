import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';


import wt1 from '../../assets/wt/wt1.jpg'
import wt2 from '../../assets/wt/wt2.jpg'
import wt3 from '../../assets/wt/wt3.jpg'
import wt4 from '../../assets/wt/wt4.jpg'
import wt5 from '../../assets/wt/wt5.jpg'
import wt6 from '../../assets/wt/wt6.jpg'
import wt7 from '../../assets/wt/wt7.jpg'
import wt8 from '../../assets/wt/wt8.jpg'
import wt9 from '../../assets/wt/wt9.jpg'
import wt10 from '../../assets/wt/wt10.jpg'
import wt11 from '../../assets/wt/wt11.jpg'
import wt12 from '../../assets/wt/wt12.jpg'

import mt1 from '../../assets/mt/mt1.jpg'
import mt2 from '../../assets/mt/mt2.jpg'
import mt3 from '../../assets/mt/mt3.jpg'
import mt4 from '../../assets/mt/mt4.jpg'
import mt5 from '../../assets/mt/mt5.jpg'
import mt6 from '../../assets/mt/mt6.jpg'
import mt7 from '../../assets/mt/mt7.jpg'
import mt8 from '../../assets/mt/mt8.jpg'
import mt9 from '../../assets/mt/mt9.jpg'
import mt10 from '../../assets/mt/mt10.jpg'
import mt11 from '../../assets/mt/mt11.jpg'
import mt12 from '../../assets/mt/mt12.jpg'

import wd1 from '../../assets/wd/wd1.jpg'
import wd2 from '../../assets/wd/wd2.jpg'
import wd3 from '../../assets/wd/wd3.jpg'
import wd4 from '../../assets/wd/wd4.jpg'
import wd5 from '../../assets/wd/wd5.jpg'
import wd6 from '../../assets/wd/wd6.jpg'
import wd7 from '../../assets/wd/wd7.jpg'
import wd8 from '../../assets/wd/wd8.jpg'
import wd9 from '../../assets/wd/wd9.jpg'
import wd10 from '../../assets/wd/wd10.jpg'
import wd11 from '../../assets/wd/wd11.jpg'
import wd12 from '../../assets/wd/wd12.jpg'

import md1 from '../../assets/md/md1.jpg'
import md2 from '../../assets/md/md2.jpg'
import md3 from '../../assets/md/md3.jpg'
import md4 from '../../assets/md/md4.jpg'
import md5 from '../../assets/md/md5.jpg'
import md6 from '../../assets/md/md6.jpg'
import md7 from '../../assets/md/md7.jpg'
import md8 from '../../assets/md/md8.jpg'
import md9 from '../../assets/md/md9.jpg'
import md10 from '../../assets/md/md10.jpg'
import md11 from '../../assets/md/md11.jpg'
import md12 from '../../assets/md/md12.jpg'

import wa1 from '../../assets/wa/wa1.jpg'
import wa2 from '../../assets/wa/wa2.jpg'
import wa3 from '../../assets/wa/wa3.jpg'
import wa4 from '../../assets/wa/wa4.jpg'
import wa5 from '../../assets/wa/wa5.jpg'
import wa6 from '../../assets/wa/wa6.jpg'
import wa7 from '../../assets/wa/wa7.jpg'
import wa8 from '../../assets/wa/wa8.jpg'
import wa9 from '../../assets/wa/wa9.jpg'
import wa10 from '../../assets/wa/wa10.jpg'
import wa11 from '../../assets/wa/wa11.jpg'
import wa12 from '../../assets/wa/wa12.jpg'

import ms1 from '../../assets/ms/ms1.jpg'
import ms2 from '../../assets/ms/ms2.jpg'
import ms3 from '../../assets/ms/ms3.jpg'
import ms4 from '../../assets/ms/ms4.jpg'
import ms5 from '../../assets/ms/ms5.jpg'
import ms6 from '../../assets/ms/ms6.jpg'
import ms7 from '../../assets/ms/ms7.jpg'
import ms8 from '../../assets/ms/ms8.jpg'
import ms9 from '../../assets/ms/ms9.jpg'
import ms10 from '../../assets/ms/ms10.jpg'
import ms11 from '../../assets/ms/ms11.jpg'
import ms12 from '../../assets/ms/ms12.jpg'

import wf1 from '../../assets/wf/wf1.jpg'
import wf2 from '../../assets/wf/wf2.jpg'
import wf3 from '../../assets/wf/wf3.jpg'
import wf4 from '../../assets/wf/wf4.jpg'
import wf5 from '../../assets/wf/wf5.jpg'
import wf6 from '../../assets/wf/wf6.jpg'
import wf7 from '../../assets/wf/wf7.jpg'
import wf8 from '../../assets/wf/wf8.jpg'
import wf9 from '../../assets/wf/wf9.jpg'
import wf10 from '../../assets/wf/wf10.jpg'
import wf11 from '../../assets/wf/wf11.jpg'
import wf12 from '../../assets/wf/wf12.jpg'

import mf1 from '../../assets/mf/mf1.jpg'
import mf2 from '../../assets/mf/mf2.jpg'
import mf3 from '../../assets/mf/mf3.jpg'
import mf4 from '../../assets/mf/mf4.jpg'
import mf5 from '../../assets/mf/mf5.jpg'
import mf6 from '../../assets/mf/mf6.jpg'
import mf7 from '../../assets/mf/mf7.jpg'
import mf8 from '../../assets/mf/mf8.jpg'
import mf9 from '../../assets/mf/mf9.jpg'
import mf10 from '../../assets/mf/mf10.jpg'
import mf11 from '../../assets/mf/mf11.jpg'
import mf12 from '../../assets/mf/mf12.jpg'

import wo1 from '../../assets/wo/wo1.jpg'
import wo2 from '../../assets/wo/wo2.jpg'
import wo3 from '../../assets/wo/wo3.jpg'
import wo4 from '../../assets/wo/wo4.jpg'
import wo5 from '../../assets/wo/wo5.jpg'
import wo6 from '../../assets/wo/wo6.jpg'
import wo7 from '../../assets/wo/wo7.jpg'
import wo8 from '../../assets/wo/wo8.jpg'
import wo9 from '../../assets/wo/wo9.jpg'
import wo10 from '../../assets/wo/wo10.jpg'



const products = [
  
  { id: 1, name: "", image: wt1, price: 2999, category: 'women-top-wear' },
  { id: 2, name: "", image: wt2, price: 1999, category: 'women-top-wear' },
  { id: 3, name: "", image: wt3, price: 2599, category: 'women-top-wear' },
  { id: 4, name: "", image: wt4, price: 3299, category: 'women-top-wear' },
  { id: 5, name: "", image: wt5, price: 4599, category: 'women-top-wear' },
  { id: 6, name: "", image: wt6, price: 5499, category: 'women-top-wear' },
  { id: 7, name: "", image: wt7, price: 6399, category: 'women-top-wear' },
  { id: 8, name: "", image: wt8, price: 7299, category: 'women-top-wear' },
  { id: 9, name: "", image: wt9, price: 8199, category: 'women-top-wear' },
  { id: 10, name: "", image: wt10, price: 9099, category: 'women-top-wear' },
  { id: 11, name: "", image: wt11, price: 9999, category: 'women-top-wear' },
  { id: 12, name: "", image: wt12, price: 10899, category: 'women-top-wear' },
 

  { id: 13, name: "", image: mt1, price: 799, category: 'men-top-wear' },
  { id: 14, name: "", image: mt2, price: 1599, category: 'men-top-wear' },
  { id: 15, name: "Product 15", image: mt3, price: 2499, category: 'men-top-wear' },
  { id: 16, name: "Product 16", image: mt4, price: 3299, category: 'men-top-wear' },
  { id: 17, name: "Product 17", image: mt5, price: 4599, category: 'men-top-wear' },
  { id: 18, name: "Product 18", image: mt6, price: 5499, category: 'men-top-wear' },
  { id: 19, name: "Product 19", image: mt7, price: 6399, category: 'men-top-wear' },
  { id: 20, name: "Product 20", image: mt8, price: 7299, category: 'men-top-wear' },
  { id: 21, name: "Product 21", image: mt9, price: 8199, category: 'men-top-wear' },
  { id: 22, name: "Product 22", image: mt10, price: 9099, category: 'men-top-wear' },
  { id: 23, name: "Product 23", image: mt11, price: 9999, category: 'men-top-wear' },
  { id: 24, name: "Product 24", image: mt12, price: 10899, category: 'men-top-wear' },

  
  { id: 25, name: "Product 25", image: wd1, price: 799, category: 'women-jeans' },
  { id: 26, name: "Product 26", image: wd2, price: 1599, category: 'women-jeans' },
  { id: 27, name: "Product 27", image: wd3, price: 2499, category: 'women-jeans' },
  { id: 28, name: "Product 28", image: wd4, price: 3299, category: 'women-jeans' },
  { id: 29, name: "Product 29", image: wd5, price: 4599, category: 'women-jeans' },
  { id: 30, name: "Product 30", image: wd6, price: 5499, category: 'women-jeans' },
  { id: 31, name: "Product 31", image: wd7, price: 6399, category: 'women-jeans' },
  { id: 32, name: "Product 32", image: wd8, price: 7299, category: 'women-jeans' },
  { id: 33, name: "Product 33", image: wd9, price: 8199, category: 'women-jeans' },
  { id: 34, name: "Product 34", image: wd10, price: 9099, category: 'women-jeans' },
  { id: 35, name: "Product 35", image: wd11, price: 9999, category: 'women-jeans' },
  { id: 36, name: "Product 36", image: wd12, price: 10899, category: 'women-jeans' },


  { id: 37, name: "Product 37", image: md1, price: 799, category: 'men-jeans' },
  { id: 38, name: "Product 38", image: md2, price: 1599, category: 'men-jeans' },
  { id: 39, name: "Product 39", image: md3, price: 2499, category: 'men-jeans' },
  { id: 40, name: "Product 40", image: md4, price: 3299, category: 'men-jeans' },
  { id: 41, name: "Product 41", image: md5, price: 4599, category: 'men-jeans' },
  { id: 42, name: "Product 42", image: md6, price: 5499, category: 'men-jeans' },
  { id: 43, name: "Product 43", image: md7, price: 6399, category: 'men-jeans' },
  { id: 44, name: "Product 44", image: md8, price: 7299, category: 'men-jeans' },
  { id: 45, name: "Product 45", image: md9, price: 8199, category: 'men-jeans' },
  { id: 46, name: "Product 46", image: md10, price: 9099, category: 'men-jeans' },
  { id: 47, name: "Product 47", image: md11, price: 9999, category: 'men-jeans' },
  { id: 48, name: "Product 48", image: md12, price: 10899, category: 'men-jeans' },


  { id: 49, name: "Product 49", image: wa1, price: 799, category: 'women-accessories' },
  { id: 50, name: "Product 50", image: wa2, price: 1599, category: 'women-accessories' },
  { id: 51, name: "Product 51", image: wa3, price: 2499, category: 'women-accessories' },
  { id: 52, name: "Product 52", image: wa4, price: 3299, category: 'women-accessories' },
  { id: 53, name: "Product 53", image: wa5, price: 4599, category: 'women-accessories' },
  { id: 54, name: "Product 54", image: wa6, price: 5499, category: 'women-accessories' },
  { id: 55, name: "Product 55", image: wa7, price: 6399, category: 'women-accessories' },
  { id: 56, name: "Product 56", image: wa8, price: 7299, category: 'women-accessories' },
  { id: 57, name: "Product 57", image: wa9, price: 8199, category: 'women-accessories' },
  { id: 58, name: "Product 58", image: wa10, price: 9099, category: 'women-accessories' },
  { id: 59, name: "Product 59", image: wa11, price: 9999, category: 'women-accessories' },
  { id: 60, name: "Product 60", image: wa12, price: 10899, category: 'women-accessories' },

 
  { id: 61, name: "Product 61", image: ms1, price: 799, category:'men-sunglasses' },
  { id: 62, name: "Product 62", image: ms2, price: 1599, category:'men-sunglasses' },
  { id: 63, name: "Product 63", image: ms3, price: 2499, category:'men-sunglasses' },
  { id: 64, name: "Product 64", image: ms4, price: 3299, category:'men-sunglasses' },
  { id: 65, name: "Product 65", image: ms5, price: 4599, category:'men-sunglasses' },
  { id: 66, name: "Product 66", image: ms6, price: 5499, category:'men-sunglasses' },
  { id: 67, name: "Product 67", image: ms7, price: 6399, category: 'men-sunglasses' },
  { id: 68, name: "Product 68", image: ms8, price: 7299, category:'men-sunglasses' },
  { id: 69, name: "Product 69", image: ms9, price: 8199, category:'men-sunglasses' },
  { id: 70, name: "Product 70", image: ms10, price: 9099, category:'men-sunglasses' },
  { id: 71, name: "Product 71", image: ms11, price: 9999, category:'men-sunglasses' },
  { id: 72, name: "Product 72", image: ms12, price: 10899, category:'men-sunglasses' },

 
  { id: 73, name: "Product 73", image: wf1, price: 799, category:'women-footwear' },
  { id: 74, name: "Product 74", image: wf2, price: 1599, category:'women-footwear' },
  { id: 75, name: "Product 75", image: wf3, price: 2499, category:'women-footwear' },
  { id: 76, name: "Product 76", image: wf4, price: 3299, category:'women-footwear' },
  { id: 77, name: "Product 77", image: wf5, price: 4599, category:'women-footwear' },
  { id: 78, name: "Product 78", image: wf6, price: 5499, category:'women-footwear' },
  { id: 79, name: "Product 79", image: wf7, price: 6399, category:'women-footwear' },
  { id: 80, name: "Product 80", image: wf8, price: 7299, category:'women-footwear' },
  { id: 81, name: "Product 81", image: wf9, price: 8199, category:'women-footwear' },
  { id: 82, name: "Product 82", image: wf10, price: 9099, category:'women-footwear' },
  { id: 83, name: "Product 83", image: wf11, price: 9999, category:'women-footwear' },
  { id: 84, name: "Product 84", image: wf12, price: 10899, category:'women-footwear' },


  { id: 85, name: "Product 85", image: mf1, price: 799, category: 'mens-footwear' },
  { id: 86, name: "Product 86", image: mf2, price: 1599, category: 'mens-footwear' },
  { id: 87, name: "Product 87", image: mf3, price: 2499, category: 'mens-footwear' },
  { id: 88, name: "Product 88", image: mf4, price: 3299, category: 'mens-footwear' },
  { id: 89, name: "Product 89", image: mf5, price: 4599, category: 'mens-footwear' },
  { id: 90, name: "Product 90", image: mf6, price: 5499, category: 'mens-footwear' },
  { id: 91, name: "Product 91", image: mf7, price: 6399, category: 'mens-footwear' },
  { id: 92, name: "Product 92", image: mf8, price: 7299, category: 'mens-footwear' },
  { id: 93, name: "Product 93", image: mf9, price: 8199, category: 'mens-footwear' },
  { id: 94, name: "Product 94", image: mf10, price: 9099, category: 'mens-footwear' },
  { id: 95, name: "Product 95", image: mf11, price: 9999, category: 'mens-footwear' },
  { id: 96, name: "Product 96", image: mf12, price: 10899, category: 'mens-footwear' },

 
  { id: 97, name: "Product 97", image: wo1, price: 799, category: 'women-ornaments' },
  { id: 98, name: "Product 98", image: wo2, price: 1599, category: 'women-ornaments' },
  { id: 99, name: "Product 99", image: wo3, price: 2499, category: 'women-ornaments' },
  { id: 100, name: "Product 100", image: wo4, price: 3299, category: 'women-ornaments' },
  { id: 101, name: "Product 101", image: wo5, price: 4599, category: 'women-ornaments' },
  { id: 102, name: "Product 102", image: wo6, price: 5499, category: 'women-ornaments' },
  { id: 103, name: "Product 103", image: wo7, price: 6399, category: 'women-ornaments' },
  { id: 104, name: "Product 104", image: wo8, price: 7299, category: 'women-ornaments' },
  { id: 105, name: "Product 105", image: wo9, price: 8199, category: 'women-ornaments' },
  { id: 106, name: "Product 106", image: wo10, price: 9099, category: 'women-ornaments' },
  { id: 107, name: "Product 107", image: wo1, price: 9999, category: 'women-ornaments' },
  { id: 108, name: "Product 108", image: wo2, price: 10899, category: 'women-ornaments' },
];

const ProductVariety = () => {
  const { category } = useParams();
  const { cartItems, addToCart, removeFromCart, decreaseQuantity } = useContext(CartContext);

  const filteredProducts = products.filter(product => product.category === category);

  return (
      <div className="flex flex-col items-center bg-blue-100 p-5">
    
     <div className="w-full max-w-7xl flex flex-wrap justify-around gap-5">
       {filteredProducts.map((product) => (

      <div
     key={product.id}
     className="bg-white shadow-lg w-full sm:w-80 h-auto rounded-lg overflow-hidden transition-transform transform hover:scale-105 relative"
      >

     <img src={product.image} alt={product.name} className="w-full h-72 object-cover" />
     <div className="absolute bottom-4 left-4">
       <span className="font-bold text-lg">₹{product.price.toFixed(2)}</span>
     </div> 

     <div className="absolute bottom-4 right-4 flex items-center space-x-2">
       <button
      onClick={() => decreaseQuantity(product)}
      className="py-1 px-3 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition duration-300"
       >
      -
       </button>

       <span className="text-xl mx-2">{cartItems.find(item => item.id === product.id)?.quantity || 0}</span>
       <button
      onClick={() => addToCart(product)}
      className="py-1 px-3 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition duration-300"
       >
      +
       </button>
       
     </div>

      </div>
       ))}
     </div>
      </div>
  );
};

export default ProductVariety;


















