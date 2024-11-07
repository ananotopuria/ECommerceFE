import Services from "../Common/Services";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import iconShopping from "./../../../public/img/Icon-Shoppingbag.png";
import iconShop from "./../../../public/img/icon_shop.png";
import iconSale from "./../../../public/img/Icon-Sale.png";
import iconMoneyBag from "./../../../public/img/Icon-Moneybag.png";
import { Autoplay, Pagination } from "swiper/modules";
import peopleData from "./../../../public/data/employeeData.json";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function AboutComponents() {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col gap-2 p-2 md:px-[4rem] md:py-[2rem] lg:px-[6rem] lg:py-[3rem] sm:w-[100vw] md:w-[100vw] lg: xl:w-[200] 2xl:w-[150rem] border-b-[0.1rem]">
          <div className="mt-12 px-7">
            <RouterNavLink to="/" className="text-gray-500 no-underline mr-2">
              Home
            </RouterNavLink>
            <span>
              <b> / </b>
            </span>
            <RouterNavLink to="/about" className="text-black no-underline">
              About
            </RouterNavLink>
          </div>
          <div className="mt-10 w-[80vw]">
            <div className="flex gap-60">
              <div className="flex flex-col justify-center w-[40%] gap-20">
                <h1 className="text-8xl mb-4">Our Story</h1>
                <p className="mb-4 text-2xl">
                  Launched in 2015, Exclusive is South Asia's premier online
                  shopping marketplace with an active presence in Bangladesh.
                  Supported by a wide range of tailored marketing, data, and
                  service solutions, Exclusive has 10,500 sellers and 300 brands
                  and serves 3 million customers across the region.
                </p>
                <p className="mb-4 text-2xl">
                  Exclusive has more than 1 million products to offer, growing
                  at a very fast rate. Exclusive offers a diverse assortment in
                  categories ranging from customer.
                </p>
              </div>
              <div>
                <img
                  src="/img/two-ladies.png"
                  alt="Two Ladies"
                  className="w-[80rem] h-auto"
                />
              </div>
            </div>
          </div>
          <section className="px-[.55rem] md:px-0 mt-[.7rem] mb-[3rem] md:mb-[5rem] md:mt-[2.4rem] md:w-[90%] md:mx-auto grid grid-cols-2 md:grid-cols-4 md:gap-[2.5rem] gap-[.4rem]">
            <div className="flex flex-col items-center justify-center gap-[.4rem] border-[.1rem] rounded-[.3rem] px-[1.2rem] py-[1.3rem]">
              <div className="bg-secondary-500 px-[.7rem] py-[.7rem] rounded-[1.8rem]">
                <div className="bg-red-400 px-[.65rem] py-[.65rem] rounded-[1.4rem]">
                  <img className="w-[1.4rem]" src={iconShop} />
                </div>
              </div>
              <p className="text-black-600 md:text-[2rem] font-bold md:leading-[1.875rem] md:tracking-[0.08rem]">
                10.5k
              </p>
              <p className="text-black-600 text-[.74rem] md:text-[1rem] font-normal md:leading-[1.5rem]">
                Active sellers on our site
              </p>
            </div>

            <div className="flex flex-col items-center justify-center border-[.1rem] gap-[.4rem] rounded-[.3rem] px-[1.2rem] py-[1.3rem]">
              <div className="bg-secondary-500 px-[.7rem] py-[.7rem] rounded-[1.8rem] ">
                <div className="bg-red-400 px-[.65rem] py-[.65rem] rounded-[1.4rem]">
                  <img className="w-[1.4rem] filter-image" src={iconSale} />
                </div>
              </div>
              <p className="text-black-600 md:text-[2rem] font-bold md:leading-[1.875rem]  md:tracking-[0.08rem]">
                33k
              </p>
              <p className="text-black-600 text-[.74rem] md:text-[1rem] font-normal  md:leading-[1.5rem]">
                Monthly product sales
              </p>
            </div>

            <div className="flex flex-col items-center justify-center border-[.1rem] gap-[.4rem]  rounded-[.3rem] px-[1.2rem] py-[1.3rem]">
              <div className="bg-secondary-500 px-[.7rem] py-[.7rem] rounded-[1.8rem]">
                <div className="bg-red-400 px-[.65rem] py-[.65rem] rounded-[1.4rem]">
                  <img className="w-[1.4rem]" src={iconShopping} />
                </div>
              </div>
              <p className="text-black-600 md:text-[2rem] font-bold md:leading-[1.875rem] md:tracking-[0.08rem]">
                45.5k
              </p>
              <p className="text-black-600 text-[.74rem] md:text-[1rem] font-normal md:leading-[1.5rem]">
                Active customers on our site
              </p>
            </div>

            <div className="flex flex-col items-center justify-center border-[.1rem] gap-[.4rem] rounded-[.3rem] px-[1.2rem] py-[1.3rem]">
              <div className="bg-secondary-500 px-[.74rem] py-[.7rem] rounded-[1.8rem]">
                <div className="bg-red-400 px-[.65rem] py-[.65rem] rounded-[1.4rem]">
                  <img className="w-[1.4rem]" src={iconMoneyBag} />
                </div>
              </div>
              <p className="text-black-600 md:text-[2rem] font-bold md:leading-[1.875rem] md:tracking-[0.08rem]">
                25k
              </p>
              <p className="text-black-600 text-[.74rem] md:text-[1rem] font-normal md:leading-[1.5rem]">
                Annual gross sale on our site
              </p>
            </div>
          </section>
          <section>
            <div className="container">
              <Swiper
                loop={true}
                breakpoints={{
                  700: { slidesPerView: 1, spaceBetween: 15 },
                  768: { slidesPerView: 2, spaceBetween: 20 },
                  1024: { slidesPerView: 3, spaceBetween: 25 },
                  1280: { slidesPerView: 3, spaceBetween: 30 },
                }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                modules={[Pagination, Autoplay]}
              >
                {peopleData.slice(0, 3).map((person) => (
                  <SwiperSlide key={person.id}>
                    <div className="space-y-6 mb-20">
                      <div className="flex justify-center items-end bg-light rounded w-full h-[350px] pt-6">
                        <img
                          src={person.image}
                          alt={person.name}
                          loading="lazy"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h2 className="text-2xl font-medium font-inter tracking-wider">
                          {person.name}
                        </h2>
                        <p>{person.role}</p>
                        <div className="flex gap-4 mt-4">
                          <a href="#">
                            <FaTwitter />
                          </a>
                          <a href="#">
                            <FaInstagram />
                          </a>
                          <a href="#">
                            <FaLinkedinIn />
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>
          <Services />
        </div>
      </div>
    </>
  );
}

export default AboutComponents;
