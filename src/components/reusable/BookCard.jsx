import React from 'react'

const BookCard = ({ item }) => {
  return (
    <div className=' space-y-2 border border-black rounded-lg p-3'>
        <div className='w-full h-40 overflow-hidden'>
            <img src = {item.image || `https://myonlinebookshop.pk/cdn/shop/files/IMG-20250130-WA0023.jpg`} className='w-full h-full object-cover' />
        </div>
        <div>
            <h5
                className='h-4 text-nowrap text-ellipsis text-xl font-semibold'
            >
                {item.name}
            </h5>
        </div>
        <div>
            <h5
                className='h-4 text-nowrap text-ellipsis font-medium text-sm'
            >
                {item.author}
            </h5>
        </div>
        <div>
            <h5
                className=''
            >
                {item.rating}
            </h5>
        </div>
        {/* <div>
            <h5
                className=''
            >
                {item.price}/USD
            </h5>
        </div> */}
    </div>
  )
}

export default BookCard
