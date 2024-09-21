const Input = (props) => {
  const { placeholder, kjk } = props;
  return <input type="text" placeholder={placeholder} className="w-28 sm:w-1/4 h-8  bg-gray-50 text-xs sm:text-sm rounded-lg p-3 sm:p-5 m-1" />;
};

export default Input;
