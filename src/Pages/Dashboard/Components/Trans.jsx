import React from 'react'
import { NavLink } from 'react-router-dom';

function Trans() {

  const transaction = [{
    id:1,
    icon:<i className='bi bi-currency-dollar'></i>,
    text:"INR Deposite",
    amount:"+ ₹81,123.10",
    timestamp:"2022-06-09 7:06 PM",
  },
  {
    id:2,
    icon:<i className='bi bi-currency-bitcoin'></i>,
    text:"BTC Sell",
    amount:"-12.4398 BTC",
    timestamp:"2022-06-09 7:06 PM"
  },

  {
    id:3,
    icon:<i className='bi bi-currency-rupee'></i>,
    text:"INR Deposite",
    amount:"+ ₹81,123.10",
    timestamp:"2022-06-09 7:06 PM",
  }

]
  return (
    <>
    <div>
      <div>
      <h1 className='font-bold'>Recent Transaction</h1>
      </div>


      <div className=''>
    {transaction.map((data)=>(
      <>
      <div  className='flex justify-between  m-3'>

      <div className='mt-2' key={data.id}>
      <i className='bg-gray-300 rounded-full p-1'>{data.icon}</i>
      </div>

      <div>
      <h3 className='font-semibold'>{data.text}</h3>
      <p className='text-xs'>{data.timestamp}</p>
      </div>

      <div className='font-bold'>
        <h1>{data.amount}</h1>
      </div>
      
      </div>
      <hr />

      </>
    ))}
      </div>
    </div>
    <div className=''>
      <NavLink to='/transaction'><button className='inline-block rounded bg-gray-300 w-full px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca]  hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]' type="button">View All</button></NavLink>
    </div>
  </>
  )
}

export default Trans;
