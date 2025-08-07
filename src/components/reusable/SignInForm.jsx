import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin, useUserAuth } from '../../context/AuthContext';

const SignInForm = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useUserAuth();

  const loginUser = useLogin();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginUser(email, password);
    console.log(user)
    onClose();
    if(user.user.role === "Admin")
    {
      navigate('/admin');
    }
    
    // TODO: Implement form submission logic
    
  };

  const requiredFields =
  
  email &&
  password
    ? true
    : false;

  if(user.isLoggedIn)
  {
    navigate('/');
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-5 lg:px-8 bg-background-dark rounded-md">
      {/* <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-black">
          Sign in to your account
        </h2>
      </div> */}

      <div className="mt-0 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium text-background-muted">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-foreground-soft border border-gray-300 text-background-muted text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2 "
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm/6 font-medium text-background-muted">
                Password
              </label>
              {/* <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">
                  Forgot password?
                </a>
              </div> */}
            </div>
            <div className="mt-2">
              <input
                id="password"
                type="password"
                name="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-foreground-soft border border-gray-300 text-background-muted text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled = {!requiredFields}
              className="w-full text-white bg-accent hover:bg-accent-dark disabled:bg-accent-light disabled:hover:bg-accent-light focus:ring-4 focus:outline-none focus:ring-accent-light font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors duration-200 "
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
