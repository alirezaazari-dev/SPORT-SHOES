import { Link } from "react-router-dom";
import { useScrollTop } from "../hooks/useScrollTop";
import SectionSubtitle from "../ui/SectionSubtitle";
import FormLoginNumber from "../features/Login/FormLoginNumber";

function Login() {
  useScrollTop();

  return (
    <section className="container flex justify-center items-center h-screen relative py-5 text-zinc-700 ">
      <div className="flex flex-col sm:w-[500px] p-5 bg-white rounded-2xl shadow-2xl">
        <div className="mx-auto mt-5">
          <Link to="/">
            <img
              src="../images/logoBlack.png"
              alt="Sport-Shoes-Logo"
              className="w-[300px] md:w-[350px] lg:w-[400px] mb-10 cursor-pointer"
            />
          </Link>
        </div>
        <div className="mb-2 md:mb-4">
          <SectionSubtitle>ورود | ثبت نام</SectionSubtitle>
        </div>
        <div>
          <div className="flex flex-col mb-4 text-sm md:text-base">
            <span>سلام!</span>
            <span>شماره موبایل خود را وارد کنید.</span>
          </div>
          <div className="w-full">
            <FormLoginNumber />
          </div>
        </div>
        <div>
          <p className="text-xs mt-5">
            ورود شما به معنی پذیرش{" "}
            <span className="text-sky-700 cursor-pointer">
              شرایط SPORT SHOES
            </span>{" "}
            و
            <span className="text-sky-700 cursor-pointer">
              {" "}
              قوانین حریم خصوصی
            </span>{" "}
            است.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
