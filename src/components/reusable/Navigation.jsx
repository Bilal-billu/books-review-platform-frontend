import React from 'react'

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useUserAuth, useLogout } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {

    const [loading, setLoading] = useState(true);
    // const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
    const user = useUserAuth();
    const logOutUser = useLogout();

    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    }

  const logOut = async () => {
    await logOutUser();
  }

//   console.log(isUserLoggedIn)


  return (
    <nav
        className='w-full py-2 sticky top-0 flex justify-between items-center z-10 bg-white border-b-2 border-gray-600'
    >
        <div>
            <h5>
                <button
                    // href='/'
                    onClick={()=>{
                        navigateTo('/')
                    }}
                >
                    Home
                </button>
            </h5>
        </div>
        <div>
            <h5>
                <button
                    // href='/add-book'
                    onClick={()=>{
                        navigateTo('/add-book')
                    }}
                >
                    Add Book
                </button>
            </h5>
        </div>
        <div
            className='flex justify-center items-center gap-x-5'
        >
            {
                user.isLoggedIn ? (
                    <button
                        className='rounded-full border border-gray-800 px-5 py-1 flex justify-center items-center leading-tight'
                        onClick={logOut}
                    >
                        Logout
                    </button>
                )
                :
                (
                    <>
                        <button
                            className='rounded-full border border-gray-800 px-5 py-1 flex justify-center items-center leading-tight'
                            // href='/login'
                            onClick={()=>{
                                navigateTo('/login')
                            }}
                        >
                            Login
                        </button>
                        <button
                            className='rounded-full border border-gray-800 px-5 py-1 flex justify-center items-center leading-tight'
                            // href='/register'
                            onClick={()=>{
                                navigateTo('/register')
                            }}
                        >
                            Signup
                        </button>
                    </>
                )
            }
        </div>
    </nav>
  )
}

export default Navigation
