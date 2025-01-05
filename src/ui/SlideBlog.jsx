import { Link } from "react-router-dom";
import { changeEnToFaNumber } from "../services/changeDigitsNumber";

function SlideBlog({ blog }) {
  return (
    <Link
      to={`/blog/${blog.id}`}
      className="blog min-h-50 max-h-50 md:min-h-72 md:max-h-72 lg:min-h-96 lg:max-h-96 relative bg-white rounded-2xl shadow-xl overflow-hidden group"
    >
      <img
        src={blog.image}
        alt="blogs"
        className="size-full group-hover:scale-110 transition-all duration-300"
      />
      <span className="absolute px-1 mx-2 text-zinc-700 bg-white top-2 flex items-center justify-center text-xs/[24px] md:text-base/[34px] rounded-xl">
        {changeEnToFaNumber(blog.date)}
      </span>
      <h3 className="absolute bottom-2 md:bottom-5 z-20 px-2 lg:px-4 text-white  lg:text-lg xl:text-xl 2xl:text-2xl font-ShabnamBold">
        {blog.title}
      </h3>
    </Link>
  );
}

export default SlideBlog;
