import { Children } from "react";

const Button = (props) => {
  const { Content } = props;
  return <button className="bg-sky-500 text-white font-bold py-2 px-4 rounded-lg w-1/4 hover:bg-sky-700">{Content}</button>;
};
export default Button;
