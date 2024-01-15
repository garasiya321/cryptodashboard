import React, { useSelector,useDispatch} from "react-redux";

import Trans from "./Trans";
import Chart from "../../../components/Chart";
import { withdraw,deposit } from "../../../components/Redux/actions/action";




function Price() {

  

  const accountBalance = useSelector((state) => state.accountBalance);
  
  const dispatch =useDispatch()
    

    const amountBuy = ()=>{
        dispatch(withdraw(20))
    }
    const amountSell = ()=>{
        dispatch(deposit(10))
    }



    

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 xl:mx-28 mt-5 ">
        {/* <!-- Box 1 --> */}
        <div className="bg-white rounded-md shadow-md">
          <div className="flex justify-between text-sm bg-white p-1 rounded">
            <div>
              <p className="">Wallet Balance</p>
              <p className="font-bold">
                {"$" + Number(accountBalance / 2812931.58).toFixed(8)}{" "}
                <span className="text-green-600 text-xs">
                  <i className="bi bi-arrow-up-right"></i>22%
                </span>
              </p>
            </div>

         

            <div className="flex p-2">
              <button
                className="bg-green-500 mx-3 rounded h-9 p-1 text-white"
                type="button"
                onClick={amountBuy}
              >
                <i className="bi bi-plus-circle"></i>Buy
              </button>
              <button
                className="bg-red-500 mx-2 rounded h-9 p-1 text-white"
                type="button"
                onClick={amountSell}
              >
                <i className="bi bi-dash-circle"></i> Sell
              </button>
            </div>
          </div>

          <div className=""></div>

         {/* use chart data component */}
          <div>
            <Chart />
          </div>
        
        
        </div>

        {/* <!-- Box 2 --> */}
        <div className="bg-white p-4 rounded-md shadow-md">
          <Trans />
        </div>

        {/* <!-- Box 3 --> */}
        <div className="box3 p-2 rounded-md shadow-md ">
          <div>
            <button
              className="bg-gray-500 w-16 rounded-full text-white"
              type="button"
            >
              Loans
            </button>
          </div>

          <div className="text-dark-500 font-semibold mt-1">
            <p>
              Learn more about Loans-Keep your Bitcoin, access it's value
              without selling it
            </p>
          </div>
        </div>

        {/* <!-- Box 4 --> */}
        <div className="box4 p-2 rounded-md shadow-md">
          <div>
            <button
              className="rounded-full w-16 mx-1 bg-purple-700 text-white"
              type="button"
            >
              Contact
            </button>
          </div>

          <div className="text-dark-500 font-semibold mt-1">
            <p>
              Learn more about our real estate,Mortgage and corporate account
              services
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Price;
