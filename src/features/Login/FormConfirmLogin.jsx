import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function FormConfirmLogin() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();
  const [inputConfirmLogin, setInputConfirmLogin] = useState("");

  function onSubmit(data) {
    navigate("/");
  }
  function onError(errors) {
    // console.log(errors);
    // console.log(errors);
  }
  function handleChange(e) {
    setInputConfirmLogin(e.target.value);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="mx-auto text-zinc-700"
    >
      <div className="grid grid-cols-1 gap-y-4">
        <div className="">
          <div className="mt-2.5">
            <input
              defaultValue={inputConfirmLogin}
              onChange={handleChange}
              id="confirmLogin"
              name="confirmLogin"
              type="text"
              className="block w-full rounded-2xl bg-white px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-black"
              {...register("confirmLogin", {
                required: "لطفا این قسمت را خالی نگذارید.",
                // minLength: { value: 11, message: "شماره موبایل اشتباه است." },
                // maxLength: { value: 11, message: "شماره موبایل اشتباه است." },
                // pattern: {
                //   value: /^[0-9]{11}$/, // Ensures only digits 0-9 and 11 digits long
                //   message: "شماره اشتباه است.",
                // },
                // validate: (value) =>
                //   checkPhoneNumber(value) || "شماره موبایل اشتباه است.",
              })}
            />
            {errors?.confirmLogin?.message && (
              <span className="mt-2 block text-red-600/90 text-sm">
                {errors?.confirmLogin?.message}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <p className="text-sm mt-5">02:24 مانده تا دریافت کد مجدد</p>
      </div>
      <div className="mt-10">
        <button className="block w-full rounded-2xl bg-black px-3.5 py-2.5 text-center text-base md:text-lg lg:text-xl font-Shabnam text-white shadow-md hover:bg-black/60">
          تایید
        </button>
      </div>
    </form>
  );
}

export default FormConfirmLogin;
