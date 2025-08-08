import React, { useState } from 'react';
import axios from "axios";
import Cookies from "js-cookie";

function AddBooks() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [coverImage, setCoverImage] = useState(null);
  const [genres, setGenres] = useState(['']);
  const [authors, setAuthors] = useState(['']);
  const [error, setError] = useState('');

  const handleGenreChange = (index, value) => {
    const newGenres = [...genres];
    newGenres[index] = value;
    setGenres(newGenres);
  };

  const handleAuthorChange = (index, value) => {
    const newAuthors = [...authors];
    newAuthors[index] = value;
    setAuthors(newAuthors);
  };

  const addGenreField = (e) => {
    e.preventDefault();
    setGenres([...genres, '']);
  };

  const addAuthorField = (e) => {
    e.preventDefault();
    setAuthors([...authors, '']);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('coverImage', coverImage);
    formData.append('description', description);
    genres.forEach((g, i) => formData.append(`genre[${i}]`, g));
    authors.forEach((a, i) => formData.append(`author[${i}]`, a));

    try {
      const url = `http://localhost:3000/api/book/add`;
      const response = await axios.post(url, formData, {
        withCredentials: true,
      });
      console.log(response);
      setTitle('');
      setDescription('');
      setAuthors(['']);
      setGenres(['']);
    } catch (e) {
      console.log(e);
      setError('An error occurred');
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-5 lg:px-8 bg-background-dark rounded-md">
      <div className="mt-0 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm/6 font-medium text-background-muted">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="bg-foreground-soft border border-gray-300 text-background-muted text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2"
            />
          </div>

          <div>
            <label htmlFor="coverImage" className="block text-sm/6 font-medium text-background-muted">
              Cover Image
            </label>
            <input
              type="file"
              id="coverImage"
              name="coverImage"
              accept="image/*"
              onChange={(e) => setCoverImage(e.target.files[0])}
              className="bg-foreground-soft border border-gray-300 text-background-muted text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2"
            />
          </div>

          <div>
            <label className="block text-sm/6 font-medium text-background-muted">Genres</label>
            {genres.map((genre, index) => (
              <input
                key={index}
                type="text"
                value={genre}
                onChange={(e) => handleGenreChange(index, e.target.value)}
                placeholder={`Genre ${index + 1}`}
                className="bg-foreground-soft border border-gray-300 text-background-muted text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2 mb-2"
              />
            ))}
            <button
              type="button"
              onClick={addGenreField}
              className="text-blue-600 text-sm hover:underline"
            >
              + Add Genre
            </button>
          </div>

          <div>
            <label className="block text-sm/6 font-medium text-background-muted">Authors</label>
            {authors.map((author, index) => (
              <input
                key={index}
                type="text"
                value={author}
                onChange={(e) => handleAuthorChange(index, e.target.value)}
                placeholder={`Author ${index + 1}`}
                className="bg-foreground-soft border border-gray-300 text-background-muted text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2 mb-2"
              />
            ))}
            <button
              type="button"
              onClick={addAuthorField}
              className="text-blue-600 text-sm hover:underline"
            >
              + Add Author
            </button>
          </div>

          <div>
            <label className="block text-sm/6 font-medium text-background-muted">Description</label>
            <textarea
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              className="bg-foreground-soft border border-gray-300 text-background-muted text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2 mb-2"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full text-white bg-accent hover:bg-accent-dark focus:ring-4 focus:outline-none focus:ring-accent-light font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors duration-200"
            >
              Submit
            </button>
          </div>
        </form>
        <div>
          {error && (
            <h5 className="text-red-500 mt-2 text-sm text-center">
              {error}
            </h5>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddBooks;
