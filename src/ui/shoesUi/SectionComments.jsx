import { useState } from "react";
import Comments from "./Comments";
import FormComment from "../FormComment";
import { useAuth } from "../../context/AuthContext";

function SectionComments({ objectCurrentStyle }) {
  const { isAuthenticated } = useAuth();
  const [activeTab, setActiveTab] = useState("reviews");

  function handleActiveTab(e) {
    setActiveTab(e.target.dataset.query);
  }
  return (
    <section className="container w-full relative my-5 lg:my-10 py-5 text-zinc-700 bg-white rounded-2xl transition-all overflow-hidden shadow-2xl">
      <div className="flex flex-col gap-x-4 gap-y-4">
        <div className="flex gap-x-6 border-b text-base md:text-lg lg:text-xl">
          <div
            data-query="reviews"
            className={`cursor-pointer  ${
              activeTab === "reviews" ? "border-b-4 border-b-black" : ""
            }`}
            onClick={handleActiveTab}
          >
            دیدگاه کاربران
            {/* {objectCurrentStyle?.isExist && `${objectCurrentStyle?.Comments.map((cur)=>)}`} */}
          </div>
          <div
            data-query="confirmReview"
            className={`cursor-pointer ${
              activeTab === "confirmReview" ? "border-b-4 border-b-black" : ""
            } `}
            onClick={handleActiveTab}
          >
            ثبت دیدگاه
          </div>
        </div>
        {objectCurrentStyle?.isExist && (
          <>
            {activeTab === "reviews" && (
              <Comments objectCurrentStyle={objectCurrentStyle} />
            )}
            {activeTab === "confirmReview" ? (
              isAuthenticated ? (
                <FormComment />
              ) : (
                <div>
                  <div className="flex justify-center font-ShabnamLight text-base md:text-lg xl:text-xl text-justify w-full h-16 p-4  rounded-2xl transition-all text-red-600/90">
                    ابتدا به حساب کاربری خود وارد شوید.
                  </div>
                </div>
              )
            ) : (
              ""
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default SectionComments;
