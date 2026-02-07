import { Trash2, Edit } from "lucide-react";

const ExpenseItem = ({ item, deleteExpense, editExpense }) => {
  return (
    <div className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border-l-4 border-indigo-500">

      <div>
        <h3 className="text-lg font-medium dark:text-white">{item.title}</h3>

        <p className="text-sm text-gray-600 dark:text-gray-300">
          ₹{Number(item.amount).toFixed(2)} • {item.category}
        </p>

        {item.date && (
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
            Date: {item.date}
          </p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          onClick={() => editExpense(item)}
          className="p-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
        >
          <Edit size={18} />
        </button>

        <button
          onClick={() => deleteExpense(item.id)}
          className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          <Trash2 size={18} />
        </button>
      </div>

    </div>
  );
};

export default ExpenseItem;
