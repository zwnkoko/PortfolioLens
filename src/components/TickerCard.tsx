import { ResponsiveContainer, LineChart, Line, XAxis, YAxis } from "recharts";

interface Props{
    ticker: string;
    axisValues: {x : string; y: number}[];
}

const TickerCard = ({ ticker, axisValues} : Props) => {

    const minClose = Math.min(...axisValues.map(d=>d.y));
    const maxClose = Math.max(...axisValues.map(d=>d.y));
    const closingPrice = axisValues[axisValues.length - 1].y;

    return(
        <div className={`flex flex-col text-xs p-2 rounded-lg shadow-xl bg-[#1f1e1e] text-white space-y-2 items-center w-full`}>
            <div className="w-full flex justify-between">
                <p>{ticker}</p>
                <p>${closingPrice}</p>
            </div>
            
            <ResponsiveContainer width="100%" height={25}>
                <LineChart data={axisValues}>
                    <XAxis dataKey="x" hide={true}/> 
                    <YAxis domain={[minClose, maxClose]} hide={true}/>
                    <Line type="monotone" dataKey="y" stroke="#8884d8" /> 
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default TickerCard;