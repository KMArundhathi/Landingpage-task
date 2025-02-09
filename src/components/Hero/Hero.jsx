import React from "react";


const Hero = () => {
  return (
    <>
      <div className="min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white">
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}
            <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
              <h1
                data-aos="fade-up"
                data-aos-once="true"
                className="text-5xl sm:text-6xl lg:text-7xl font-bold"
              >
                Nurturing Health Through Nature’s Legacy

              </h1>
              <div data-aos="fade-up" data-aos-delay="400">
                We bring the ancient healing power of Salacia reticulata into the modern world. First
                mentioned in the Charaka Samhita around 700 BC, Salacia—also known as Ekanayakam or
                Saptaranga—has been used in Ayurveda for centuries to naturally support healthy blood
                sugar levels and manage diabetes. At IndusViva, we blend this traditional wisdom with
                modern nutraceutical science to create products that honor both heritage and health.
              </div>
            </div>
            {/* Image section */}
            <div
              data-aos="fade-up"
              data-aos-once="true"
              className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 "
            >
              <div className="relative w-[300px] sm:w-[450px] sm:scale-125 mx-auto flex justify-center items-center order-1 sm:order-2">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/3KZe7EIocis?autoplay=1&modestbranding=1&controls=0&rel=0&showinfo=0"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="rounded-lg"
                  title="Health Video"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
