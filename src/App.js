import React, { createContext, useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DashBoard from './Pages/Dashboard/Dashboard';
import Transaction from './Pages/Transaction/Transaction';
import Support from './Pages/Support/Support';
import "@fontsource/ubuntu";
import MarketCap from './components/marketCap/MarketCap';
import Chart from './components/Chart';

import Info from './components/marketCap/Info';
import Pagination from './components/marketCap/Pagination'

export const ApiData = createContext([]);





function App() {
  const [data, setData] = useState([]);

  const getStoreData = async () => {
    try {
      const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd");
      const actualData = await res.json();
      setData(actualData);
    } catch (error) {
      // Handle errors here
    }
  };

  useEffect(() => {
    getStoreData();
  }, []);

   
  return (
    <ApiData.Provider value={data}>
      <BrowserRouter>
        <Routes>
         
          <Route path="/" element={<DashBoard />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/Support" element={<Support />} />
          <Route path="/marketcap" element={<MarketCap />} />
          <Route path='/chart' element={<Chart />} />
          <Route path='/info' element={<Info />} />
          <Route path='/pagination' element={<Pagination/>} />
          
        </Routes>
      </BrowserRouter>
   </ApiData.Provider>
  );
}

export default App;

