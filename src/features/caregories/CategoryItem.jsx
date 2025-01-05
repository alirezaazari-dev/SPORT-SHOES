import { NavLink } from "react-router-dom";

function CategoryItem({ items }) {
  const { name, category, image } = items;
  return (
    <NavLink
      to={`/${category}`}
      className=" flex flex-grow justify-center rounded-2xl bg-white  shadow-lg group py-2 md:py-3 lg:py-4"
    >
      <span className="flex flex-col justify-center items-center w-36 px-3 py-2 rounded-full transition-all delay-150">
        <img
          src={image}
          alt={category}
          className="group-hover:-translate-y-2 group-hover:-rotate-12 transition-all delay-150 w-16 md:w-20 lg:w-24"
        />
        <span className="group-hover:-translate-y-2  transition-all delay-150 -mt-2 ">
          {name}
        </span>
      </span>
    </NavLink>
  );
}

export default CategoryItem;
