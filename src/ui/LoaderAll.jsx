import { createPortal } from "react-dom";
import Spinner from "./Spinner";

function LoaderAll() {
  return createPortal(
    <div className="flex justify-center items-center fixed inset-0 z-[1000] bg-black">
      {/* <Spinner /> */}
      <img
        src="../images/logoWhite.png"
        alt="loading"
        className="rounded-full w-[250px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[650px] 2xl:w-[700px] animate-pulse"
      />
    </div>,
    document.body
  );
}

export default LoaderAll;
