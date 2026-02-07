import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AddExpense from "./Components/AddExpense";
import ExpenseList from "./Components/ExpenseList";
import MonthlySummary from "./Components/MonthlySummary";


  

const categories = ["Food", "Travel", "Shopping", "Bills", "Other"];

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  const [isEditing, setIsEditing] = useState(false);
  const [currentExpense, setCurrentExpense] = useState(null);

  const [filterCategory, setFilterCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");

  // Save expenses to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // Add Expense
  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  // Delete Expense
  const deleteExpense = (id) => {
    setExpenses(expenses.filter((exp) => exp.id !== id));
  };

  // Edit Expense
  const editExpense = (expense) => {
    setCurrentExpense(expense);
    setIsEditing(true);
  };

  // Update Expense
  const updateExpense = (updatedExpense) => {
    setExpenses(
      expenses.map((exp) => (exp.id === updatedExpense.id ? updatedExpense : exp))
    );
    setIsEditing(false);
    setCurrentExpense(null);
  };

  // Monthly Summary
  const getMonthlySummary = () => {
    if (!expenses || !Array.isArray(expenses)) return [];

    const summary = expenses.reduce((acc, expense) => {
      if (!expense.date) return acc;
      const monthKey = expense.date.substring(0, 7);
      if (!acc[monthKey]) acc[monthKey] = 0;
      acc[monthKey] += Number(expense.amount);
      return acc;
    }, {});

    const sortedKeys = Object.keys(summary).sort().reverse();
    return sortedKeys.map((key) => ({
      month: key,
      total: summary[key],
    }));
  };

  const monthlyData = getMonthlySummary();

  // Total Amount
  const totalAmount = expenses.reduce(
    (acc, exp) => acc + Number(exp.amount),
    0
  );

  // Filter & Sort
  let sortedExpenses = [...expenses];
  if (filterCategory !== "All") {
    sortedExpenses = sortedExpenses.filter(
      (exp) => exp.category === filterCategory
    );
  }

  if (sortBy === "Newest") {
    sortedExpenses.sort((a, b) => b.id - a.id);
  } else if (sortBy === "Oldest") {
    sortedExpenses.sort((a, b) => a.id - b.id);
  } else if (sortBy === "AmountHigh") {
    sortedExpenses.sort((a, b) => b.amount - a.amount);
  } else if (sortBy === "AmountLow") {
    sortedExpenses.sort((a, b) => a.amount - b.amount);
  }

  return (
   <div className={`${
    darkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
  } min-h-screen`}
>
      {/* Header */}
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Add Expense */}
      <AddExpense addExpense={addExpense} />

      {/* Monthly Summary */}
      <MonthlySummary monthlyData={monthlyData} />

      {/* Expense List */}
      <ExpenseList
        expenses={sortedExpenses}
        deleteExpense={deleteExpense}
        editExpense={editExpense}
        categories={categories}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      {/* Footer */}
      <Footer totalAmount={totalAmount} />
    </div>
  );
};

export default App;
