import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

const BookCard = ({ item }) => {
  const navigate = useNavigate();

  const goToBook = () => {
    navigate(`/books/${item._id}`);
  };

  return (
    <button
      onClick={goToBook}
      className="rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-xl hover:scale-[1.02] transition duration-300 p-4 space-y-3 cursor-pointer text-left"
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

      {/* Genre/Tag (optional) */}
      {item.genre && (
        <div>
          {
            item.genre.map(item => (
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                {item}
              </span>
            ))
          }
          
        </div>
      )}

      {/* Rating using Iconify */}
      <div className="flex items-center gap-1 text-yellow-500 text-sm">
        {[...Array(5)].map((_, idx) =>
          idx < Math.floor(item.rating || 0) ? (
            <Icon icon="mdi:star" key={idx} />
          ) : (
            <Icon icon="mdi:star-outline" key={idx} />
          )
        )}
        <span className="text-gray-700 font-medium ml-1">
          {item.rating ? `${item.rating}/5` : 'No rating'}
        </span>
      </div>

      {/* Optional Price Section */}
      {/* 
      <div>
        <p className="text-sm font-semibold text-blue-600">{item.price} USD</p>
      </div> 
      */}
    </button>
  );
};

export default BookCard;
