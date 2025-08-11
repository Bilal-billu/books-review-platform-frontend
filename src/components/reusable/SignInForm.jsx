import axios from 'axios';
import React, { useEffect, useState } from 'react';
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
    // TODO: Implement form submission logic
    
  };

  const requiredFields =
  
  email &&
  password
    ? true
    : false;

    useEffect(()=>{
      console.log(user)
      // if(user.user.role === "Admin")
      // {
      //   navigate('/admin');
      // }
      if(user.isLoggedIn)
      {
        onClose();
      }
    },[user])

  // if(user.isLoggedIn)
  // {
  //   navigate('/');
  // }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-5 lg:px-8 text-theme-text-primary rounded-md">
      {/* <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-black">
          Sign in to your account
        </h2>
      </div> */}

      <div className="mt-0 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium">
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
                className="text-theme-text-primary border border-theme-primary  text-sm rounded-lg focus:border-theme-primary-hovered block w-full p-2 focus:outline-none  "
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm/6 font-medium">
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
                className="text-theme-text-primary border border-theme-primary  text-sm rounded-lg focus:border-theme-primary-hovered block w-full p-2 focus:outline-none "
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled = {!requiredFields}
              className="w-full border border-theme-primary text-theme-text-secondary bg-theme-primary hover:bg-theme-primary-hovered  disabled:bg-theme-foreground disabled:text-theme-primary disabled:hover:bg-theme-foreground focus:ring-2 focus:outline-none focus:ring-theme-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
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
