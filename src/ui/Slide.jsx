import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PercentOff from "./PercentOff";
import { changeEnToFaNumber, addCommas } from "../services/changeDigitsNumber";
import { FaTrashAlt } from "react-icons/fa";
import { useDeleteOfFavoriteList } from "../features/profile/useDeleteOfFavoriteList";
import { useAuth } from "../context/AuthContext";
import { useUser } from "../features/Login/useUser";
import { useAos } from "../hooks/useAos";

function Slide({ shoes }) {
  const { idUser } = useAuth();
  const { user, isLoadingUser } = useUser(idUser);
  const location = useLocation();
  const [poster, setPoster] = useState(() => `.${shoes?.styles[0].images}`);
  const [currentStyle, setCurrentStyle] = useState(
    () => shoes?.styles[0].style
  );
  const [LinkShoes, setLinkShoes] = useState("");
  const { isDeletingOfFavoriteList, deleteOfFavorite } =
    useDeleteOfFavoriteList();

  function hanldePoster(e) {
    setPoster(() => "." + e.target.dataset.src);
    setCurrentStyle(() => e.target.dataset.style);
  }
  useEffect(() => {
    function createLinkShoes() {
      setLinkShoes(
        `/${shoes?.category}/${shoes?.productId}?style=${currentStyle}&cat=${shoes?.category}`
      );
    }
    createLinkShoes();
  }, [location.pathname, poster, currentStyle]);

  function handleDeleteBtn() {
    let idDeleted = user?.favoriteList.find(
      (item) => item.productId === shoes?.productId
    ).id;
    deleteOfFavorite([idDeleted, idUser]);
  }

  return (
    <div className="flex flex-col justify-between p-2 md:p-3 bg-white shadow-lg rounded-2xl max-h-fit">
      {/* <!-- product header --> */}
      <div className="relative mb-1.5 md:mb-2 lg:mb-4 overflow-hidden group rounded-2xl">
        <img
          src={`${poster}-poster.png`}
          alt={shoes?.name}
          className="mx-auto rounded-2xl group-hover:scale-110 transition-all duration-300"
          loading="lazy"
          data-src={poster}
        />
        {shoes?.off !== 0 && <PercentOff product={shoes} />}
      </div>

      {/* product body */}
      <h5 className="max-h-[40px] md:max-h-[56px] mb-2.5 md:mb-2 lg:mb-2.5 font-ShabnamLight text-sm md:text-base lg:text-lg font-semibold text-zinc-800 line-clamp-1">
        {shoes?.name}
      </h5>
      <h2 className="max-h-[40px] md:max-h-[56px] mb-2.5 md:mb-2 lg:mb-2.5 font-ShabnamLight text-sm md:text-base lg:text-lg text-zinc-700 line-clamp-2">
        {shoes?.model + " " + shoes?.gender}
      </h2>
      <div className="flex gap-x-1.5 mb-1.5 md:mb-2 lg:mb-2.5">
        {shoes?.styles.map(
          (item, i) =>
            i < 3 && (
              <img
                src={`.${item.images}-poster.png`}
                alt={item.images}
                className="size-10 md:size-11 rounded-xl cursor-pointer"
                loading="lazy"
                data-src={item.images}
                data-style={item.style}
                onMouseEnter={hanldePoster}
                key={item.style}
              />
            )
        )}
      </div>
      {/* prices */}
      <div className="font-ShabnamBold flex items-center flex-wrap gap-x-2 min-h-14  md:gap-x-2.5 mb-2.5 md:mb-4">
        {shoes?.off !== 0 && (
          <div className="offer">
            <span className="text-sm md:text-base lg:text-lg">
              {addCommas(changeEnToFaNumber(shoes?.price)) + " "}
            </span>
            <span className="text-xs md:text-sm lg:text-base 2xl:inline-block tracking-tighter">
              {shoes?.unit}
            </span>
          </div>
        )}
        <div className="">
          <span className="text-sm md:text-base lg:text-lg">
            {addCommas(
              changeEnToFaNumber(shoes?.price * ((100 - shoes?.off) / 100))
            ) + " "}
          </span>
          <span className="text-xs md:text-sm lg:text-base tracking-tighter">
            {shoes?.unit}
          </span>
        </div>
      </div>
      {/* Product footer */}
      {/* // در صورت تغییر آیدی باید تغییر کند */}
      <div className="flex justify-center gap-x-2 w-full">
        <Link
          to={LinkShoes}
          className="w-full flex justify-center p-2 font-ShabnamLight text-sm md:text-base lg:text-lg text-white bg-black rounded-2xl hover:bg-black/60 transition-all"
        >
          مشاهده
        </Link>
        {location.pathname === "/profile/favorite" && (
          <button
            onClick={handleDeleteBtn}
            className="w-1/6 flex justify-center items-center lg:px-2 xl:px-0 text-white bg-black hover:bg-black/60 rounded-full"
          >
            <FaTrashAlt className="lg:size-6 xl:size-7" />
          </button>
        )}
      </div>
    </div>
  );
}

export default Slide;
