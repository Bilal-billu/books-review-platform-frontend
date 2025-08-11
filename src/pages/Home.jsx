import { useState } from "react"
import BookCard from "../components/reusable/BookCard"
import { useEffect } from "react"
import axios from "axios"
import { useSearchParams } from "react-router-dom";
import HeroHome from "../components/hero/HeroHome";
import { Loading } from "../components/reusable/loading/Loading";
import LoadingSkeleton from "../components/reusable/loading/LoadingSkeleton";
import Error from "../components/reusable/error/Error";
import { Icon } from "@iconify/react/dist/iconify.js";

const Home = () => {
  const [allBooks, setAllBooks] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchText, setSearchText] = useState('rich');
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
      let url = `/api/book/?`;

      if(meta.limit)
      {
        url = url + `&limit=${meta.limit}`
      }
      else if(meta.page)
      {
        url = url + `&page=${meta.page}`
      }
      if(searchText)
      {
        url += `&q=${searchText}` 
      }
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
  }, [searchText])

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
        <div className="relative block border rounded-lg overflow-hidden">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <Icon icon="uil:search" className= {` w-4 h-4`} />
            <span className="sr-only">Search icon</span>
          </div>
          <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm rounded-lg"
          placeholder="Search for title, genre etc..."
            value={searchText}
            onChange={(e)=>{
              setSearchText(e.target.value);
            }}
          />
        </div>

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

export default Home
