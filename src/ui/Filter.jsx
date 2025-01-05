import { HiMiniChevronDown } from "react-icons/hi2";
import { addCommas, changeEnToFaNumber } from "../services/changeDigitsNumber";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";

function Filter({ data, setFilteredData, isShowFilter, setIsShowFilter }) {
  const [showSubmenu, setShowSubmenu] = useState([]);
  const [gender, setGender] = useState([]);
  const [price, setPrice] = useState([]);
  const [discount, setDiscount] = useState([]);
  const [size, setSize] = useState([]);
  const [color, setColor] = useState([]);

  function baseFilter(cur, event) {
    if (cur?.includes(event)) {
      const index = cur.indexOf(event);
      return [...cur.slice(0, index), ...cur.slice(index + 1)];
    } else return [...cur, event];
  }

  function handleShowSubmenu(e) {
    setShowSubmenu((cur) =>
      baseFilter(cur, e.target.closest("div").dataset.show)
    );
  }

  function handleGenderFilter(e) {
    setGender((cur) =>
      baseFilter(cur, e.target.closest("button").dataset.gender)
    );
  }

  function handlePriceFilter(e) {
    setPrice((cur) =>
      baseFilter(cur, e.target.closest("button").dataset.price)
    );
  }

  function handleDiscountFilter(e) {
    setDiscount((cur) =>
      baseFilter(cur, e.target.closest("button").dataset.discount)
    );
  }

  function handleSizeFilter(e) {
    setSize((cur) => baseFilter(cur, e.target.closest("button").dataset.size));
  }

  function handleColorFilter(e) {
    setColor((cur) =>
      baseFilter(cur, e.target.closest("button").dataset.color)
    );
  }

  function handleCloseFilterMobile() {
    setIsShowFilter(() => false);
    window.scrollTo({ top: 0 });
  }

  useEffect(() => {
    const handleResize = () => {
      setIsShowFilter(() => false);
      setGender(() => []);
      setPrice(() => []);
      setDiscount(() => []);
      setSize(() => []);
      setColor(() => []);
      setFilteredData(() => data);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [data]);

  useEffect(() => {
    if (!isShowFilter) setShowSubmenu([]);
  }, [isShowFilter]);

  // filter
  useEffect(() => {
    let arr = data;
    // فیلتر بر اساس جنسیت
    if (gender?.length > 0)
      arr = arr?.filter((cur) => gender.includes(cur.gender));
    // فیلتر بر اساس قیمت
    if (price?.length > 0) {
      arr = arr?.filter((cur) =>
        price
          .map((item) => {
            if (item === "0") {
              return (
                (cur.price * (100 - cur.off)) / 100 >= 0 &&
                (cur.price * (100 - cur.off)) / 100 < 10000000
              );
            }
            if (item === "10") {
              return (
                (cur.price * (100 - cur.off)) / 100 >= 10000000 &&
                (cur.price * (100 - cur.off)) / 100 < 20000000
              );
            }
            if (item === "20") {
              return (cur.price * (100 - cur.off)) / 100 >= 20000000;
            }
          })
          .includes(true)
      );
    }
    // فیلتر بر اساس تخفیف
    if (discount?.length > 0) arr = arr?.filter((cur) => cur.off > 0);
    // فیلتر بر اساس سایز
    if (size?.length > 0) {
      arr = arr?.filter((cur) =>
        size
          .map((item) => {
            if (item === "36")
              return cur.styles
                .map(
                  (style) =>
                    style.sizes.find((item2) => item2.size === 36).maxNumber > 0
                )
                .includes(true);
            else if (item === "37")
              return cur.styles
                .map(
                  (style) =>
                    style.sizes.find((item2) => item2.size === 37).maxNumber > 0
                )
                .includes(true);
            else if (item === "38")
              return cur.styles
                .map(
                  (style) =>
                    style.sizes.find((item2) => item2.size === 38).maxNumber > 0
                )
                .includes(true);
            else if (item === "39")
              return cur.styles
                .map(
                  (style) =>
                    style.sizes.find((item2) => item2.size === 39).maxNumber > 0
                )
                .includes(true);
            else if (item === "40")
              return cur.styles
                .map(
                  (style) =>
                    style.sizes.find((item2) => item2.size === 40).maxNumber > 0
                )
                .includes(true);
            else if (item === "41")
              return cur.styles
                .map(
                  (style) =>
                    style.sizes.find((item2) => item2.size === 41).maxNumber > 0
                )
                .includes(true);
            else if (item === "42")
              return cur.styles
                .map(
                  (style) =>
                    style.sizes.find((item2) => item2.size === 42).maxNumber > 0
                )
                .includes(true);
            else if (item === "43")
              return cur.styles
                .map(
                  (style) =>
                    style.sizes.find((item2) => item2.size === 43).maxNumber > 0
                )
                .includes(true);
            else if (item === "44")
              return cur.styles
                .map(
                  (style) =>
                    style.sizes.find((item2) => item2.size === 44).maxNumber > 0
                )
                .includes(true);
            else if (item === "45")
              return cur.styles
                .map(
                  (style) =>
                    style.sizes.find((item2) => item2.size === 45).maxNumber > 0
                )
                .includes(true);
          })
          .includes(true)
      );
    }
    // فیلتر بر اساس رنگ
    if (color?.length > 0) {
      arr = arr?.filter((cur) =>
        color
          .map((item) => {
            if (item === "مشکی") {
              return cur.colors.includes(item);
            } else if (item === "زرد") {
              return cur.colors.includes(item);
            } else if (item === "آبی") {
              return cur.colors.includes(item);
            } else if (item === "نقره ای") {
              return cur.colors.includes(item);
            } else if (item === "توسی") {
              return cur.colors.includes(item);
            } else if (item === "سفید") {
              return cur.colors.includes(item);
            } else if (item === "سبز") {
              return cur.colors.includes(item);
            } else if (item === "سرمه ای") {
              return cur.colors.includes(item);
            } else if (item === "نارنجی") {
              return cur.colors.includes(item);
            } else if (item === "صورتی") {
              return cur.colors.includes(item);
            } else if (item === "بنفش") {
              return cur.colors.includes(item);
            } else if (item === "قرمز") {
              return cur.colors.includes(item);
            }
          })
          .includes(true)
      );
    }
    setFilteredData(arr);
  }, [gender, price, discount, size, color, data]);

  return (
    <nav
      className={`flex flex-col lg:h-fit gap-y-2 divide-y pb-4 lg:pb-0 p-2 lg:p-4 col-span-1 text-zinc-700 bg-white rounded-2xl shadow-xl border-4`}
    >
      {/* header filter in mobile */}
      <div className="flex justify-between lg:hidden text-black py-2">
        <h4 className="font-ShabnamBold text-lg md:text-xl underline">
          فیلترها
        </h4>
        <button onClick={handleCloseFilterMobile}>
          <FaXmark className="size-5 " />
        </button>
      </div>
      {/* جنسیت */}
      <div className="mb-1 pt-1 lg:pt-0 lg:border-t-0 lg:border-t-white">
        {/* header */}
        <div
          className={`text-black ${
            showSubmenu?.includes("gender")
              ? "lg:text-black"
              : "lg:text-zinc-700"
          }  flex justify-between mb-1 lg:mb-2 text-base md:text-lg lg:text-xl hover:text-black cursor-pointer`}
          data-show="gender"
          onClick={handleShowSubmenu}
        >
          <span className="">
            جنسیت{"  "}
            {gender?.length > 0 && `(${changeEnToFaNumber(gender.length)})`}
          </span>
          <HiMiniChevronDown
            className={`rotate-180 ${
              showSubmenu?.includes("gender") ? "lg:rotate-180" : "lg:rotate-0 "
            }  size-4 md:size-6`}
          />
        </div>
        {/* content */}
        <div
          className={`${
            showSubmenu?.includes("gender") ? "" : " lg:hidden"
          } flex flex-col gap-y-1 px-2 2xl:px-4 text-sm md:text-base lg:text-lg`}
        >
          <button
            className="inline-flex gap-x-2 cursor-pointer"
            onClick={handleGenderFilter}
            data-gender="مردانه"
          >
            {gender?.includes("مردانه") ? (
              <MdCheckBox className="size-4 md:size-6" />
            ) : (
              <MdCheckBoxOutlineBlank className="size-4 md:size-6" />
            )}
            <span>مردانه</span>
          </button>
          <button
            className="inline-flex gap-x-2 cursor-pointer"
            onClick={handleGenderFilter}
            data-gender="زنانه"
          >
            {gender?.includes("زنانه") ? (
              <MdCheckBox className="size-4 md:size-6" />
            ) : (
              <MdCheckBoxOutlineBlank className="size-4 md:size-6" />
            )}
            <span>زنانه</span>
          </button>
          <button
            className="inline-flex gap-x-2 cursor-pointer"
            onClick={handleGenderFilter}
            data-gender="بچگانه"
          >
            {gender?.includes("بچگانه") ? (
              <MdCheckBox className="size-4 md:size-6" />
            ) : (
              <MdCheckBoxOutlineBlank className="size-4 md:size-6" />
            )}
            <span>بچگانه</span>
          </button>
        </div>
      </div>
      {/* قیمت */}
      <div className="mb-1 pt-1 lg:pt-3">
        {/* header */}
        <div
          className={`text-black ${
            showSubmenu?.includes("price")
              ? "lg:text-black"
              : "lg:text-zinc-700"
          }  flex justify-between mb-1 lg:mb-2 text-base md:text-lg lg:text-xl hover:text-black cursor-pointer`}
          data-show="price"
          onClick={handleShowSubmenu}
        >
          <span className="">
            قیمت (تومان){"  "}
            {price?.length > 0 && `(${changeEnToFaNumber(price.length)})`}
          </span>
          <HiMiniChevronDown
            className={`rotate-180 ${
              showSubmenu?.includes("price") ? "lg:rotate-180" : "lg:rotate-0 "
            }  size-4 md:size-6`}
          />
        </div>
        {/* content */}
        <div
          className={`${
            showSubmenu?.includes("price") ? "" : " lg:hidden"
          } flex flex-col gap-y-1 px-2 2xl:px-4 text-sm md:text-base lg:text-lg`}
        >
          <button
            className="inline-flex gap-x-2 cursor-pointer"
            onClick={handlePriceFilter}
            data-price="0"
          >
            {price?.includes("0") ? (
              <MdCheckBox className="size-4 md:size-6" />
            ) : (
              <MdCheckBoxOutlineBlank className="size-4 md:size-6" />
            )}
            <span>{`${changeEnToFaNumber(0)} تا ${addCommas(
              changeEnToFaNumber(10000000)
            )}`}</span>
          </button>
          <button
            className="inline-flex gap-x-2 cursor-pointer"
            onClick={handlePriceFilter}
            data-price="10"
          >
            {price?.includes("10") ? (
              <MdCheckBox className="size-4 md:size-6" />
            ) : (
              <MdCheckBoxOutlineBlank className="size-4 md:size-6" />
            )}
            <span>{`${addCommas(changeEnToFaNumber(10000000))} تا ${addCommas(
              changeEnToFaNumber(20000000)
            )}`}</span>
          </button>
          <button
            className="inline-flex gap-x-2 cursor-pointer"
            onClick={handlePriceFilter}
            data-price="20"
          >
            {price?.includes("20") ? (
              <MdCheckBox className="size-4 md:size-6" />
            ) : (
              <MdCheckBoxOutlineBlank className="size-4 md:size-6" />
            )}
            <span>{`${addCommas(changeEnToFaNumber(20000000))} +`}</span>
          </button>
        </div>
      </div>
      {/* تخفیف */}
      <div className="mb-1 pt-1 lg:pt-3">
        {/* header */}
        <div
          className={`text-black ${
            showSubmenu?.includes("discount")
              ? "lg:text-black"
              : "lg:text-zinc-700"
          }  flex justify-between mb-1 lg:mb-2 text-base md:text-lg lg:text-xl hover:text-black cursor-pointer`}
          data-show="discount"
          onClick={handleShowSubmenu}
        >
          <span className="">
            تخفیف{"  "}
            {discount?.length > 0 && `(${changeEnToFaNumber(discount.length)})`}
          </span>
          <HiMiniChevronDown
            className={`rotate-180 ${
              showSubmenu?.includes("discount")
                ? "lg:rotate-180"
                : "lg:rotate-0 "
            }  size-4 md:size-6`}
          />
        </div>
        {/* content */}
        <div
          className={`${
            showSubmenu?.includes("discount") ? "" : " lg:hidden"
          } flex flex-col gap-y-1 px-2 2xl:px-4 text-sm md:text-base lg:text-lg`}
        >
          <button
            className="inline-flex gap-x-2 cursor-pointer"
            onClick={handleDiscountFilter}
            data-discount="off"
          >
            {discount?.includes("off") ? (
              <MdCheckBox className="size-4 md:size-6" />
            ) : (
              <MdCheckBoxOutlineBlank className="size-4 md:size-6" />
            )}
            <span>تخفیف داشته باشد؟</span>
          </button>
        </div>
      </div>
      {/* سایز */}
      <div className="mb-1 pt-1 lg:pt-3">
        {/* header */}
        <div
          className={`text-black ${
            showSubmenu?.includes("size") ? "lg:text-black" : "lg:text-zinc-700"
          }  flex justify-between mb-1 lg:mb-2 text-base md:text-lg lg:text-xl hover:text-black cursor-pointer`}
          data-show="size"
          onClick={handleShowSubmenu}
        >
          <span className="">
            سایز{"  "}
            {size?.length > 0 && `(${changeEnToFaNumber(size.length)})`}
          </span>
          <HiMiniChevronDown
            className={`rotate-180 ${
              showSubmenu?.includes("size") ? "lg:rotate-180" : "lg:rotate-0 "
            }  size-4 md:size-6`}
          />
        </div>
        {/* content */}
        <div
          className={`${
            showSubmenu?.includes("size") ? "" : "lg:hidden"
          } grid grid-cols-2 lg:grid-cols-3 gap-y-1 px-2 2xl:px-4 text-sm md:text-base lg:text-lg`}
        >
          <button
            className="inline-flex gap-x-2"
            onClick={handleSizeFilter}
            data-size="36"
          >
            {size?.includes("36") ? (
              <MdCheckBox className="size-4 md:size-6" />
            ) : (
              <MdCheckBoxOutlineBlank className="size-4 md:size-6" />
            )}
            <span>{changeEnToFaNumber(36)}</span>
          </button>
          <button
            className="inline-flex gap-x-2"
            onClick={handleSizeFilter}
            data-size="37"
          >
            {size?.includes("37") ? (
              <MdCheckBox className="size-4 md:size-6" />
            ) : (
              <MdCheckBoxOutlineBlank className="size-4 md:size-6" />
            )}
            <span>{changeEnToFaNumber(37)}</span>
          </button>
          <button
            className="inline-flex gap-x-2"
            onClick={handleSizeFilter}
            data-size="38"
          >
            {size?.includes("38") ? (
              <MdCheckBox className="size-4 md:size-6" />
            ) : (
              <MdCheckBoxOutlineBlank className="size-4 md:size-6" />
            )}
            <span>{changeEnToFaNumber(38)}</span>
          </button>
          <button
            className="inline-flex gap-x-2"
            onClick={handleSizeFilter}
            data-size="39"
          >
            {size?.includes("39") ? (
              <MdCheckBox className="size-4 md:size-6" />
            ) : (
              <MdCheckBoxOutlineBlank className="size-4 md:size-6" />
            )}
            <span>{changeEnToFaNumber(39)}</span>
          </button>
          <button
            className="inline-flex gap-x-2"
            onClick={handleSizeFilter}
            data-size="40"
          >
            {size?.includes("40") ? (
              <MdCheckBox className="size-4 md:size-6" />
            ) : (
              <MdCheckBoxOutlineBlank className="size-4 md:size-6" />
            )}
            <span>{changeEnToFaNumber(40)}</span>
          </button>
          <button
            className="inline-flex gap-x-2"
            onClick={handleSizeFilter}
            data-size="41"
          >
            {size?.includes("41") ? (
              <MdCheckBox className="size-4 md:size-6" />
            ) : (
              <MdCheckBoxOutlineBlank className="size-4 md:size-6" />
            )}
            <span>{changeEnToFaNumber(41)}</span>
          </button>
          <button
            className="inline-flex gap-x-2"
            onClick={handleSizeFilter}
            data-size="42"
          >
            {size?.includes("42") ? (
              <MdCheckBox className="size-4 md:size-6" />
            ) : (
              <MdCheckBoxOutlineBlank className="size-4 md:size-6" />
            )}
            <span>{changeEnToFaNumber(42)}</span>
          </button>
          <button
            className="inline-flex gap-x-2"
            onClick={handleSizeFilter}
            data-size="43"
          >
            {size?.includes("43") ? (
              <MdCheckBox className="size-4 md:size-6" />
            ) : (
              <MdCheckBoxOutlineBlank className="size-4 md:size-6" />
            )}
            <span>{changeEnToFaNumber(43)}</span>
          </button>
          <button
            className="inline-flex gap-x-2"
            onClick={handleSizeFilter}
            data-size="44"
          >
            {size?.includes("44") ? (
              <MdCheckBox className="size-4 md:size-6" />
            ) : (
              <MdCheckBoxOutlineBlank className="size-4 md:size-6" />
            )}
            <span>{changeEnToFaNumber(44)}</span>
          </button>
          <button
            className="inline-flex gap-x-2"
            onClick={handleSizeFilter}
            data-size="45"
          >
            {size?.includes("45") ? (
              <MdCheckBox className="size-4 md:size-6" />
            ) : (
              <MdCheckBoxOutlineBlank className="size-4 md:size-6" />
            )}
            <span>{changeEnToFaNumber(45)}</span>
          </button>
        </div>
      </div>
      {/* رنگ */}
      <div className="mb-1 pt-1 lg:pt-3">
        {/* header */}
        <div
          className={`text-black ${
            showSubmenu?.includes("color")
              ? "lg:text-black"
              : "lg:text-zinc-700"
          }  flex justify-between mb-1 lg:mb-2 text-base md:text-lg lg:text-xl hover:text-black cursor-pointer`}
          data-show="color"
          onClick={handleShowSubmenu}
        >
          <span className="">
            رنگ{"  "}
            {color?.length > 0 && `(${changeEnToFaNumber(color.length)})`}
          </span>

          <HiMiniChevronDown
            className={`rotate-180 ${
              showSubmenu?.includes("color") ? "lg:rotate-180" : "lg:rotate-0 "
            }  size-4 md:size-6`}
          />
        </div>
        {/* content */}
        <div
          className={`${
            showSubmenu?.includes("color") ? "" : "lg:hidden"
          } grid grid-cols-2 gap-y-1 px-2 2xl:px-4 text-sm md:text-base lg:text-lg`}
        >
          <button
            className="inline-flex gap-x-2"
            onClick={handleColorFilter}
            data-color="آبی"
          >
            {color?.includes("آبی") ? (
              <MdCheckBox className="size-4 md:size-6" />
            ) : (
              <MdCheckBoxOutlineBlank className="size-4 md:size-6" />
            )}
            <span>آبی</span>
          </button>
          <button
            className="inline-flex gap-x-2"
            onClick={handleColorFilter}
            data-color="مشکی"
          >
            {color?.includes("مشکی") ? (
              <MdCheckBox className="size-4 md:size-6" />
            ) : (
              <MdCheckBoxOutlineBlank className="size-4 md:size-6" />
            )}
            <span>مشکی</span>
          </button>
          <button
            className="inline-flex gap-x-2"
            onClick={handleColorFilter}
            data-color="زرد"
          >
            {color?.includes("زرد") ? (
              <MdCheckBox className="size-4 md:size-6" />
            ) : (
              <MdCheckBoxOutlineBlank className="size-4 md:size-6" />
            )}
            <span>زرد</span>
          </button>
          <button
            className="inline-flex gap-x-2"
            onClick={handleColorFilter}
            data-color="نقره ای"
          >
            {color?.includes("نقره ای") ? (
              <MdCheckBox className="size-4 md:size-6" />
            ) : (
              <MdCheckBoxOutlineBlank className="size-4 md:size-6" />
            )}
            <span>نقره ای</span>
          </button>
          <button
            className="inline-flex gap-x-2"
            onClick={handleColorFilter}
            data-color="توسی"
          >
            {color?.includes("توسی") ? (
              <MdCheckBox className="size-4 md:size-6" />
            ) : (
              <MdCheckBoxOutlineBlank className="size-4 md:size-6" />
            )}
            <span>توسی</span>
          </button>
          <button
            className="inline-flex gap-x-2"
            onClick={handleColorFilter}
            data-color="سفید"
          >
            {color?.includes("سفید") ? (
              <MdCheckBox className="size-4 md:size-6" />
            ) : (
              <MdCheckBoxOutlineBlank className="size-4 md:size-6" />
            )}
            <span>سفید</span>
          </button>
          <button
            className="inline-flex gap-x-2"
            onClick={handleColorFilter}
            data-color="سبز"
          >
            {color?.includes("سبز") ? (
              <MdCheckBox className="size-4 md:size-6" />
            ) : (
              <MdCheckBoxOutlineBlank className="size-4 md:size-6" />
            )}
            <span>سبز</span>
          </button>
          <button
            className="inline-flex gap-x-2"
            onClick={handleColorFilter}
            data-color="سرمه ای"
          >
            {color?.includes("سرمه ای") ? (
              <MdCheckBox className="size-4 md:size-6" />
            ) : (
              <MdCheckBoxOutlineBlank className="size-4 md:size-6" />
            )}
            <span>سرمه ای</span>
          </button>
          <button
            className="inline-flex gap-x-2"
            onClick={handleColorFilter}
            data-color="نارنجی"
          >
            {color?.includes("نارنجی") ? (
              <MdCheckBox className="size-4 md:size-6" />
            ) : (
              <MdCheckBoxOutlineBlank className="size-4 md:size-6" />
            )}
            <span>نارنجی</span>
          </button>
          <button
            className="inline-flex gap-x-2"
            onClick={handleColorFilter}
            data-color="صورتی"
          >
            {color?.includes("صورتی") ? (
              <MdCheckBox className="size-4 md:size-6" />
            ) : (
              <MdCheckBoxOutlineBlank className="size-4 md:size-6" />
            )}
            <span>صورتی</span>
          </button>
          <button
            className="inline-flex gap-x-2"
            onClick={handleColorFilter}
            data-color="بنفش"
          >
            {color?.includes("بنفش") ? (
              <MdCheckBox className="size-4 md:size-6" />
            ) : (
              <MdCheckBoxOutlineBlank className="size-4 md:size-6" />
            )}
            <span>بنفش</span>
          </button>
          <button
            className="inline-flex gap-x-2"
            onClick={handleColorFilter}
            data-color="قرمز"
          >
            {color?.includes("قرمز") ? (
              <MdCheckBox className="size-4 md:size-6" />
            ) : (
              <MdCheckBoxOutlineBlank className="size-4 md:size-6" />
            )}
            <span>قرمز</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Filter;
