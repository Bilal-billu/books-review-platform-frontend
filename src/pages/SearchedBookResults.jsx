import { useState } from "react"
import BookCard from "../components/reusable/BookCard"
import { useEffect } from "react"
import axios from "axios"
import { useSearchParams } from "react-router-dom";
import HeroHome from "../components/hero/HeroHome";
import { Loading } from "../components/reusable/loading/Loading";
import LoadingSkeleton from "../components/reusable/loading/LoadingSkeleton";
import Error from "../components/reusable/error/Error";

const SearchedBookResults = () => {
  const [allBooks, setAllBooks] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchParam, setSearchParams] = useSearchParams();
  const [meta, setMeta] = useState({
    page: 0,
    limit: 0,
  })

  async function getBooks()
  {
    try
    {
      const author = searchParam.get('author');
      const genre = searchParam.get('genre');
      console.log("author, genre", author, genre);
      let url = `/api/book/search-book?`;

      if(meta.limit)
      {
        url = url + `&limit=${meta.limit}`
      }
      else if(meta.page)
      {
        url = url + `&page=${meta.page}`
      }
      
      if(author)
      {
        url += `&author=${author}`
      }

      if(genre)
      {
        url += `&genre=${genre}`
      }
      console.log(url)
      const response = await axios.get(url)
      console.log(response);
      setAllBooks(response.data.data.books);
      // setSearchParams({page: response.data.data.meta.page, limit: response.data.data.meta.limit})
    }
    catch(e)
    {
      console.log(e);
      setError(true);
    }
    finally
    {
      setLoading(false);
    }
  }
  useEffect(()=>{
    getBooks();
  }, [])

  // if(!allBooks || allBooks.length === 0)
  // {
  //   return (
  //     <LoadingSkeleton>
  //       <Loading />
  //     </LoadingSkeleton>
  //   )
  // }
  if (loading) return(
    <LoadingSkeleton>
      <Loading />
    </LoadingSkeleton>
  );
  if (error){
    return (
      <LoadingSkeleton>
        <Error />
      </LoadingSkeleton>
    )
  }
  return (
    <div className="space-y-4">
      <div
        className="h-[80vh]"
      >
        <HeroHome />
      </div>
      <div className="flex justify-between items-center gap-5 w-full">
        <h1 className="text-xl">
          Checkout these books
        </h1>
        

      </div>

        <div
          className={` w-full grid grid-cols-6 gap-4`}
        >
          {
            allBooks && allBooks.length > 0 ?
            allBooks.map((item, i) => (
              <BookCard item={item} key={i} />
            ))
            : (
              <div className="col-span-5 flex justify-center items-center">
                <h5>
                  No books found in database.
                </h5>
              </div>
            )
          }
        </div>
    </div>
  )
}

export default SearchedBookResults
