import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { FaStar } from 'react-icons/fa';

const BookCard = ({ item }) => {
    const navigate = useNavigate();

    const goToBook = () => {
        navigate(`/books/${item._id}`)
    }

  return (
    <button
        className="rounded-xl border border-gray-200 bg-white shadow-md transition hover:shadow-lg p-4 space-y-3"
        onClick={goToBook}
    >
      {/* Image Section */}
      <div className="w-full aspect-[2/3] overflow-hidden rounded-md">
        <img
          src={item.image || 'https://myonlinebookshop.pk/cdn/shop/files/IMG-20250130-WA0023.jpg'}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Title */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 truncate">{item.name}</h3>
      </div>

      {/* Author */}
      <div>
        <p className="text-sm text-gray-600 truncate">{item.author || 'Unknown Author'}</p>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 text-yellow-500 text-sm">
        {item.rating ? (
          <>
            {/* <FaStar /> */}
            <span className="text-gray-700 font-medium">{item.rating}/5</span>
          </>
        ) : (
          <span className="text-gray-400 italic">No rating</span>
        )}
      </div>

      {/* Optional Price Section */}
      {/* <div>
        <p className="text-sm font-semibold text-blue-600">{item.price} USD</p>
      </div> */}
    </button>
  );
};

export default BookCard;
