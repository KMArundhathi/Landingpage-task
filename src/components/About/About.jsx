import React from "react";
import Bgimage from "../../assets/bg.jpg";


const About = () => {
  return (
    <>
      <span id="about"></span>
      <>
  <span id="about"></span>
  <section className="bg-[#F2E8CF] w-full relative">
    <div className="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
      <section className="relative px-10 md:p-0">
        {/* Image Section */}
        <div data-aos="zoom-in" data-aos-duration="300" className="order-1">
          <img
            className="xl:max-w-6xl w-full"
            src={Bgimage}
            alt=""
            data-aos-once="true"
          />
        </div>

        {/* Content Section */}
        <div className="content bg-white p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-48 right-5 shadow-lg">
          <div className="flex justify-between font-bold text-sm">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold text-center text-[#BC4749]">
              Who we are
            </h1>
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
            <p className="my-3 text-justify font-medium text-gray-500 leading-relaxed">
              At IndusViva, we are dedicated to reimagining ancient remedies, such as Salacia reticulata, for the modern world with sustainability, purity, and innovation at the forefront. We craft products that seamlessly blend the wisdom of tradition with the precision of science, empowering health-conscious individuals with natural, effective solutions for wellness. By honoring nature and advancing research, we strive to deliver products that support a healthier, more balanced lifestyle for today’s and future generations.
            </p>
            <button className="mt-2 md:mt-5 p-3 px-5 bg-[#BC4749] text-white font-bold text-sm hover:bg-brandDark">
              Read More
            </button>
          </div>
        </div>
      </section>
    </div>
  </section>
</>

    </>
  );
};


export default About;
