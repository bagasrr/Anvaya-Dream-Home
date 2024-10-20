import React from "react";
import { Element } from "react-scroll";
import Button from "../../Element/Button/Button";

const Kontak = () => {
  const imgBackgorund = {
    backgroundImage: `url(/source/BgWaButton.png`,
  };
  return (
    <Element name="kontak">
      <div className="relative shadow-lg w-11/12 h-40 sm:h-96 mx-auto my-10 rounded-lg bg-cover bg-center" style={imgBackgorund}>
        <Button type="wa" phoneNumber="81252800095" message="Halo! saya tertarik dengan Anvaya, Bolehkah saya bertanya beberapa hal?" caption="Tanya-Tanya Dulu Yukk" />
      </div>
    </Element>
  );
};

export default Kontak;
