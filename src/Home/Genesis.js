import React from "react";
import Navbar from "../Components/Navbar";
import { FaArrowAltCircleRight } from "react-icons/fa";
import img1 from "../Assets/satyaseshadri.png";
import img2 from "../Assets/SambitMishra.jpg";
import img3 from "../Assets/AadilKhan.jpg";
import img4 from "../Assets/AshwanthBhat.jpg";
import img5 from "../Assets/AnirudhSharma.jpg";
import img6 from "../Assets/dr.richa_doms.png";
import Footer from "../Components/Footer";

const Timeline = () => {
  const skills = [
    {
      title: "HTML",
      duration: "2017 - 2022",
      description: "Learned foundational web structure using HTML.",
      images: [
        { src: img1, caption: "Dr. Satyanarayanan Seshadri", company: "Advisor" },
        { src: img2, caption: "Sambit Mishra", company: "Student Head (2017-2018)" },
        { src: img3, caption: " Aadil Khan", company: "Student Head (2018-2020)" },
        { src: img4, caption: " Ashwath Bhat", company: "Student Head (2020-2021)" },
        { src: img5, caption: " V.S.S. Anirudh Sharma", company: "Student Head (2021-2022)"}
      ],
    },
    {
      title: "JavaScript",
      duration: "2017 - 2022",
      description: "Enhanced web applications with dynamic interactions.",
      images: [
        { src: img5, caption: "JavaScript Core", company: "Company Name 2" },
        { src: img6, caption: "Modern JavaScript", company: "Company Name 2" },
      ],
    },
  ];

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

      <div className="min-h-screen bg-gray-100 text-white flex flex-col items-center py-10">
        <h1 className="text-4xl font-bold mb-10 text-black">My Skills</h1>
        <div className="relative w-full max-w-6xl">
          <div className="absolute top-0 left-1/2 w-1 bg-gray-300 h-full transform -translate-x-1/2"></div>
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`flex items-center mb-10 ${
                index % 2 === 0 ? "flex-row-reverse" : "flex-row"
              }`}
            >
              {/* Card Content */}
              <div className="w-1/2 flex flex-col items-center">
                <div className="p-6 bg-white text-black rounded-lg shadow-md w-10/12">
                  {/* <h2 className="text-2xl font-bold mb-2">{skill.title}</h2>
                  <p className="text-sm text-gray-600 mb-2">{skill.company}</p>
                  <p className="text-sm text-gray-800 mb-4">{skill.description}</p> */}
                  {/* Image Section */}
                  <div>
                    {skill.images.map((image, idx) => (
                      <div
                        key={idx}
                        className={`${
                          idx === 0
                            ? "mb-4 text-center"
                            : "inline-flex items-center space-x-4 "
                        }`}
                      >
                        {/* Caption for Images */}
                        <div className="text-start">
                           
                          <img
                            src={image.src}
                            alt={`${skill.title} ${idx + 1}`}
                            className="w-16 h-16 object-cover rounded-full border-2 border-gray-300"
                          />
                          <p className="text-sm font-semibold  text-gray-800">
                            {image.caption}
                          </p> 
                          <p className="text-1sm text-gray-600 mb-2 mr-3">{image.company}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Duration Section */}
              <div className="w-1/2 flex justify-center">
                <div className=" rounded-full border-4 border-green-300 text-black px-4 py-2">
                  {skill.duration}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Timeline;
  