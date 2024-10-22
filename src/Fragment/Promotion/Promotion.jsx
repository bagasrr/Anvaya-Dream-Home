import { Title } from "../../Element/Title/Title";
import Card from "../../Element/Card/Card";
import Hometypedata from "./Hometypedata";
import Button from "../../Element/Button/Button";

import { Element } from "react-scroll";

const Promotion = () => {
  const minHeight = {
    minHeight: "60vh",
  };

  const FultonType = [
    {
      id: 1,
      url: "/source/TypeFulton2.jpeg",
    },
    {
      id: 2,
      url: "/source/TypeFulton1.jpeg",
    },
  ];

  return (
    <div className="mt-24" style={minHeight}>
      <Element name="category">
        <Title title="Temukan Listing Premium Kami" />
        <h1 className="text-3xl w-fit font-bold ml-10 p-2 text-teal-400 drop-shadow-lg border-b-2 border-slate-400">Tipe FULTON</h1>
        <div className="flex flex-col md:flex-row w-full pb-10 p-5 gap-2 border-b-2">
          {FultonType.map((data) => (
            <img key={data.id} src={data.url} alt="Type Fulton" className=" w-full md:w-1/2 h-auto object-contain" />
          ))}
        </div>
        <h1 className="text-3xl w-fit font-bold ml-10 p-2 text-teal-400 drop-shadow-lg border-b-2 border-slate-400 mt-10">Tipe Lainnya</h1>

        <div className="w-screen flex flex-wrap justify-center h-full my-10">
          {Hometypedata.map((data) => (
            <Card type="hometype" key={data.id} imgsrc={data.imgsrc} imgalt={data.imgalt} hometype={data.type} price={data.price} />
          ))}
        </div>
      </Element>
    </div>
  );
};

export default Promotion;
