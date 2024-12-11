import { fetchHomeTickers } from "../api/fetchHomeTickers";
import { useEffect, useState } from "react";

interface FiveDayData {
  [key: string]:{
    prices: { x: string; y: number }[]
  }
}

/* 
 * Custom hook to fetch and manage historical stock prices. 
 * @returns {Object} - Contains state for fiveDaysPrice, apiLimitReached, and errorOccured.  
 */

const useTickerPrices = () => {
  const [fiveDaysPrice, setFiveDaysPrice] = useState<FiveDayData>({});
  const [apiLimitReached, setApiLimitReached] = useState(false);
  const [errorOccured, setErrorOccured] = useState(false);

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
    };

    fetchData();
    console.log("fetched data")
  }, []);

  return { fiveDaysPrice, apiLimitReached, errorOccured };
};

export default useTickerPrices;
