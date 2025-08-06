import React, { useState } from 'react';
import axios from "axios";
import Cookies from "js-cookie";

function AddBook() {
  const [title, setTitle] = useState('');
  const [coverImage, setCoverImage] = useState(null);
  const [genres, setGenres] = useState(['']);
  const [authors, setAuthors] = useState(['']);

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

    // Create form data for submission (if needed for API)
    const formData = new FormData();
    formData.append('title', title);
    formData.append('coverImage', coverImage);
    genres.forEach((g, i) => formData.append(`genre[${i}]`, g));
    authors.forEach((a, i) => formData.append(`author[${i}]`, a));

    // For demo: print to console
    const data = {
      title,
      coverImage,
      genre:genres,
      author: authors,
    };
    console.log(data);
    try
    {
        const url = `http://localhost:3000/api/book/add`;
        // const accessToken = Cookies.get("accessToken");
        const response = await axios.post(url, formData, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'multipart/form-data' // Optional, but recommended
          },
          withCredentials: true,
        })
        console.log(response)
    }
    catch(e)
    {
        console.log(e);
    }



    // Submit to backend or perform further processing here
  };

  return (
    <div className="max-w-sm mx-auto">
  <form onSubmit={handleSubmit} className="space-y-6">
    
    <div>
      <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">
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
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2"
      />
    </div>

    <div>
      <label htmlFor="coverImage" className="block mb-2 text-sm font-medium text-gray-900">
        Cover Image
      </label>
      <input
        type="file"
        id="coverImage"
        name="coverImage"
        accept="image/*"
        onChange={(e) => setCoverImage(e.target.files[0])}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2"
      />
    </div>

    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900">Genres</label>
      {genres.map((genre, index) => (
        <input
          key={index}
          type="text"
          value={genre}
          onChange={(e) => handleGenreChange(index, e.target.value)}
          placeholder={`Genre ${index + 1}`}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2 mb-2"
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
      <label className="block mb-2 text-sm font-medium text-gray-900">Authors</label>
      {authors.map((author, index) => (
        <input
          key={index}
          type="text"
          value={author}
          onChange={(e) => handleAuthorChange(index, e.target.value)}
          placeholder={`Author ${index + 1}`}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2 mb-2"
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
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg px-5 py-2.5"
      >
        Submit
      </button>
    </div>
  </form>
</div>

  );
}

export default AddBook;
