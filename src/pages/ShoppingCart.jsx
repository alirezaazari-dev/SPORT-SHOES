import { useEffect, useRef, useState } from "react";

import { calcPrices } from "../services/calcShoppingCartPrices";
import { Link, NavLink } from "react-router-dom";
import ProductShoppingCart from "../features/shoppingCart/ProductShoppingCart";
import { useScrollTop } from "../hooks/useScrollTop";
import { addCommas, changeEnToFaNumber } from "../services/changeDigitsNumber";
import { useAuth } from "../context/AuthContext";
import { useExtractShoppingCart } from "../features/shoppingCart/useExtractShoppingCart";
import Spinner from "../ui/Spinner";
import Button from "../ui/Button";

function ShoppingCart() {
  useScrollTop();
  const { idUser } = useAuth();
  const { arrShop, isLoading: isLoadingShop } = useExtractShoppingCart(idUser);

  // const { shoppingCart, isLoading } = useShoppingCart();
  const [isSticky, setIsSticky] = useState(false);
  const [isThresholdForStop, setIsThresholdForStop] = useState(false);
  const [scrollY, setScrollY] = useState("");
  const shoppingContainer = useRef(null);
  const flexableDiv = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

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
    if (isMobile) window.scrollTo({ top: 0 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, isMobile]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      // const shoppingContainerCurrent = shoppingContainer.current;
      if (shoppingContainer.current && arrShop?.length > 0) {
        const shoppingContainerCurrentBounding =
          shoppingContainer.current.getBoundingClientRect();

        const flexableDivCurrentBounding =
          flexableDiv.current.getBoundingClientRect();

        if (shoppingContainerCurrentBounding.top > 137 && isSticky) {
          setIsSticky(false);
        }
        if (shoppingContainerCurrentBounding.top < 137 && !isSticky) {
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
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSticky, isThresholdForStop, scrollY]);

  if (isLoadingShop) return <Spinner />;
  return (
    <>
      <section
        ref={shoppingContainer}
        className="container w-full  relative my-5 lg:my-10  text-zinc-700  rounded-2xl transition-all overflow-hidden "
      >
        <div className="flex flex-col lg:flex-row lg:gap-x-4">
          {/* محصولات سبد خرید */}
          <div
            className={`w-full ${
              arrShop.length > 0 ? "lg:w-2/3 " : ""
            }  min-h-[200px] lg:min-h-[500px] border-4 border-black/10 text-base lg:text-lg xl:text-xl rounded-2xl py-2 px-4 lg:p-4 lg:mb-0 bg-white shadow-md `}
          >
            {/* title */}
            <div className="flex justify-center items-center gap-x-1 pb-2 lg:pb-4 border-b-2 border-black/40">
              <h3 className="font-ShabnamBold text-xl md:text-2xl lg:text-3xl ">
                سبد خرید
              </h3>
              <span>
                (
                {changeEnToFaNumber(
                  arrShop?.reduce((prev, cur) => cur.amount + prev, 0)
                )}
                )
              </span>
            </div>
            {/* products */}
            <div className="w-full h-full divide-y-2">
              {arrShop.length > 0 ? (
                arrShop.map((product, i) => (
                  <ProductShoppingCart product={product} key={i} />
                ))
              ) : (
                <div className="flex flex-col justify-center items-center gap-y-2 w-full h-[200px] lg:h-full lg:-mt-10">
                  <div>
                    <img
                      className="w-25 md:w-32 lg:w-44 xl:w-56 inline-block"
                      src="../images/svgs/empty-cart.svg"
                      alt="empty-cart"
                    />
                  </div>
                  <span>سبد خرید شما خالی است.</span>
                  <div>
                    <NavLink
                      to="/"
                      className=" flex justify-center font-ShabnamLight text-sm lg:text-lg py-0.5 px-2 lg:px-5 lg:py-2 text-white bg-black rounded-2xl border-4 border-black hover:bg-black/60 hover:border-black/0 transition-all"
                    >
                      بازگشت به صفحه محصولات
                    </NavLink>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/*  خلاصه سبد خرید دسکتاپ */}
          {/* size lg */}
          {arrShop.length > 0 && (
            <aside
              className={`w-1/3 hidden lg:flex ${
                isThresholdForStop
                  ? "flex-col justify-end relative"
                  : "items-start"
              } `}
            >
              {/* summary  */}
              <div
                ref={flexableDiv}
                className={`${
                  isSticky && !isThresholdForStop
                    ? `lg:fixed 2xl:w-[453px] xl:w-[367px] lg:w-[293px] lg:top-[116px] lg:my-5`
                    : "w-full"
                } hidden lg:block border-4 border-black/10 lg:text-lg xl:text-xl tracking-normal rounded-2xl p-4 bg-white shadow-md `}
              >
                <div className="flex justify-center pb-4 mb-4 border-b-2 border-black/40">
                  <h3 className="font-ShabnamBold text-xl md:text-2xl lg:text-3xl">
                    خلاصه سبد خرید
                  </h3>
                </div>

                {/* prices */}
                <div className="flex flex-col lg:gap-y-2 divide-y-2 mb-4">
                  <div className="flex flex-col gap-y-1 ">
                    {/* total price */}
                    <div className="flex justify-between">
                      <div>
                        <span>مبلغ کل</span>
                      </div>
                      <div className="">
                        <span className="">
                          {addCommas(
                            changeEnToFaNumber(calcPrices(arrShop).totalPrice)
                          ) + " "}
                        </span>
                        <span className="lg:text-base tracking-tighter">
                          تومان
                        </span>
                      </div>
                    </div>
                    {/* profit */}
                    <div className="flex justify-between">
                      <div>
                        <span>تخفیف</span>
                      </div>
                      <div>
                        <span className="">
                          {addCommas(
                            changeEnToFaNumber(calcPrices(arrShop).profit)
                          ) + " "}
                        </span>
                        <span className=" lg:text-base tracking-tighter">
                          تومان
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* payable */}
                  <div className="flex justify-between flex-wrap pt-4">
                    <div>
                      <span>مبلغ قابل پرداخت</span>
                    </div>
                    <div>
                      <span className="">
                        {addCommas(
                          changeEnToFaNumber(calcPrices(arrShop).payable)
                        ) + " "}
                      </span>
                      <span className=" lg:text-base tracking-tighter">
                        تومان
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <Button type="link" link="/payment">
                    تایید و تکمیل سفارش
                  </Button>
                </div>
              </div>
            </aside>
          )}
        </div>
      </section>
      {/* ایجاد فاصله برای دیدن کامل سبد */}
      <div className="lg:hidden w-full h-44"></div>
      {/* خلاصه سبد خرید موبایل */}
      {arrShop.length > 0 && (
        <div className=" lg:hidden bg-black text-zinc-200 w-full fixed bottom-0 right-0 left-0 z-30 border-t-4 border-b-4 border-black ">
          {/* خلاصه سبد خرید */}
          {/* size lower lg */}
          {/* summary  */}
          <div
            className=" w-full
                text-base lg:text-lg xl:text-xl tracking-normal rounded-2xl py-2 px-4 shadow-2xl"
          >
            {/* prices */}
            <div className="flex flex-col divide-y-2 divide-zinc-600 mb-2">
              <div className="flex flex-col gap-y-1 ">
                {/* total price */}
                <div className="flex justify-between">
                  <div>
                    <span>مبلغ کل</span>
                  </div>
                  <div className="">
                    <span className="">
                      {addCommas(
                        changeEnToFaNumber(calcPrices(arrShop).totalPrice)
                      ) + " "}
                    </span>
                    <span className="lg:text-base tracking-tighter">تومان</span>
                  </div>
                </div>
                {/* profit */}
                <div className="flex justify-between">
                  <div>
                    <span>تخفیف</span>
                  </div>
                  <div>
                    <span className="">
                      {addCommas(
                        changeEnToFaNumber(calcPrices(arrShop).profit)
                      ) + " "}
                    </span>
                    <span className=" lg:text-base tracking-tighter">
                      تومان
                    </span>
                  </div>
                </div>
              </div>
              {/* payable */}
              <div className="flex justify-between pt-2">
                <div>
                  <span>مبلغ قابل پرداخت</span>
                </div>
                <div>
                  <span className="">
                    {addCommas(
                      changeEnToFaNumber(calcPrices(arrShop).payable)
                    ) + " "}
                  </span>
                  <span className=" lg:text-base tracking-tighter">تومان</span>
                </div>
              </div>
            </div>
            <div>
              <Link
                to="/payment"
                className="font-ShabnamBold flex justify-center items-center text-base p-2 mb-4 text-black bg-white  border-4 border-white hover:bg-white/60 hover:border-black/0 rounded-2xl transition-all"
              >
                تایید و تکمیل سفارش
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ShoppingCart;
