import { Title } from "../../Element/Title/Title";
import ImgSwapper from "./ImgSwapper";
import "./ImgSwapper.css";

const Fasilitas = () => {
  return (
    <div className="py-24 img-container">
      <Title title="Fasilitas Yang Kami Tawarkan" fontColor="white" />
      <ImgSwapper />
    </div>
  );
};

export default Fasilitas;
