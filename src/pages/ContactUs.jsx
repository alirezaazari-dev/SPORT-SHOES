import { useScrollTop } from "../hooks/useScrollTop";
import SectionSubtitle from "../ui/SectionSubtitle";
import SectionTitle from "../ui/SectionTitle";
import { FaTelegram } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { FaSquareInstagram } from "react-icons/fa6";
import { BiPhoneOutgoing } from "react-icons/bi";
import FormContactUs from "../ui/FormContactUs";
import { changeEnToFaNumber } from "../services/changeDigitsNumber";

const contact = {
  phone: "+989012345678",
  email: "sportshoes@gmail.com",
  telegram: "@sport_shoes",
  instagram: "@sport_shoes",
};

function ContactUs() {
  useScrollTop();

  return (
    <section className="container w-full relative my-5 lg:my-10  text-zinc-700  rounded-2xl ">
      <div className="w-full flex flex-col gap-y-5">
        <div>
          <div className="mb-2 md:mb-4">
            <SectionTitle>تماس با ما</SectionTitle>
            <SectionSubtitle>راه های ارتباطی</SectionSubtitle>
          </div>
          {/* راه های ارتباطی */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 font-ShabnamBold text-base md:text-lg lg:text-xl mb-4">
            {/* phone */}
            <div className="flex flex-col justify-center items-center py-3 px-4 border-4 shadow-2xl rounded-2xl bg-white ">
              <div className="flex justify-center gap-x-2 items-center mb-2">
                <span>
                  <BiPhoneOutgoing className="size-6 md:size-8" />
                </span>
                <span>تلفن</span>
              </div>
              <div className="ltr-text">
                <span>{changeEnToFaNumber(contact.phone)}</span>
              </div>
            </div>
            {/* email */}
            <div className="flex flex-col justify-center items-center py-3 px-4 border-4 shadow-2xl rounded-2xl bg-white ">
              <div className="flex justify-center gap-x-2 items-center mb-2">
                <span>
                  <MdAttachEmail className="size-6 md:size-8" />
                </span>
                <span>ایمیل</span>
              </div>
              <div className="ltr-text">
                <span>{contact.email}</span>
              </div>
            </div>
            {/* telegram */}
            <div className="flex flex-col justify-center items-center py-3 px-4 border-4 shadow-2xl rounded-2xl bg-white ">
              <div className="flex justify-center gap-x-2 items-center mb-2">
                <span>
                  <FaTelegram className="size-6 md:size-8" />
                </span>
                <span>تلگرام</span>
              </div>
              <div className="ltr-text">
                <span>{contact.telegram}</span>
              </div>
            </div>
            {/* instagram */}
            <div className="flex flex-col justify-center items-center py-3 px-4 border-4 shadow-2xl rounded-2xl bg-white ">
              <div className="flex justify-center gap-x-2 items-center mb-2">
                <span>
                  {/* <FaInstagram /> */}
                  <FaSquareInstagram className="size-6 md:size-8" />
                </span>
                <span>اینستاگرام</span>
              </div>
              <div className="ltr-text">
                <span>{contact.instagram}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col  w-full mb-5">
          <div className=" mb-2 md:mb-4">
            <SectionTitle>پشتیبانی سایت</SectionTitle>
            <SectionSubtitle>سوال، پیشنهاد و انتقاد</SectionSubtitle>
          </div>
          <div className="w-full  p-4 md:p-8 border-4 shadow-2xl rounded-2xl bg-white ">
            <FormContactUs />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
