import React, { useContext, useEffect, useState } from "react";
import ItemContext from "../../store/ItemContext";

const Nav = () => {
  const ctx = useContext(ItemContext);

  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const filtered =
      searchInput.toLowerCase() === ""
        ? ctx.arr
        : ctx.arr.filter((book) =>
            book.title.toLowerCase().includes(searchInput.toLowerCase())
          );

    ctx.addFiltered(filtered);
  }, [searchInput, ctx.arr]);

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="flex flex-col md:flex-row justify-around  bg-teal-700 p-3">
      <button
        className="font-medium text-2xl md:text-4xl text-white mt-3 md:mt-3"
        onClick={() => ctx.bookshelfToggle()}
      >
        Bookshelf
      </button>
      {!ctx.toggle && (
        <div className="mt-3 md:mt-0">
          <h2 className=" text-white font-medium text-lg">
            search by book name
          </h2>
          <input
            type="text"
            id="search"
            className="ps-2 p-1 rounded-md self-center"
            value={searchInput}
            onChange={handleSearchChange}
          />
        </div>
      )}

      <div className="mt-3 md:mt-3">
        <button
          className="bg-green-500 p-1 md:p-2 rounded-xl text-white font-medium text-sm md:text-base"
          onClick={() => ctx.toggleHandler()}
        >
          my bookshelf
        </button>
      </div>
    </div>
  );
};

export default Nav;
