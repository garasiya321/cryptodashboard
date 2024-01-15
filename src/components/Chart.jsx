import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend} from 'chart.js';
import { Line} from 'react-chartjs-2';
import { useContext } from "react";
import { ApiData } from '../App';




ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

function Chart() {

  const data = useContext(ApiData)

  const [chartData, setChartData] = useState([]);
  const [timeframe, setTimeframe] = useState('370d');
  const [labelFormat, setLabelFormat] = useState('MMMDD');
  const [selectedCoin, setSelectedCoin] = useState('bitcoin');
 

  const getChartData = async (timeframe,selectedCoin) => {

    const now = moment();
    const endDate = now.unix(); // Get the current date as the end date

    let startDate;
    if(timeframe === '1h'){
      startDate = now.subtract(1, 'hour').unix();
      setLabelFormat('HH:mm');
      
    }
    else if (timeframe === '24h') {
      startDate = now.subtract(24, 'hour').unix();
      setLabelFormat('HH:mm');
      
    } else if (timeframe === '15d') {
      startDate = now.subtract(15, 'days').unix();
      setLabelFormat('MMMDD');
      
    } else if (timeframe === '30d') {
      startDate = now.subtract(30, 'days').unix();
      setLabelFormat('MMMDD');
      
    } else if (timeframe === '182d') {
      startDate = now.subtract(182, 'days').unix();
      setLabelFormat('MMMDD');
      
    } else {
      startDate = now.subtract(365, 'days').unix();
      setLabelFormat('MMMDD');
      
    }
    try {
      const res = await fetch(`https://api.coingecko.com/api/v3/coins/${selectedCoin}/market_chart/range?vs_currency=usd&from=${startDate}&to=${endDate}`);
      const actualData = await res.json();
      setChartData(actualData);

      lineData.datasets[0].label = selectedCoin.charAt(0).toUpperCase() + selectedCoin.slice(1); // Capitalize the first letter of the coin name
    } catch (error) {
      // Handle errors here
    }
  };

  useEffect(() => {
    getChartData(timeframe,selectedCoin);
  }, [timeframe , selectedCoin]);

  // Check if chartData has a "prices" property before mapping
  const coinData = chartData.prices
    ? chartData.prices.map((value) => ({
        x: value[0],
        y: value[1].toFixed(2),
      }))
    : [];

 

  const options = {
    responsive: true,
  };

  const lineData = {
    labels: coinData.map((value) => moment(value.x).format(labelFormat)),
    datasets: [
      {
        fill: true,
        label: selectedCoin.charAt(0).toUpperCase() + selectedCoin.slice(1), // Default label for the initial coin,
        data: coinData.map((value) => value.y),
        borderColor: 'rgb(53,162,235)',
        backgroundColor: '#E6D1FD',
      },
    ],
  };

  


  return (
    <div>
      <div className='flex justify-around mx-10 mt-3'>
      <button className="  bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded focus:bg-purple-500 focus:text-white" onClick={() => setTimeframe('1h')}>1H</button>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded focus:bg-purple-500 focus:text-white" onClick={() => setTimeframe('24h')}>24H</button>

        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded focus:bg-purple-500 focus:text-white" onClick={() => setTimeframe('15d')}>15D</button>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded focus:bg-purple-500 focus:text-white" onClick={() => setTimeframe('30d')}>1M</button>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded focus:bg-purple-500 focus:text-white" onClick={() => setTimeframe('182d')}>6M</button>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded focus:bg-purple-500 focus:text-white " onClick={() => setTimeframe('365d')}>1Y</button>
      </div>

      <div>
            <div className='text-center'>
              <select name="currency" id="" className="bg-blue-100 rounded font-semibold text-center mt-4" onChange={(e) => setSelectedCoin(e.target.value)}>
              {
                data.map((currency,id)=>(
                  <option key={currency.id} value={currency.id}>{currency.name}</option>
                ))
              }
              
              </select>
            </div>
          </div>  
          

      <div className='text-center mb-4'>
      
      </div>
      <Line options={options} data={lineData} />
      
      
    </div>
  );
}

export default Chart;
