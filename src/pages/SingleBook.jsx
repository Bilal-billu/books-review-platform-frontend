import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { useUserAuth } from '../context/AuthContext';
import ReviewCard from '../components/reusable/ReviewCard';
import { Icon } from '@iconify/react/dist/iconify.js';

const SingleBook = () => {
  const location = useLocation();
  const [text, setText] = useState('');
  const [starsCount, setStarsCount] = useState(0);
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([]);

  const user = useUserAuth();
  const handleCancel = () => {
    setStarsCount(0);
    setText('');
    console.log("uh oh")
  };

  
  useEffect(() => {
      const fetchSingleBook = async () => {
          
        try {
        const pathStringArray = String(location.pathname).split('/');
        const response = await axios.get(`/api/book/${pathStringArray[pathStringArray.length - 1]}`);
        console.log(response)
        setBook(response.data.data.book);
        setReviews(response.data.data.reviews)
      } catch (err) {
        console.log(err)
        setError('Failed to fetch book details.');
      } finally {
        setLoading(false);
      }
    };

    fetchSingleBook();
  }, [location]);

  const handleSubmitReview = async () => {
    try
    {
      const url = `/api/review/new-review`;
      const pathStringArray = String(location.pathname).split('/');
      const data = {
        starsCount,
        text,
        bookId: pathStringArray[pathStringArray.length - 1]
      }
      const response = await axios.post(url, data, {
        withCredentials: true
    })
    setText('');
    setStarsCount(0);
    console.log(response);
    }
    catch(e)
    {
      console.log(e);
    }
  };


  // const isDisabled = !(user.isLoggedIn) || text.length === 0

  if (loading) return <div className="text-center mt-10 text-gray-600">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-600">{error}</div>;

  return (
    <div>
      <div className="max-w-5xl mx-auto mt-10 p-6 bg-foreground-soft shadow-md rounded-lg flex flex-col md:flex-row text-background-muted">
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
        <div className="mb-2 flex justify-start items-center">
          <StarRating rating={book.rating} />
          <p>({reviews?.length})</p>
        </div>
        <p className="mb-2"><span className="font-semibold">Description:</span> {book.description || ''}</p>
      </div>
    </div>

    <div>
      <div className="max-w-5xl mx-auto mt-10 p-6 bg-foreground-soft text-background-muted shadow-md rounded-lg flex flex-col">
      {/* <h5>
        This will be the review section
      </h5> */}
      <div
        className={`p-3 space-y-2 border rounded-lg shadow-sm w-full transition-all duration-200 
          
          ${(user.isLoggedIn) ? "bg-background border-gray-300" : "bg-foreground-muted border-0"}
        `}
      >
        {/* Textarea */}
        <textarea
          className={`
            w-full p-3 text-sm rounded-md border resize-none transition-colors duration-200
            focus:outline-none focus:border-2 focus:border-accent-dark
            ${!(user.isLoggedIn)
              ? "bg-transparent border-gray-400 text-gray-600 cursor-not-allowed"
              : "bg-transparent border-gray-300 text-text-500"}
          `}
          placeholder="Write your review..."
          maxLength={5000}
          disabled={!(user.isLoggedIn)}
          value={text}
          onChange={(e) => setText(e.target.value)}
          aria-disabled={user.isLoggedIn}
          rows={4}
        />

        {/* Buttons */}
        <div>
          <div>
            <div className="flex gap-x-0.5">
                {Array.from({ length: 5 }).map((_, index) => (
                  // <svg
                  //   key={index}
                  //   className={`w-5 h-5 ${
                  //     index < stars ? 'text-yellow-400' : 'text-gray-300'
                  //   }`}
                  //   fill="currentColor"
                  //   viewBox="0 0 20 20"
                  // >
                  //   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.197-1.539-1.118l1.285-3.974a1 1 0 00-.364-1.118L2.05 9.401c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.951-.69l1.286-3.974z" />
                  // </svg>
                  <button
                    key={index}
                    onClick={()=>{
                      setStarsCount(index + 1)
                    }}
                    className='w-fit h-fit'
                  >
                    <Icon 
                      icon="si:star-fill"
                      
                      className={`w-5 h-5 transition-colors duration-200 ${
                          index < starsCount ? 'text-yellow-400' : 'text-text-600'
                      }`}
                    />
                  </button>
                ))}
              </div>
          </div>
          <div className="flex justify-end space-x-3">
          <button
            onClick={handleCancel}
            disabled={text.length === 0 && starsCount < 1}
            className={`
              px-5 py-2 text-sm font-medium rounded-md shadow-sm border transition-all duration-200 focus:outline-none
              disabled:bg-accent-light disabled:hover:bg-accent-light disabled:text-text-400
              ${text.length === 0 && starsCount < 1
                ? " cursor-not-allowed"
                : "text-accent-light border-accent-light bg-primary hover:bg-accent-dark hover:text-white focus:ring-2 focus:ring-rose-300"}
            `}
          >
            Cancel
          </button>

          <button
            onClick={handleSubmitReview}
            disabled={!text.trim() || !(user.isLoggedIn) || starsCount < 1}
            className={`
              px-5 py-2 text-sm font-medium rounded-md shadow transition-all duration-200
              bg-accent hover:bg-accent-dark disabled:bg-accent-light disabled:hover:bg-accent-light disabled:text-text-400
              ${(!text.trim() || !(user.isLoggedIn) || starsCount < 1)
                ? "ring-0 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-400"}
            `}
          >
            Submit
          </button>
        </div>
        </div>
      </div>
      <div className='space-y-0.5 mt-5'>
        {
          reviews && reviews.length > 0 ? (
            reviews.map(item => (
              <ReviewCard review = {item} key={item.email} />
            ))
          ) : (
            <h5 className='text-center text-gray-400'>This book has't been reviewed yet.</h5>
          )
        }
      </div>



      </div>
    </div>
    </div>
  );
};

export default SingleBook;




// const reviews = [
//   {
//     image: '', // No image provided (will fallback)
//     name: 'Alice Johnson',
//     email: 'alice@example.com',
//     stars: 5,
//     text: 'Absolutely amazing product! Highly recommend it to everyone.'
//   },
//   {
//     image: 'https://randomuser.me/api/portraits/women/68.jpg',
//     name: 'Maria Green',
//     email: 'maria@example.com',
//     stars: 4,
//     text: 'Pretty good, but could use some improvements in packaging.'
//   },
//   {
//     image: '',
//     name: 'James Smith',
//     email: 'james@example.com',
//     stars: 3,
//     text: 'It was okay. Not as expected, but acceptable for the price.'
//   },
// ];


const StarRating = ({ rating }) => {
  const roundedRating = Math.round(rating * 100) / 100;

  return (
    <div className=" flex items-center">
      <p className="font-semibold mr-2">Rating:</p>
      <div className="flex">
        {[0, 1, 2, 3, 4].map((i) => {
          const fill = Math.min(Math.max(roundedRating - i, 0), 1) * 100;

          return (
            <div key={i} className="relative w-5 h-5 mr-1">
              {/* Gray background star */}
              <Icon icon="si:star-fill" className="text-text-600 w-5 h-5 absolute inset-0" />

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
      {/* <span className="ml-2 text-sm text-gray-600">{roundedRating} / 5</span> */}
    </div>
  );
};

// export default StarRating;
