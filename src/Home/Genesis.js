import React from "react";
import Navbar from "../Components/Navbar";
import { FaArrowAltCircleRight } from "react-icons/fa";
import img1 from "../Assets/satyaseshadri.png";
import img2 from "../Assets/SambitMishra.jpg";
import img3 from "../Assets/AadilKhan.jpg";
import img4 from "../Assets/AshwanthBhat.jpg";
import img5 from "../Assets/AnirudhSharma.jpg";
import img6 from "../Assets/dr.richa_doms.png";
import img7 from "../Assets/Sai_Bhargavi.jpg";
import img8 from "../Assets/Faculty Advisor Message.png"
import img9 from "../Assets/Harsha.jpg"
import img10 from "../Assets/Yuvaraj_Thakur.jpg"
import Footer from "../Components/Footer";
const Genesis = () => {
  return (
    <div>
      <Navbar />

      <div className="mt-[88px] font-dmsans">
        <div className="bg-green-100">
          <div className="p-5 flex">
            <span>
              <a
                href="/"
                className="text-gray-500 font-semibold hover:underline"
              >
                Home
              </a>
            </span>{" "}
            <span className="p-2 text-gray-500">
              <FaArrowAltCircleRight size={12} />
            </span>{" "}
            <span className="text-black font-semibold">Nirmaan Genesis</span>
          </div>
          <h2 className="text-5xl font-semibold text-green-600 pt-8 pb-5 text-center">
            Nirmaan Genesis
          </h2>
        </div>
      </div>

      <div className="">
        <div className="flex justify-center items-center mx-auto ">
          <div className="border py-3 mt-3 mb-6">
            <div className="relative flex justify-center items-center mx-auto w-[144px] h-[144px] mb-4 mr-16 ml-16">
              <img
                src={img1}
                className="rounded-sm w-full h-full object-cover transition-all duration-500  "
              />
            </div>
            <h3 className="text-md font-semibold text-green-600 text-center">
              Dr. Satyanarayanan S
            </h3>
            <p className="text-sm text-center">Advisor (2017-2022)</p>
            <p className="text-sm text-center font-semibold text-gray-500"></p>
          </div>
        </div>
      </div>
      <div className="md:grid md:grid-cols-4 md:gap-5 px-10 mb-8">
        <div className="border py-3 mt-3">
          <div className="relative flex justify-center items-center mx-auto w-[144px] h-[144px] mb-4">
            <img
              src={img2}
              className="rounded-sm w-full h-full object-cover transition-all duration-500  "
            />
          </div>
          <h3 className="text-md font-semibold text-green-600 text-center">
            Sambit Mishra
          </h3>
          <p className="text-sm text-center">Student Head (2017-2018)</p>
          <p className="text-sm text-center font-semibold text-gray-500"></p>
        </div>
        <div className="border py-3 mt-3">
          <div className="relative flex justify-center items-center mx-auto w-[144px] h-[144px] mb-4">
            <img
              src={img3}
              className="rounded-sm w-full h-full object-cover transition-all duration-500 "
            />
          </div>
          <h3 className="text-md font-semibold text-green-600 text-center">
            Aadil Khan
          </h3>
          <p className="text-sm text-center">Student Head (2018-2020)</p>
          <p className="text-sm text-center font-semibold text-gray-500"></p>
        </div>
        <div className="border py-3 mt-3">
          <div className="relative flex justify-center items-center mx-auto w-[144px] h-[144px] mb-4">
            <img
              src={img4}
              className="rounded-sm w-full h-full object-cover transition-all duration-500  "
            />
          </div>
          <h3 className="text-md font-semibold text-green-600 text-center">
            Ashwath Bhat
          </h3>
          <p className="text-sm text-center">Student Head (2020-2021)</p>
          <p className="text-sm text-center font-semibold text-gray-500"></p>
        </div>
        <div className="border py-3 mt-3">
          <div className="relative flex justify-center items-center mx-auto w-[144px] h-[144px] mb-4">
            <img
              src={img5}
              className="rounded-sm w-full h-full object-cover transition-all duration-500 "
            />
          </div>
          <h3 className="text-md font-semibold text-green-600 text-center">
            V.S.S. Anirudh Sharma
          </h3>
          <p className="text-sm text-center">Student Head (2021-2022)</p>
          <p className="text-sm text-center font-semibold text-gray-500"></p>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-5  mb-8">
        <div className="border py-3 mt-3 mr-[144px] ml-[144px]">
          <div className="relative flex justify-center items-end mx-auto w-[144px] h-[144px] mb-4">
            <img
              src={img6}
              className="rounded-sm w-full h-full object-cover transition-all duration-500  "
            />
          </div>
          <h3 className="text-md font-semibold text-green-600 text-center">
            Dr. Richa Agrawal
          </h3>
          <p className="text-sm text-center">Advisor (2021-2023)</p>
          <p className="text-sm text-center font-semibold text-gray-500"></p>
        </div>
        
        <div className="border py-3 mt-3 mr-[144px] ml-[144px]">
          <div className="relative flex justify-center items-end mx-auto w-[144px] h-[144px] mb-4">
            <img
              src={img7}
              className="rounded-sm w-full h-full object-cover transition-all duration-500  "
            />
          </div>
          <h3 className="text-md font-semibold text-green-600 text-center">
            Sambit Mishra
          </h3>
          <p className="text-sm text-center">Student Head (2022-2023)</p>
          <p className="text-sm text-center font-semibold text-gray-500"></p>
        </div>
        </div>
        <div className="">
        <div className="flex justify-center items-center mx-auto ">
          <div className="border py-3 mt-3 mb-6">
            <div className="relative flex justify-center items-center mx-auto w-[144px] h-[144px] mb-4 mr-16 ml-16">
              <img
                src={img8}
                className="rounded-sm w-full h-full object-cover transition-all duration-500  "
              />
            </div>
            <h3 className="text-md font-semibold text-green-600 text-center">
            Prof. Prabhu Rajagopal
            </h3>
            <p className="text-sm text-center">Advisor (2023-Present)</p>
            <p className="text-sm text-center font-semibold text-gray-500"></p>
          </div>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-5  mb-8">
        <div className="border py-3 mt-3 mr-[144px] ml-[144px]">
          <div className="relative flex justify-center items-end mx-auto w-[144px] h-[144px] mb-4">
            <img
              src={img9}
              className="rounded-sm w-full h-full object-cover transition-all duration-500  "
            />
          </div>
          <h3 className="text-md font-semibold text-green-600 text-center">
            Harsha
          </h3>
          <p className="text-sm text-center">Student Head (2023-2024)</p>
          <p className="text-sm text-center font-semibold text-gray-500"></p>
        </div>
        
        <div className="border py-3 mt-3 mr-[144px] ml-[144px]">
          <div className="relative flex justify-center items-end mx-auto w-[144px] h-[144px] mb-4">
            <img
              src={img10}
              className="rounded-sm w-full h-full object-cover transition-all duration-500  "
            />
          </div>
          <h3 className="text-md font-semibold text-green-600 text-center">
            Yuvaraj Thakur
          </h3>
          <p className="text-sm text-center">Student Head (2024-Present)</p>
          <p className="text-sm text-center font-semibold text-gray-500"></p>
        </div>
        </div>
        <Footer/>
    </div>
    
  );
};

export default Genesis;
