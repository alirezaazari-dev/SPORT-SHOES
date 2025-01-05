import { HiOutlineDocument } from "react-icons/hi2";
import { useAuth } from "../../context/AuthContext";
import Slide from "../../ui/Slide";
import { useUser } from "../Login/useUser";
import { useExtractFavoriteList } from "./useExtractFavoriteList";
import { changeEnToFaNumber } from "../../services/changeDigitsNumber";
import CloseSectionProfile from "../../ui/CloseSectionProfile";

function Favorite() {
  const { idUser } = useAuth();
  const { user, isLoadingUser } = useUser(idUser);
  const { arrFavorite, isLoading } = useExtractFavoriteList(idUser);

  return (
    <div className="scrollable-content col-span-2 p-4 text-sm md:text-base lg:text-lg text-zinc-700 bg-white lg:bg-white shadow-2xl rounded-2xl border-4 min-h-full lg:min-h-fit">
      <div className="flex flex-col gap-y-8">
        {/* header */}
        <div className="flex justify-between text-black">
          <h4 className="font-ShabnamBold text-lg md:text-xl underline">
            لیست علاقه مندی
          </h4>
          <CloseSectionProfile />
        </div>
        {user?.favoriteList.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* {favList.length} */}
            {arrFavorite?.map((shoes) => (
              <Slide shoes={shoes} key={shoes.id} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center gap-y-4">
            <div>
              <HiOutlineDocument className="size-10 lg:size-16" />
            </div>
            <span className="text-sm md:text-base ">
              هنوز محصولی به علاقه مندی ها اضافه نکردید.
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorite;
