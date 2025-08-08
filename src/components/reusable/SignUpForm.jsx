import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({onClose}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: handle form submission
    try
    {
        if(password !== confirmPassword)
        {
            throw({
                message: "Passwords don't match."
            })
        }
        const url = `/api/user/register`;
        const data = {
            name,
            email,
            password,
        }
        const response = await axios.post(url, data);
        console.log(response)
        onClose();
        // navigate('/login');
    }
    catch(e)
    {
        console.log(e)
    }
  };

  const requiredFields =
  name &&
  email &&
  password &&
  confirmPassword &&
  acceptedTerms
    ? true
    : false;

  return (
    <section className=" ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        {/* <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
          <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
          Flowbite
        </a> */}
        <div className="w-full rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 text-background-muted  ">
          <div className="p-6 space-y-4 md:space-y-4 sm:p-4">
            <h1 className="text-xl font-bold leading-tight tracking-tightmd:text-2xl ">
              Create an account
            </h1>
            <form className="space-y-2 md:space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium ">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-text-500  text-background-muted border border-gray-300  text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2 "
                    placeholder="John Doe"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium ">Your email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-text-500  text-background-muted border border-gray-300  text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2 "
                  placeholder="name@company.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium  ">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-text-500   text-background-muted border border-gray-300  text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium ">Confirm password</label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-text-500  text-background-muted border border-gray-300 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-foreground-soft focus:ring-3 focus:ring-blue-300 "
                    required
                    checked={acceptedTerms}
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-light text-foreground-muted ">
                    I accept the <a className="font-medium text-accent hover:underline " href="#">Terms and Conditions</a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                disabled = {!requiredFields}
                className="w-full text-white bg-accent-dark hover:bg-blue-700  disabled:bg-accent disabled:text-text-500 disabled:hover:bg-accent focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500 ">
                {/* Already have an account? <a href="#" className="font-medium text-blue-600 hover:underline ">Login here</a> */}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;
