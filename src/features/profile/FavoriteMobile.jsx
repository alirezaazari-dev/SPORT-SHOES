import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";
import CloseSectionProfile from "../../ui/CloseSectionProfile";

function FavoriteMobile({ children }) {
  const location = useLocation();
  return createPortal(
    <div
      className={`${
        location.pathname.includes("/profile/favorite")
          ? "block animate-slideUpFilter translate-y-0"
          : "hidden animate-slideDownFilter translate-y-full"
      } lg:hidden w-full  bg-white fixed inset-0 z-[60] overflow-y-auto scrollable-content`}
    >
      {/* <CloseSectionProfile link={"/profile"} /> */}
      {children}
    </div>,
    document.body
  );
}

export default FavoriteMobile;
