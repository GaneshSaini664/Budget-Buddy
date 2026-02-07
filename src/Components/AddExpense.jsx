import { useState } from "react";

const AddExpense = ({ addExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount || !category || !date) {
      alert("Please fill all fields");
      return;
    }

    addExpense({
      id: Date.now(),
      title,
      amount,
      category,
      date,
    });

    setTitle("");
    setAmount("");
    setCategory("");
    setDate("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 w-full max-w-xl mx-auto mt-6"
    >
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
        Add New Expense
      </h2>

      <div className="flex flex-col gap-4">

        <input
          type="text"
          placeholder="Expense Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-3 rounded-xl border border-gray-300 dark:border-gray-600 
                     bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="p-3 rounded-xl border border-gray-300 dark:border-gray-600 
                     bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-3 rounded-xl border border-gray-300 dark:border-gray-600 
                     bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
        />

        <input
          type="text"
          placeholder="Category (Food, Travel...)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-3 rounded-xl border border-gray-300 dark:border-gray-600 
                     bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
        />

        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold"
        >
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default AddExpense;
