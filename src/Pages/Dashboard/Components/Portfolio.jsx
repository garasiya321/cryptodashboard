import React, {} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { withdraw,deposit } from '../../../components/Redux/actions/action'




const portFolio = 123730.52 ;

function Portfolio() {
    
    const accountBalance=useSelector((state)=>state.accountBalance)
    
    
   
    const dispatch =useDispatch()
    

    const amountWithdraw = ()=>{
        dispatch(withdraw(20))
    }
    const amountDeposit = ()=>{
        dispatch(deposit(10))
    }

    
  return (
        <div className='xl:flex justify-between xl:mx-28 text-sm xl:items-center sm:items-start xl:bg-white xl:p-5 mt-4 rounded'>
        <div className='xl:flex'>
        <div className='m-2 '>
            <p className=''>Total Portfolio Value<i className="bi bi-info-circle"></i></p>
            <p className='font-semibold'>₹ {portFolio + accountBalance}</p>
        </div>

        <div className='flex m-2 '>
        <div>
        <p>Wallet Balances</p>
            <p className='font-semibold'>{"$" + Number(accountBalance/2812931.58).toFixed(8)} <span>BTC</span></p>
        </div>
           
        <div className=''>
          
            <p className='font-semibold pt-5 mx-3'>₹ {accountBalance} .00 <span>INR</span></p>
        </div>
            
        </div>

        

        </div>
        
        <div className=''>
          
            <button className='bg-blue-500 rounded text-white p-2 mx-3' type="button" onClick={amountDeposit}><i className="bi bi-arrow-down" ></i> Deposite</button>
            <button className= 'bg-blue-500 rounded text-white p-2' type="button" onClick={amountWithdraw}><i className="bi bi-arrow-up" ></i> Withdraw</button>
           
        </div>

        
       
          
           
       
    </div>
    
  )
}

export default Portfolio
