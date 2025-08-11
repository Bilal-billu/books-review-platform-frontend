import axios from 'axios';
import React, { useState } from 'react';

const AdminEditBook = ({ book, reviews, onSubmit }) => {
  const [title, setTitle] = useState(book.title || '');
  const [description, setDescription] = useState(book.description || '');
  const [authors, setAuthors] = useState(book.author || []);
  const [genres, setGenres] = useState(book.genre || []);
  const [coverImage, setCoverImage] = useState(null);
  const [error, setError] = useState('');

  const handleAuthorChange = (index, value) => {
    const updatedAuthors = [...authors];
    updatedAuthors[index] = value;
    setAuthors(updatedAuthors);
  };

  const addAuthorField = () => {
    setAuthors([...authors, '']);
  };

  const handleGenreChange = (index, value) => {
    const updatedGenres = [...genres];
    updatedGenres[index] = value;
    setGenres(updatedGenres);
  };

  const addGenreField = () => {
    setGenres([...genres, '']);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construct the updated book data
    const formData = new FormData();

    // Append basic fields
    formData.append('title', title);
    formData.append('description', description);
    genres.forEach((g, i) => formData.append(`genre[${i}]`, g));
    authors.forEach((a, i) => formData.append(`author[${i}]`, a));  // if genres is an array

    // Append coverImage only if it exists
    if (coverImage) {
      formData.append('coverImage', coverImage); // Ensure coverImage is a File or Blob
    }

    const url = `/api/book/update/${book._id}`

    axios.patch(url, formData, {
  withCredentials: true, // 👈 includes cookies/credentials
  headers: {
    'Content-Type': 'multipart/form-data',
  },
})
.then(response => {
  console.log('Book updated:', response.data);
  onSubmit();
})
.catch(error => {
  console.error('Error updating book:', error);
});



    // onSubmit(updatedBook);
  };

  return (
    <div className="max-w-5xl mx-auto py-10 p-6 shadow-md rounded-lg flex flex-col md:flex-row text-theme-text-primary">
  <div className="md:w-1/3 mb-6 md:mb-0">
    <img
      src={
        coverImage
          ? URL.createObjectURL(coverImage)
          : book?.image || `https://myonlinebookshop.pk/cdn/shop/files/IMG-20250130-WA0023.jpg`
      }
      alt={`Cover of ${book.title}`}
      className="rounded w-full h-auto object-cover"
    />
    <input
      type="file"
      accept="image/*"
      onChange={(e) => setCoverImage(e.target.files[0])}
      className="mt-4 px-1 py-1 block w-full text-sm text-theme-primary border border-theme-primary rounded-lg cursor-pointer focus:ring-theme-primary focus:border-theme-primary"
    />
  </div>

  <div className="md:w-2/3 md:pl-8">
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="title" className="block text-sm font-medium">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full p-2 border border-theme-primary rounded-lg   focus:ring-theme-primary focus:border-theme-primary focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Authors</label>
        {authors.map((author, index) => (
          <input
            key={index}
            type="text"
            value={author}
            onChange={(e) => handleAuthorChange(index, e.target.value)}
            placeholder={`Author ${index + 1}`}
            className="w-full p-2 mb-2 border border-theme-primary rounded-lg   focus:ring-theme-primary focus:border-theme-primary focus:outline-none"
          />
        ))}
        <button
          type="button"
          onClick={addAuthorField}
          className="text-theme-primary text-sm hover:underline"
        >
          + Add Author
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium">Genres</label>
        {genres.map((genre, index) => (
          <input
            key={index}
            type="text"
            value={genre}
            onChange={(e) => handleGenreChange(index, e.target.value)}
            placeholder={`Genre ${index + 1}`}
            className="w-full p-2 mb-2 border border-theme-primary rounded-lg   focus:ring-theme-primary focus:border-theme-primary focus:outline-none"
          />
        ))}
        <button
          type="button"
          onClick={addGenreField}
          className="text-theme-primary text-sm hover:underline"
        >
          + Add Genre
        </button>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4"
          className="w-full p-2 border border-theme-primary rounded-lg   focus:ring-theme-primary focus:border-theme-primary focus:outline-none"
          placeholder="Enter book description"
        ></textarea>
      </div>

      <input type="hidden" name="_id" value={book._id} />
      <input type="hidden" name="userId" value={book.userId} />
      <input type="hidden" name="rating" value={book.rating} />

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      <div>
        <button
          type="submit"
          className="w-full text-theme-text-secondary bg-theme-primary hover:bg-theme-primary-hovered focus:ring-4 focus:outline-none focus:ring-theme-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors duration-200"
        >
          Save Changes
        </button>
      </div>
    </form>
  </div>
</div>

  );
};

export default AdminEditBook;
