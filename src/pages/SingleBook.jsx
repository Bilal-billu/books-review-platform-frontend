import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';

const SingleBook = () => {
  const location = useLocation();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      const fetchSingleBook = async () => {
          
        try {
        let text = String(location.pathname).split('/');
        const response = await axios.get(`/api/book/${text[text.length - 1]}`);
        console.log(response)
        setBook(response.data.data);
      } catch (err) {
        console.log(err)
        setError('Failed to fetch book details.');
      } finally {
        setLoading(false);
      }
    };

    fetchSingleBook();
  }, [location]);

  if (loading) return <div className="text-center mt-10 text-gray-600">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-600">{error}</div>;

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg flex flex-col md:flex-row">
      <div className="md:w-1/3 mb-6 md:mb-0">
        <img
          src={book?.image || `https://myonlinebookshop.pk/cdn/shop/files/IMG-20250130-WA0023.jpg`}
          alt={`Cover of ${book.title}`}
          className="rounded w-full h-auto object-cover"
        />
      </div>
      <div className="md:w-2/3 md:pl-8">
        <h2 className="text-3xl font-bold mb-4">{book.title}</h2>
        <p className="mb-2"><span className="font-semibold">Author:</span> {book.author.map((item, i) =>(<span
            className={`${i!==0 && "ms-1"}`}
        >
            {item}{(i<book.author.length -1) && ','}
        </span>)
    )}</p>
        <p className="mb-2"><span className="font-semibold">Genre:</span> {book.genre.map((item, i) =>(<span
            className={`${i!==0 && "ms-1"}`}
        >
            {item}{(i<book.genre.length -1) && ','}
        </span>))}
        </p>
        <p className="mb-2"><span className="font-semibold">Rating:</span> {book.rating} / 5</p>
        <p className="mb-2"><span className="font-semibold">Description:</span> {book.description || ''}</p>
      </div>
    </div>
  );
};

export default SingleBook;
