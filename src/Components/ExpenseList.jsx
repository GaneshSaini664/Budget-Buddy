import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ 
  expenses, 
  deleteExpense, 
  editExpense, // New Prop
  categories, // New Prop
  filterCategory, // New Prop
  setFilterCategory, // New Prop
  sortBy, // New Prop
  setSortBy // New Prop
}) => {

  return (
    <div className="w-full max-w-xl mx-auto mt-6">
      
      {/* Filtering and Sorting Controls */}
      <div className="flex justify-between items-center mb-4 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <div className="flex items-center gap-2">
          <label htmlFor="categoryFilter" className="text-sm text-black">Category:</label>
          <select 
            id="categoryFilter"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 text-black"
          >
            <option value="All">All</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="sortBy" className="text-sm text-black">Sort By:</label>
          <select 
            id="sortBy"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-900 text-black"
          >
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
            <option value="AmountHigh">Amount (High to Low)</option>
            <option value="AmountLow">Amount (Low to High)</option>
          </select>
        </div>
      </div>

      {/* Expense List Items */}
      <div className="flex flex-col gap-3 text-gray-800">
        {expenses.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-300">
            No expenses yet
          </p>
        ) : (
          expenses.map((item) => (
            <ExpenseItem
              key={item.id}
              item={item}
              deleteExpense={deleteExpense}
              editExpense={editExpense} // Passed for editing
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ExpenseList;