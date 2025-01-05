import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Mousewheel, Pagination } from "swiper/modules";

import "../styles/SwiperStyles.css";
import Slide from "../ui/Slide";
import NextPrevContainer from "./NextPrevContainer";
import NextSlide from "./NextSlide";
import PreviousSlide from "./PreviousSlide";

function SwiperComponent({ sportShoes }) {
  const swiperRef = useRef(null);

  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  return (
    <div>
      <NextPrevContainer>
        <NextSlide onClick={handleNext} />
        <PreviousSlide onClick={handlePrev} />
      </NextPrevContainer>
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        loop={false}
        pagination={{
          clickable: true,
        }}
        mousewheel={false}
        modules={[Pagination, Mousewheel]}
        className="mySwiper"
      >
        {sportShoes?.map((shoes, i) => (
          <SwiperSlide key={i}>
            <Slide shoes={shoes} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwiperComponent;
