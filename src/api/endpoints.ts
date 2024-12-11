export const historicalDataEP = (ticker: string): string => {
    const apiKey = import.meta.env.VITE_API_KEY;
    if (!apiKey) {
        throw new Error('API key is missing');
    }
    return `https://financialmodelingprep.com/api/v3/historical-price-full/${ticker}?apikey=${apiKey}`;
};
