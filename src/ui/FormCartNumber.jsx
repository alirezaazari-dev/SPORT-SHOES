import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useUser } from "../features/Login/useUser";
import { useForm } from "react-hook-form";
import Button from "./Button";

function FormCartNumber() {
  const { idUser } = useAuth();
  const { user, isLoadingUser } = useUser(idUser);
  const [defaultData, setDefaultData] = useState({
    cartNumber: user?.cartNumber,
    cartName: user?.cartName,
  });

  useEffect(() => {
    setDefaultData({
      cartNumber: user?.cartNumber,
      cartName: user?.cartName,
    });
  }, [isLoadingUser]);

  const { register } = useForm({ defaultValues: defaultData });

  return (
    <div className="w-full ">
      <form action="#" method="POST" className="mx-auto text-zinc-700">
        <div className="grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2">
          {user?.cartNumber && (
            <p className="mb-2">این شماره کارت ثبت شده است.</p>
          )}
          {/* کارت فعلی */}
          <div className="col-span-2 ">
            <label
              htmlFor="cartNumber"
              className="block text-sm md:text-base lg:text-lg font-ShabnamBold"
            >
              شماره کارت
            </label>
            <div className="mt-2.5">
              <input
                id="cartNumber"
                name="cartNumber"
                type="text"
                // autoComplete="given-name"
                className="block w-full rounded-2xl bg-white px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-black"
                {...register("cartNumber", {})}
              />
            </div>
          </div>
          <div className="col-span-2 ">
            <label
              htmlFor="cartName"
              className="block text-sm md:text-base lg:text-lg font-ShabnamBold"
            >
              به اسم
            </label>
            <div className="mt-2.5">
              <input
                id="cartName"
                name="cartName"
                type="text"
                // autoComplete="given-name"
                className="block w-full rounded-2xl bg-white px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-black"
                {...register("cartName", {})}
              />
            </div>
          </div>
          <div className="col-span-2">
            <span className="inline-block w-2 md:w-2.5 h-1 ml-1 bg-gray-300 rounded-full"></span>
            <span className="mb-2 text-xs lg:text-sm">
              در صورت هرگونه مغایرت در وارد کردن اطلاعات{" "}
              <span className="font-ShabnamBold text-sm lg:text-base">
                SPORT SHOES
              </span>{" "}
              هیچگونه مسئولیتی ندارد.
            </span>
          </div>
        </div>
        <div className="mt-10 ">
          <Button>
            {user?.cartNumber ? "تغییر شماره کارت" : "ثبت شماره کارت"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default FormCartNumber;
