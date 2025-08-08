import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import ModalDialog from './Dialog';
import AdminEditBook from '../admin-edit-book/AdminEditBook';
import axios from 'axios';

const TabularBookCard = ({ book, dataUpdated }) => {
  const {
    _id,
    title,
    author = [],
    genre = [],
    rating = 0,
  } = book;

  const [openBook, setOpenBook] = useState(false);
  const renderExtraCount = (array) => {
    return array.length > 1 ? ` (+${array.length - 1})` : '';
  };

  const openABook = (e) => {
    e.stopPropagation()
    setOpenBook(true)
  }

  const closeABook = () =>{
    setOpenBook(false);
  }

  const deleteABook = async (e) => {
    e.stopPropagation();
    try {
        const url = `/api/book/${_id}`
    const response = await axios.delete(url);
    console.log('Deleted successfully:', response.data);
    dataUpdated();
  } catch (error) {
    console.error('Error deleting item:', error);
  }
  }

  const roundedRating = Math.round(rating * 100) / 100;
  // console.log("book", book)

  return (
    <div className="w-full p-4 mb-4 border rounded shadow hover:shadow-md text-left even:bg-background-dark odd:bg-primary text-text-400 odd:text-white hover:text-text-600 hover:bg-background-muted transition-colors duration-200 cursor-pointer"
        onClick={openABook}
    >
      <div className="grid grid-cols-9 gap-4 items-center">
        <div className="truncate text-sm font-medium" title={_id}>
          {_id}
        </div>
        <div className="truncate text-sm font-semibold col-span-3" title={title}>
          {title}
        </div>
        <div className="truncate text-sm" title={author.join(', ')}>
          {author[0]}
          <span
            className='text-gray-400 ms-1'
          >
            {renderExtraCount(author)}
          </span>
        </div>
        <div className="truncate text-sm" title={genre.join(', ')}>
          {genre[0]}
          <span
            className='text-gray-400 ms-1'
          >
            {renderExtraCount(genre)}
          </span>
        </div>
        <div className="flex col-span-2">
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

        <div
            className='col-span-1'
        >
            <button
                className='text-red-500 border border-red-500 rounded-full p-1.5'
                onClick={deleteABook}
            >
                <Icon icon="fluent:delete-48-regular" className='w-full h-full' />
            </button>
        </div>
      </div>
      <ModalDialog
      isOpen={openBook} title={"Edit book"} close={closeABook} maxWidth='max-w-screen-md'>
        <AdminEditBook book={book} onSubmit={()=>{
            closeABook();
            dataUpdated();
        }} />
      </ModalDialog>
    </div>
  );
};

export default TabularBookCard;
