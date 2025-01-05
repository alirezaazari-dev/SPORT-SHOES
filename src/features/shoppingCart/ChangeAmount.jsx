import { FaMinusCircle, FaPlusCircle, FaTrashAlt } from "react-icons/fa";
import { useDeletingShop } from "./useDeletingShop";
import { useUpdatingAmount } from "./useUpdateAmount";
import { changeEnToFaNumber } from "../../services/changeDigitsNumber";
import { useAuth } from "../../context/AuthContext";
import { useUser } from "../Login/useUser";
import { useEffect, useState } from "react";

function ChangeAmount({ product }) {
  const { idUser, isAuthenticated } = useAuth();
  const { user, isLoadingUser } = useUser(idUser);
  const { isDeleting, deleteProduct } = useDeletingShop();
  const { isUpdatingAmount, updateAmount } = useUpdatingAmount();

  const max = product.styles
    .find((cur) => cur.style === product.selectedStyle.style)
    .sizes.find((cur) => cur.size === product.selectedSize).maxNumber;

  function handleIncAmount() {
    // setAmount((cur) => cur++);
    // updateAmount({ ...product, amount: product.amount + 1 });
    updateAmount([idUser, product.id, "plus", max]);
  }

  function handleDecAmount() {
    if (product.amount > 1) {
      updateAmount([idUser, product.id, "minus", max]);
    } else {
      deleteProduct([idUser, product.id]);
    }
  }
  return (
    <div className="flex justify-between items-center border-4 border-black/10 p-0.5 md:p-1 w-full text-base rounded-full">
      <button
        className=" text-2xl md:text-3xl text-black hover:text-black/60"
        onClick={handleIncAmount}
      >
        {<FaPlusCircle />}
      </button>
      <div className="">
        <span className="text-base md:text-lg">
          {changeEnToFaNumber(product.amount)}
        </span>
        <span className="text-xs text-red-700/90">
          {product.amount === max && " (حداکثر)"}
        </span>
      </div>
      <button
        className={` ${
          product.amount > 1
            ? "text-black hover:text-black/60 text-2xl md:text-3xl"
            : "text-white bg-black hover:bg-black/60 text-base md:text-xl p-1 lg:p-1.5 rounded-full"
        } `}
        onClick={handleDecAmount}
      >
        {product.amount > 1 ? <FaMinusCircle /> : <FaTrashAlt className="" />}
      </button>
    </div>
  );
}

export default ChangeAmount;
