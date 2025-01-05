import { NavLink } from "react-router-dom";
import HeaderSubmenu from "./HeaderSubmenu";

function HeaderMenu() {
  return (
    <ul className="flex items-center md:gap-x-4 lg:gap-x-5 h-full child:leading-[56px] md:text-xl lg:text-2xl text-white tracking-tighter">
      <li>
        <NavLink
          to="/"
          className="font-ShabnamBold text-white underline decoration-white "
        >
          صفحه اصلی
        </NavLink>
      </li>
      <li className="relative group">
        <div className="unSelectable group-hover:underline transition-all duration-300 cursor-pointer">
          فروشگاه
        </div>
        <HeaderSubmenu />
      </li>
      <li className="">
        <NavLink
          to="/about-us"
          className="hover:underline transition-all duration-300"
        >
          درباره ما
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact-us"
          className="hover:underline transition-all duration-300"
        >
          تماس با ما
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className="hover:underline transition-all duration-300"
        >
          بلاگ
        </NavLink>
      </li>
    </ul>
  );
}

export default HeaderMenu;
