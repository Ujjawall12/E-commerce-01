import React, { useState } from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const { signup, checkUserExists } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    if (checkUserExists(email)) {
      setError('User already exists. Please log in.');
    } else {
      const userData = { username, email, password };
      signup(userData);
      navigate('/');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-400 to-purple-400">
      <form className="bg-white p-8 rounded-lg shadow-md w-96" onSubmit={handleSignUp}>
        <div className="flex justify-center mb-4">
          <AiOutlineUserAdd className="h-10 w-10 text-indigo-500" />
        </div>
        <h2 className="text-3xl text-center mb-6 font-semibold text-gray-700">Sign Up</h2>
        <p className="text-red-500 text-center mb-4">You have to register first to buy any product.</p>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
         Sign Up
        </button>
        <p className="text-gray-600 text-center mt-4">
          Already have an account?{' '}
          <span
            onClick={() => navigate('/login')}
            className="text-indigo-500 hover:underline cursor-pointer"
          >
            Login
          </span>
      </p>
  </form>
    </div>
  );
};

export default SignUp;






