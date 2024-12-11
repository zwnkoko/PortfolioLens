import { historicalDataEP } from "../endpoints";


/* 
 * Fetches the last 5 days of historical stock prices for a given ticker. 
 * @param {string} ticker - The ticker symbol of the stock. 
 * @returns {Promise<{x: string, y: number}[]>} - Array of objects containing date and adjusted closing price. 
 * @throws {Error} - Throws an error with the status code if the fetch request fails. 
 */

export const fetchHomeTickers = async (ticker : string) => {
    const prices: {x: string, y: number}[] = [];
    const endPoint = historicalDataEP(ticker);
    try{
      const response = await fetch(endPoint);
      if(!response.ok){
        throw new Error("Request Error! Status:" + response.status);
      }

      const data = await response.json();
      const fiveDaysPrices = data.historical.slice(0,5).reverse();
      for(let price of fiveDaysPrices){
        prices.push({ x: price.date, y: price.adjClose });
      }
      return prices;
    } catch(error) {
        if(error instanceof Error){
          const statusCode = error.message.split("Status:")[1]?.trim();
          throw new Error(statusCode);
        }
        else{
          console.log("Unexpected error occured.")
        }
        
    }
}