const Card = (props) => {
  const { type } = props;
  return type === "advantage" ? AdvantageCard(props) : type === "hometype" ? HomeTypeCard(props) : null;
};

export default Card;

const AdvantageCard = (props) => {
  const { svg, caption } = props;
  return (
    <div className="w-40 sm:w-1/4 shadow-lg justify-center bg-slate-200 rounded p-5 rounded-lg hover:scale-105 duration-300">
      <div className="flex justify-center">
        <div className="text-white text-sm drop-shadow-lg rounded-full p-5 mb-10 bg-teal-500" dangerouslySetInnerHTML={{ __html: svg }}></div>
      </div>
      <h3 className="sm:text-lg text-xs font-bold text-center">{caption}</h3>
    </div>
  );
};

const HomeTypeCard = (props) => {
  const { imgsrc, imgalt, hometype } = props;
  return (
    <div className="w-32 sm:w-1/6 h-44 sm:h-72 shadow-lg align-center justify-center bg-slate-200 rounded rounded-lg m-5 hover:scale-105 duration-300 ">
      <img src={imgsrc} alt={imgalt} className="bg-cover bg-center h-2/3 w-full" />
      <h3 className="text-lg font-bold text-center mt-7">{hometype}</h3>
    </div>
  );
};
