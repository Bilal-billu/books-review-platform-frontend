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
    <div className="flex min-h-full flex-col justify-center px-6 py-5 lg:px-8 rounded-md">
      <div className="mt-0 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm/6 font-medium text-theme-text-primary">
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
              className=" border border-theme-primary text-theme-text-primary text-sm rounded-lg focus: outline-none focus:border-theme-primary-hovered block w-full p-2"
            />
          </div>

          <div>
            <label htmlFor="coverImage" className="block text-sm/6 font-medium  text-theme-text-primary">
              Cover Image
            </label>
            <input
              type="file"
              id="coverImage"
              name="coverImage"
              accept="image/*"
              onChange={(e) => setCoverImage(e.target.files[0])}
              className=" border border-theme-primary  text-theme-text-primary text-sm rounded-lg focus: outline-none focus:border-theme-primary-hovered block w-full p-2"
            />
          </div>

          <div>
            <label className="block text-sm/6 font-medium  text-theme-text-primary">Genres</label>
            {genres.map((genre, index) => (
              <input
                key={index}
                type="text"
                value={genre}
                onChange={(e) => handleGenreChange(index, e.target.value)}
                placeholder={`Genre ${index + 1}`}
                className=" border border-theme-primary  text-theme-text-primary text-sm rounded-lg focus: outline-none focus:border-theme-primary-hovered block w-full p-2 mb-2"
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
            <label className="block text-sm/6 font-medium  text-theme-text-primary">Authors</label>
            {authors.map((author, index) => (
              <input
                key={index}
                type="text"
                value={author}
                onChange={(e) => handleAuthorChange(index, e.target.value)}
                placeholder={`Author ${index + 1}`}
                className=" border border-theme-primary  text-theme-text-primary text-sm rounded-lg focus: outline-none focus:border-theme-primary-hovered block w-full p-2 mb-2"
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
            <label className="block text-sm/6 font-medium  text-theme-text-primary">Description</label>
            <textarea
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              className=" border border-theme-primary  text-theme-text-primary text-sm rounded-lg focus: outline-none focus:border-theme-primary-hovered block w-full p-2 mb-2"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full text-theme-text-secondary bg-theme-primary hover:bg-theme-primary-hovered focus:ring-4 focus:outline-none focus:ring-theme-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors duration-200"
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
