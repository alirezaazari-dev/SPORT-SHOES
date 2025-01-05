import { FaRegFrownOpen } from "react-icons/fa";

function BlogNotFound() {
  return (
    <div
      className={`flex flex-col gap-y-5 justify-center items-center font-ShabnamLight text-base md:text-lg xl:text-xl text-justify w-full min-h-96 col-span-full  p-4 rounded-2xl transition-all`}
    >
      <FaRegFrownOpen className="size-8 lg:size-10" />
      <span>بلاگی با این مشخصات موجود نیست!</span>
    </div>
  );
}

export default BlogNotFound;
