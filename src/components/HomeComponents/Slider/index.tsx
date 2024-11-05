import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";

interface SliderDataItem {
  logo?: string;
  product: string;
  discount: string;
  img: string;
  alt: string;
  "quick-link": string;
}

interface SliderProps {
  data: {
    heroCarouselData: SliderDataItem[];
  };
}

const Slider: React.FC<SliderProps> = ({ data }) => {
  const { heroCarouselData } = data;

  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 10000 }}
      pagination={{ clickable: true }}
      className="flex gap-2 w-full h-auto max-sm:h-[20rem] max-sm:w-[20rem] bg-black text-white max-sm:justify-center"
    >
      {heroCarouselData.map((item, index) => (
        <SwiperSlide
          key={index}
          className="flex max-sm:flex-col max-sm:justify-center items-center md:flex-row gap-2"
        >
          <div className="w-1/2 h-full flex flex-col text-center justify-center items-center gap-5 p-4">
            <div className="flex flex-col lg:gap-10 items-center justify-center">
              {item.logo && (
                <img
                  className="w-[3rem] h-[3rem] max-sm:w-[2rem] max-sm:h-[2rem]"
                  src={item.logo}
                  alt={item.product}
                />
              )}
              <h3 className="text-2xl lg:text-4xl max-lg:text-xl max-sm:text-sm max-sm:leading-4">
                {item.product}
              </h3>
              <h2 className="text-4xl max-lg:text-2xl max-sm:text-[0.8rem] max-sm:leading-4 font-bold">
                {item.discount}
              </h2>
              <Link
                className="flex items-center gap-3 max-sm:text-[0.8rem] hover:text-action hover:underline transition-all w-max"
                to={item["quick-link"]}
              >
                Shop Now <HiArrowRight />
              </Link>
            </div>
          </div>
          <img className="w-1/2 h-full" src={item.img} alt={item.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
