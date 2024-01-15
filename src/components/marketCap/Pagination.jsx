import { useContext, useState } from "react";
import { ApiData } from "../../App";
import { NavLink } from "react-router-dom";


export default function Pagination({ handleCryptocurrencyClick }) {
  const data = useContext(ApiData);

  const [currentPage, setCurrentPage] = useState(1);
  
  const itemPerPage = 10;
  const lastItemIndex = currentPage * itemPerPage;
  const firstItemIndex = lastItemIndex - itemPerPage;
  const thisPageItems = data.slice(firstItemIndex, lastItemIndex);

  const pages = Math.ceil(data.length / itemPerPage);
  const numbers = [...Array(pages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage < pages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prePage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const changeCurrentpage = (page) => {
    setCurrentPage(page);
  };

 

  return (
    <>
      <div className="xl:mx-24 mt-4">
        <table className="w-full font-bold ">
          <thead className="">
            <tr className="">
              <td>Rank</td>
              <td>Image</td>
              <td>Name</td>
              <td>Price</td>

              <td>24H</td>
            </tr>
          </thead>

          <tbody className="">
            {thisPageItems.map((items,id) => (
              <tr key={items.id} className="font-semibold border border-slate-300 ">
                <td className="p-2">{items.market_cap_rank}</td>
                <td>
                  <img
                    src={items.image}
                    alt={items.name}
                    style={{ height: 40, width: 40 }}
                  />
                </td>
                <td>
                  <div>
                  
                    
                      {items.name}
                    
                    <p className="text-xs text-gray-500">{`Mkt.cap $${items.market_cap}`}</p>
                  </div>
                </td>
                <td>{`$${items.current_price} ${items.symbol.toUpperCase()}`}</td>

                <td>
                  {
                    <>
                      {items.price_change_percentage_24h < 0 ? (
                        <p className="text-red-500 font-bold ">
                          <i className="bi bi-caret-down-square"></i>{" "}
                          {`${items.price_change_percentage_24h.toFixed(2)}%`}
                          {""}
                        </p>
                      ) : (
                        <p className="text-green-500 font-bold">
                          <i className="bi bi-caret-up-square"></i>{" "}
                          {`${items.price_change_percentage_24h.toFixed(2)}%`}
                          {""}
                        </p>
                      )}
                    </>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-center border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        
        <div className="">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">{currentPage}</span> to{" "}
              <span className="font-medium">{pages}</span> of{" "}
              <span className="font-medium">{data.length}</span> results
            </p>
          </div>
          <div className="">
            <nav
              className="isolate inline-flex  -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <NavLink
                to="/"
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only" onClick={prePage}>Previous</span>
                <i
                  className="bi bi-chevron-left"
                  onClick={prePage}
                  disabled={currentPage === 1}
                ></i>
              </NavLink>
             
              {numbers.map((item, index) => (
                <div
                  key={item.index}
                  className={`pt-2 border ${
                    currentPage === index + 1 ? "active bg-blue-400 " : ""
                  }`}
                >
                  <button
                    key={index}
                    onClick={() => changeCurrentpage(index + 1)}
                    className="mx-3"
                  >
                    {index + 1}
                  </button>
                </div>
              ))}
              <NavLink
                to="/"
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only" onClick={nextPage}>Next</span>
                <i
                  className="bi bi-chevron-right"
                  onClick={nextPage}
                  disabled={currentPage === pages}
                ></i>
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
