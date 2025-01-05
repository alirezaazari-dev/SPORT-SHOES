import { changeEnToFaNumber } from "../../services/changeDigitsNumber";

function BlogImage({ blog }) {
  return (
    <div className="flex justify-between">
      <div className="relative w-full lg:w-2/3 rounded-2xl shadow-x mx-auto">
        <img
          src={blog.image}
          alt={blog.id}
          className="
        rounded-2xl shadow-xl"
        />
        <span className="absolute px-1 mx-2 text-zinc-700 bg-white top-2 flex items-center justify-center text-xs/[24px] md:text-base/[34px] rounded-xl">
          {changeEnToFaNumber(blog.date)}
        </span>
      </div>
    </div>
  );
}

export default BlogImage;
