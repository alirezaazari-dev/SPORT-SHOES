import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";
import CloseSectionProfile from "../../ui/CloseSectionProfile";

function PersonalInfoMobile({ children }) {
  const location = useLocation();
  return createPortal(
    <div
      className={`${
        location.pathname.includes("/profile/personal-info")
          ? "block animate-slideUpFilter translate-y-0"
          : "hidden animate-slideDownFilter translate-y-full"
      } lg:hidden w-full bg-white fixed inset-0 z-[60] overflow-y-auto`}
    >
      {/* <CloseSectionProfile link={"/profile"} /> */}
      {children}
    </div>,
    document.body
  );
}

export default PersonalInfoMobile;
