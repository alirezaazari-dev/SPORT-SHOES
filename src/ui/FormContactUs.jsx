import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useUser } from "../features/Login/useUser";
import { useForm } from "react-hook-form";
import Button from "./Button";

function FormContactUs() {
  const { idUser } = useAuth();
  const { user, isLoadingUser } = useUser(idUser);
  const [defaultData, setDefaultData] = useState({
    firstName: user?.firstName,
    lastName: user?.lastName,
    email: user?.email,
    phoneNumber: user?.phoneNumber,
  });

  useEffect(() => {
    setDefaultData({
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      phoneNumber: user?.phoneNumber,
    });
  }, [isLoadingUser]);

  const { register } = useForm({ defaultValues: defaultData });

  return (
    <div className="w-full ">
      <form action="#" method="POST" className="mx-auto  text-zinc-700">
        <div className="grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2">
          <div className="col-span-2 md:col-span-1">
            <label
              htmlFor="firstName"
              className="block text-sm md:text-base lg:text-lg font-ShabnamBold"
            >
              نام
            </label>
            <div className="mt-2.5">
              <input
                id="firstName"
                name="firstName"
                type="text"
                // autoComplete="given-name"
                className="block w-full rounded-2xl bg-white px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-black"
                {...register("firstName", {})}
              />
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <label
              htmlFor="lastName"
              className="block text-sm md:text-base lg:text-lg font-ShabnamBold"
            >
              نام خانوادگی
            </label>
            <div className="mt-2.5">
              <input
                id="lastName"
                name="lastName"
                type="text"
                // autoComplete="family-name"
                className="block w-full rounded-2xl bg-white px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-black"
                {...register("lastName", {})}
              />
            </div>
          </div>

          <div className="col-span-2 md:col-span-1">
            <label
              htmlFor="email"
              className="block text-sm md:text-base lg:text-lg font-ShabnamBold"
            >
              ایمیل
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                // autoComplete="email"
                className="block w-full rounded-2xl bg-white px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-black"
                {...register("email", {})}
              />
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <label
              htmlFor="phoneNumber"
              className="block text-sm md:text-base lg:text-lg font-ShabnamBold"
            >
              شماره موبایل
            </label>
            <div className="mt-2.5">
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                className="block w-full rounded-2xl bg-white px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-black"
                {...register("phoneNumber", {})}
              />
            </div>
          </div>
          <div className="col-span-2">
            <label
              htmlFor="message"
              className="block text-sm md:text-base lg:text-lg font-ShabnamBold"
            >
              متن پیام
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-2xl bg-white px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-black"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        <div className="mt-10 ">
          <Button>ارسال</Button>
        </div>
      </form>
    </div>
  );
}

export default FormContactUs;
