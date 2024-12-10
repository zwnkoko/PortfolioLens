import Button from "../components/Button";
import NavBar from "../components/NavBar";
import TickerCard from "../components/TickerCard";
import { useState, useEffect } from "react";
import { fetchHomeTickers } from "../api/homeTickers";

interface FiveDayData{
  [key: string]:{
    prices: { x: string; y: number }[]
  }
}
const Home = () => {
  const [ fiveDaysPrice, setFiveDaysPrice ] = useState<FiveDayData>({});

  // iterate over tickers arr to fetch last 5 days closing values
  useEffect(() =>{
    const fetchData = async () =>{
      const tickerList = ["AAPL", "VOO", "MU", "QQQM", "NVDA", "AMD"];
      //const tickerList = ["AAPL"]
      for(const ticker of tickerList){
        try{
          const prices = await fetchHomeTickers(ticker);
          setFiveDaysPrice(prevState => ({
            ...prevState,
            [ticker]: { prices }
          }))
        } catch(error){
          console.error(`Error fetching data for ${ticker}:`, error);
        }
      }
    }
    fetchData();
  },[]);
  
  const getLastDate = () => {
    const lastTicker = Object.values(fiveDaysPrice)[0];
    if (lastTicker && lastTicker.prices.length > 0) { 
      return lastTicker.prices[lastTicker.prices.length - 1].x;
    }
    return "";
  }
  
  const getStarted = () =>{
    console.log("get started");
  }

  return (
    <div className="lg:max-w-7xl mx-auto px-6 min-h-dvh flex flex-col text-white">

      <header>
        <NavBar />
      </header>

      <main className="flex flex-col justify-center items-center flex-grow">
        
        <p className="pt-56 md:pt-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-center text-2xl md:text-6xl">
          Minimalistic Portfolio Tracker for Retail Investors
        </p>
        <div className="pt-8">
          <Button value="Get Started" onClick={getStarted}/>
        </div>
        
 

        {/* Scroll animation - Normal viewport */}
        <div className="pt-24 w-full overflow-x-hidden hidden md:block">
          <div className="flex text-black font-semibold animate-scroll w-max" style={{ willChange: 'transform'}}>
            {/* Run twice for seamless scrolling effect */}
            {
              Object.entries(fiveDaysPrice).map(([symbol, data])=>(
               <div key={symbol} className="min-w-64 mx-6 flex">
                <TickerCard ticker={symbol} axisValues={data.prices}/>
               </div> 
              ))
            }
            {
              Object.entries(fiveDaysPrice).map(([symbol, data])=>(
               <div key={symbol} className="min-w-64 mx-6 flex">
                <TickerCard ticker={symbol} axisValues={data.prices}/>
               </div> 
              ))
            }
          </div>
          <p className="pt-4 text-xs text-center">*Last 5 days closing price as of {getLastDate()}</p>
        </div>

        {/* No animation  - Mobile viewport */}
        {/* Removed animation because iOS mobile safari flicker on animation restart*/}
        <div className="pt-16 w-full overflow-x-hidden md:hidden">
          <div className="flex flex-col text-black font-semibold  space-y-8">
          {
            Object.entries(fiveDaysPrice).map(([symbol, data])=>(
              <div key={symbol} className="mx-6 flex">
                <TickerCard ticker={symbol} axisValues={data.prices}/>
              </div> 
            ))
          }
          </div>
          <p className="py-4 text-xs text-center">*Last 5 days closing price as of {getLastDate()}</p>
        </div>
        

      </main>

    </div>
  );
};

export default Home;
