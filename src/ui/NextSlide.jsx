import { Swiper } from "swiper/react";
import { FaChevronCircleRight } from "react-icons/fa";

function NextSlide({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="border-none text-black text-xl md:text-2xl lg:text-3xl cursor-pointer"
    >
      <FaChevronCircleRight />
    </button>
  );
}

export default NextSlide;
