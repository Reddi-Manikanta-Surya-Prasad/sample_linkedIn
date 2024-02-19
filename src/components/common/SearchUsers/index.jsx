import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./index.scss";
import { searchFilter, searchItem } from "../../../utils/user/search";

export default function SearchUsers({ setIsSearch, setSearchInput }) {

  const handleSearch = async (value) =>{
    const searchData = await searchItem(value)
    console.log(searchData);
  }
  const handleFilter = async () =>{
    const searchFilter = await searchFilter()
    console.log(searchFilter);
  }
  return (
    <div className="search-users">
      <input
        placeholder="Search Users.."
        onChange={(event) => handleSearch(event.target.value)}
      />

      <AiOutlineCloseCircle
        className="close-icon"
        size={20}
        onClick={() => {
          setIsSearch(false);
          handleSearch("");
        }}
      />
    </div>
  );
}
