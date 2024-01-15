import React, { useContext, useState } from "react";
import { ApiData } from "../../App";
import Pagination from "./Pagination";
import Info from "./Info";


function MarketCap() {
  const newData = useContext(ApiData);
  const [filteredList, setFilteredList] = useState(newData);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [currentPage, setPage] = useState(1);
  const [selectedCryptocurrency, setSelectedCryptocurrency] = useState(null);

  const lastIndex = currentPage * 10;
  const firstIndex = lastIndex - 10;

  const records = newData.slice(firstIndex, lastIndex);

  const nPage = Math.ceil(newData.length / 10);

  const numbers = [...Array(nPage + 1).keys()].slice(1);


  

  const filterBySearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const updatedList = newData.filter((item) =>
      item.name.toLowerCase().includes(query)
    );

    setFilteredList(updatedList);

    // Generate suggestions based on filtered data
    const suggestionList = newData
      .filter((items) => items.name.toLowerCase().includes(query))
      .map((items) => (
        <div key={items.id}>
          <p
            className="cursor-pointer text-blue-500"
            onClick={() => {
              setSelectedCryptocurrency(items);
              
              setSuggestions([]);
            }}
          >
            {items.name}
          </p>
        </div>
      ));

    setSuggestions(suggestionList);
  };


  const handleCryptocurrencyClick = (cryptocurrency) => {
    setSelectedCryptocurrency(cryptocurrency);
  };

  return (
    <>
      <div className="xl:mx-24 mt-10">
        <h1 className="text-xl text-center font-bold pb-2">Currency Table</h1>
        <form>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
              
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Currency"
              onChange={filterBySearch}
              value={searchQuery}
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>

        {/* Display search suggestions only if searchQuery is not empty */}
        {searchQuery && (
          <div className="mt-2">
            <ul className="border-t border-gray-300">
              {suggestions.map((suggestion, index) => (
                <li key={index} className="p-2 mx-3">
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Display detailed information for the selected cryptocurrency */}
      {selectedCryptocurrency && (
        <Info cryptocurrency={selectedCryptocurrency} />
      )}

      <Pagination handleCryptocurrencyClick={handleCryptocurrencyClick}/>
    </>
  );
}

export default MarketCap;
