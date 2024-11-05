import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import { categories } from "./../../../../public/data/categoriesData.json";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col justify-between gap-2 p-2 md:px-[4rem] md:py-[2rem] lg:px-[6rem] lg:py-[3rem] sm:w-[100vw] md:w-[100vw] lg: xl:w-[200] 2xl:w-[150rem] ">
        <div className="flex items-center gap-3 mb-4">
          <span className="block w-[1.3rem] h-[3rem] rounded-md bg-[#DB4444]"></span>
          <h5 className="text-base text-[#DB4444] font-bold">Categories</h5>
        </div>
        <div className="flex w-full items-center gap-6 mb-8 justify-between">
          <h2 className="text-3xl max-sm:text-xl font-bold">
            Browse By Category
          </h2>
          <div className="flex items-center gap-4">
            <button className="bg-secondary w-8 h-8 rounded-full transition-all hover:bg-[#DB4444] hover:text-primary flex items-center justify-center">
              <HiArrowLeft />
            </button>
            <button className="bg-secondary w-8 h-8 rounded-full transition-all hover:bg-[#DB4444] hover:text-primary flex items-center justify-center">
              <HiArrowRight />
            </button>
          </div>
        </div>
        <div className="flex w-full flex-wrap justify-between gap-6 overflow-x-hidden border-b-[1px] border-secondary pb-[13rem]">
          {categories.map((category, index) => {
            return (
              <Link
                className="flex flex-col gap-1 w-[14rem] h-[10rem] max-sm:w-[9rem] max-sm:h-[8rem] border-[3px] border-b-[0.1rem] rounded-lg p-4 items-center justify-center hover:bg-[#DB4444] transition-all hover:text-white"
                id="category-p"
                to="/"
                key={index}
              >
                <img
                  className="category-icon"
                  src={category.icon}
                  alt={category.alt}
                />
                <h3>{category.title}</h3>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
