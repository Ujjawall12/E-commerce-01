import React from 'react';

const PrivacyPolicy = () => {
  return (
   <div className='bg-blue-50'>
   <div className="container mx-auto px-4 py-8">
  <h2 className="text-3xl font-bold mb-4">Privacy Policy</h2>
  
  <div className="bg-white p-6 rounded-lg shadow-md mb-8">
    <h3 className="text-xl font-bold mb-2">Introduction</h3>
    <p>Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website and use our services.</p>
  </div>

  <div className="bg-white p-6 rounded-lg shadow-md mb-8">
    <h3 className="text-xl font-bold mb-2">Information Collection</h3>
    <p>We collect information in the following ways:</p>
    <ul className="list-disc pl-6">
   <li><strong>Personal Information:</strong> Information you provide directly, such as your name, email address, and payment details.</li>
   <li><strong>Usage Data:</strong> Information about how you use our website, including pages visited, links clicked, and time spent on the site.</li>
   <li><strong>Cookies:</strong> Small data files stored on your device to enhance your browsing experience and provide personalized content.</li>
    </ul>
  </div>

  <div className="bg-white p-6 rounded-lg shadow-md mb-8">
    <h3 className="text-xl font-bold mb-2">Information Use</h3>
    <p>We use your information to:</p>
    <ul className="list-disc pl-6">
   <li>Provide and improve our services.</li>
   <li>Process transactions and send order confirmations.</li>
   <li>Personalize your shopping experience.</li>
   <li>Communicate with you about updates, promotions, and offers.</li>
   <li>Enhance website security and prevent fraudulent activities.</li>
    </ul>
  </div>

  <div className="bg-white p-6 rounded-lg shadow-md mb-8">
    <h3 className="text-xl font-bold mb-2">Information Sharing</h3>
    <p>We respect your privacy and do not share your personal information with third parties, except in the following cases:</p>
    <ul className="list-disc pl-6">
   <li>With your consent.</li>
   <li>To comply with legal obligations.</li>
   <li>To protect our rights and safety.</li>
   <li>With service providers who assist us in operating our business.</li>
    </ul>
  </div>

  <div className="bg-white p-6 rounded-lg shadow-md mb-8">
    <h3 className="text-xl font-bold mb-2">Data Security</h3>
    <p>We implement robust security measures to protect your personal information from unauthorized access, use, or disclosure. Our security practices include:</p>
    <ul className="list-disc pl-6">
   <li>Encryption of sensitive data.</li>
   <li>Regular security audits and assessments.</li>
   <li>Access controls and authentication mechanisms.</li>
    </ul>
  </div>
   </div>
  </div>
  );
}

export default PrivacyPolicy;

