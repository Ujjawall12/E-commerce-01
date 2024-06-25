import React from 'react';

const CorporateInfo = () => {
  return (
  <div className='bg-blue-50'>
  <div className="container mx-auto px-4 py-8">
    <h2 className="text-3xl font-bold mb-4">Corporate Information</h2>
    
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
  <h3 className="text-xl font-bold mb-2">Corporate Social Responsibility</h3>
  <p>Fashion Store is committed to making a positive impact on society and the environment. Our CSR initiatives focus on:</p>
  <ul className="list-disc pl-6">
    <li><strong>Sustainable Sourcing:</strong> We ensure our products are made from sustainable materials, supporting eco-friendly practices.</li>
    <li><strong>Community Engagement:</strong> We actively participate in community projects and support local initiatives.</li>
    <li><strong>Ethical Labor Practices:</strong> We uphold fair labor standards and work with suppliers who share our values.</li>
  </ul>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
  <h3 className="text-xl font-bold mb-2">Transparency & Accountability</h3>
  <p>We believe in transparency and accountability in all our operations. Our commitment to ethical business practices includes:</p>
  <ul className="list-disc pl-6">
    <li>Regular audits of our supply chain to ensure compliance with ethical standards.</li>
    <li>Clear communication with our stakeholders about our practices and policies.</li>
    <li>Commitment to continuous improvement and maintaining high standards of integrity.</li>
  </ul>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
  <h3 className="text-xl font-bold mb-2">Environmental Initiatives</h3>
  <p>Our environmental initiatives aim to reduce our carbon footprint and promote sustainability. Key initiatives include:</p>
  <ul className="list-disc pl-6">
    <li>Using eco-friendly packaging materials to reduce waste.</li>
    <li>Implementing energy-efficient practices in our operations.</li>
    <li>Supporting environmental conservation projects and organizations.</li>
  </ul>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
  <h3 className="text-xl font-bold mb-2">Corporate Governance</h3>
  <p>We adhere to high standards of corporate governance, ensuring our operations are ethical and transparent. Our governance practices include:</p>
  <ul className="list-disc pl-6">
    <li>Strong leadership and a committed board of directors.</li>
    <li>Clear policies and procedures to guide our business practices.</li>
    <li>Regular reporting and accountability to our stakeholders.</li>
  </ul>
    </div>
  </div>
  </div>
  );
}

export default CorporateInfo;

