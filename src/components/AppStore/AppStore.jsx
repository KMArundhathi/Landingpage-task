import React from "react";
import BgPng from "../../assets/website/image3.jpg";

const backgroundStyle = {
  backgroundImage: `url(${BgPng})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const AppStore = () => {
  return (
    <>
      <div className="py-14" style={backgroundStyle}>
        <div className="container">
          <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-4">
            <div
              data-aos="fade-up"
              data-aos-duration="300"
              className="space-y-6 max-w-xl mx-auto"
            >
              {/* text section */}
              <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold text-white/90 pl-3">
                Creating Wellness for a future
              </h1>
              <p className="text-white/90">Our mission is to deliver wellness solutions globally, blending ancient traditions with modern innovation, to inspire healthier, more balanced lives worldwide. </p>
              {/* img section */}
              <div className="flex flex-wrap justify-center sm:justify-start items-center">
                <button className="mt-2 md:mt-5 p-3 px-5 bg-[#BC4749] text-white font-bold text-sm hover:bg-brandDark">
                  Know More
                </button>
              </div>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStore;
