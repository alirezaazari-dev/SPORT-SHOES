import { Link } from "react-router-dom";
import { useScrollTop } from "../hooks/useScrollTop";
import SectionSubtitle from "../ui/SectionSubtitle";
import FormLoginNumber from "../features/Login/FormLoginNumber";
import FormConfirmLogin from "../features/Login/FormConfirmLogin";

function ConfirmLogin() {
  useScrollTop();

  return (
    <section className="container flex justify-center items-center h-screen relative  text-zinc-700 ">
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
          <SectionSubtitle>کد تایید را وارد کنید</SectionSubtitle>
        </div>
        <div>
          <div className="flex flex-col my-5 text-sm md:text-base">
            <span>کد تایید برای شماره 09012345678 پیامک شد</span>
          </div>
          <div className="w-full">
            <FormConfirmLogin />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConfirmLogin;
