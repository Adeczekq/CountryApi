import { FaSearch } from "react-icons/fa";
function Search({ input, inputHandler }) {
  return (
    <div className="relative">
      <FaSearch className="absolute left-2 top-1/2 -translate-y-[65%]" />
      <input
        value={input}
        onChange={inputHandler}
        type="text"
        placeholder="Type here"
        className="input w-full max-w-xs pl-8"
      />
    </div>
  );
}

export default Search;
