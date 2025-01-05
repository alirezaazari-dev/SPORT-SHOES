import { useAuth } from "../../context/AuthContext";
import { useUser } from "../../features/Login/useUser";
import PercentOff from "../PercentOff";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import toast from "react-hot-toast";
import { useAddToFavorite } from "../../features/profile/useAddToFavorite";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDeleteOfFavoriteList } from "../../features/profile/useDeleteOfFavoriteList";

function ProductPhoto({
  srcImage,
  handleHoverClick,
  numSrc,
  objectCurrentStyle,
  data,
}) {
  const { idUser, isAuthenticated } = useAuth();
  const { user, isLoadingUser } = useUser(idUser);
  const [isExistInFavoriteList, setIsExistInFavoriteList] = useState(() =>
    user?.favoriteList
      ?.map((item) => item.productId === data.productId)
      .includes(true)
  );
  const { isAddingToFavorite, addToFavorite } = useAddToFavorite(
    setIsExistInFavoriteList
  );
  const { isDeletingOfFavoriteList, deleteOfFavorite } =
    useDeleteOfFavoriteList(setIsExistInFavoriteList);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (isDisabled) {
      const timer = setTimeout(() => {
        setIsDisabled(false);
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, [isDisabled]);

  function handleFavorite() {
    if (isAuthenticated) {
      let isExist = user?.favoriteList
        .map((item) => item.productId === data.productId)
        .includes(true);
      if (!isExist) {
        let changedData = { ...data };
        delete changedData.id;
        addToFavorite([
          {
            category: changedData.category,
            gender: changedData.gender,
            productId: changedData.productId,
            id: uuidv4(),
          },
          idUser,
        ]);
        // setIsExistInFavoriteList(true);
        setIsDisabled(true);
        // isSuccessAddToFavoriteList && setIsExistInFavoriteList(true);
      } else {
        let idDeleted = user?.favoriteList.find(
          (item) => item.productId === data.productId
        ).id;
        deleteOfFavorite([idDeleted, idUser]);
        // setIsExistInFavoriteList(false);
        setIsDisabled(true);
        // isSuccessDeleteOfFavoriteList && setIsExistInFavoriteList(false);
      }
    } else {
      toast.error("ابتدا به حساب کاربری خود وارد شوید.");
      setIsDisabled(true);
    }
  }

  return (
    <div className="flex gap-x-1 lg:gap-x-2 w-full">
      {/* views of images */}
      <div className="flex flex-col gap-y-1 lg:gap-y-2 w-22">
        {Array.from({ length: 6 }).map((_, i) => (
          <img
            src={`.${srcImage}-detail-${i + 1}.png`}
            alt={`sh-${i + 1}`}
            key={i + 1}
            data-src={i + 1}
            className="w-24 rounded-2xl shadow-2xl border-4 border-black/10 cursor-pointer"
            onMouseEnter={handleHoverClick}
            onClick={handleHoverClick}
          />
        ))}
      </div>
      {/* image */}
      <div className="relative">
        <img
          src={`.${srcImage}-detail-${numSrc}.png`}
          alt={`sh-${numSrc}`}
          className=" w-[600px] rounded-2xl shadow-2xl border-4 border-black/10"
        />
        {objectCurrentStyle?.isExist && data.off !== 0 && (
          <PercentOff product={data} />
        )}
        <button
          onClick={handleFavorite}
          disabled={isDisabled}
          className="absolute top-1.5 left-1.5"
        >
          {isExistInFavoriteList ? (
            <AiFillHeart className="size-6 md:size-8 text-red-600/90" />
          ) : (
            <AiOutlineHeart className="size-6 md:size-8" />
          )}
        </button>
      </div>
    </div>
  );
}

export default ProductPhoto;
