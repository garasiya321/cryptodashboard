import React from "react";
import { Link } from "react-router-dom";

function Sidenav() {
  
  return (
   
      
       <div className="lg:flex lg:flex-col lg:justify-between items-center px-3 bg-blue-100 lg:h-screen shadow-xl  w-48  font-light">
      <div className="">
        <h4 className=" text-2xl mb-4 font-bold">Crypto</h4>

        <div className="flex sidenav pt-1 rounded mb-4">
          
         <Link to="/"><p className="bi bi-grid-fill">Dashboard</p></Link> 
        </div>
        <div className="flex sidenav  rounded shadow-sm mt-2">
         
        <Link to="/transaction"><p className=" bi bi-arrow-down-up">Transactions</p></Link>  
          
        </div>
        <div className="flex mt-3">
      <Link to="/marketcap"><p className="sidenav bi bi-activity rounded ">Market Cap</p></Link>
        
      </div>
      </div>

      <div className="flex">
      <Link to="/support"><p className="sidenav bi bi-headset rounded mb-5">Support</p></Link>
        
      </div>

      
    </div>
    
   
  );
}

export default Sidenav;
