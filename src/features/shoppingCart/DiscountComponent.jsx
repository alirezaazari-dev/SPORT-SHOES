import { useState } from "react";
import { HiMiniChevronDown } from "react-icons/hi2";

function DiscountComponent({ isCorrectDiscount, setIsCorrectDiscount }) {
  const [isShowDiscount, setIsShowDiscount] = useState(false);
  const [discount, setDiscount] = useState("");
  const [clickedIncorrectDiscount, setClickedIncorrectDiscount] =
    useState(false);

  function handleShowDiscount() {
    setIsShowDiscount((cur) => !cur);
    setClickedIncorrectDiscount(() => false);
    setDiscount("");
  }

  function handleChangeDiscount(e) {
    e.preventDefault();
    setDiscount(e.target.value);
    setClickedIncorrectDiscount(false);
  }

  function handleDiscount(e) {
    e.preventDefault();
    if (!isCorrectDiscount) {
      if (discount === "POOYA") {
        setIsCorrectDiscount(() => true);
        setClickedIncorrectDiscount(() => false);
        setDiscount("");
      } else setClickedIncorrectDiscount(true);
    }
  }

  return (
    <div className="flex flex-col gap-y-4 ">
      <div
        className="flex justify-between cursor-pointer transition-all mb-1"
        onClick={handleShowDiscount}
      >
        <span className="font-ShabnamBold">آیا کد تخفیف دارید؟</span>
        <span>
          {
            <HiMiniChevronDown
              className={`size-6 ${isShowDiscount ? "rotate-180" : ""}`}
            />
          }
        </span>
      </div>
      {isShowDiscount && (
        <div>
          <div className="flex gap-x-2 justify-between">
            <input
              id="discount"
              name="discount"
              type="text"
              value={discount}
              onChange={handleChangeDiscount}
              disabled={isCorrectDiscount}
              // autoComplete="given-name"
              className="block w-full rounded-2xl bg-white px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-black"
            />
            <button
              type="submit"
              onClick={handleDiscount}
              disabled={isCorrectDiscount}
              className="block w-full rounded-2xl bg-black px-3.5 py-2.5 text-center text-base md:text-lg lg:text-xl font-Shabnam text-white shadow-md hover:bg-black/60"
            >
              اعمال کد تخفیف
            </button>
          </div>
          {isCorrectDiscount && (
            <div className="flex mt-2">
              <span className="text-green-800 text-sm">
                کد تخفیف با موفقیت اعمال شد.
              </span>
            </div>
          )}
          {clickedIncorrectDiscount && (
            <div className="flex mt-2">
              <span className="text-red-600/90 text-sm">
                کد تخفیف نامعتبر است.
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default DiscountComponent;
