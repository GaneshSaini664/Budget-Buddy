import { Sun, Moon } from "lucide-react";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="w-full flex justify-between items-center py-4 px-6 bg-indigo-600 text-white shadow-md">
      <h1 className="text-2xl font-semibold tracking-wide">
        Expense Tracker
      </h1>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition"
      >
        {darkMode ? <Sun size={22} /> : <Moon size={22} />}
      </button>
    </header>
  );
};

export default Header;
