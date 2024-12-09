import { ResponsiveContainer, LineChart, Line, XAxis, YAxis } from "recharts";

interface Props{
    ticker: string;
    closingPrice: number;
    historical: {date : string; close: number}[];
}

const TickerCard = ({ ticker, closingPrice, historical} : Props) => {

    const minClose = Math.min(...historical.map(d => d.close)); 
    const maxClose = Math.max(...historical.map(d => d.close));

    return(
        <div className={`flex flex-col text-xs p-2 rounded-lg shadow-xl bg-[#1f1e1e] text-white space-y-2 items-center w-full`}>
            <div className="w-full flex justify-between">
                <p>{ticker}</p>
                <p>${closingPrice}</p>
            </div>
            
            <ResponsiveContainer width="100%" height={25}>
                <LineChart data={historical}>
                    <XAxis dataKey="date" hide={true}/> 
                    <YAxis domain={[minClose, maxClose]} hide={true}/>
                    <Line type="monotone" dataKey="close" stroke="#8884d8" /> 
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default TickerCard;