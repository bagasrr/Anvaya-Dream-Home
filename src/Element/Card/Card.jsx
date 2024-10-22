const Card = (props) => {
  const { type } = props;
  return type === "advantage" ? AdvantageCard(props) : type === "hometype" ? HomeTypeCard(props) : null;
};

export default Card;

const AdvantageCard = (props) => {
  const { svg, caption } = props;
  return (
    <div className="w-40 md:w-60 lg:w-1/4 shadow-lg justify-center bg-slate-200 p-5 rounded-lg hover:scale-105 duration-300">
      <div className="flex justify-center">
        <div className="text-white text-sm drop-shadow-lg rounded-full p-5 mb-10 bg-teal-500" dangerouslySetInnerHTML={{ __html: svg }}></div>
      </div>
      <h3 className="sm:text-lg text-xs font-bold text-center">{caption}</h3>
    </div>
  );
};

const HomeTypeCard = (props) => {
  const { imgsrc, imgalt, hometype, price } = props;
  return (
    <div className="w-32 h-44 md:h-50 md:w-40 lg:w-1/6  lg:h-72 shadow-lg align-center justify-center bg-teal-600 rounded-lg m-5 hover:scale-105 duration-300 relative">
      <img src={imgsrc} alt={imgalt} className="bg-cover bg-center h-2/3 w-full" />
      <div className="absolute top-2 right-0 bg-rose-700 text-white p-1 lg:p-3 text-right rounded-l-lg">
        <h1 className="text-sm lg:text-lg font-bold">
          From Rp <br /> {price} <small>Jt</small>
        </h1>
      </div>
      <h3 className="text-lg font-bold text-center md:p-3 lg:p-7 text-white ">{hometype}</h3>
    </div>
  );
};
