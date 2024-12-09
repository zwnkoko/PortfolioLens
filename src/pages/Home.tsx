import Button from "../components/Button";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import TickerCard from "../components/TickerCard";

const Home = () => {
  const getStarted = () =>{
    console.log("get started");
  }
  const historicalData = [ { date: '2024-12-02', close: 239.59 }, { date: '2024-12-03', close: 242.65 }, { date: '2024-12-04', close: 243.01 }, { date: '2024-12-05', close: 243.04 }, { date: '2024-12-06', close: 242.84 },];
  return (
    <div className="lg:max-w-7xl mx-auto px-6 min-h-dvh flex flex-col text-white">

      <header>
        <NavBar />
      </header>

      <main className="flex flex-col justify-center items-center flex-grow space-y-6">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-center text-2xl md:text-6xl">
          Minimalistic Portfolio Tracker for Retail Investors
        </p>
        <Button value="Get Started" onClick={getStarted}/>

        <div className="pt-4 w-full overflow-x-hidden">
          <div className="flex text-black font-semibold animate-scroll w-max">
            {/*original*/}
            <div className="min-w-36 mx-6">
              <TickerCard ticker="NVDA" closingPrice={223.41} historical={historicalData}/>
            </div>
            <div className="min-w-36 mx-6">
              <TickerCard ticker="AAPL" closingPrice={223.41} historical={historicalData}/>
            </div>
            <div className="w-36 mx-6">
              <TickerCard ticker="AMD" closingPrice={223.41} historical={historicalData}/>
            </div>
            <div className="w-36 mx-6">
              <TickerCard ticker="MU" closingPrice={223.41} historical={historicalData}/>
            </div>


            <div className="min-w-36 mx-6">
              <TickerCard ticker="NVDA" closingPrice={223.41} historical={historicalData}/>
            </div>
            <div className="min-w-36 mx-6">
              <TickerCard ticker="AAPL" closingPrice={223.41} historical={historicalData}/>
            </div>
            <div className="w-36 mx-6">
              <TickerCard ticker="AMD" closingPrice={223.41} historical={historicalData}/>
            </div>
            <div className="w-36 mx-6">
              <TickerCard ticker="MU" closingPrice={223.41} historical={historicalData}/>
            </div>


          </div>
          <p className="pt-4 text-xs text-center">*Last 5 days closing price as of 12/9/2024</p>
        </div>

      </main>

    </div>
  );
};

export default Home;
