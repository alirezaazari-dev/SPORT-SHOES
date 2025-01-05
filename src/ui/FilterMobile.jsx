import { useEffect } from "react";
import { createPortal } from "react-dom";

function FilterMobile({ children, isShowFilter }) {
  return createPortal(
    <div
      className={` ${
        isShowFilter
          ? "block animate-slideUpFilter"
          : "animate-slideDownFilter hidden"
      } lg:hidden h-screen w-full bg-white fixed inset-0 z-[60] overflow-y-auto`}
    >
      {children}
    </div>,
    document.body
  );
}

export default FilterMobile;
