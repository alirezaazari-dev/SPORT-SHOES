import { HiMiniArrowRightEndOnRectangle } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { FaRegUser } from "react-icons/fa";
import { BiUser } from "react-icons/bi";

function LoginLink() {
  const { user, isAuthenticated, login, logout } = useAuth();
  return (
    <NavLink
      to={`${isAuthenticated ? "/profile" : "/users/login"}`}
      className="flex gap-x-2.5 items-center tracking-tightest  hover:underline "
    >
      {isAuthenticated ? (
        // <FaRegUser className="size-6 lg:size-8" />
        <BiUser className="size-6 lg:size-8" />
      ) : (
        <HiMiniArrowRightEndOnRectangle className="size-7 lg:size-8" />
      )}

      <span className="tracking-tightest hidden xl:inline-block">
        {isAuthenticated ? "حساب کاربری" : "ورود | ثبت نام"}
      </span>
    </NavLink>
  );
}

export default LoginLink;
