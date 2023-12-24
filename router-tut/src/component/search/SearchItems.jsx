import { IconButton } from "@mui/material";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { searchItems } from "../redux_components/slices/productSlice";

const SearchItems = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="w-48 sm:w-72 flex justify-between items-center rounded-lg mr-10 ">
      <div className="w-full bg-clip-padding rounded-l-lg">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyUp={() => dispatch(searchItems(search))}
          className="py-1 sm:py-1.5 px-4 w-full h-full text-black outline-none rounded-l-lg"
        />
      </div>
      <div className="border-b bg-yellow-500 bg-clip-padding rounded-r-md">
        <IconButton>
          <FaSearch className="text-xs sm:text-sm" />
        </IconButton>
      </div>
    </div>
  );
};

export default SearchItems;
