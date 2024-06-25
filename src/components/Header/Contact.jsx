import React from 'react';
import mypic from '../../assets/mypic.jpg'

const Contact = () => {
  return (
     <div className='bg-blue-50'>
     <div className=" container mx-auto px-4 py-12 bg-gradient-to-b from-white to-gray-100 shadow-lg rounded-lg">
    <h2 className="text-4xl font-bold mb-8 text-center text-purple-500">Contact Us</h2>
    <div className="flex flex-col md:flex-row items-center bg-white p-8 shadow-lg rounded-lg">
      <div className="flex justify-center md:w-1/2 mb-8 md:mb-0">
     <img src={mypic} alt="person image" className="rounded-full h-64 w-64 object-cover shadow-md" />
      </div>
      <div className="md:w-1 bg-gray-300 mx-4 hidden md:block"></div>
      <div className="block md:hidden w-full border-t border-gray-300 my-4"></div>
      <div className="text-center md:text-left md:w-1/2">
     <p className="text-xl mb-2"><strong>Name:</strong> Ujjawal Maheshwari</p>
     <p className="text-xl mb-2"><strong>Position:</strong> CEO and Managing Director</p>
     <p className="text-xl mb-2"><strong>Mobile No.:</strong> 9462821732</p>
     <p className="text-xl mb-2"><strong>Email:</strong> ujjawalmahesh005@gmail.com</p>
     <p className="text-xl mb-2"><strong>Email:</strong> 23bcs118@nith.ac.in</p>
     <p className="text-xl mb-2"><strong>Address:</strong> NIT Hamirpur, Himachal Pradesh, India</p>
     <p className="text-xl mt-4"><strong>Feel free to contact us!</strong></p>
      </div>
    </div>
     </div>
  </div>
  );
}

export default Contact;


