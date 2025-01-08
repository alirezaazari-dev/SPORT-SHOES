import { useState } from "react";
import { useForm } from "react-hook-form";
import { checkPhoneNumber } from "../../services/validationInputServices";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useUser } from "./useUser";
import { getUser } from "../../services/apiAll";
import { phoneNumberValidator } from "@persian-tools/persian-tools";

function FormLoginNumber() {
  const { login } = useAuth();
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();
  const [inputNumberLogin, setInputNumberLogin] = useState("");

  function onSubmit(data) {
    // console.log(data);
    getUser(data.phoneNumberLogin).then((res) => {
      if (res) {
        login(data.phoneNumberLogin);
      }
    });

    // if (getUser(data.phoneNumberLogin)) ;
    navigate("/");
  }
  function onError(errors) {
    // console.log(errors);
    // console.log(errors);
  }
  function handleChange(e) {
    setInputNumberLogin(e.target.value);
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
              defaultValue={inputNumberLogin}
              onChange={handleChange}
              id="phoneNumberLogin"
              name="phoneNumberLogin"
              type="text"
              className="block w-full rounded-2xl bg-white px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-black"
              {...register("phoneNumberLogin", {
                required: "لطفا این قسمت را خالی نگذارید.",
                // minLength: { value: 11, message: "شماره موبایل اشتباه است." },
                // maxLength: { value: 11, message: "شماره موبایل اشتباه است." },
                // pattern: {
                //   value: /^[0-9]{11}$/, // Ensures only digits 0-9 and 11 digits long
                //   message: "شماره اشتباه است.",
                // },
                validate: (value) =>
                  // checkPhoneNumber(value)
                  phoneNumberValidator(value) || "شماره موبایل اشتباه است.",
              })}
            />
            {errors?.phoneNumberLogin?.message && (
              <span className="mt-2 block text-red-600/90 text-sm">
                {errors?.phoneNumberLogin?.message}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="mt-10">
        <button className="block w-full rounded-2xl bg-black px-3.5 py-2.5 text-center text-base md:text-lg lg:text-xl font-Shabnam text-white shadow-md hover:bg-black/60">
          ورود
        </button>
      </div>
    </form>
  );
}

export default FormLoginNumber;
