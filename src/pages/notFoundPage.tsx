import { Link } from "react-router-dom";
import { NavLink as RouterNavLink } from "react-router-dom";

function NotFound() {
  return (
    <>
      <section className="flex justify-center">
        <div className="flex flex-col gap-2 p-2 md:px-[4rem] md:py-[2rem] lg:px-[6rem] lg:py-[3rem] sm:w-[100vw] md:w-[100vw] lg: xl:w-[200] 2xl:w-[150rem] border-b-[0.1rem]">
          <div className="mt-12 px-7">
            <RouterNavLink to="/" className="text-gray-500 no-underline mr-2">
              Home
            </RouterNavLink>
            <span>
              <b> / </b>
            </span>
            <RouterNavLink to="/*" className="text-black ">
              404 Error
            </RouterNavLink>
          </div>
          <div className="flex items-center gap-4 flex-col ">
            <h2 className="text-[2rem] md:text-[4rem] text-center font-bold capitalize mt-40">
              404 not found page
            </h2>
            <p className="text-center mb-20 mt-20">
              Your visited page not found. You may go home page.
            </p>
            <Link to={"/"} className="mt-20 mb-40 text-white bg-[#DB4444] p-4">
              back to home page
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFound;
