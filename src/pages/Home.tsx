import Button from "../components/Button";
import NavBar from "../components/NavBar";
import TickerCard from "../components/TickerCard";
import useTickerPrices from "../hooks/useTickerPrices";
import MotionWrapper from "../components/GestureWrapper";

const Home = () => {

  const {fiveDaysPrice, apiLimitReached, errorOccured, lastDate } = useTickerPrices(); 
  
  const getStarted = () =>{
    console.log("get started");
  }

  return (
    <>
    {apiLimitReached && <div className="font-semibold text-center bg-secondary">API limit reached. Try again a few hours later.</div>}
    {errorOccured && <div className="font-semibold text-center bg-secondary">Error occured while fetching stock data</div>}
    <div className="lg:max-w-7xl mx-auto px-6 min-h-dvh flex flex-col text-white">

      <header>
        <NavBar />
      </header>

      <main className="flex flex-col justify-center items-center flex-grow">
        <p className="pt-56 md:pt-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-center text-2xl md:text-6xl">
          Minimalistic Portfolio Tracker for Retail Investors
        </p>
        <div className="pt-8">
          <MotionWrapper>
            <Button value="Get Started" onClick={getStarted}/>
          </MotionWrapper>
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
          <p className="pt-4 text-xs text-center">*Last 5 days closing price as of {lastDate}</p>
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
          <p className="py-4 text-xs text-center">*Last 5 days closing price as of {lastDate}</p>
        </div>
      </main>

    </div>
    </>
  );
};

export default Home;
