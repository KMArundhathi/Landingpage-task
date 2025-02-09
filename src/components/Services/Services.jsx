import React from "react";
import img1 from "../../assets/img/ipulse7.jpg";
import { FaShoppingCart } from "react-icons/fa";



const MenuData = [
  {
    id: 1,
    img: img1,
    name: "iPulse",
    description: "A powerful antioxidant drink made from Acai berries and other superfruits. It boosts heart health, immunity, and fights free radicals for overall well-bein.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: img1,
    name: "iPulse",
    description:
      "A powerful antioxidant drink made from Acai berries and other superfruits. It boosts heart health, immunity, and fights free radicals for overall well-bein",
    aosDelay: "200",
  },
  {
    id: 3,
    img: img1,
    name: "iPulse",
    description: "A powerful antioxidant drink made from Acai berries and other superfruits. It boosts heart health, immunity, and fights free radicals for overall well-bein",
    aosDelay: "300",
  },

];

const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          {/* Heading Section */}
          <div className="text-center mb-36">
            <h1 className="text-4xl font-bold text-[#BC4749]">
            From Nature to You
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center mt-10">
            {MenuData.map((menu) => (
              <div
                key={menu.id}
                data-aos="fade-up"
                data-aos-delay={menu.aosDelay}
                className="rounded-2xl bg-white hover:bg-[#BC4749] hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[122px] flex justify-center items-center">
                  <img
                    src={menu.img}
                    alt={menu.name}
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                    group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h1 className="text-xl font-bold">{menu.name}</h1>
                  <p className="text-gray-500 text-sm group-hover:text-white duration-300">
                    {menu.description}
                  </p>
                  <div className="flex flex-row justify-between mt-3">
                    <div className="flex gap-2">
                      <button className="px-3 text-sm bg-[#BC4749] text-[#F2E8C7] hover:bg-[#F2E8C7] hover:text-[#bc4749] transition-all rounded-lg">
                       Buy Now
                      </button>
                    </div>
                    <span className="flex items-center bg-[#F2E8C7]  hover:text-[#BC4749]
                    px-3 py-2 rounded-full cursor-pointer ">
                      <FaShoppingCart size={20} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;


