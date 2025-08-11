import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

const BookCard = ({ item }) => {
  const navigate = useNavigate();

  const roundedRating = Math.round(item.rating * 100) / 100;

  const goToBook = () => {
    navigate(`/books/${item._id}`);
  };

  return (
    <button
      onClick={goToBook}
      className="rounded-xl border border-gray-200 bg-theme-foreground shadow-sm hover:shadow-xl hover:scale-[1.02] transition duration-300 p-4 space-y-3 cursor-pointer text-left text-theme-text-primary group"
    >
      {/* Image Section */}
      <div className="w-full aspect-[2/3] overflow-hidden rounded-md">
        <img
          src={item.image || 'https://myonlinebookshop.pk/cdn/shop/files/IMG-20250130-WA0023.jpg'}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Title */}
      <div>
        <h3 className="text-lg font-bold  truncate">{item.title}</h3>
      </div>

      {/* Author */}
      <div>
        <p className="text-sm truncate">{item.author || 'Unknown Author'}</p>
      </div>

      {/* Genre/Tag (optional) */}
      {item.genre && (
        <div className='space-x-1 max-w-full overflow-hidden'>
          {
            item.genre.map(item => (
              <span className="inline-block bg-theme-primary text-theme-text-secondary text-xs px-2 py-1 rounded-full">
                {item}
              </span>
            ))
          }
          
        </div>
      )}

      {/* Rating using Iconify */}
      <div className="flex">
              {[0, 1, 2, 3, 4].map((i) => {
                const fill = Math.min(Math.max(roundedRating - i, 0), 1) * 100;
      
                return (
                  <div key={i} className="relative w-5 h-5 mr-1">
                    {/* Gray background star */}
                    <Icon icon="si:star-fill" className="text-text-400 w-5 h-5 absolute inset-0" />
      
                    {/* Yellow foreground star with partial width fill */}
                    <div
                      className="absolute inset-0 overflow-hidden"
                      style={{ width: `${fill}%` }}
                    >
                      <Icon icon="si:star-fill" className="text-yellow-400 w-5 h-5" />
                    </div>
                  </div>
                );
              })}
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
