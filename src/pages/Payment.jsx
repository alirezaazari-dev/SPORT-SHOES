import { useScrollTop } from "../hooks/useScrollTop";
import FormPayment from "../ui/FormPayment";
import SectionSubtitle from "../ui/SectionSubtitle";
import SectionTitle from "../ui/SectionTitle";
import { calcPrices } from "../services/calcShoppingCartPrices";
import { useState } from "react";
import DiscountComponent from "../features/shoppingCart/DiscountComponent";
import { addCommas, changeEnToFaNumber } from "../services/changeDigitsNumber";
import { useAuth } from "../context/AuthContext";
import { useExtractShoppingCart } from "../features/shoppingCart/useExtractShoppingCart";

function Payment() {
  const { idUser } = useAuth();
  const { arrShop, isLoading: isLoadingShop } = useExtractShoppingCart(idUser);
  useScrollTop();
  const [isCorrectDiscount, setIsCorrectDiscount] = useState(false);

  if (isLoadingShop) return <div>Loading...</div>;
  return (
    <section className="container w-full relative my-5 lg:my-10  text-zinc-700  rounded-2xl ">
      <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-5">
        {/* prices */}
        <div className="">
          <div className="mb-2 md:mb-4">
            <SectionTitle>مبلغ قابل پرداخت</SectionTitle>
            <SectionSubtitle>کد تخفیف</SectionSubtitle>
          </div>
          <div className="w-full xl:max-w-2xl p-4 md:p-8  border-4 bg-white shadow-2xl rounded-2xl text-sm md:text-base lg:text-lg ">
            <div className="flex flex-col gap-y-4 divide-y-2 mb-4">
              <div>
                <DiscountComponent
                  isCorrectDiscount={isCorrectDiscount}
                  setIsCorrectDiscount={setIsCorrectDiscount}
                />
              </div>
              <div className="flex flex-col gap-y-2 pt-4">
                {/* total price */}
                <div className="flex justify-between">
                  <div>
                    <span className="font-ShabnamBold">مبلغ کل</span>
                  </div>
                  <div className="">
                    <span className="">
                      {addCommas(
                        changeEnToFaNumber(
                          calcPrices(arrShop, isCorrectDiscount).totalPrice
                        )
                      ) + " "}
                    </span>
                    <span className="lg:text-base tracking-tighter">تومان</span>
                  </div>
                </div>
                {/* profit */}
                <div className="flex justify-between">
                  <div>
                    <span className="font-ShabnamBold">تخفیف</span>
                  </div>
                  <div className={`${isCorrectDiscount && "text-green-800"}`}>
                    <span className="">
                      {addCommas(
                        changeEnToFaNumber(
                          calcPrices(arrShop, isCorrectDiscount).profit
                        )
                      ) + " "}
                    </span>
                    <span className=" lg:text-base tracking-tighter">
                      تومان
                    </span>
                  </div>
                </div>
              </div>
              {/* payable */}
              <div className="flex justify-between pt-4">
                <div>
                  <span className="font-ShabnamBold">مبلغ قابل پرداخت</span>
                </div>
                <div className={`${isCorrectDiscount && "text-green-800"}`}>
                  <span className="">
                    {addCommas(
                      changeEnToFaNumber(
                        calcPrices(arrShop, isCorrectDiscount).payable
                      )
                    ) + " "}
                  </span>
                  <span className=" lg:text-base tracking-tighter">تومان</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* imformation */}
        <div>
          <div className="mb-2 md:mb-4">
            <SectionTitle>تایید پرداخت</SectionTitle>
            <SectionSubtitle>اطلاعات گیرنده</SectionSubtitle>
          </div>
          <div className="w-full xl:max-w-2xl p-4 md:p-8  border-4 bg-white shadow-2xl rounded-2xl">
            <FormPayment />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Payment;
