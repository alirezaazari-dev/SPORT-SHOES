import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";

function OrdersMobile({ children }) {
  const location = useLocation();

  return createPortal(
    <div
      className={`${
        location.pathname.includes("/profile/orders")
          ? "block animate-slideUpFilter translate-y-0"
          : "hidden animate-slideDownFilter translate-y-full"
      } lg:hidden w-full bg-white fixed inset-0 z-[60] overflow-y-auto scrollable-content`}
    >
      {children}
    </div>,
    document.body
  );
}

export default OrdersMobile;
