import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useState } from 'react';
import { useUserAuth } from '../../context/AuthContext';

const DEFAULT_IMAGE = 'https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png';

const ReviewCard = ({ review, updateReviewFunc }) => {
  const { image, userId, starsCount, text, } = review;
  const user = useUserAuth();
  const [editReview, setEditReview] = useState(false);
  const [updatedReview, setUpdatedReview] = useState({
    text, starsCount
  })

  const datePosted = toUTC_YMD_HM(review.createdAt);
  const reviewEditable = userId._id === user.user._id

  return (
    <div className="flex p-4 border rounded shadow-sm bg-theme-foreground space-x-4 relative">
      <div
        className={`absolute top-2 right-2 ${!reviewEditable && "hidden"} flex justify-center items-center gap-2`}
      >
        
        <button
          className='text-theme-primary hover:text-theme-primary-hovered border border-theme-primary hover:border-theme-primary-hovered px-2 py-1 rounded-lg'
          onClick={()=>{
            setEditReview(p=>!p)
            setUpdatedReview({
              text, starsCount
            })
          }}
        >
          {editReview ? "Cancel" : "Edit"}
        </button>
        <button
          className={`bg-theme-primary text-theme-text-secondary hover:bg-theme-primary-hovered px-2 py-1 rounded-lg ${!editReview && "hidden"}`}
          onClick={()=>{
            setEditReview(p=>!p)
            updateReviewFunc( review._id, updatedReview.text, updatedReview.starsCount );
            
          }}
        >
          Submit
        </button>
      </div>
      {/* Profile Image */}
      <div className='w-20 text-theme-text-unrelated-dark'>
        <img
          src={image || DEFAULT_IMAGE}
          alt={`${userId.name}'s profile`}
          className="w-16 h-16 rounded-full object-cover"
        />
        <small className='text-wrap text-xs'>
            {datePosted}
        </small>
      </div>

      {/* Review Details */}
      <div className="flex flex-col space-y-1 text-theme-text-primary w-full">
        <div className="font-semibold text-lg">{userId.name || "Deleted User"}</div>
        <div className="text-sm ">{userId.email || "[deleted user]"}</div>

        <div
          className={` shadow-2xl ${!editReview && "shadow-none"} rounded-lg px-1 py-1.5 space-y-1 transition-shadow duration-200`}
        >

        
          {/* Stars */}
          <div className="flex gap-x-0.5 w-full">
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
                disabled = {!editReview}
                onClick={()=>{
                  setUpdatedReview(p=>({
                    ...p,
                    starsCount: index + 1
                  }))
                }}
              >
                <Icon 
                    icon="si:star-fill"
                    key={index}
                    className={`w-5 h-5 ${
                        index < updatedReview.starsCount ? 'text-yellow-400' : 'text-theme-text-unrelated-dark'
                    }`}
                />
              </button>
            ))}
          </div>

          {/* Review Text */}
          {/* <p className="">{text}</p> */}
          <textarea
            disabled = {!editReview}
            value={updatedReview.text}
            onChange={(e)=>{
              setUpdatedReview(p=>({
                ...p,
                text: e.target.value
              }))
            }}
            className='bg-transparent w-full block resize-none focus:outline-none border border-theme-primary disabled:border-none ps-2 py-1 disabled:px-0 disabled:py-0 transition-all duration-200'
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;


function toUTC_YMD_HM(timestampStr) {
  const date = new Date(timestampStr);

  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are 0-based
  const day = String(date.getUTCDate()).padStart(2, '0');
  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');

  return `posted on ${year}-${month}-${day} at ${hours}:${minutes}.`;
}
