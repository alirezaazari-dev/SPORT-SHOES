import { useAuth } from "../../context/AuthContext";
import { SiRundeck } from "react-icons/si";
import { GiReturnArrow } from "react-icons/gi";
import { GiConfirmed } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import { use, useEffect } from "react";
import { useUser } from "../Login/useUser";
import { changeEnToFaNumber } from "../../services/changeDigitsNumber";

function ProfileHome() {
  const { idUser, isAuthenticated } = useAuth();
  const { user, isLoadingUser } = useUser(idUser);

  return (
    <div className="col-span-2 p-4 md:text-lg bg-white shadow-2xl rounded-2xl border-4 ">
      <div className="flex flex-col gap-y-8">
        {/* header */}
        <div>
          <h4 className="font-ShabnamBold text-lg md:text-xl underline">
            سفارش های من
          </h4>
        </div>
        {/* contents */}
        <div className="flex justify-between">
          <Link
            to="orders?activeTab=current"
            className="flex items-center gap-x-3"
          >
            <div>
              <SiRundeck className="size-10" />
            </div>
            <div className="flex flex-col">
              <span>
                {changeEnToFaNumber(user?.currentOrders.length) + " "} سفارش
              </span>
              <span>جاری</span>
            </div>
          </Link>
          <Link
            to="orders?activeTab=delivered"
            className="flex items-center gap-x-3"
          >
            <div>
              <GiConfirmed className="size-10" />
              {/* <SiRundeck  /> */}
            </div>
            <div className="flex flex-col">
              <span>
                {changeEnToFaNumber(user?.deliveredOrders.length) + " "} سفارش
              </span>
              <span>تحویل شده</span>
            </div>
          </Link>
          <Link
            to="orders?activeTab=returned"
            className="flex items-center gap-x-3"
          >
            <div>
              {/* <TbTruckReturn  /> */}
              <GiReturnArrow className="size-10" />
              {/* <SiRundeck  /> */}
            </div>
            <div className="flex flex-col">
              <span>
                {changeEnToFaNumber(user?.returnedOrders.length) + " "} سفارش
              </span>
              <span>مرجوعی</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfileHome;
