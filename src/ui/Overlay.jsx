import { createPortal } from "react-dom";

function Overlay({ onClick = null }) {
  return createPortal(
    <div
      className="fixed top-0 left-0 w-full h-screen bg-zinc-800/20 backdrop-blur-sm z-[70] transition-all"
      onClick={onClick}
    ></div>,
    document.body
  );
}

export default Overlay;
