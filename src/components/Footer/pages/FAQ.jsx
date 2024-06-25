import React from 'react';

const FAQs = () => {
  return (
  <div className='bg-blue-50'>
  <div className="container mx-auto px-4 py-8">
  <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
  
  <div className="bg-white p-6 rounded-lg shadow-md mb-8">
  <h3 className="text-xl font-bold mb-2">How can I place an order?</h3>
  <p>To place an order, simply browse our products, select the items you wish to purchase, and add them to your cart. Proceed to checkout and follow the instructions to complete your purchase.</p>
  </div>

  <div className="bg-white p-6 rounded-lg shadow-md mb-8">
  <h3 className="text-xl font-bold mb-2">What payment methods do you accept?</h3>
  <p>We accept a variety of payment methods, including credit/debit cards, PayPal, and other online payment options. Please refer to our payment section for more details.</p>
  </div>

  <div className="bg-white p-6 rounded-lg shadow-md mb-8">
  <h3 className="text-xl font-bold mb-2">How can I track my order?</h3>
  <p>Once your order has been shipped, you will receive a confirmation email with a tracking number. You can use this number to track the status of your delivery on our website or the carrier's website.</p>
  </div>

  <div className="bg-white p-6 rounded-lg shadow-md mb-8">
  <h3 className="text-xl font-bold mb-2">What is your return policy?</h3>
  <p>We offer a hassle-free return policy. If you are not satisfied with your purchase, you can return the item within 30 days for a full refund or exchange. Please visit our returns page for more information.</p>
  </div>

  <div className="bg-white p-6 rounded-lg shadow-md mb-8">
  <h3 className="text-xl font-bold mb-2">How can I contact customer support?</h3>
  <p>You can reach our customer support team via phone, email, or our online contact form. Our support hours and contact details are provided on our Contact Us page.</p>
  </div>
  </div>
  </div>
  );
}

export default FAQs;

