import dotenv from 'dotenv';

// Initialize dotenv to read environment variables from .env file
dotenv.config();

export const historicalDataEP = (ticker: string): string => {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
        throw new Error('API key is missing');
    }
    return `https://financialmodelingprep.com/api/v3/historical-price-full/${ticker}?apikey=${apiKey}`;
};
