import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { AiOutlineInfoCircle } from 'react-icons/ai';


import './PieChartCard.css'
const data = [
    { name: 'WooCommerce Store', value: 1485 }, // 55.8% of 2659
    { name: 'Shopify Store', value: 1174 },     // 44.2% of 2659
  ];
  
const COLORS = ['#FF6347', '#3CB371'];

const renderLabel = ({percent}) => {
    return `${(percent * 100).toFixed(1)}%`;
  };

const PieChartCard = () => {
    return(
        <div className='pie-chart-card'>
            <div className='card-element'>
            <span className='span-element'>Portion of Sales</span>
            <AiOutlineInfoCircle size={24}/>
            </div>
            <PieChart width={400} height={400}>
            <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderLabel}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
                startAngle={250}   // Start angle of 180 degrees
                endAngle={610}
            >
                {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
        <Tooltip />
        <Legend horizentalAlgin='bottom' align='center'/>
        </PieChart>

        </div>
    )
}

export default PieChartCard;