
const EditExpenseModal = ({ expense, updateExpense, closeModal }) => {
  const [title, setTitle] = useState(expense.title);
  const [amount, setAmount] = useState(expense.amount);
  const [category, setCategory] = useState(expense.category);
  const [date, setDate] = useState(expense.date || new Date().toISOString().substring(0, 10)); // Include date
  
  // ... existing handleSubmit ...
  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === '' || amount === '' || category.trim() === '' || date === '') {
      alert('Please fill all details.');
      return;
    }
    if (Number(amount) <= 0) {
        alert('Amount must be greater than zero.');
        return;
    }

    updateExpense({
      ...expense,
      title: title.trim(),
      amount: Number(amount),
      category: category.trim(),
      date, // New: Include date
    });
  };
  // ... existing return statement ...
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl p-6 w-full max-w-md relative">
        {/* ... existing header ... */}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* ... title, amount, category inputs ... */}
          
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="p-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            min="0.01"
            step="0.01"
            required
          />

          {/* New Date Input in Modal */}
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="p-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            required
          />
          
          <input
            type="text"
            placeholder="Category (Food, Travel...)"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            required
          />

          <button 
            type="submit" 
            className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 font-semibold"
          >
            Update Expense
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditExpenseModal;