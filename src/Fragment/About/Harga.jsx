import React from "react";
import { Title } from "../../Element/Title/Title";
import PageLink from "../../Element/PageLink/PageLink";

const PriceDisplay = () => {
  const img = [
    {
      id: 2,
      src: "/source/Pricelist2.jpeg",
      alt: "Price 2",
    },
  ];
  return (
    <div className="sa">
      <div className="flex flex-col items-center justify-center p-5 bg-white rounded-lg ">
        <Title title="PriceList" />
        <div className="md:flex md:w-screen md:gap-5 md:justify-evenly">
          {img.map((data) => (
            <img key={data.id} src={data.src} alt={data.alt} className="md:w-1/3 h-auto object-contain" />
          ))}
        </div>
      </div>
      <PageLink type="img" content="Download Pricelist" className="px-5 py-2 bg-teal-500 text-white rounded-lg shadow-sm hover:bg-teal-700 absolute right-5" />
      <p className="text-sm mt-10 p-10">*Silahkan tanya untuk informasi lebih lanjut</p>
    </div>
  );
};

export default PriceDisplay;
