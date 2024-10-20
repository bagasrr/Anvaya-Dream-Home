import { Element } from "react-scroll";
import { Title } from "../../Element/Title/Title";
import ImgSwapper from "./ImgSwapper";
import "./ImgSwapper.css";

const Fasilitas = () => {
  return (
    <Element name="fasilitas">
      <div className="py-10 md:py-24 img-container">
        <Title title="Fasilitas Yang Kami Tawarkan" fontColor="white" />
        <ImgSwapper />
      </div>
    </Element>
  );
};

export default Fasilitas;
