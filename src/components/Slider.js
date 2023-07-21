import React, { useRef } from "react";
import {
  Autoplay,
  Navigation,
  Pagination,
  EffectCoverflow,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { GrNext, GrPrevious } from "react-icons/gr";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import slide_image_1 from "../assets/personal-images/Img_1.jpg";
import slide_image_2 from "../assets/personal-images/Img_2.jpg";
import slide_image_3 from "../assets/personal-images/Img_3.jpg";
import slide_image_4 from "../assets/personal-images/Img_4.jpg";

const slide_img = [slide_image_1, slide_image_2, slide_image_3, slide_image_4];

const Slider = () => {
  const SlideRef = useRef();

  const handleNext = () => {
    SlideRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    SlideRef.current.swiper.slidePrev();
  };

  return (
    <div className="">
      <Swiper
        ref={SlideRef}
        effect={"coverflow"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={false}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="w-[80%]"
      >
        {slide_img.map((img, i) => {
          return (
            <SwiperSlide
              key={i}
              className="flex justify-center items-center text-center"
            >
              <img
                src={img}
                alt=""
                className="w-[26rem] h-[18rem] object-cover rounded-md"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="relative flex justify-center items-center mt-10">
        <div className="absolute flex gap-24 text-lg items-center justify-center mt-20">
          <button
            onClick={handlePrev}
            className="bg-primary p-2 rounded-full dark:bg-white"
          >
            <GrPrevious size={24} />
          </button>
          <button
            onClick={handleNext}
            className="bg-primary p-2 rounded-full dark:bg-white"
          >
            <GrNext size={24} />
          </button>
        </div>
        <div className="swiper-pagination flex justify-center items-center gap-x-4"></div>
      </div>
    </div>
  );
};

export default Slider;
