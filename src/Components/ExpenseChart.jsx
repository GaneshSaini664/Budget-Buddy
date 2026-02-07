import { Bar } from 'react-chartjs-2';
import { 
    Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    BarElement, 
    Title, 
    Tooltip, 
    Legend 
} from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const ExpenseChart = ({ monthlyData }) => {
    
    const chartLabels = monthlyData.map(data => {
        
        const [year, month] = data.month.split('-');
        const date = new Date(year, month - 1);
        return date.toLocaleString('en-US', { month: 'short', year: 'numeric' });
    }).reverse(); 

    const chartAmounts = monthlyData.map(data => data.total).reverse();

    
    const data = {
        labels: chartLabels,
        datasets: [
            {
                label: 'Monthly Expense (₹)',
                data: chartAmounts,
                backgroundColor: 'rgba(79, 70, 229, 0.7)', // Indigo-600 color
                borderColor: 'rgba(79, 70, 229, 1)',
                borderWidth: 1,
                borderRadius: 4,
            },
        ],
    };

    
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Monthly Spending Trend',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Amount (₹)',
                }
            }
        }
    };

    return (
        <div className="w-full max-w-xl mx-auto mt-6 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
             <h3 className="text-xl font-semibold mb-4 dark:text-white">Expense Trend</h3>
            {chartAmounts.length > 0 ? (
                <Bar options={options} data={data} />
            ) : (
                 <p className="text-center text-gray-500 dark:text-gray-300">
                    Add expenses to see the chart.
                </p>
            )}
        </div>
    );
};

export default ExpenseChart;