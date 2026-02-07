

const Footer = ({ totalAmount }) => {
  return (
    <footer className="w-full text-center py-4 text-lg font-semibold bg-indigo-600 text-white mt-6">
      Total Expense: ₹{totalAmount}
    </footer>
  );
};

export default Footer;

