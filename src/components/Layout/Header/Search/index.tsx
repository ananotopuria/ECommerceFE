import { CiSearch } from "react-icons/ci";


function Search() {
  return (
    <div className="relative w-full max-w-[20rem] lg:max-w-[30rem] xl:max-w-[40rem] border-4">
      <input
        type="text"
        placeholder="What are you looking for?"
        className="w-full border-none outline-none p-2 text-sm bg-gray-200 pr-10"
      />
      <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500  xl:right-4 ">
        <CiSearch />
      </button>
    </div>
  );
}

export default Search;
