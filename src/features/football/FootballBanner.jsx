import { Link } from "react-router-dom";
import { useAos } from "../../hooks/useAos";

function Banner({ link, text, image }) {
  useAos();
  return (
    <section
      className="container w-full my-5 md:my-10 group rounded-2xl overflow-hidden"
      data-aos="fade-up"
    >
      <Link
        to={link}
        className="inline-flex relative z-[2] w-full h-48 md:h-72 lg:h-96 rounded-2xl overflow-hidden"
      >
        <img
          src={image}
          alt="banner"
          loading="lazy"
          className="mx-auto w-full h-full
          rounded-2xl "
        />
        <div
          className="flex justify-center items-center group-hover:bg-black/30 bg-black/50 md:bg-black/70 transition-all duration-300 absolute left-0 top-0 z-[4] mx-auto w-full h-full
           rounded-2xl"
        >
          <h2 className="font-ShabnamBold text-bnfsh-100 text-xl md:text-3xl lg:text-5xl ">
            {text}
          </h2>
        </div>
      </Link>
    </section>
  );
}

export default Banner;
