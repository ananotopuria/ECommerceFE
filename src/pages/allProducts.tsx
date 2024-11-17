import { useState, useEffect } from "react";
import StarRatings from "react-star-ratings";
import { HiOutlineHeart, HiOutlineEye } from "react-icons/hi";
import { Link } from "react-router-dom";
import { ItemSkeleton2 } from "../components/HomeComponents/ExploreOurProducts";
import { useCart } from "../hooks/useCart";

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

function AllProducts() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();

  async function getProducts() {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const response = await fetch("/data/AllProductsStore.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProducts(data.allProductsStore);
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
    <section className="flex justify-center mt-20">
      <div className="flex flex-col gap-2 p-2 md:px-[4rem] md:py-[2rem] lg:px-[6rem] lg:py-[3rem] sm:w-[100vw] md:w-[100vw] lg: xl:w-[200] 2xl:w-[150rem] border-b-[0.1rem]">
        <div className="flex items-center gap-3 mb-4">
          <span className="block w-[1.3rem] h-[3rem] rounded-md bg-[#DB4444]"></span>
          <h1 className="text-base text-[#DB4444] font-bold">Our Products</h1>
        </div>
        <div className="flex w-full gap-6 flex-wrap">
          {loading
            ? Array.from({ length: 28 }).map((_, index) => (
                <ItemSkeleton2 key={index} />
              ))
            : products.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col gap-1 w-[14rem] max-sm:w-[9rem]"
                >
                  <div className="group overflow-hidden flex flex-col items-center justify-center w-full h-[13rem] max-sm:h-[10rem] rounded-md p-4 bg-slate-50 relative">
                    <img
                      className="hover:scale-[1.2] transition-all"
                      src={product.img}
                      alt={product.alt}
                      loading="lazy"
                    />
                    {product.new && (
                      <span className="absolute w-max h-max px-2 rounded-md bg-green-cus left-3 top-2 text-sm text-white">
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
                    <button
                      className="w-full h-[2rem] absolute bottom-0 bg-black text-primary hidden group-hover:block max-sm:block"
                      onClick={() =>
                        addToCart({
                          ...product,
                          id: product.id.toString(),
                          quantity: 1,
                        })
                      }
                    >
                      Add To Cart
                    </button>
                  </div>
                  <h3 className="text-md font-medium">{product.name}</h3>
                  <div className="flex gap-2 max-sm:items-start max-sm: flex-col">
                    <span className="text-[#DB4444]">{`$${product.price}`}</span>
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
              ))}
        </div>
      </div>
    </section>
  );
}

export default AllProducts;
