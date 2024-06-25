import React from 'react';

const About = () => {
  return (
   <div className='bg-blue-50'>
   <div className="container mx-auto px-4 py-8">
     <h2 className="text-3xl font-bold mb-4">About Us</h2>
     
     <div className="bg-white p-6 rounded-lg shadow-md mb-8">
   <h3 className="text-xl font-bold mb-2">Our Story</h3>
   <p>Fashion Store began with a vision to make stylish and high-quality fashion accessible to everyone. Our journey started from a small boutique and has grown into a beloved fashion destination, thanks to our commitment to quality and customer satisfaction.</p>
     </div>

     <div className="bg-white p-6 rounded-lg shadow-md mb-8">
   <h3 className="text-xl font-bold mb-2">Mission & Values</h3>
   <ul className="list-disc pl-6">
     <li><strong>Quality:</strong> We provide top-notch products that meet the highest standards of quality and craftsmanship.</li>
     <li><strong>Innovation:</strong> We embrace creativity and continuously seek innovative ways to enhance our products and services.</li>
     <li><strong>Customer Satisfaction:</strong> Our customers are at the heart of everything we do. We strive to exceed their expectations and deliver exceptional service.</li>
     <li><strong>Sustainability:</strong> We are committed to sustainable practices that protect the environment and promote ethical business operations.</li>
   </ul>
     </div>

     <div className="bg-white p-6 rounded-lg shadow-md mb-8">
   <h3 className="text-xl font-bold mb-2">Customer-Centric Approach</h3>
   <p>Our customers are our top priority. We listen to their needs and preferences to provide a personalized shopping experience. Our customer support team is always ready to assist, ensuring a seamless and enjoyable shopping journey.</p>
     </div>

     <div className="bg-white p-6 rounded-lg shadow-md mb-8">
   <h3 className="text-xl font-bold mb-2">Brand Promise</h3>
   <p>At Fashion Store, we promise to deliver quality, style, and value. Our extensive range of products is designed to cater to diverse tastes and preferences, ensuring there is something for everyone. We are committed to building lasting relationships with our customers through trust and excellence.</p>
     </div>
   </div>
  </div>
  );
}

export default About;


