import React from "react";
import "./Hero.scss";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Hero = () => {
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="hero">
            <div className="text">
              <div className="container">
                <h1>Tasty & Delicious Food </h1>
              </div>
              <div className="button">
                <h4>Book a table</h4>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero hero2">
            <div className="text">
              <div className="container">
                <h1>Tasty & Delicious Food </h1>
              </div>
              <div className="button">
                <h4>Book a table</h4>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="hero hero3">
            <div className="text">
              <div className="container">
                <h1>Tasty & Delicious Food </h1>
              </div>
              <div className="button">
                <h4>Book a table</h4>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
