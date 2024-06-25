import React, { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
  const { login, checkUserExists } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!checkUserExists(email)) {
      setError('User does not exist. Please sign up.');
    } else {
      const userData = { email }; 
      login(userData);
      const from = location.state?.from || '/';
      navigate(from);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-400 to-purple-400">
      <form className="bg-white p-8 rounded-lg shadow-md w-96" onSubmit={handleLogin}>
        <div className="flex justify-center mb-4">
          <AiOutlineUser className="h-10 w-10 text-indigo-500" />
        </div>
        <h2 className="text-3xl text-center mb-6 font-semibold text-gray-700">Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="w-full bg-indigo-500 text-white p-3 rounded-lg hover:bg-indigo-600">
          Login
        </button>
        <p className="text-gray-600 text-center mt-4">
          Don't have an account?{' '}
          <span
            onClick={() => navigate('/signup')}
            className="text-indigo-500 hover:underline cursor-pointer"
          >
            Sign Up
        </span>
      </p>
    </form>
    </div>
  );
};

export default Login;





