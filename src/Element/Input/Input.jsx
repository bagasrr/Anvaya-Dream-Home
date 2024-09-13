const Input = (props) => {
  const { placeholder, kjk } = props;
  return <input type="text" placeholder={placeholder} className="w-2/5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 block " />;
};

export default Input;
