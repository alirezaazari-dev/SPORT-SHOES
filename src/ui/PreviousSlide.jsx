import { Swiper } from "swiper/react";
import { FaChevronCircleLeft } from "react-icons/fa";

function PreviousSlide({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="border-none text-black text-xl md:text-2xl lg:text-3xl cursor-pointer"
    >
      <FaChevronCircleLeft />
    </button>
  );
}

export default PreviousSlide;
