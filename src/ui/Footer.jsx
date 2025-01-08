import { Link, NavLink, useLocation } from "react-router-dom";
import Services from "./Services";
import { useEffect, useState } from "react";
import { FaSquareInstagram } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { BiPhoneOutgoing } from "react-icons/bi";
import { FaTelegram, FaTelegramPlane } from "react-icons/fa";
import QuickAccess from "./QuickAccess";
import { useAuth } from "../context/AuthContext";
import { changeEnToFaNumber } from "../services/changeDigitsNumber";

const contact = {
  phone: "+989012345678",
  email: "sportshoes@gmail.com",
  telegram: "@sportshoes",
  instagram: "@sportshoes",
};

function Footer() {
  const { isAuthenticated } = useAuth();
  const [isMobile, setIsMobile] = useState(false);

  const location = useLocation();
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    if (isMobile && location.pathname === "/shopping-cart") {
      if (isShow) setIsShow(false);
    } else {
      if (!isShow) setIsShow(true);
    }
  }, [location.pathname, isMobile, isShow]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        if (!isMobile) setIsMobile(true);
      } else {
        if (isMobile) setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile, window.innerWidth]);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      if (!isMobile) setIsMobile(true);
    } else {
      if (isMobile) setIsMobile(false);
    }
  }, [isMobile, window.innerWidth]);

  if (isShow)
    return (
      <>
        <Services />
        <footer className="footer">
          {/* <!-- main footer --> */}
          <div className="relative bg-white/40 text-zinc-700 pb-10 md:pb-11">
            <div className="w-[95%] xl:w-[90%] mx-auto ">
              {/* <!-- top --> */}
              <div className="flex flex-wrap justify-between pt-8 md:pt-[62px] gap-y-10 md:gap-x-20">
                {/* <!-- right --> */}
                <div className="flex-grow xl:w-[400px]">
                  <div className="flex gap-x-3.5 mb-6 md:mb-4.5">
                    <NavLink to="/">
                      <img
                        src="../images/logoBlack.png"
                        alt="Sport-Shoes-Logo"
                        className="w-[300px] md:w-[350px] lg:w-[400px] cursor-pointer"
                      />
                    </NavLink>
                  </div>
                  <p className="text-lg md:text-xl/[48px] text-justify">
                    ما به عنوان واردکننده رسمی کفش های ورزشی برند معتبر نایک، با
                    افتخار به جامعه ورزشی ایران خدمت می کنیم. ما با ارائه طیف
                    گسترده ای از کفش های ورزشی مدرن، به دنبال ایجاد تجربه ای لذت
                    بخش و با کیفیت برای مشتریان خود هستیم.
                  </p>
                </div>
                {/* <!-- center --> */}
                <div className="flex flex-col md:mt-[26px] w-[390px]">
                  <h3 className="font-ShabnamBold text-black text-xl md:text-2xl mb-6 md:mb-7">
                    دسترسی سریع
                  </h3>
                  <div className="grid grid-cols-2 gap-x-5 child:mb-2.5 md:child:mb-5 child-hover:text-black">
                    <QuickAccess link="/">
                      <span>صفحه اصلی</span>
                    </QuickAccess>
                    <QuickAccess link="/football">
                      <span>فوتبال</span>
                    </QuickAccess>
                    <QuickAccess
                      link={isAuthenticated ? "/profile" : "/users/login"}
                    >
                      <span>
                        {isAuthenticated ? "حساب کاربری" : "ورود | ثبت نام"}
                      </span>
                    </QuickAccess>
                    <QuickAccess link="/running">
                      <span>رانینگ</span>
                    </QuickAccess>
                    <QuickAccess link="/about-us">
                      <span>درباره ما</span>
                    </QuickAccess>
                    <QuickAccess link="/basketball">
                      <span>بسکتبال</span>
                    </QuickAccess>
                    <QuickAccess link={"/blog"}>
                      <span>بلاگ</span>
                    </QuickAccess>
                    <QuickAccess link="/fitness">
                      <span>فیتنس</span>
                    </QuickAccess>
                  </div>
                </div>
                {/* <!-- left --> */}
                <div className="w-auto md:mt-[26px]">
                  <h3 className="font-ShabnamBold text-black text-xl md:text-2xl  mb-6 md:mb-7">
                    در تماس باشیم
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  text-base md:text-lg lg:text-xl mb-4">
                    {/* phone */}
                    <div className="flex flex-col justify-center items-center py-3 px-4 border-4  rounded-2xl ">
                      <div className="flex justify-center gap-x-2 items-center mb-2">
                        <span>
                          <BiPhoneOutgoing className="size-6 md:size-8" />
                        </span>
                        <span>تلفن</span>
                      </div>
                      <div className="ltr-text">
                        <span>{changeEnToFaNumber(contact.phone)}</span>
                      </div>
                    </div>
                    {/* email */}
                    <div className="flex flex-col justify-center items-center py-3 px-4 border-4  rounded-2xl">
                      <div className="flex justify-center gap-x-2 items-center mb-2">
                        <span>
                          <MdAttachEmail className="size-6 md:size-8" />
                        </span>
                        <span>ایمیل</span>
                      </div>
                      <div className="ltr-text">
                        <span>{contact.email}</span>
                      </div>
                    </div>
                    {/* telegram */}
                    <div className="flex flex-col justify-center items-center py-3 px-4 border-4  rounded-2xl">
                      <div className="flex justify-center gap-x-2 items-center mb-2">
                        <span>
                          <FaTelegramPlane className="size-6 md:size-8" />
                        </span>
                        <span>تلگرام</span>
                      </div>
                      <div className="ltr-text">
                        <span>{contact.telegram}</span>
                      </div>
                    </div>
                    {/* instagram */}
                    <div className="flex flex-col justify-center items-center py-3 px-4 border-4  rounded-2xl">
                      <div className="flex justify-center gap-x-2 items-center mb-2">
                        <span>
                          {/* <FaInstagram /> */}
                          <FaSquareInstagram className="size-6 md:size-8" />
                        </span>
                        <span>اینستاگرام</span>
                      </div>
                      <div className="ltr-text">
                        <span>{contact.instagram}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- down --> */}
              <div className="flex flex-wrap gap-x-5 gap-y-5 justify-between pt-10 md:pt-11 mt-10 md:mt-11 border-t-2 ">
                <div className="flex items-center gap-x-2.5">
                  <div className="flex-center size-[25px] lg:size-[30px] border border-black/10 rounded-full">
                    <div className="flex-center size-[16px] lg:size-[21px] border border-black/40 rounded-full">
                      <div className="size-[5px] lg:size-[10px] border border-black/10 bg-black/80 rounded-full"></div>
                    </div>
                  </div>
                  <p className="font-DanaMedium text-xs md:text-base">
                    تمام حقوق این رابط کاربری متعلق به
                    <span className="text-black font-ShabnamBold">
                      {" "}
                      SPORT SHOES{" "}
                    </span>{" "}
                    میباشد و هیچ فردی اجازه استفاده آن را در مصارف شخصی و تجاری
                    ندارد.
                  </p>
                </div>
                <p className="ltr-text flex-grow font-DanaMedium text-xs md:text-base">
                  Copyright © 2025{" "}
                  <span className="text-black font-ShabnamBold">
                    {" "}
                    SPORT SHOES{" "}
                  </span>{" "}
                  . All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
}

export default Footer;
