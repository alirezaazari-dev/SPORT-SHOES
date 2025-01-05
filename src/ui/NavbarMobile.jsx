import { createPortal } from "react-dom";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";

import {
  BiBriefcase,
  BiHomeSmile,
  BiPhoneOutgoing,
  BiShoppingBag,
  BiUser,
} from "react-icons/bi";
import { CgFileDocument } from "react-icons/cg";
import { FaXmark } from "react-icons/fa6";
import {
  HiMiniArrowRightEndOnRectangle,
  HiMiniChevronDown,
} from "react-icons/hi2";
import { PiShoppingCart } from "react-icons/pi";
import { NavLink, useLocation } from "react-router-dom";
import Overlay from "./Overlay";
import { useAuth } from "../context/AuthContext";
import { changeEnToFaNumber } from "../services/changeDigitsNumber";
import { useEffect } from "react";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 0,
    top: 1,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "4px 3px 0 3px",
    fontSize: "18px",
  },
}));

const categories = [
  {
    id: 1,
    name: "فوتبال",
    category: "football",
    image: "../images/categories/football.png",
  },
  {
    id: 2,
    name: "رانینگ",
    category: "running",
    image: "../images/categories/running.png",
  },
  {
    id: 3,
    name: "بسکتبال",
    category: "basketball",
    image: "../images/categories/basketball.png",
  },
  {
    id: 4,
    name: "فیتنس",
    category: "fitness",
    image: "../images/categories/fitness.png",
  },
];

function NavbarMobile({
  isShowNavbar,
  isShowCategory,
  handleShowNavbar,
  handleShowCategory,
  shoppingCart,
}) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  return createPortal(
    <div
      className={`scrollable-content nav w-64 min-h-screen fixed top-0 bottom-0 ${
        isShowNavbar ? "right-0" : "-right-64"
      }  z-[80] pt-3 px-4 bg-white transition-all duration-500 overflow-y-auto md:hidden `}
    >
      {/* <!-- nav header --> */}
      <div className="flex items-center justify-between pt-2 pb-4 border-b-2">
        <div className="flex">
          <img
            src="../images/logoBlack.png"
            alt="Sport Shoes"
            className="w-44"
          />
        </div>
        <div className="close-nav-btn">
          <FaXmark
            className="size-5 text-black cursor-pointer"
            onClick={handleShowNavbar}
          />
        </div>
      </div>
      {/* <!-- nav menu --> */}
      <div
        className="bg-zinc-700/15 mt-6 rounded-2xl"
        onClick={handleShowNavbar}
      >
        <NavLink
          to="/"
          className="font-ShabnamBold flex gap-x-2 py-2 pr-2.5 text-black "
        >
          <BiHomeSmile className="size-5" />
          <span>صفحه اصلی</span>
        </NavLink>
      </div>
      <ul className="space-y-6 mt-4 text-zinc-700 pb-8 border-b-2">
        <li className="pr-2.5">
          <div href="#" className="flex flex-col gap-y-2 transition-all">
            <div
              className={`shop ${
                isShowCategory ? "text-black" : ""
              } flex w-full justify-between gap-x-2 cursor-pointer`}
              onClick={handleShowCategory}
            >
              <div className="flex gap-x-2">
                <BiShoppingBag className="size-5" />
                <span>فروشگاه</span>
              </div>
              <div className="">
                <HiMiniChevronDown
                  className={`size-5 ml-1 ${
                    isShowCategory ? "rotate-180" : ""
                  }`}
                />
              </div>
            </div>
            {isShowCategory && (
              <div className="flex flex-col gap-y-2 mr-7">
                {categories.map((cur, i) => (
                  <div onClick={handleShowNavbar} key={i}>
                    <NavLink to={`/${cur.category}`}>{cur.name}</NavLink>
                  </div>
                ))}
              </div>
            )}
          </div>
        </li>
        <li onClick={handleShowNavbar}>
          <NavLink to="/blog" className="flex gap-x-2 pr-2.5">
            <CgFileDocument className="size-5" />
            <span>بلاگ</span>
          </NavLink>
        </li>
        <li onClick={handleShowNavbar}>
          <NavLink to="/about-us" className="flex gap-x-2 pr-2.5">
            <BiBriefcase className="size-5" />
            <span>درباره ما</span>
          </NavLink>
        </li>
        <li onClick={handleShowNavbar}>
          <NavLink to="/contact-us" className="flex gap-x-2 pr-2.5">
            <BiPhoneOutgoing className="size-5" />
            <span>تماس با ما</span>
          </NavLink>
        </li>
      </ul>
      {/* <!-- nav footer --> */}
      <div className="flex flex-col gap-y-6 items-start my-8 pr-2.5">
        <div onClick={handleShowNavbar}>
          <NavLink
            to={`${isAuthenticated ? "/profile" : "/users/login"}`}
            className="inline-flex gap-x-2 items-center"
          >
            {isAuthenticated ? (
              <BiUser className="size-5" />
            ) : (
              <HiMiniArrowRightEndOnRectangle className="size-5" />
            )}
            <span>{isAuthenticated ? "حساب کاربری" : "ورود | ثبت نام"}</span>
          </NavLink>
        </div>
        <div onClick={handleShowNavbar}>
          <NavLink
            to={isAuthenticated ? "/shopping-cart" : location.pathname}
            className="inline-flex gap-x-2 items-center"
          >
            <StyledBadge
              badgeContent={changeEnToFaNumber(
                shoppingCart?.reduce((prev, cur) => cur.amount + prev, 0)
              )}
              color="primary"
            >
              <PiShoppingCart className="size-5" />
            </StyledBadge>
            <span>سبد خرید</span>
          </NavLink>
        </div>
      </div>
      {isShowNavbar && <Overlay onClick={handleShowNavbar} />}
    </div>,
    document.body
  );
}

export default NavbarMobile;
