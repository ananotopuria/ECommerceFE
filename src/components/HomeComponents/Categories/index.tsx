import { MdNavigateNext } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Categories() {
  return (
    <>
      <div className="">
        <nav className="flex flex-col sm:text-xl xl:text-2xl gap-6 pr-[6rem] border-r-[0.1rem] max-sm:pr-[1rem]">
          <NavLink
            className="flex items-center pr-2 justify-between transition-all hover:text-[#DB4444] hover:underline mt-[4rem]"
            to="/"
          >
            Woman&#39;s Fashion <MdNavigateNext />
          </NavLink>
          <NavLink
            className="flex items-center pr-2 justify-between transition-all hover:text-[#DB4444] hover:underline"
            to="/"
          >
            Men&#39;s Fashion <MdNavigateNext />
          </NavLink>
          <NavLink
            className="transition-all hover:text-[#DB4444] hover:underline"
            to="/"
          >
            Electronics
          </NavLink>
          <NavLink
            className="transition-all hover:text-[#DB4444] hover:underline"
            to="/"
          >
            Home & Lifestyle
          </NavLink>
          <NavLink
            className="transition-all hover:text-[#DB4444] hover:underline"
            to="/"
          >
            Medicine
          </NavLink>
          <NavLink
            className="transition-all hover:text-[#DB4444] hover:underline"
            to="/"
          >
            Sports & Outdoor
          </NavLink>
          <NavLink
            className="transition-all hover:text-[#DB4444] hover:underline"
            to="/"
          >
            Baby&#39;s & Toys
          </NavLink>
          <NavLink
            className="transition-all hover:text-[#DB4444] hover:underline"
            to="/"
          >
            Groceries & Pets
          </NavLink>
          <NavLink
            className="transition-all hover:text-[#DB4444] hover:underline"
            to="/"
          >
            Health & Beauty
          </NavLink>
        </nav>
      </div>
    </>
  );
}
export default Categories;
