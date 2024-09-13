const Card = (props) => {
  const { svg, caption } = props;
  return (
    <div className="w-1/4 min-h-1/3 shadow-lg align-center justify-center bg-slate-200 rounded p-10 rounded-lg m-5 hover:scale-105 duration-300">
      <div className="flex justify-center">
        <div className="text-white drop-shadow-lg rounded-full p-5 mb-10 bg-teal-500" dangerouslySetInnerHTML={{ __html: svg }}></div>
      </div>
      <h3 className="text-lg font-bold text-center">{caption}</h3>
    </div>
  );
};

export default Card;
