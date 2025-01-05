import { NavLink } from "react-router-dom";

const categoris = [
  {
    id: 1,
    name: "فوتبال",
    page: "/football",
  },
  {
    id: 2,
    name: "رانینگ",
    page: "/running",
  },
  {
    id: 3,
    name: "بسکتبال",
    page: "/basketball",
  },
  {
    id: 4,
    name: "فیتنس",
    page: "/fitness",
  },
];

function HeaderSubmenu() {
  return (
    <div className="flex flex-col flex-grow justify-center md:w-32 lg:w-36 absolute top-[80%] right-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible space-y-4 transition-all delay-75 p-6 bg-white rounded-2xl border-t-[4px] border-black tracking-normal shadow-normal text-base lg:text-lg text-zinc-700 child:transition-all child:block child-hover:text-black">
      {categoris.map((category) => (
        <NavLink to={category.page} key={category.id}>
          {category.name}
        </NavLink>
      ))}
    </div>
  );
}

export default HeaderSubmenu;
