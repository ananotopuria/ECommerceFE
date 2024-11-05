import {
  HiArrowRight,
  HiArrowLeft,
  HiOutlineHeart,
  HiOutlineEye,
} from "react-icons/hi";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { useState, useEffect } from "react";

type Product = {
  id: number;
  img: string;
  alt: string;
  new: boolean;
  name: string;
  price: number;
  stars: number;
  "times rated": number;
};

export function ItemSkeleton2() {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-[14rem] h-[13rem] max-sm:h-[10rem] max-sm:w-[9rem] rounded-md bg-gray-200 animate-pulse" />
      <div className="w-[10rem] h-[1rem] max-sm:w-[8rem] rounded-md bg-gray-200 animate-pulse" />
      <div className="w-[11rem] h-[1rem] max-sm:w-[9rem] rounded-md bg-gray-200 animate-pulse" />
    </div>
  );
}

export default function ExploreOurProducts() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);

  async function getProducts() {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const response = await fetch("/data/exploreOurProducts.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProducts(data.exploreOurProducts);
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
      <div className="flex flex-col gap-2 p-2 md:px-[4rem] md:py-[2rem] lg:px-[6rem] lg:py-[3rem] sm:w-[100vw] md:w-[100vw] lg: xl:w-[200] 2xl:w-[150rem] border-b-[0.1rem]">
        <div className="flex items-center gap-3 mb-4">
          <span className="block w-[1.3rem] h-[3rem] rounded-md bg-[#DB4444]"></span>
          <h5 className="text-base text-[#Db4444] font-bold">Our Products</h5>
        </div>
        <div className="flex w-full items-center gap-6 mb-8 justify-between">
          <h2 className="text-3xl max-sm:text-xl font-bold">
            Explore Our Products
          </h2>
          <div className="flex items-center gap-4">
            <button className="bg-slate-50 w-8 h-8 rounded-full transition-all hover:bg-[#Db4444] hover:text-[#fff] flex items-center justify-center">
              <HiArrowLeft />
            </button>
            <button className="bg-slate-50 w-8 h-8 rounded-full transition-all hover:bg-[#Db4444] hover:text-[#fff] flex items-center justify-center">
              <HiArrowRight />
            </button>
          </div>
        </div>
        <div className="flex w-full gap-6 flex-wrap">
          {loading ? (
            Array.from({ length: 12 }).map((_, index) => (
              <ItemSkeleton2 key={index} />
            ))
          ) : products.length > 0 ? (
            products.map((product) => (
              <div
                className="flex flex-col gap-1 w-[14rem] max-sm:w-[9rem]"
                key={product.id}
              >
                <div className="group overflow-hidden flex flex-col items-center justify-center w-full h-[13rem] max-sm:h-[10rem] rounded-md p-4 bg-slate-50 relative">
                  <img
                    className="hover:scale-[1.2] transition-all"
                    src={product.img}
                    alt={product.alt}
                  />
                  {product.new && (
                    <span className="absolute w-max h-max px-2 rounded-md left-3 top-2 text-sm text-[#fff] bg-[#2CFF05]">
                      New
                    </span>
                  )}
                  <div className="absolute top-2 right-3 flex flex-col gap-4">
                    <button className="bg-white w-6 h-6 rounded-full flex items-center justify-center p-[1px]">
                      <HiOutlineHeart className="w-full h-full" />
                    </button>
                    <Link
                      to={`/product/${product.id}`}
                      className="bg-white w-6 h-6 rounded-full flex items-center justify-center p-[1px]"
                    >
                      <HiOutlineEye className="w-full h-full" />
                    </Link>
                  </div>
                  <button className="w-full h-[2rem] absolute bottom-0 bg-black text-[#fff] hidden max-lg:block group-hover:block">
                    Add To Cart
                  </button>
                </div>
                <h3 className="text-md font-medium">{product.name}</h3>
                <div className="flex gap-2 max-sm:items-start max-sm: flex-col">
                  <span className="text-[#Db4444]">{`$${product.price}`}</span>
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
              </div>
            ))
          ) : (
            <p>No products available.</p>
          )}
        </div>
        <div className="flex mt-8 items-center justify-center w-full">
          <Link
            className="px-4 py-2 rounded-md bg-[#Db4444] w-max text-[#fff] hover:translate-x-2 hover:-translate-y-1 transition-all"
            to="/all-products"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
