import { Title } from "../../Element/Title/Title";
import Card from "../../Element/Card/Card";
import Hometypedata from "./Hometypedata";
import Button from "../../Element/Button/Button";

import { Element } from "react-scroll";

const Promotion = () => {
  const minHeight = {
    minHeight: "60vh",
  };
<<<<<<< HEAD
  const imgBackgorund = {
    backgroundImage: `url(/source/BgWaButton.png`,
  };

  return (
    <div className="my-20" style={minHeight}>
      <img src="/source/Mainbanner.png" alt="Main Banner" />
      <Element name="kontak">
        <div className="relative w-11/12 h-40 sm:h-96 mx-auto my-10 rounded-lg bg-cover bg-center" style={imgBackgorund}>
          <Button type="wa" phoneNumber="81252800095" message="Halo! saya tertarik dengan Anvaya, Bolehkah saya bertanya beberapa hal?" caption="Tanya-Tanya Dulu Yukk" />
        </div>
      </Element>
=======

  return (
    <div className="mt-24" style={minHeight}>
>>>>>>> 5b5bb2c (penambahan video)
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
