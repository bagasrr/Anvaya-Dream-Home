const Input = (props) => {
  const { placeholder, kjk } = props;
  return <input type="text" placeholder={placeholder} className="w-1/4 bg-gray-50 text-sm rounded-lg p-3" />;
};

export default Input;
