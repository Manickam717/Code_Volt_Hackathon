import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Temporary credentials
    const tempUsername = 'user';
    const tempPassword = 'pass';

    if (username === tempUsername && password === tempPassword) {
      navigate('/dashboard'); // Redirect to MainDash
    } else {
      alert('Invalid username or password');
    }
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
            <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
            <p className="text-gray-600 mt-2">Please enter your details to sign in</p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="w-4 h-4 text-[#00FFFF]" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <button type="button" className="text-sm text-[#00FFFF] hover:text-[#00E6E6]">
                Forgot password?
              </button>
            </div>
            <button
              type="submit"
              className="w-full py-3 !rounded-button bg-gradient-to-r from-[#00FFFF] to-[#9966FF] text-white font-medium hover:from-[#00E6E6] hover:to-[#8A4DFF] transition-all duration-300 flex items-center justify-center"
            >
              Sign In
            </button>
          </form>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              <button className="w-full py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center">
                <i className="fab fa-google text-red-500"></i>
              </button>
              <button className="w-full py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center">
                <i className="fab fa-facebook text-blue-600"></i>
              </button>
              <button className="w-full py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center">
                <i className="fab fa-apple text-gray-800"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2 p-8 transition-all duration-500 ease-in-out transform translate-x-0 opacity-100">
          <img
            src="https://readdy.ai/api/search-image?width=500&height=600&orientation=portrait&flag=44218bd3b874c077932fb82c130b11bd"
            alt="Login illustration"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white p-8 transition-all duration-500 ease-in-out transform translate-x-full">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
            <p className="text-gray-600 mt-2">Please fill in the details to sign up</p>
          </div>
          <form className="space-y-4">
            <div className="relative">
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Full Name"
              />
            </div>
            <div className="relative">
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Email"
              />
            </div>
            <div className="relative">
              <input
                type="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Password"
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
        <div className="absolute bottom-6 w-full text-center">
          <p className="text-gray-600">
            Don't have an account?
            <button className="ml-2 text-[#00FFFF] hover:text-[#00E6E6] font-medium">Sign up</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;