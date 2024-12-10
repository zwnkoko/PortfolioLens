import { historicalDataEP } from "../endpoints";

export const fetchHomeTickers = async (ticker : string) => {
    const prices: {x: string, y: number}[] = [];
    const endPoint = historicalDataEP(ticker);
    try{
      const response = await fetch(endPoint);
      const data = await response.json();
      const fiveDaysPrices = data.historical.slice(0,5).reverse();
      for(let price of fiveDaysPrices){
        prices.push({ x: price.date, y: price.adjClose });
      }
      return prices;
    } catch(error) {
        console.error("Error fetching home tickers data", error);
        throw(error);
    }
}