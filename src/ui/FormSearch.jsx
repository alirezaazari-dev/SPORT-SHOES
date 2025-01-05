import React, { useState, useEffect, useRef } from "react";
import { useSearch } from "../features/search/useSearch";
import Slide from "./Slide";
import SectionTitle from "./SectionTitle";
import SectionSubtitle from "./SectionSubtitle";
import { FaLeaf, FaXmark } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { HiMiniChevronDown } from "react-icons/hi2";

function FormSearch() {
  const location = useLocation();
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;
  const { searchData, isSearching } = useSearch();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isShowError, setIsShowError] = useState(true);
  const [productNotFound, setProductNotFound] = useState(false);
  const [isShowAllResults, setIsShowAllResults] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  function handleChangeSearch(e) {
    setSearchTerm(() => e.target.value);
    setIsShowError(() => false);
    setProductNotFound(() => false);
    setIsShowAllResults(() => false);
  }

  function onError(errors) {
    if (errors) {
      setIsShowError(() => true);
      setProductNotFound(() => false);
      setIsShowAllResults(() => false);
    }
  }

  function onSubmit(data) {
    setFilteredProducts(() =>
      searchData.filter((product) => {
        return (
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.gender.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.categoryFr.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.price <= Number(searchTerm)
        );
      })
    );
    setProductNotFound(() => true);
  }

  useEffect(() => {
    if (!searchTerm) setFilteredProducts([]);
  }, [searchTerm]);

  useEffect(() => {
    setFilteredProducts([]);
    setSearchTerm(() => "");
    setIsShowError(() => false);
    setProductNotFound(() => false);
    setIsShowAllResults(() => false);
  }, [location.pathname, isMobile]);

  useEffect(() => {
    function handleKeydown(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
      }
    }
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
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

  function handleShowAllResults() {
    if (isShowAllResults) window.scrollTo({ top: 0, behavior: "smooth" });
    setIsShowAllResults((cur) => !cur);
  }

  function handleCloseSearch() {
    setSearchTerm(() => "");
    setIsShowError(() => false);
    setProductNotFound(() => false);
    setIsShowAllResults(() => false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <section className="container w-full relative my-2 text-zinc-700 ">
      <div className=" bg-white py-0.5 px-2 md:py-2 md:px-4 rounded-2xl">
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className=" mx-auto mt-2"
        >
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="search"
              className="block w-full p-4 ps-10 text-sm text-zinc-700 border border-gray-300 rounded-2xl bg-gray-50 focus:ring-black focus:outline-none focus:border-black"
              placeholder="جستوجوی محصول ..."
              {...register("search", {
                required: "لطفا این قسمت را خالی نگذارید.",
                validate: (value) =>
                  value.length >= 3 || "متن جستوجو باید از سه حرف بیشتر باشد",
              })}
              value={searchTerm}
              onChange={handleChangeSearch}
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-black hover:bg-zinc-700 focus:ring-4 focus:outline-none focus:ring-black rounded-xl text-sm px-4 py-2 "
            >
              جستوجو
            </button>
          </div>
        </form>
        {filteredProducts?.length > 0 ? (
          <div className="flex flex-col items-center">
            <div className="flex justify-between items-end mb-1.5 md:mb-2 lg:mb-4">
              <div className="flex flex-col items-center gap-2 mt-2">
                <SectionSubtitle>
                  نتایج جستوجو{" "}
                  <span className="text-sm md:text-base">{`(${filteredProducts?.length}) مورد`}</span>
                </SectionSubtitle>
                <button
                  className="md:hidden text-zinc-700 hover:text-black"
                  onClick={handleCloseSearch}
                >
                  <FaXmark className="size-5" />
                </button>
              </div>
            </div>

            <div
              className={`grid ${
                filteredProducts.length === 1
                  ? "search-style-1"
                  : filteredProducts.length === 2
                  ? "search-style-2"
                  : filteredProducts.length >= 3
                  ? "search-style-3"
                  : ""
              }  gap-2.5 sm:gap-5`}
            >
              {filteredProducts?.map((shoes, i) => {
                if (isShowAllResults)
                  return <Slide shoes={shoes} key={shoes.id} />;
                else if (i < 3) {
                  return <Slide shoes={shoes} key={shoes.id} />;
                }
              })}
            </div>
            <div className="mt-4">
              <div>
                {filteredProducts.length > 3 && (
                  <button
                    className="font-ShabnamBold text-base md:text-lg lg:text-xl text-zinc-700 hover:text-black underline"
                    onClick={handleShowAllResults}
                  >
                    <span className="flex items-center gap-x-1">
                      {isShowAllResults ? "موارد کمتر" : "موارد بیشتر"}
                      <HiMiniChevronDown
                        className={`${
                          isShowAllResults && "rotate-180"
                        } size-4 md:size-6`}
                      />
                    </span>
                  </button>
                )}
              </div>
              <div className="flex justify-center items-center my-4 md:mt-6">
                <button
                  className="text-zinc-700 hover:text-black"
                  onClick={handleCloseSearch}
                >
                  <FaXmark className="size-5" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center mt-2">
            <span className="text-red-600/90 text-sm">
              {isShowError && errors?.search?.message}
              {productNotFound &&
                filteredProducts.length === 0 &&
                "محصولی با این مشخصات یافت نشد!"}
            </span>
          </div>
        )}
      </div>
    </section>
  );
}

export default FormSearch;
