import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useScrollTop } from "../hooks/useScrollTop";
import SectionTitle from "../ui/SectionTitle";
import SectionSubtitle from "../ui/SectionSubtitle";
import { FaRegEdit } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import { RiHeartLine, RiHome6Line, RiShoppingBag4Line } from "react-icons/ri";
import { HiMiniArrowRightOnRectangle } from "react-icons/hi2";
import { useAuth } from "../context/AuthContext";
import { useEffect, useRef, useState } from "react";
import { useUser } from "../features/Login/useUser";
import { changeEnToFaNumber } from "../services/changeDigitsNumber";
import Spinner from "../ui/Spinner";
import OrdersMobile from "../features/profile/OrdersMobile";
import Orders from "../features/profile/Orders";
import FavoriteMobile from "../features/profile/FavoriteMobile";
import Favorite from "../features/profile/Favorite";
import PersonalInfoMobile from "../features/profile/PersonalInfoMobile";
import PersonalInfo from "../features/profile/PersonalInfo";

function Profile() {
  useScrollTop();
  const navigate = useNavigate();
  const location = useLocation();
  const { idUser, isAuthenticated, logout } = useAuth();
  const { user, isLoadingUser } = useUser(idUser);
  const pathName = location.pathname;
  const [isSticky, setIsSticky] = useState(false);
  const [isThresholdForStop, setIsThresholdForStop] = useState(false);
  const [scrollY, setScrollY] = useState("");
  const shoppingContainer = useRef(null);
  const flexableDiv = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      // const shoppingContainerCurrent = shoppingContainer.current;
      if (shoppingContainer.current) {
        const shoppingContainerCurrentBounding =
          shoppingContainer.current.getBoundingClientRect();

        const flexableDivCurrentBounding =
          flexableDiv.current.getBoundingClientRect();

        if (shoppingContainerCurrentBounding.height > 738) {
          if (shoppingContainerCurrentBounding.top > 42 && isSticky) {
            setIsSticky(false);
          }
          if (shoppingContainerCurrentBounding.top < 42 && !isSticky) {
            setIsSticky(true);
          }
          if (
            shoppingContainerCurrentBounding.bottom >
              flexableDivCurrentBounding.height + 136 &&
            isThresholdForStop
          )
            setIsThresholdForStop(false);
          if (
            shoppingContainerCurrentBounding.bottom <
              flexableDivCurrentBounding.height + 136 &&
            !isThresholdForStop
          )
            setIsThresholdForStop(true);
        } else {
          setIsSticky(false);
          setIsThresholdForStop(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSticky, isThresholdForStop]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsSticky(() => false);
        setIsThresholdForStop(() => false);
        setScrollY(() => "");
        if (!isMobile) setIsMobile(() => true);
      } else {
        if (isMobile) setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      if (!isMobile) setIsMobile(true);
    } else {
      if (isMobile) setIsMobile(false);
    }
  }, [isMobile]);

  useEffect(() => {
    navigate("/profile");
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) window.scrollTo({ top: 0 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, isMobile]);

  function handleLogout() {
    logout();
    navigate("/");
  }

  if (isLoadingUser) return <Spinner />;
  return (
    <section
      ref={shoppingContainer}
      className="container w-full relative my-5 lg:my-10  text-zinc-700 rounded-2xl "
    >
      <div className="">
        {/* page header */}
        <div className="mb-2 md:mb-4">
          <SectionTitle>حساب کاربری</SectionTitle>
          <SectionSubtitle>اطلاعات حساب</SectionSubtitle>
        </div>
        {/* content page */}
        <div className="flex gap-x-4">
          <div
            className={`w-full lg:w-1/3 flex ${
              isThresholdForStop
                ? "flex-col justify-end relative"
                : "items-start"
            } `}
          >
            <aside
              ref={flexableDiv}
              className={`${
                isSticky && !isThresholdForStop
                  ? `lg:fixed 2xl:w-[453px] xl:w-[367px] lg:w-[293px] lg:top-[116px] lg:my-5`
                  : "w-full"
              } max-h-min md:text-lg bg-white shadow-2xl rounded-2xl border-4 overflow-hidden`}
            >
              {/* مشخصات */}
              <div className="">
                <div className="flex justify-between items-center py-4 mx-4">
                  <div className="">
                    <h4 className="font-ShabnamBold">{`${user?.firstName} ${user?.lastName}`}</h4>
                    <span className="text-gray-500">
                      {changeEnToFaNumber(user?.phoneNumber)}
                    </span>
                  </div>
                  <Link to={"personal-info"}>
                    <FaRegEdit className="size-5" />
                  </Link>
                </div>
              </div>
              {/* خلاصه فعالبت ها */}
              <div
                className={`hover:bg-gray-100 hidden lg:block ${
                  pathName === "/profile" ? "border-r-4 border-r-black" : ""
                }`}
              >
                <NavLink
                  to={"/profile"}
                  className="flex justify-start  gap-x-2 py-4 mx-4 border-t-2"
                >
                  <span>
                    <RiHome6Line className="size-6" />
                    {/* <BiHomeSmile /> */}
                  </span>
                  <span className="">خلاصه فعالیت ها</span>
                </NavLink>
              </div>
              {/* سفارش ها */}
              <div
                className={`hover:bg-gray-100 ${
                  pathName === "/profile/orders"
                    ? "border-r-4 border-r-black"
                    : ""
                }`}
              >
                <NavLink
                  to={"orders"}
                  className="flex justify-start  gap-x-2 py-4 mx-4 border-t-2"
                >
                  <span>
                    <RiShoppingBag4Line className="size-6" />
                  </span>
                  <span className="">سفارش ها</span>
                </NavLink>
              </div>
              {/* مورد علاقه ها */}
              <div
                className={`hover:bg-gray-100 ${
                  pathName === "/profile/favorite"
                    ? "border-r-4 border-r-black"
                    : ""
                }`}
              >
                <NavLink
                  to={"favorite"}
                  className="flex justify-start  gap-x-2 py-4 mx-4 border-t-2"
                >
                  <span>
                    <RiHeartLine className="size-6" />
                  </span>
                  <span className="">مورد علاقه ها</span>
                </NavLink>
              </div>
              <div
                className={`hover:bg-gray-100 ${
                  pathName === "/profile/personal-info"
                    ? "border-r-4 border-r-black"
                    : ""
                }`}
              >
                <NavLink
                  to={"personal-info"}
                  className="flex justify-start  gap-x-2 py-4 mx-4 border-t-2"
                >
                  <span>
                    {/* <BiHomeSmile  /> */}
                    <BiUser className="size-6" />
                  </span>
                  <span className="">اطلاعات حساب کاربری</span>
                </NavLink>
              </div>
              <div onClick={handleLogout} className="hover:bg-gray-100 ">
                <div className="flex justify-start  gap-x-2 py-4 mx-4 border-t-2 cursor-pointer">
                  <span>
                    <HiMiniArrowRightOnRectangle className="size-6" />
                  </span>
                  <span className="">خروج</span>
                </div>
              </div>
            </aside>
          </div>
          {/* desktop */}
          <div className="hidden lg:block w-2/3">
            <Outlet />
          </div>
        </div>
        {/* mobile */}
        <div className={`${isMobile ? "block" : "hidden"}`}>
          <OrdersMobile>
            <Orders />
          </OrdersMobile>
          <FavoriteMobile>
            <Favorite />
          </FavoriteMobile>
          <PersonalInfoMobile>
            <PersonalInfo isMobile={isMobile} />
          </PersonalInfoMobile>
        </div>
      </div>
    </section>
  );
}

export default Profile;
