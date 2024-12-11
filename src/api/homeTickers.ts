import { historicalDataEP } from "../endpoints";

export const fetchHomeTickers = async (ticker : string) => {
    const prices: {x: string, y: number}[] = [];
    const endPoint = historicalDataEP(ticker);
    try{
      const response = await fetch(endPoint);
      if(!response.ok){
        throw new Error("Request Error! Status: ${response.status}");
      }
      const data = await response.json();
      const fiveDaysPrices = data.historical.slice(0,5).reverse();
      for(let price of fiveDaysPrices){
        prices.push({ x: price.date, y: price.adjClose });
      }
      return prices;
    } catch(error) {
        console.error("Error fetching home tickers data", error);
        if(error instanceof Error && error.message.includes("Request Error! Status:")){
          const statusCode = error.message.split(': ')[1];
          statusCode == "429" && alert("Max API request reached! Try again tomorrow");
          console.error(`Failed with status code: ${statusCode}`);
        }
        throw(error);
    }
}