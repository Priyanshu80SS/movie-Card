import React from "react";

function SearchBar({searchMovie,setsearchMovie,fetchMovieData}) {
  return (
    <div className="main flex justify-center py-5 px-4">
      <input
        type="text"
        placeholder="Search"
        value={searchMovie}
        onChange={(e) => setsearchMovie(e.target.value)}
        className="  rounded-l-lg w-80 bg-gray-200  placeholder-gray-400 px-2 py-2 outline-none border-2 border-gray-500 text-black"
      />
      <button
      onClick={fetchMovieData}
        className="bg-[#40407a] px-4 rounded-r-lg text-white shadow-md 
          border-b-2 border-r-2 border-t-2 border-gray-500"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
