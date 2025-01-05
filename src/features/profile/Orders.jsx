import { useAuth } from "../../context/AuthContext";
import { useLocation, useSearchParams } from "react-router-dom";
import { HiOutlineDocument } from "react-icons/hi2";
import { changeEnToFaNumber } from "../../services/changeDigitsNumber";
import { useUser } from "../Login/useUser";
import CloseSectionProfile from "../../ui/CloseSectionProfile";
import { useEffect } from "react";

function Orders({ isMobile }) {
  const { idUser, isAuthenticated } = useAuth();
  const { user, isLoadingUser } = useUser(idUser);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  // const { activeTab } = useParams();
  // console.log(activeTab);
  const activeTab = searchParams.get("activeTab");

  function handleChangeActiveTab(e) {
    searchParams.set("activeTab", e.target.dataset.query);
    setSearchParams(() => searchParams);
  }

  return (
    <div className="col-span-2 p-4 text-sm md:text-base lg:text-lg text-zinc-700 bg-white shadow-2xl rounded-2xl border-4 min-h-full lg:min-h-fit">
      <div className="flex flex-col gap-y-8">
        {/* header */}
        <div className="flex justify-between text-black">
          <h4 className="font-ShabnamBold text-lg md:text-xl underline">
            تاریخچه سفارشات
          </h4>
          <CloseSectionProfile />
        </div>
        <div className="flex gap-x-6 border-b">
          <div
            data-query="current"
            className={`cursor-pointer ${
              !activeTab || activeTab === "current"
                ? "border-b-4 border-b-black"
                : ""
            }`}
            onClick={handleChangeActiveTab}
          >
            جاری ({changeEnToFaNumber(user.currentOrders.length)})
          </div>
          <div
            data-query="delivered"
            className={`cursor-pointer ${
              activeTab === "delivered" ? "border-b-4 border-b-black" : ""
            }`}
            onClick={handleChangeActiveTab}
          >
            تحویل شده ({changeEnToFaNumber(user.deliveredOrders.length)})
          </div>
          <div
            data-query="returned"
            className={`cursor-pointer ${
              activeTab === "returned" ? "border-b-4 border-b-black" : ""
            }`}
            onClick={handleChangeActiveTab}
          >
            مرجوعی ({changeEnToFaNumber(user.returnedOrders.length)})
          </div>
        </div>
        {/* contents */}
        {(!activeTab || activeTab === "current") && (
          <div>
            {user.currentOrders.length > 0 ? (
              <div>پر</div>
            ) : (
              <div className="flex flex-col justify-center items-center gap-y-4">
                <div>
                  <HiOutlineDocument className="size-10 lg:size-16" />
                </div>
                <span className="text-sm md:text-base ">
                  هنوز هیچ سفارشی ندادید.
                </span>
              </div>
            )}
          </div>
        )}
        {activeTab === "delivered" && (
          <div>
            {user.deliveredOrders.length > 0 ? (
              <div>پر</div>
            ) : (
              <div className="flex flex-col justify-center items-center gap-y-4">
                <div>
                  <HiOutlineDocument className="size-10 lg:size-16" />
                </div>
                <span className="text-sm md:text-base ">
                  هنوز هیچ سفارشی ندادید.
                </span>
              </div>
            )}
          </div>
        )}
        {activeTab === "returned" && (
          <div>
            {user.returnedOrders.length > 0 ? (
              <div>پر</div>
            ) : (
              <div className="flex flex-col justify-center items-center gap-y-4">
                <div>
                  <HiOutlineDocument className="size-10 lg:size-16" />
                </div>
                <span className="text-sm md:text-base ">
                  هنوز هیچ سفارشی ندادید.
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Orders;
