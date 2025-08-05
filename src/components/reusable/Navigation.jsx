import React from 'react'

const Navigation = () => {
  return (
    <nav
        className='w-full py-2 sticky top-0 flex justify-between items-center z-10 bg-white border-b-2 border-gray-600'
    >
        <div>

        </div>
        <div></div>
        <div
            className='flex justify-center items-center gap-x-5'
        >
            <button
                className='rounded-full border border-gray-800 px-5 py-1 flex justify-center items-center leading-tight'
            >
                Login
            </button>
            <button
                className='rounded-full border border-gray-800 px-5 py-1 flex justify-center items-center leading-tight'
            >
                Signup
            </button>
        </div>
    </nav>
  )
}

export default Navigation
