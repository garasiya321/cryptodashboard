import React from 'react';


// info component to show crypto data

function Info(props) {
  const { cryptocurrency } = props;

  if (!cryptocurrency) {
    return null;
  }

  return (
    <div>
     
          <div className="xl:text-center font-bold border border-black p-1 rounded">
            <div className="flex justify-center items-center pt-3">
              <img
                className="border border-black p-2 rounded"
                src={cryptocurrency.image}
                alt={cryptocurrency.name}
                style={{ width: 70 }}
              />
            </div>
            <div>
              <p className="font-bold text-center">{cryptocurrency.name}</p>
            </div>
            <div className="xl:mx-20 border mt-1">
              <div className="border border-black rounded mt-5">
                <p>Current Price: <span className={cryptocurrency.current_price<cryptocurrency.high_24h?"text-red-500":"text-green-500"}>${cryptocurrency.current_price}</span></p>
                <p >Highest in 24H: <span className='text-green-500'>${cryptocurrency.high_24h}</span> </p>
                <p>Change Percentage: <span className={cryptocurrency.ath_change_percentage<0?"text-red-500":"text-green-500"}>{cryptocurrency.ath_change_percentage}%</span> </p>
              </div>
              <div className="border border-black rounded mt-5">
                <p>Market Cap: <span className={cryptocurrency.market_cap<0?"text-red-500":"text-green-500"}>${cryptocurrency.market_cap}</span></p>
                <p>Highest Market Cap: <span className={cryptocurrency.market_cap_change_24h<0?"text-red-500":"text-green-500"}>${cryptocurrency.market_cap_change_24h}</span></p>
                <p>Price Change 24H: <span className={cryptocurrency.price_change_24h<0?"text-red-500":"text-green-500"}>${cryptocurrency.price_change_24h}</span></p>
                <p>Market Cap Rank: {cryptocurrency.market_cap_rank}</p>
              </div>
            </div>
            <div className="xl:mx-20 border border-black rounded mt-5">
              <p>Total Supply: <span className={cryptocurrency.total_supply<0?"text-red-500":"text-green-500"}> {cryptocurrency.total_supply}</span> </p>
              <p>Total Volume: <span className={cryptocurrency.total_volume<0?"text-red-500":"text-green-500"}>{cryptocurrency.total_volume}</span></p>
              <p>Symbol:       <span className={cryptocurrency.total_supply<0?"text-red-500":"text-green-500"}>{cryptocurrency.symbol.toUpperCase()}</span> </p>
            </div>
          </div>
        </div>
      
  );
}

export default Info;
