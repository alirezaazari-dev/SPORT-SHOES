import React, { useEffect, useRef, useState } from "react";

function Parallax() {
  const [scrollY, setScrollY] = useState(0);
  const [opa, setOpa] = useState(0);
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(
    function () {
      function handleOpa() {
        setOpa((cur) => (scrollY % 2 === 0 ? scrollY : cur));
      }
      handleOpa();
    },
    [scrollY]
  );

  // console.log(scrollY, scrollY % 5, scrollY / 5, opa);

  return (
    <section
      ref={parallaxRef}
      className="parallax-container container flex justify-center items-center h-96 rounded-2xl overflow-hidden mb-10 font-ShabnamBold"
    >
      <div className=" flex justify-center items-center w-full h-96 rounded-2xl overflow-hidden ">
        <img
          src="../images/banner/football-banner-right.png"
          className="parallax-layer layer-1  w-20 lg:w-48 h-40 lg:h-96 transition-all delay-0 duration-500"
          style={{
            transform: `translateX(${scrollY < 170 ? scrollY : 170}px)`,
          }}
          alt="Image 1"
        />
        <div className="">
          <span
            className={`${
              scrollY > 0 && "bg-white shadow-lg p-5"
            } text-base md:text-lg lg:text-xl  rounded-full transition-all delay-0 duration-500 text-zinc-700`}
            style={{ fontSize: `${opa < 13 ? opa : 13}px` }}
          >
            نهایت کیفیت را تجربه کنید!
          </span>
        </div>
        <img
          src="../images/banner/football-banner-left.png"
          className="parallax-layer layer-2 w-20 lg:w-48 h-40 lg:h-96 transition-all delay-0 duration-500"
          style={{
            transform: `translateX(-${scrollY < 170 ? scrollY : 170}px)`,
          }}
          alt="Image 2"
        />
      </div>
    </section>
  );
}

export default Parallax;
