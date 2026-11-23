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
import PageHeader from "../Components/PageHeader";

function Incubation() {
  return (
    <div className="site-wrap font-dmsans">
      <Navbar />
      <main className="site-main">
        <PageHeader title="Pre-Incubation Program" trail={[{ label: "Home", href: "/" }, { label: "Pre-Incubation" }]} />
        <div className="site-container py-8 space-y-8 pb-12">
        <p className="font-dmsans text-gray-700 leading-relaxed text-justify">
          {" "}
          Nirmaan offers two exciting programs for student teams ready to embark
          on their entrepreneurial journey: Pratham and Akshar. Pratham gives
          you the core skills and knowledge to build a successful startup from
          the ground up. Akshar, on the other hand, focuses on helping you
          create a Minimum Viable Product (MVP) to test and refine your business
          idea. With Pratham’s foundational training and Akshar’s MVP
          development support, you’ll have everything you need to turn your
          entrepreneurial vision into reality
        </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="pro-card text-center">
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
        <div className="pro-card text-center">
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
      <div className="pro-card">
        <h2 className="text-center text-2xl font-semibold text-green-800 mb-6">What We Offer</h2>
        <WhatWeOffer />
      </div>
      <div className="pro-card">
        <h2 className="text-center text-2xl font-semibold font-dmsans text-green-800 mb-6">Application Process</h2>
        <ApplicationProcess />
      </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Incubation;
