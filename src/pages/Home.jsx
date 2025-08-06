import { useState } from "react"
import BookCard from "../components/reusable/BookCard"
import { useEffect } from "react"
import axios from "axios"
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [allBooks, setAllBooks] = useState([])
  // const [searchParam, setSearchParams] = useSearchParams();
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

  if(!allBooks || allBooks.length === 0)
  {
    return (
      <div>
        Loading...
      </div>
    )
  }
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl">
          Checkout these books
        </h1>
      </div>
        <div
          className={` w-full grid grid-cols-6 gap-4`}
        >
          {
            allBooks.map((item, i) => (
              <BookCard item={item} key={i} />
            ))
          }
        </div>
    </div>
  )
}

export default Home


const dummyBooks = [
  {
    image: `https://myonlinebookshop.pk/cdn/shop/files/IMG-20250130-WA0023.jpg`,
    name: `Rich Dad Poor Dad`,
    author: `Robert T. K.`,
    price: `400`,
    rating: 4,
  },
  {
    image: `https://myonlinebookshop.pk/cdn/shop/files/IMG-20250130-WA0023.jpg`,
    name: `Rich Dad Poor Dad`,
    author: `Robert T. K.`,
    price: `400`,
    rating: 2,
  },
  {
    image: `https://myonlinebookshop.pk/cdn/shop/files/IMG-20250130-WA0023.jpg`,
    name: `Rich Dad Poor Dad`,
    author: `Robert T. K.`,
    price: `400`,
    rating: 5,
  },
  {
    image: `https://myonlinebookshop.pk/cdn/shop/files/IMG-20250130-WA0023.jpg`,
    name: `Rich Dad Poor Dad`,
    author: `Robert T. K.`,
    price: `400`,
    rating: 1,
  },
  {
    image: `https://myonlinebookshop.pk/cdn/shop/files/IMG-20250130-WA0023.jpg`,
    name: `Rich Dad Poor Dad`,
    author: `Robert T. K.`,
    price: `400`,
    rating: 4,
  },
  {
    image: `https://myonlinebookshop.pk/cdn/shop/files/IMG-20250130-WA0023.jpg`,
    name: `Rich Dad Poor Dad`,
    author: `Robert T. K.`,
    price: `400`,
    rating: 4,
  },
  {
    image: `https://myonlinebookshop.pk/cdn/shop/files/IMG-20250130-WA0023.jpg`,
    name: `Rich Dad Poor Dad`,
    author: `Robert T. K.`,
    price: `400`,
    rating: 4,
  },
  {
    image: `https://myonlinebookshop.pk/cdn/shop/files/IMG-20250130-WA0023.jpg`,
    name: `Rich Dad Poor Dad`,
    author: `Robert T. K.`,
    price: `400`,
    rating: 4,
  },
  {
    image: `https://myonlinebookshop.pk/cdn/shop/files/IMG-20250130-WA0023.jpg`,
    name: `Rich Dad Poor Dad`,
    author: `Robert T. K.`,
    price: `400`,
    rating: 4,
  },
  {
    image: `https://myonlinebookshop.pk/cdn/shop/files/IMG-20250130-WA0023.jpg`,
    name: `Rich Dad Poor Dad`,
    author: `Robert T. K.`,
    price: `400`,
    rating: 4,
  },
  {
    image: `https://myonlinebookshop.pk/cdn/shop/files/IMG-20250130-WA0023.jpg`,
    name: `Rich Dad Poor Dad`,
    author: `Robert T. K.`,
    price: `400`,
    rating: 4,
  },
  {
    image: `https://myonlinebookshop.pk/cdn/shop/files/IMG-20250130-WA0023.jpg`,
    name: `Rich Dad Poor Dad`,
    author: `Robert T. K.`,
    price: `400`,
    rating: 4,
  },
  {
    image: `https://myonlinebookshop.pk/cdn/shop/files/IMG-20250130-WA0023.jpg`,
    name: `Rich Dad Poor Dad`,
    author: `Robert T. K.`,
    price: `400`,
    rating: 4,
  },
  {
    image: `https://myonlinebookshop.pk/cdn/shop/files/IMG-20250130-WA0023.jpg`,
    name: `Rich Dad Poor Dad`,
    author: `Robert T. K.`,
    price: `400`,
    rating: 4,
  },
  
]