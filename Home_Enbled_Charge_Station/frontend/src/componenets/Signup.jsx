import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Add signup logic here
    navigate('/'); // Redirect to Home or another page after signup
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E6FFFF] to-[#F5F0FF]">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <img
          src="https://readdy.ai/api/search-image?width=1440&height=1024&orientation=landscape&flag=b8e022ee8058c32420c9bea442b2bb95"
          className="object-cover w-full h-full opacity-50"
          alt="background pattern"
        />
      </div>
      <div className="relative w-[1000px] min-h-[600px] flex bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="w-1/2 p-8 transition-all duration-500 ease-in-out transform translate-x-0">
          <div className="text-center mb-8">
            <img
              src="https://readdy.ai/api/search-image?width=150&height=150&orientation=squarish&flag=bf800c3440b3f3cd72c5d7492d8e6190"
              alt="Logo"
              className="w-12 h-12 mx-auto mb-4"
            />
            <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
            <p className="text-gray-600 mt-2">Please fill in the details to sign up</p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="relative">
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative">
              <input
                type="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="button" className="absolute right-3 top-3 text-gray-500 hover:text-gray-700">
                <i className="fas fa-eye"></i>
              </button>
            </div>
            <div className="relative">
              <input
                type="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 !rounded-button bg-gradient-to-r from-[#00FFFF] to-[#9966FF] text-white font-medium hover:from-[#00E6E6] hover:to-[#8A4DFF] transition-all duration-300"
            >
              Create Account
            </button>
          </form>
        </div>
        <div className="w-1/2 p-8 transition-all duration-500 ease-in-out transform translate-x-0 opacity-100">
          <img
            src="https://readdy.ai/api/search-image?width=500&height=600&orientation=portrait&flag=44218bd3b874c077932fb82c130b11bd"
            alt="Signup illustration"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup; 