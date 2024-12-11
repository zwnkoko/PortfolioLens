import { fetchHomeTickers } from "../api/fetchHomeTickers";
import { useEffect, useState } from "react";

interface FiveDayData {
  [key: string]:{
    prices: { x: string; y: number }[]
  }
}

/* 
 * Custom hook to fetch and manage historical stock prices. 
 * {Object} - Contains state for fiveDaysPrice, apiLimitReached, errorOccured, and lastDate
 */

const useTickerPrices = () => {
  const [fiveDaysPrice, setFiveDaysPrice] = useState<FiveDayData>({});
  const [apiLimitReached, setApiLimitReached] = useState(false);
  const [errorOccured, setErrorOccured] = useState(false);
  const [lastDate, setLastDate] = useState("");
  
  const getLastDate = (fiveDayData : FiveDayData) => {
    const lastTicker = Object.values(fiveDayData)[0];
    if (lastTicker && lastTicker.prices.length > 0) { 
      return lastTicker.prices[lastTicker.prices.length - 1].x;
    }
    return "";
  }

  // iterate over tickers arr to fetch last 5 days closing values
  useEffect(() => {
    const tickerList = ["AAPL", "VOO", "MU", "QQQM", "NVDA", "AMD"];
    const fetchData = async () => {
      for (const ticker of tickerList) {
        try {
          const prices = await fetchHomeTickers(ticker);
          if (prices) {
            setFiveDaysPrice(prevState => ({
              ...prevState,
              [ticker]: { prices } 
            }));
          }
        } catch (error) {
          if (error instanceof Error) {
            if (error.message === "429") {
              setApiLimitReached(true);
            }
            else{
              setErrorOccured(true);
            }
          }
        }
      }
      setLastDate(getLastDate(fiveDaysPrice));
    };

    fetchData();
  }, []);



  return { fiveDaysPrice, apiLimitReached, errorOccured, lastDate };
};

export default useTickerPrices;
