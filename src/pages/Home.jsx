import BookCard from "../components/reusable/BookCard"

const Home = () => {
  return (
    <div>
        <div
          className={` w-full grid grid-cols-6 gap-4`}
        >
          {
            dummyBooks.map((item, i) => (
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