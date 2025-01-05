import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { searchShoes } from "../services/apiAll";
import { useEffect, useState } from "react";
import { HiMiniChevronDown } from "react-icons/hi2";
import CornerOffer from "../ui/shoesUi/CornerOffer";
import ProductPhoto from "../ui/shoesUi/ProductPhoto";
import Comments from "../ui/shoesUi/Comments";
import NameModelStyles from "../ui/shoesUi/NameModelStyles";
import Size from "../ui/shoesUi/Size";
import Price from "../ui/shoesUi/Price";
import { useAddToShoppingCart } from "../features/shoppingCart/useAddToShoppingCart";
import { useScrollTop } from "../hooks/useScrollTop";
import { useAuth } from "../context/AuthContext";
import { useUser } from "../features/Login/useUser";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import FormComment from "../ui/FormComment";
import SectionComments from "../ui/shoesUi/SectionComments";
import Spinner from "../ui/Spinner";
import RecommendedProduct from "../ui/shoesUi/RecommendedProduct";
import { FaRegFrownOpen } from "react-icons/fa";
import ProductNotFound from "../ui/ProductNotFound";

function Shoes() {
  useScrollTop();
  const { idUser, isAuthenticated } = useAuth();
  const { user, isLoadingUser } = useUser(idUser);
  const { isAddingToShoppingCart, addToShopping } = useAddToShoppingCart();
  const { shoesId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const [srcImage, setSrcImage] = useState(
    () =>
      `./images/products/${searchParams.get(
        "cat"
      )}/${shoesId}/${searchParams.get("cat")}-${shoesId}-${searchParams.get(
        "style"
      )}`
  );
  const [numSrc, setNumSrc] = useState(1);
  const [currentStyle, setCurrentStyle] = useState(() =>
    searchParams.get("style")
  );
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: [searchParams.get("style")],
    queryFn: () => searchShoes(searchParams.get("cat"), shoesId),
  });

  const [objectCurrentStyle, setObjectCurrentStyle] = useState(() =>
    data?.styles.find((cur) => cur.style === searchParams.get("style"))
  );
  const [size, SetSize] = useState("");
  const [clickedWithoutSize, setclickedWithoutSize] = useState(false);
  const [repetitive, setRepetitive] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setObjectCurrentStyle(() =>
      data?.styles.find((cur) => cur.style === searchParams.get("style"))
    );
    setCurrentStyle(() => searchParams.get("style"));
    setSrcImage(
      () =>
        `./images/products/${searchParams.get(
          "cat"
        )}/${shoesId}/${searchParams.get("cat")}-${shoesId}-${searchParams.get(
          "style"
        )}`
    );
    setNumSrc(() => 1);
    SetSize(() => "");
    setclickedWithoutSize(() => false);
    setRepetitive(() => false);
    setIsDisabled(() => false);
  }, [shoesId]);

  useEffect(() => {
    if (isDisabled) {
      const timer = setTimeout(() => {
        setIsDisabled(false);
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, [isDisabled]);

  useEffect(() => {
    if (isSuccess)
      setObjectCurrentStyle(() =>
        data.styles.find((cur) => cur.style === searchParams.get("style"))
      );
  }, [isSuccess]);

  function handleHoverClick(e) {
    setNumSrc(() => e.target.dataset.src);
  }
  function handleSize(e) {
    e.preventDefault();
    SetSize(() => e.target.value);
    setclickedWithoutSize(() => false);
    setRepetitive(() => false);
  }

  function handleChangeStyle(e) {
    searchParams.set("style", e.target.dataset.style);
    setSearchParams(() => searchParams);
    setSrcImage(
      () =>
        `./images/products/${searchParams.get(
          "cat"
        )}/${shoesId}/${searchParams.get("cat")}-${shoesId}-${searchParams.get(
          "style"
        )}`
    );
    setCurrentStyle(() => searchParams.get("style"));
    setObjectCurrentStyle(() =>
      data.styles.find((cur) => cur.style === searchParams.get("style"))
    );
    SetSize(() => "");
    setclickedWithoutSize(() => false);
    setRepetitive(() => false);
  }

  function addForBuy() {
    if (isAuthenticated) {
      if (size) {
        let filterList = user?.shoppingCart.filter(
          (item) =>
            item.productId === shoesId &&
            item.selectedStyle.style === searchParams.get("style")
        );
        if (
          filterList.length === 0 ||
          !filterList.map((cur) => cur.selectedSize === size).includes(true)
        ) {
          let changedData = { ...data };
          delete changedData.id;
          addToShopping([
            {
              category: changedData.category,
              productId: changedData.productId,
              id: uuidv4(),
              selectedStyle: objectCurrentStyle,
              selectedSize: size,
              amount: 1,
            },
            idUser,
          ]);
          SetSize(() => "");
        } else setRepetitive(() => true);
      } else setclickedWithoutSize(() => true);
    } else {
      toast.error("ابتدا به حساب کاربری خود وارد شوید.");
      setIsDisabled(true);
    }
  }

  if (isLoading) return <Spinner />;
  // if (isSuccess)
  return (
    <>
      {Boolean(data) ? (
        <div>
          <section className="container w-full relative my-5 lg:my-10 py-5  text-zinc-700 bg-white rounded-2xl transition-all overflow-hidden shadow-2xl">
            {objectCurrentStyle?.isExist && data.off !== 0 && <CornerOffer />}
            <div className="flex flex-col lg:flex-row gap-x-4 w-full mb-4">
              {/* all images */}
              <div className="flex flex-col lg:flex-row w-full lg:w-2/3 xl:w-1/2 mb-4 lg:mb-0">
                {/* name & model & styles*/}
                <NameModelStyles
                  data={data}
                  currentStyle={currentStyle}
                  handleChangeStyle={handleChangeStyle}
                  hiddenStyle={`lg:hidden`}
                />
                <ProductPhoto
                  srcImage={srcImage}
                  handleHoverClick={handleHoverClick}
                  numSrc={numSrc}
                  objectCurrentStyle={objectCurrentStyle}
                  data={data}
                />
              </div>
              {/* details */}
              <div className="flex flex-col justify-between w-full lg:w-1/3 xl:w-1/2">
                {/* name & model &  styles*/}
                <NameModelStyles
                  data={data}
                  currentStyle={currentStyle}
                  handleChangeStyle={handleChangeStyle}
                  hiddenStyle={`hidden lg:flex`}
                />
                {/* descriptions */}
                <div className="font-ShabnamLight text-base md:text-lg xl:text-xl text-justify mb-2">
                  {data.description}
                </div>
                {/* sizes & price & exsist */}
                {objectCurrentStyle?.isExist ? (
                  <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row justify-between items-center w-full px-2 mb-4">
                    {/* sizes */}
                    <Size
                      clickedWithoutSize={clickedWithoutSize}
                      size={size}
                      handleSize={handleSize}
                      data={data}
                      objectCurrentStyle={objectCurrentStyle}
                    />
                    {/* price */}
                    <Price data={data} />
                  </div>
                ) : (
                  <div className="flex justify-center items-center my-4">
                    <span className="font-ShabnamBold text-red-600/90 text-lg md:text-xl lg:text-2xl">
                      محصول موجود نمی باشد.
                    </span>
                  </div>
                )}
                {/* buttons */}
                <div className="flex flex-col gap-y-4">
                  {objectCurrentStyle?.isExist && (
                    <div className="flex flex-col items-center">
                      {clickedWithoutSize && (
                        <div className="font-ShabnamLight text-red-600/90 text-base md:text-lg lg:text-xl mb-2">
                          ابتدا سایز خود را انتخاب کنید!
                        </div>
                      )}
                      {repetitive && (
                        <div className="font-ShabnamLight text-red-600/90 text-base md:text-lg lg:text-xl mb-2">
                          این سایز قبلا به سبد خرید اضافه شده است!
                        </div>
                      )}
                      <button
                        className="w-full flex justify-center p-2 md:p-3 lg:p-4 xl:p-5 lg:mb-5 xl:mb-1 font-ShabnamLight text-base md:text-lg lg:text-xl text-white bg-black rounded-2xl border-4 border-black hover:bg-black/60 hover:border-black/0 transition-all"
                        onClick={addForBuy}
                        disabled={isDisabled}
                      >
                        افزودن به سبد خرید
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
          {/* بخش کامنت ها */}
          <SectionComments objectCurrentStyle={objectCurrentStyle} />
          {/* محصولات پیشنهادی */}
          <RecommendedProduct data={data} />
        </div>
      ) : (
        <ProductNotFound />
      )}
    </>
  );
}

export default Shoes;
