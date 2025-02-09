import React from "react";


import { IoBulbOutline } from "react-icons/io5";
import { GiHealthPotion, GiPlantRoots } from "react-icons/gi";

import { useState } from "react";



const features = [
  {
    id: 1,
    icon: <GiPlantRoots className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full" />,
    title: "Sustainably Sourced from the Heart of Nature",
    content: "Salacia roots grow in pristine forests, harvested by tribal communities who honor the land’s natural balance. These age-old harvesting practices ensure the sustainability of the ecosystem while providing fair trade opportunities for the locals. The roots are carefully cultivated without harming the tree, allowing the roots to regrow and the tree to remain healthy and thriving. Every root tells a story of respect for nature, combining tradition with care to bring you a product that is pure, potent, and ethically sourced.",
    bgColor: "bg-red-100"
  },
  {
    id: 2,
    icon: <IoBulbOutline className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full" />,
    title: "Innovation Meets Tradition",
    content: "Once harvested, Salacia roots travel to our state-of-the-art facility, where advanced extraction methods preserve their potency. With a dedicated team ensuring strict quality control, each product undergoes thorough testing for purity and safety. Our research and development team continually innovates to create new formulations, blending ancient Ayurvedic wisdom with modern scientific precision. This fusion of tradition and technology allows us to deliver nutraceuticals that meet the highest standards of quality and efficacy.",
    bgColor: "bg-orange-100"
  },
  {
    id: 3,
    icon: <GiHealthPotion className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full" />,
    title: "Bridging Ancient Wisdom with Modern Health",
    content: "Salacia reticulata, revered for centuries in Ayurveda, meets modern science at Indusviva Health Sciences. We combine the time-tested benefits of this ancient herb with the latest research to create high-quality, natural health solutions. Our products empower consumers to experience the transformative effects of Salacia, promoting a healthier and more balanced life. It’s the perfect harmony between tradition and innovation, offering the best of both worlds for today’s health-conscious consumers.",
    bgColor: "bg-yellow-100"
  }
];
const Banner = () => {
  const [activeFeature, setActiveFeature] = useState(features[0]);
  return (
    <>
      <span id="about1"></span>
      <div className="min-h-[550px] sm:min-h-[600px]  flex justify-center items-center ">
      <div className="container pb-8 sm:pb-0">
        <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold text-center text-[#BC4749]">
          From Forest to Factory
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Image section */}
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="min-h-[450px] flex justify-center items-center relative order-1"
          >
            <div className="space-y-5">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  onMouseEnter={() => setActiveFeature(feature)}
                  className={`flex items-center gap-3 cursor-pointer transition duration-300 ${activeFeature.id === feature.id ? "text-primary" : "text-gray-700"}`}
                >
                  <span className={`${feature.bgColor} rounded-full p-3 shadow-sm flex items-center justify-center ${activeFeature.id === feature.id ? "ring-4 ring-primary" : ""}`}>
                    {feature.icon}
                  </span>

                  <span className="font-semibold">{feature.title}</span>
                </div>
              ))}
            </div>
   
          </div>
          {/* Text content section */}
          <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2">
            <div data-aos="slide-left" className="border-l-4 border-primary/50 pl-6 space-y-2">
              <p className="text-lg text-gray-500">{activeFeature.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Banner;
