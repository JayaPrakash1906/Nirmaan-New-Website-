// import React from "react";
// import Navbar from "../Components/Navbar";

// function Incubation(){
//     return (
//         <div>
//             <Navbar />

//             <div className="mt-[100px]">
//                    <div className="text-center font-semibold">Stages of Pre-Incubation</div>

//                    <div className="grid grid-cols-5 gap-10 px-10 mt-10">
//                         <div className="border">
//                             <div className="grid grid-cols-2">
//                                     <div></div>
//                                     <div></div>
//                             </div>
//                         </div>
//                         <div className="border">skfh</div>
//                         <div className="border">skfh</div>
//                         <div className="border">skfh</div>
//                         <div className="border">skfh</div>
//                    </div>
//             </div>
//         </div>
//     )
// }
//export default Incubation;

import React from "react";
import WhatWeOffer from "../Components/Eligibility";
import ApplicationProcess from "../Components/ApplicationProcess";
import Eligibility from "../Components/Eligibility";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FaArrowAltCircleRight } from "react-icons/fa";

function Incubation() {
  return (
    <div className="font-dmsans">
      <Navbar />

      {/* Main Content */}
      <section className=" md:mt-[80px]">
      <div className="bg-green-100">
                        <div className="p-5 flex"><span><a href="/" className="text-gray-500 font-semibold hover:underline">Home</a></span> <span className="p-2 text-gray-500"><FaArrowAltCircleRight size={12}/></span> <a className="text-black font-semibold" href="/incubation">Pre-Incubation</a></div>
                        <h2 className="md:text-5xl font-semibold text-green-600 pt-8 pb-3 text-center sm:text-3xl">Pre-Incubation Program</h2>
                        
                </div> 
        <p className="mr-16 ml-16 font-dmsans mt-6 ">
          {" "}
          Nirmaan offers two exciting programs for student teams ready to embark
          on their entrepreneurial journey: Pratham and Akshar. Pratham gives
          you the core skills and knowledge to build a successful startup from
          the ground up. Akshar, on the other hand, focuses on helping you
          create a Minimum Viable Product (MVP) to test and refine your business
          idea. With Pratham’s foundational training and Akshar’s MVP
          development support, you’ll have everything you need to turn your
          entrepreneurial vision into reality
        </p>{" "}
      </section>
      {/* What We Offer Section */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 px-10">
        <div className="text-center border mt-4 rounded-lg p-6 border border-green-500">
          <h3 className="text-2xl font-semibold mb-4 text-green-600">
            Pratham - 8 Week Program
          </h3>
          <p className="text-gray-900 mb-6 leading-relaxed text-justify">
            Jumpstart your entrepreneurial journey with our 8-Week
            Program, Pratham, named after the Sanskrit word for "first.” This
            intensive program will guide student teams through the basics of
            business, finance, and market strategy, helping them turn their
            ideas into real possibilities. Here, each selected team will be
            equipped with a seed grant of ₹2 Lakhs, empowering them to conduct
            in-depth market research and develop prototypes.
          </p>
        </div>

        {/* Akshar Card */}
        <div className="text-center border mt-4 rounded-lg p-6 border border-green-500">
          <h3 className="text-2xl font-semibold mb-4 text-green-600">
            Akshar - 6 Month MVP Development
          </h3>
          <p className="text-gray-900 mb-6 leading-relaxed text-justify">
            Teams that shine in the Pratham phase will advance to the Akshar
            phase—a 6-month program designed to elevate your project. Here,
            you'll focus on developing your Minimum Viable Product (MVP) and
            mastering advanced business strategies like pricing, sales, and
            marketing. Each team will be granted ₹5 Lakhs to support MVP
            creation, in-depth market research, and connections with industry
            professionals. This is your opportunity to refine your project and
            make a lasting impact!
          </p>
        </div>
      </div>
      <section className=" bg-white shadow-md rounded-lg p-8 mt-[50px]">
        <h2 className="text-center text-3xl font-bold  text-green-600 mb-8">
          What We Offer
        </h2>
        <WhatWeOffer />
      </section>
      <section className="mb-16 bg-gradient-to-r from-green-100 via-white to-green-200 shadow-md rounded-lg p-8">
        <h2 className="text-center text-3xl font-bold font-dmsans text-green-600 mb-8">
          Application Process
        </h2>
        <ApplicationProcess />
      </section>
      <Footer />
    </div>
  );
}

export default Incubation;
