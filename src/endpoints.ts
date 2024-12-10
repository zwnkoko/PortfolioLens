// Conditionally load dotenv for local development
if (process.env.NODE_ENV === 'development') {
    const dotenv = require('dotenv');
    dotenv.config();
}

export const historicalDataEP = (ticker: string): string => {
    //const apiKey = process.env.API_KEY;
    const apiKey = import.meta.env.VITE_API_KEY;
    if (!apiKey) {
        throw new Error('API key is missing');
    }
    return `https://financialmodelingprep.com/api/v3/historical-price-full/${ticker}?apikey=${apiKey}`;
};
