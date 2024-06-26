import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import main91 from '../../assets/main91.jpg';
import main92 from '../../assets/main92.jpg';
import main93 from '../../assets/main93.jpg';
import main94 from '../../assets/main94.jpg';
import main95 from '../../assets/main95.jpg';
import main96 from '../../assets/main96.jpg';
import main97 from '../../assets/main97.jpg';
import main98 from '../../assets/main98.jpg';
import main99 from '../../assets/main99.jpg';
import main1 from '../../assets/main1.jpg';
import main8 from '../../assets/main8.jpg';
import main3 from '../../assets/main3.jpg'; 
import main4 from '../../assets/main4.jpg';
import main9 from '../../assets/main9.jpg';
import main10 from '../../assets/main10.jpg';

const images = [main1, main8, main3, main4, main9, main10];

const Home = () => {
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);

  const handleCategoryClick = (category) => {
    navigate(`/products/${category}`);
  };

  return (
    <div className="flex flex-col items-center bg-blue-100 p-5 overflow-hidden">
      <div className="w-full h-full object-cover mb-5 relative">
        <div
          ref={carouselRef}
          className="flex transition-transform duration-500"
          style={{ width: `${images.length * 100}%` }}
        >
          {images.map((image, index) => (
            <div key={index} className="flex-none w-full">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-screen h-72 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

     
      <div className="w-full max-w-7xl flex flex-wrap justify-around gap-5">
        {[
          { name: "", image: main91, category: 'women-top-wear' },
          { name: "", image: main92, category: 'men-top-wear' },
          { name: "", image: main93, category: 'women-jeans' },
          { name: "", image: main94, category: 'men-jeans' },
          { name: "", image: main95, category: 'women-accessories' },
          { name: "", image: main96, category: 'men-sunglasses' },
          { name: "", image: main97, category: 'women-footwear' },
          { name: "", image: main98, category: 'mens-footwear' },
          { name: "", image: main99, category: 'women-ornaments' }
        ].map((category, index) => (
          <div
            key={index}
            className="relative bg-white shadow-lg w-full sm:w-80 h-96 rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
           
            <button
              className="absolute bottom-4 right-4 py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition duration-300"
              onClick={() => handleCategoryClick(category.category)}
            >
              Shop Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;


















