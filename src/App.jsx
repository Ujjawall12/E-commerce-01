

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Header/Home';
import Cart from './components/Header/Cart';
import About from './components/Header/About';
import Contact from './components/Header/Contact';
import SignUp from './components/Header/SignUp';
import Login from './components/Header/Login';
import Footer from './components/Footer/Footer';
import Blog from './components/Footer/pages/Blog';
import CorporateInfo from './components/Footer/pages/CorporateInfo';
import FAQ from './components/Footer/pages/FAQ';
import PrivacyPolicy from './components/Footer/pages/PrivacyPolicy';
import TermsConditions from './components/Footer/pages/TermsConditions';
import TermsOfUse from './components/Footer/pages/TermsOfUse';
import ProductVariety from './components/ProductVariety/ProductVariety';
import  CartProvider  from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';




function App() {
  return (
  <AuthProvider>
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/Blog" element={<Blog />} />
              <Route path="/CorporateInfo" element={<CorporateInfo />} />
              <Route path="/FAQ" element={<FAQ />} />
              <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
              <Route path="/TermsConditions" element={<TermsConditions />} />
              <Route path="/TermsOfUse" element={<TermsOfUse />} />
              <Route path="/products/:category" element={<ProductVariety />} />
             
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
    </AuthProvider>
  );
}

export default App;




