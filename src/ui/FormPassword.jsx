import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useUser } from "../features/Login/useUser";
import { useForm } from "react-hook-form";
import Button from "./Button";

function FormPassword() {
  const { idUser } = useAuth();
  const { user, isLoadingUser } = useUser(idUser);
  const [defaultData, setDefaultData] = useState({
    password: user?.password,
  });

  useEffect(() => {
    setDefaultData({
      password: user?.password,
    });
  }, [isLoadingUser]);

  const { register } = useForm({ defaultValues: defaultData });

  return (
    <div className="w-full ">
      <form action="#" method="POST" className="mx-auto text-zinc-700">
        <div className="grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2">
          {/* رمز عبور فعلی */}
          {user?.password && (
            <div className="col-span-2 ">
              <label
                htmlFor="password"
                className="block text-sm md:text-base lg:text-lg font-ShabnamBold"
              >
                رمز عبور فعلی
              </label>
              <div className="mt-2.5">
                <input
                  value={user?.password}
                  disabled={true}
                  id="password"
                  name="password"
                  type="password"
                  // autoComplete="given-name"
                  className="block w-full rounded-2xl bg-white px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-black"
                  {...register("password", {})}
                />
              </div>
            </div>
          )}
          <p className="mb-2">رمز عبور شما باید حداقل هشت حرف باشد.</p>
          <div className="col-span-2 ">
            <label
              htmlFor="newPass"
              className="block text-sm md:text-base lg:text-lg font-ShabnamBold"
            >
              رمز عبور جدید
            </label>
            <div className="mt-2.5">
              <input
                id="newPass"
                name="newPass"
                type="password"
                // autoComplete="given-name"
                className="block w-full rounded-2xl bg-white px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-black"
                // {...register("firstName", {})}
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-1.5">
            <div className="text-sm lg:text-base">
              <span className="inline-block w-2 md:w-2.5 h-1 ml-1 bg-gray-300 rounded-full"></span>
              <span>شامل عدد</span>
            </div>
            <div className="text-sm lg:text-base">
              <span className="inline-block w-2 md:w-2.5 h-1 ml-1 bg-gray-300 rounded-full"></span>
              <span>حداقل هشت حرف</span>
            </div>
            <div className="text-sm lg:text-base">
              <span className="inline-block w-2 md:w-2.5 h-1 ml-1 bg-gray-300 rounded-full"></span>
              <span>شامل علامت (!@#$%&*^)</span>
            </div>
            <div className="text-sm lg:text-base">
              <span className="inline-block w-2 md:w-2.5 h-1 ml-1 bg-gray-300 rounded-full"></span>
              <span>شامل یک حرف بزرگ و کوچک</span>
            </div>
          </div>
          <div className="col-span-2 ">
            <label
              htmlFor="repeatNewPass"
              className="block text-sm md:text-base lg:text-lg font-ShabnamBold"
            >
              تکرار رمز عبور جدید
            </label>
            <div className="mt-2.5">
              <input
                id="repeatNewPass"
                name="repeatNewPass"
                type="password"
                // autoComplete="given-name"
                className="block w-full rounded-2xl bg-white px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-black"
                // {...register("firstName", {})}
              />
            </div>
          </div>
        </div>
        <div className="mt-10 ">
          <Button>{user?.password ? "تغییر رمز عبور" : "ثبت رمز عبور"}</Button>
        </div>
      </form>
    </div>
  );
}

export default FormPassword;
