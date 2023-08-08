const Button = ({ children, type = null }) => {
  return (
    <button
      className="px-7 py-1 text-white bg-emerald-500 rounded-md hover:bg-emerald-600"
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
