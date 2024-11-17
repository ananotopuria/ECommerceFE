// import SupHeader from "./SupHeader";
// import logo from "./../../../assets/Exclusive.png";
// import Navigation from "./Navigation";
// import Search from "./Search";
// import { IoIosHeartEmpty } from "react-icons/io";
// import { IoCartOutline } from "react-icons/io5";

// function Header() {
//   return (
//     <>
//       <SupHeader />
//       <div className="flex justify-center border-b-[0.1rem]">
//         <header className="flex items-center justify-between gap-2 p-2 md:px-[4rem] md:py-[2rem] lg:px-[6rem] lg:py-[3rem] sm:w-[100vw] md:w-[100vw] lg: xl:w-[200] 2xl:w-[150rem] ">
//           <img
//             className="w-[10rem] h-[1.5rem] order-1 md:w-[12rem] md:h-[2rem] lg:w-[15rem] lg:h-[2.5rem]"
//             src={logo}
//             alt="logo"
//           />
//           <div className="order-4 lg:order-2">
//             <Navigation />
//           </div>
//           <div className="order-2 w-[20rem] xl:w-[40rem]">
//             <Search />
//           </div>
//           <div className="order-3 flex justify-center items-center p-[2rem] text-2xl">
//             <IoIosHeartEmpty />
//           </div>
//           <div className="order-3 flex justify-center items-center p-[2rem] text-2xl">
//             <IoCartOutline />
//           </div>
//         </header>
//       </div>
//     </>
//   );
// }

// export default Header;

import SupHeader from "./SupHeader";
import logo from "./../../../assets/Exclusive.png";
import Navigation from "./Navigation";
import Search from "./Search";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "../../../hooks/useCart"; // Adjust the path as needed

function Header() {
  const { cartItemsCount } = useCart(); // Get the cart count from the CartContext

  return (
    <>
      <SupHeader />
      <div className="flex justify-center border-b-[0.1rem]">
        <header className="flex items-center justify-between gap-2 p-2 md:px-[4rem] md:py-[2rem] lg:px-[6rem] lg:py-[3rem] sm:w-[100vw] md:w-[100vw] lg:w-auto xl:w-[200rem] 2xl:w-[150rem]">
          {/* Logo */}
          <img
            className="w-[10rem] h-[1.5rem] order-1 md:w-[12rem] md:h-[2rem] lg:w-[15rem] lg:h-[2.5rem]"
            src={logo}
            alt="logo"
          />

          {/* Navigation */}
          <div className="order-4 lg:order-2">
            <Navigation />
          </div>

          {/* Search */}
          <div className="order-2 w-[20rem] xl:w-[40rem]">
            <Search />
          </div>

          {/* Wishlist Icon */}
          <div className="order-3 flex justify-center items-center p-[2rem] text-2xl">
            <IoIosHeartEmpty />
          </div>

          {/* Cart Icon with Count */}
          <div className="order-3 flex justify-center items-center p-[2rem] text-2xl relative">
            <IoCartOutline />
            {cartItemsCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
