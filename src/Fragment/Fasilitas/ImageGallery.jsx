import React from "react";
import imageData from "./Imagedata.json";

const ImageGallery = () => {
  return (
    <div className="container mx-auto bg-black px-5 py-2 lg:px-32 lg:pt-12">
      <div className="-m-1 flex flex-wrap md:-m-2">
        {imageData.map((image) => (
          <div key={image.id} className="flex p-1 md:p-2 ">
            <img src={image.src} alt={image.alt} className="block h-full w-full rounded-lg object-cover object-center" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
