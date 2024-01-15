import React from 'react'

import Price from './Components/Price'
import Portfolio from './Components/Portfolio'
import TopNav from '../../components/Topnav'
import SideNav from '../../components/Sidenav'
import MarketCap from '../../components/marketCap/MarketCap'


function DashBoard() {
  return (
    <>
    <div className='bg-violet-100'>
       <div className='flex '>
    

    <div className=''>
      <div className='hidden lg:flex  sticky top-0 shadow-2xl'>
      <SideNav />
      </div>
     
     
    </div>
    
    <div className='w-full'>

     <TopNav title="Dashboard"/>
     <Portfolio/>
     <Price/>
     <div className='w-full'>
     <MarketCap/>
     </div>
     
    
    </div>
  </div>  

   
    </div>


    
    
    </>
   )
}

export default DashBoard;
