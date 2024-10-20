import { Title } from "../../Element/Title/Title";
import Card from "../../Element/Card/Card";
import Hometypedata from "./Hometypedata";
import Button from "../../Element/Button/Button";

import { Element } from "react-scroll";

const Promotion = () => {
  const minHeight = {
    minHeight: "60vh",
  };

  return (
    <div className="mt-24" style={minHeight}>
      <Element name="category">
        <Title title="Temukan Listing Premium Kami" />
        <div className="w-screen flex flex-wrap justify-center h-full">
          {Hometypedata.map((data) => (
            <Card type="hometype" key={data.id} imgsrc={data.imgsrc} imgalt={data.imgalt} hometype={data.type} />
          ))}
        </div>
      </Element>
    </div>
  );
};

export default Promotion;
