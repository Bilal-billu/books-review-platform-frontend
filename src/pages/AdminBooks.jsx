import React, { useState, useEffect } from 'react';
import AddBook from '../components/add-book/AddBook';
import ModalDialog from '../components/reusable/Dialog';
import TabularBookCard from '../components/reusable/TabularBookCard';
import axios from 'axios';

const AdminBooks = () => {
  const [showAddBook, setShowAddBook] = useState(false);
  const [allBooks, setAllBooks] = useState([])

  const [meta, setMeta] = useState({
    page: 0,
    limit: 0,
  })

  async function getBooks()
  {
    try
    {
      // const limit = searchParam.get('limit');
      // const page = searchParam.get('page');
      let url = `/api/book/`;
      if(meta.limit && meta.page)
      {
        url = url + `?limit=${meta.limit}&page=${meta.page}`
      }
      else if(meta.limit)
      {
        url = url + `?limit=${meta.limit}`
      }
      else if(meta.page)
      {
        url = url + `?page=${meta.page}`
      }
      const response = await axios.get(url)
      console.log(response);
      setAllBooks(response.data.data.books);
      // setSearchParams({page: response.data.data.meta.page, limit: response.data.data.meta.limit})
    }
    catch(e)
    {
      console.log(e)
    }
  }
  useEffect(()=>{
    getBooks();
  }, [])

  return (
    <div>
      <div>
      <div className="w-full flex justify-end p-4">
        <button 
          className="bg-theme-primary text-theme-text-secondary px-4 py-2 rounded hover:bg-theme-primary-hovered"
          onClick={() => setShowAddBook(true)}
        >
          Add Book
        </button>
      </div>
      <ModalDialog
        isOpen = {showAddBook}
        close = {()=>{
          setShowAddBook(false)
        }}
        title = {"Add new book"}
      >
        <AddBook />
      </ModalDialog>

      <div>
        <div
          className={` w-full`}
        >
          {
            allBooks && allBooks.length > 0 &&
            allBooks.map((item, i) => (
              <TabularBookCard book={item} key={i} dataUpdated={getBooks} />
            ))
          }
        </div>
      </div>
    </div>
    </div>
  );
};

export default AdminBooks;
