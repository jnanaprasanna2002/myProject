import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, } from 'recharts'
import { AiOutlineInfoCircle } from 'react-icons/ai';
import './LineGraph.css'

const data = [ 
    { date: '6/30/2024-7/6/2024', orders: 4, sales: 1404, },
     { date: '7/7/2024-7/13/2024', orders: 2, sales:800 , }, 
     { date: '7/21/2024-7/27/2024', orders: 2, sales: 500, }, 
      ];
const LineGraph = () => {
    return(
    <div className='line-chart-card'>
        <div className='card-element'>
        <span className='span-element'>Sales vs Orders</span>
        <AiOutlineInfoCircle size={24}/>
        </div>

        <ResponsiveContainer width="100%" height={400}>
        
            
            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }} > 
                
             <CartesianGrid strokeDasharray="3 3" /> 
             <XAxis dataKey="date" />
            <YAxis yAxisId='left' />
            <YAxis yAxisId='right' orientation='right'/>
            <Tooltip 
            
               />
              <Legend />
               <Line yAxisId='left' type="monotone" dataKey="sales" stroke="teal" /> 
               <Line yAxisId='right' type="monotone" dataKey="orders" stroke="orange" /> 
               </LineChart> </ResponsiveContainer>

    </div>
    )
}

export default LineGraph;