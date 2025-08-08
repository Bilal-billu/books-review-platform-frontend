import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='h-full'
      modules={[Navigation, Pagination, Scrollbar, Autoplay ]}
      navigation = {true}
      pagination={{ clickable: true }}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      loop = {true}
    >
      {
        slidesList.map((item, i) =>(
            <SwiperSlide className='h-full' key={i}>
                <div>
                    <div className=" rounded-lg h-[70vh] shadow-lg overflow-hidden flex justify-center items-center px-2 py-10 bg-foreground-muted">
                      <img 
                        src={item.image} 
                        // alt="Sample Image" 
                        class="object-cover transition-transform duration-300 hover:scale-105 h-auto w-auto bg-transparent"
                      />
                    </div>

                    <div className='mt-4'>
                        <h5 className='text-center text-3xl text-text-500'>{item.text}</h5>
                    </div>

                </div>
            </SwiperSlide>
        ) )
      }
      
    </Swiper>
  );
};

const slidesList = [
    {
        image: `https://picturebookperfect123.com/wp-content/uploads/2022/12/22-christmas-books-for-2022-1.jpg`,
        text: `Discount on Christmas Books`,
    },
    {
        image: `https://picturebookperfect123.com/wp-content/uploads/2022/12/22-christmas-books-for-2022-1.jpg`,
        text: `Discount on Christmas Books`,
    },
    {
        image: `https://picturebookperfect123.com/wp-content/uploads/2022/12/22-christmas-books-for-2022-1.jpg`,
        text: `Discount on Christmas Books`,
    },
    {
        image: `https://picturebookperfect123.com/wp-content/uploads/2022/12/22-christmas-books-for-2022-1.jpg`,
        text: `Discount on Christmas Books`,
    },
    {
        image: `https://picturebookperfect123.com/wp-content/uploads/2022/12/22-christmas-books-for-2022-1.jpg`,
        text: `Discount on Christmas Books`,
    },
    {
        image: `https://picturebookperfect123.com/wp-content/uploads/2022/12/22-christmas-books-for-2022-1.jpg`,
        text: `Discount on Christmas Books`,
    },

]

