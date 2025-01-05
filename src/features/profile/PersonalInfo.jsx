import { useAuth } from "../../context/AuthContext";
import { useUser } from "../Login/useUser";
import { FaRegEdit } from "react-icons/fa";
import Spinner from "../../ui/Spinner";
import { changeEnToFaNumber } from "../../services/changeDigitsNumber";
import { HiOutlinePlus } from "react-icons/hi2";
import CloseSectionProfile from "../../ui/CloseSectionProfile";
import Modal from "../../ui/Modal";
import { useEffect, useState } from "react";
import FormPersonalInfo from "../../ui/FormPersonalInfo";
import FormPassword from "../../ui/FormPassword";
import FormCartNumber from "../../ui/FormCartNumber";
import { useLocation } from "react-router-dom";

function PersonalInfo({ isMobile }) {
  const { idUser } = useAuth();
  const { user, isLoadingUser } = useUser(idUser);
  const location = useLocation();
  const [isShowFormPersonalInfo, setIsShowFormPersonalInfo] = useState(false);
  const [isShowFormPassword, setIsShowFormPassword] = useState(false);
  const [isShowFormCartNumber, setIsShowFormCartNumber] = useState(false);

  function handleShowFormPersonalInfo() {
    setIsShowFormPersonalInfo((cur) => !cur);
  }

  function handleShowFormPassword() {
    setIsShowFormPassword((cur) => !cur);
  }

  function handleShowFormCartNumber() {
    setIsShowFormCartNumber((cur) => !cur);
  }

  useEffect(() => {
    if (
      !isMobile &&
      (isShowFormPersonalInfo || isShowFormPassword || isShowFormCartNumber)
    ) {
      document.body.style.overflowY = "hidden";
    } else if (
      isMobile &&
      (location.pathname.includes("/profile/personal-info") ||
        location.pathname.includes("/profile/orders") ||
        location.pathname.includes("/profile/favorite"))
    ) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [
    isMobile,
    isShowFormPersonalInfo,
    isShowFormPassword,
    isShowFormCartNumber,
    location.pathname,
  ]);

  if (isLoadingUser) return <Spinner />;
  return (
    <div className="col-span-2 p-2 lg:p-4 text-sm md:text-base lg:text-lg text-zinc-700 bg-white shadow-2xl rounded-2xl border-4 min-h-full lg:min-h-fit">
      <div className="flex flex-col gap-y-8 text-black">
        {/* header */}
        <div className="flex justify-between">
          <h4 className="font-ShabnamBold text-lg md:text-xl underline">
            اطلاعات حساب کاربری
          </h4>
          <CloseSectionProfile />
        </div>
        {/* info */}
        <div className="grid grid-cols-1 2xl:grid-cols-2 ">
          {/* modals */}
          {/* اطلاعات شخصی */}
          {isShowFormPersonalInfo && (
            <Modal
              closeModal={handleShowFormPersonalInfo}
              title="ثبت اطلاعات شناسایی"
            >
              <FormPersonalInfo />
            </Modal>
          )}
          {/* پسورد */}
          {isShowFormPassword && (
            <Modal
              closeModal={handleShowFormPassword}
              title={user?.password ? "تغییر رمز عبور" : "ثبت رمز عبور"}
            >
              <FormPassword />
            </Modal>
          )}
          {/* شماره کارت */}
          {isShowFormCartNumber && (
            <Modal
              closeModal={handleShowFormCartNumber}
              title={user?.cartNumber ? "تغییر شماره کارت" : "ثبت شماره کارت"}
            >
              <FormCartNumber />
            </Modal>
          )}
          {/* نام */}
          <div className="flex justify-between items-center px-4 py-2 2xl:border-b  min-h-20">
            <div className="flex flex-col gap-y-1">
              <span className="text-zinc-600">نام و نام خانوادگی</span>
              <span className="text-black">
                {user?.firstName ? `${user?.firstName} ${user?.lastName}` : ""}
              </span>
            </div>
            <button onClick={handleShowFormPersonalInfo}>
              {user?.firstName || user?.lastName ? (
                <FaRegEdit className="size-5" />
              ) : (
                <HiOutlinePlus className="size-5" />
              )}
            </button>
          </div>
          {/* شماره */}
          <div className="flex justify-between items-center px-4 py-2 2xl:border-b 2xl:border-r min-h-20">
            <div className="flex flex-col gap-y-1">
              <span className="text-zinc-600">شماره موبایل</span>
              <span className="text-black">
                {user?.phoneNumber ? changeEnToFaNumber(user?.phoneNumber) : ""}
              </span>
            </div>
            <button onClick={handleShowFormPersonalInfo}>
              {user?.phoneNumber ? (
                <FaRegEdit className="size-5" />
              ) : (
                <HiOutlinePlus className="size-5" />
              )}
            </button>
          </div>
          {/* ایمیل */}
          <div className="flex justify-between items-center px-4 py-2 2xl:border-b   min-h-20">
            <div className="flex flex-col gap-y-1">
              <span className="text-zinc-600">ایمیل</span>
              <span className="text-black">
                {user?.email ? user?.email : ""}
              </span>
            </div>
            <button onClick={handleShowFormPersonalInfo}>
              {user?.email ? (
                <FaRegEdit className="size-5" />
              ) : (
                <HiOutlinePlus className="size-5" />
              )}
            </button>
          </div>
          {/* رمز عبور */}
          <div className="flex justify-between items-center px-4 py-2 2xl:border-b 2xl:border-r min-h-20">
            <div className="flex flex-col gap-y-1">
              <span className="text-zinc-600">رمز عبور</span>
              <span className="text-black">
                {user?.password ? "●●●●●●●" : ""}
              </span>
            </div>
            <button onClick={handleShowFormPassword}>
              {user?.password ? (
                <FaRegEdit className="size-5" />
              ) : (
                <HiOutlinePlus className="size-5" />
              )}
            </button>
          </div>
          {/* بازگشت وجه */}
          <div className="flex justify-between items-center px-4 py-2 2xl:border-b min-h-20">
            <div className="flex flex-col gap-y-1">
              <span className="text-zinc-600">روش بازگشت وجه</span>
              <span className="text-black">
                {user?.cartNumber ? user?.cartNumber : ""}
              </span>
            </div>
            <button onClick={handleShowFormCartNumber}>
              {user?.cartNumber ? (
                <FaRegEdit className="size-5" />
              ) : (
                <HiOutlinePlus className="size-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
