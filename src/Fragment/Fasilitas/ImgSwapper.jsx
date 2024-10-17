import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Imagedata from "./Imagedata.json";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ImgSwapper = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <Swiper
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper h-4/5 w-5/6 aspect-video"
    >
      {Imagedata.map((image) => (
        <SwiperSlide key={image.id} className="flex p-1 md:p-2">
          <img src={image.src} alt={image.alt} className="block h-full w-full rounded-lg object-cover object-center" />
        </SwiperSlide>
      ))}
      {!isMobile && (
        <>
          <div className="swiper-button-next" style={{ color: "white" }}></div>
          <div className="swiper-button-prev" style={{ color: "white" }}></div>
        </>
      )}
    </Swiper>
  );
};

export default ImgSwapper;
