import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center gap-y-5 w-full h-screen text-lg md:text-xl lg:text-2xl bg-black text-white">
      {/* <img
        src="../images/gif/nf1.gif"
        alt="nf"
        className="size-96 rounded-full"
      /> */}
      <h1 className="font-ShabnamBold text-6xl md:text-7xl lg:text-9xl">404</h1>
      <p>متاسفانه صفحه مورد نظر یافت نشد!</p>
      <Link
        to="/"
        className="font-ShabnamBold flex justify-center items-center text-base p-2 mb-4 text-black bg-white  border-4 border-white hover:bg-white/60 hover:border-black/0 rounded-2xl transition-all"
      >
        برگشت به صفحه اصلی
      </Link>
    </div>
  );
}

export default NotFound;
