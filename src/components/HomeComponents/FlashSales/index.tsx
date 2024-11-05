import {
  HiArrowRight,
  HiArrowLeft,
  HiOutlineHeart,
  HiOutlineEye,
} from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import StarRatings from "react-star-ratings";

function ItemSkeleton() {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-[14rem] h-[13rem] max-sm:w-[9rem] max-sm:h-[10rem] rounded-md bg-gray-200 animate-pulse" />
      <div className="w-[10rem] h-[1rem] max-sm:w-[8rem] rounded-md bg-gray-200 animate-pulse" />
      <div className="w-[5rem] h-[1rem] rounded-md bg-gray-200 animate-pulse" />
      <div className="w-[9rem] h-[1rem] max-sm:w-[7rem] rounded-md bg-gray-200 animate-pulse" />
    </div>
  );
}

interface Product {
  id: string;
  img: string;
  alt: string;
  name: string;
  price: number;
  "discount-price": number;
  "discount-percentage": string;
  stars: number;
  "times rated": number;
}

interface TimeLeft {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

export default function FlashSales() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [targetDate] = useState(() => {
    const initialDate = new Date();
    initialDate.setDate(initialDate.getDate() + 6);
    initialDate.setSeconds(initialDate.getSeconds() - 45);
    return initialDate;
  });

  const calculateTimeLeft = (): TimeLeft => {
    const difference = +targetDate - +new Date();
    let timeLeft: TimeLeft = {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24))
          .toString()
          .padStart(2, "0"),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24)
          .toString()
          .padStart(2, "0"),
        minutes: Math.floor((difference / 1000 / 60) % 60)
          .toString()
          .padStart(2, "0"),
        seconds: Math.floor((difference / 1000) % 60)
          .toString()
          .padStart(2, "0"),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  async function getProducts() {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const response = await fetch("../data/flashSalesProducts.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProducts(data.flashSalesProducts);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="flex justify-center mt-40">
      <div className="flex flex-col gap-2 p-2 md:px-[4rem] md:py-[2rem] lg:px-[6rem] lg:py-[3rem] sm:w-[100vw] md:w-[100vw] lg: xl:w-[200] 2xl:w-[150rem] ">
        <div className="flex justify-start items-center gap-3 mb-4">
          <span className="block w-[1.3rem] h-[3rem] rounded-md bg-[#DB4444]"></span>
          <h5 className="font-bold text-[#DB4444]">Today’s</h5>
        </div>
        <div className="flex w-full max-sm:h-[5.5rem] items-center max-sm:items-start gap-6 mb-8 justify-between relative">
          <h2 className="text-3xl font-bold max-sm:text-xl">Flash Sales</h2>
          <div className="flex text-base max-sm:text-sm gap-4 max-sm:gap-2 items-end max-sm:absolute max-sm:bottom-0 max-sm:w-full max-sm:mt-4 justify-center ">
            <p className="flex flex-col items-center">
              Days{" "}
              <span className="text-2xl max-sm:text-lg font-bold">
                {timeLeft.days}
              </span>
            </p>
            <span className="text-2xl font-bold text-action">:</span>
            <p className="flex flex-col items-center">
              Hours{" "}
              <span className="text-2xl max-sm:text-lg font-bold">
                {timeLeft.hours}
              </span>
            </p>
            <span className="text-2xl font-bold text-action">:</span>
            <p className="flex flex-col items-center">
              Minutes
              <span className="text-2xl max-sm:text-lg font-bold">
                {timeLeft.minutes}
              </span>
            </p>
            <span className="text-2xl font-bold text-action">:</span>
            <p className="flex flex-col items-center">
              Seconds
              <span className="text-2xl max-sm:text-lg font-bold">
                {timeLeft.seconds}
              </span>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-secondary w-8 h-8 rounded-full transition-all hover:bg-action hover:text-primary flex items-center justify-center">
              <HiArrowLeft />
            </button>
            <button className="bg-secondary w-8 h-8 rounded-full transition-all hover:bg-action hover:text-primary flex items-center justify-center">
              <HiArrowRight />
            </button>
          </div>
        </div>
        <div className="flex w-full flex-wrap justify-between gap-10 overflow-x-hidden ">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <ItemSkeleton key={index} />
              ))
            : products.map((product) => (
                <div
                  className="flex flex-col gap-1 w-[14rem] max-sm:w-[9rem]"
                  key={product.id}
                >
                  <div className="group flex flex-col items-center justify-center w-full h-[13rem] max-sm:h-[10rem] rounded-md p-4 bg-secondary relative transition-all overflow-hidden">
                    <img
                      className="hover:scale-[1.2] transition-all"
                      src={product.img}
                      alt={product.alt}
                    />
                    <span className="absolute w-max h-max px-2 rounded-md bg-accent left-3 top-2 text-sm text-primary">
                      {product["discount-percentage"]}
                    </span>
                    <div className="absolute top-2 right-3 flex flex-col gap-4">
                      <button
                        className="bg-white w-6 h-6 rounded-full flex items-center justify-center p-[1px]"
                      >
                        <HiOutlineHeart className="w-full h-full" />
                      </button>
                      <Link
                        to={`/product/${product.id}`}
                        className="bg-white w-6 h-6 rounded-full flex items-center justify-center p-[1px]"
                      >
                        <HiOutlineEye className="w-full h-full" />
                      </Link>
                    </div>
                    <button
                      className="w-full h-[2rem] absolute bottom-0 bg-black text-white text-primary hidden max-lg:block group-hover:block"
                    >
                      Add To Cart
                    </button>
                  </div>
                  <h3 className="text-md font-medium">{product.name}</h3>
                  <div className="flex gap-2 items-center">
                    <span className="text-action">{`$${product["discount-price"]}`}</span>
                    <span className="line-through">{`$${product.price}`}</span>
                  </div>
                  <div>
                    <StarRatings
                      rating={product.stars}
                      starDimension="20px"
                      starSpacing="2px"
                      starRatedColor="orange"
                    />
                    <span>({product["times rated"]})</span>
                  </div>
                </div>
              ))}
        </div>
        <div className="flex mt-8 items-center justify-center w-full">
          <Link
            className="px-4 py-2 rounded-md bg-action w-max text-primary hover:translate-x-2 hover:-translate-y-1 transition-all"
            to="/all-products"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
