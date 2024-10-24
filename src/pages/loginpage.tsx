import AfterLoginLayout from '@/components/AfterLoginLayout';
import GoogleLoginButton from '@/components/loginButton'
import React, { useState } from 'react'

const LoginPage = () => {
    
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    password: "",
  });


    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleEmailSignup = async (e) => {
        e.preventDefault();
        // Add logic for your custom sign-up logic using email/password
        console.log("Sign up with:", formData);
      };
  return (
    <div>
       <div className=" bg-gray-100 flex items-center justify-center  bg-white rounded-lg shadow dark:bg-gray-700 mb-2 py-8 h-screen" >
                <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
                  <h1 className="text-2xl font-bold mb-4 text-center text-gray-600">
                    Sign Up
                  </h1>
                 
                    <GoogleLoginButton />

                  <button
                    onClick={() => {}}
                    className="flex items-center justify-center w-full bg-blue-600 text-white py-2 rounded-md mb-4"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.794.143v3.24h-1.917c-1.505 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.621h-3.12V24h6.116C23.405 24 24 23.405 24 22.676V1.326C24 .595 23.405 0 22.675 0z" />
                    </svg>
                    Sign Up with Facebook
                  </button>

                  <form onSubmit={handleEmailSignup}>
                    <div className="mb-4">
                      <label className="block text-gray-700">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="Your first name"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-gray-700">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="Your email"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-gray-700">Password</label>
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="Your password"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-indigo-600 text-white py-2 rounded-md"
                    >
                      Sign Up with Email
                    </button>
                  </form>
                </div>
              </div>
    </div>
  )
}

export default LoginPage
