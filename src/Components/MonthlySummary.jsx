const MonthlySummary = ({ monthlyData }) => {
    const formatMonth = (monthKey) => {
        const [year, month] = monthKey.split('-');
        const date = new Date(year, month - 1); // Month is 0-indexed
        return date.toLocaleString('en-US', { month: 'long', year: 'numeric' });
    };

    if (monthlyData.length === 0) return null;

    return (
        <div className="w-full max-w-xl mx-auto mt-6">
            <h2 className="text-xl font-semibold mb-3 dark:text-white">Monthly Expense Summary</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {monthlyData.map((data) => (
                    <div 
                        key={data.month} 
                        className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md border-l-4 border-yellow-500"
                    >
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            {formatMonth(data.month)}
                        </p>
                        <p className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                            ₹{data.total.toFixed(2)}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MonthlySummary;