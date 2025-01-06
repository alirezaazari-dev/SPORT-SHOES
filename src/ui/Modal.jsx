import { createPortal } from "react-dom";
import Overlay from "./Overlay";
import { FaXmark } from "react-icons/fa6";
import { useOutsideClick } from "../hooks/useOutsideClick";

function Modal({ closeModal, title, children }) {
  const container = useOutsideClick(closeModal);

  return createPortal(
    <div className="flex items-center justify-center fixed top-0 left-0 w-full h-screen z-[80]">
      <div
        ref={container}
        className="flex flex-col gap-y-8 p-2 lg:p-4 w-[95%] md:w-[75%] lg:w-[60%] min-h-fit lg:min-h-fit bg-white rounded-2xl border-4"
      >
        <div className="flex justify-between">
          <h4 className="font-ShabnamBold text-lg md:text-xl underline">
            {title}
          </h4>
          <button onClick={closeModal}>
            <FaXmark className="size-5 " />
          </button>
        </div>
        {children}
      </div>
      <Overlay onClick={closeModal} />
    </div>,
    document.body
  );
}

export default Modal;
