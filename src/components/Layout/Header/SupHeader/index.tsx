import { IoIosArrowDown } from "react-icons/io";

function SupHeader() {
  return (
    <div className="bg-[#000] text-[#fff] flex justify-center gap-[1rem] p-6 sm:text-[3rem]">
      <p className="text-center text-[1rem] sm:text-[1.2rem] lg:ml-[20rem]">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        <a className="border-b-2" href="#">
          {" "}
          ShopNow
        </a>
      </p>
      <button className="flex justify-center items-center text-[1rem] sm:text-[1.2rem] lg:ml-[20rem]">
        <span>English</span> <IoIosArrowDown />
      </button>
    </div>
  );
}

export default SupHeader;
