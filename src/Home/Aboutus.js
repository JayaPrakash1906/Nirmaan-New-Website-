import React from 'react';
import Navbar from '../Components/Navbar';
import img1 from '../Assets/About/what we do image.jpg';
import img2 from '../Assets/About/BobyGeorge.jpg';
import img3 from '../Assets/About/satyaseshadri.png';
import img4 from '../Assets/About/tamoshwathi.webp';
import img5 from '../Assets/About/chirag.jpeg'; 
import img6 from "../Assets/About/Advisor_Message.png"
import img7 from '../Assets/About/Nandhini.jpeg';
import img8 from '../Assets/About/Yuvaraj_Thakur.jpg';
import img9 from '../Assets/About/vishy.jpg';
import img10 from '../Assets/About/ourgoal.jpg';
import img11 from '../Assets/About/ashwin-mahalingam.jpg'
import Footer from '../Components/Footer';
import { FaArrowAltCircleRight } from 'react-icons/fa';

const Team = () => {
  const teamMembers = [ 
    {
      name: "Prof. Boby George",
      title: "Professor",
      department: "Department of Electrical Engineering",
      organisation: 'IIT Madras',
      image: img2,
    },
    {
      name: "Prof. Satyanarayanan Seshadri",
      title: "Associate Professor",
      department: "Dept of Applied Mechanics",
      organisation: 'IIT Madras',
      image: img3,
    },
    {
      name: "Prof. Ashwin Mahalingam",
      title: "Professor",
      department: "Department of Civil Engineering",
      organisation: 'IIT Madras',
      image: img11,
    },
    {
      name: "Dr. Tamaswati Ghosh",
      title: "Chief Executive Officer",
      organisation: 'IITM Incubation Cell',
      image: img4,
    },
    {
      name: "Mr. Chirag Gupta",
      title: "Managing Partner",
      organisation: '8X Ventures',
      image: img5,
    },
    {
      name: "Mr. Srinivasan Viswanathan",
      title: "Co-Founder",
      organisation: 'Ultimate Business Advisors LLP',
      image: img9,
    },
    {
      name: "Prof. Prabhu Rajagopal",
      organisation: 'Office of Innovation & Entrepreneurship',
      image: img6,
    },
    {
      name: "K S Nandhini",
      title: "Manager",
      organisation: 'Office of Innovation & Entrepreneurship',
      image: img7,
    },
    {
      name: "Yuvraj Thakur",
      title: "Student Executive Head",
      organisation: 'Nirmaan',
      image: img8,
    },
  ];

  return (
    <div className="bg-gray-200 py-8 px-4 font-dmsans">
      <h2 className='text-center text-2xl mt-2 mb-6 font-bold text-green-600'>Advisory Board Members</h2>

      {/* Advisory Board Members */}
<div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4 justify-items-center">
        {teamMembers.slice(0, 6).map((member, index) => (
          <div key={index} className="flex flex-col items-center w-60">
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full object-cover mb-3"
            />
            <p className="text-green-600 font-semibold text-md text-center whitespace-nowrap overflow-hidden text-ellipsis w-full">
              {member.name}
            </p>
            {index < 3 ? (
              <>
                <p className="text-gray-600 font-medium text-sm text-center whitespace-nowrap overflow-hidden text-ellipsis w-full">
                  {member.title}
                </p>
                <p className="text-gray-600 text-sm text-center whitespace-nowrap overflow-hidden text-ellipsis w-full">
                  {member.department}
                </p>
                <p className="text-gray-600 text-sm text-center whitespace-nowrap overflow-hidden text-ellipsis w-full">
                  {member.organisation}
                </p>
              </>
            ) : (
              <>
                <p className="text-gray-600 font-medium text-sm text-center whitespace-nowrap overflow-hidden text-ellipsis w-full">
                  {member.title}
                </p>
                <p className="text-gray-600 text-sm text-center whitespace-nowrap overflow-hidden text-ellipsis w-full">
                  {member.organisation}
                </p>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Faculty Advisor */}
      <h2 className='text-center text-2xl mt-10 mb-4 font-bold text-green-600'>Faculty Advisor</h2>
      <div className="grid grid-cols-1 gap-8 px-4 sm:px-14">
        {teamMembers.slice(6, 7).map((member, index) => (
          <div key={index} className="text-center">
            <img
              src={member.image}
              alt={member.name}
              className="mx-auto w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover mb-4 object-top"
            />
            <h3 className="text-xl font-semibold text-green-600">
              {member.name}
            </h3>
            <p className="text-gray-600 font-semibold">{member.title}</p>
            <p className="text-gray-600">{member.organisation}</p>
          </div>
        ))}
      </div>

      {/* Management */}
      <h2 className='text-center text-2xl mt-10 mb-4 font-bold text-green-600'>Management</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 px-4 sm:px-14">
        {teamMembers.slice(7, 9).map((member, index) => (
          <div key={index} className="text-center">
            <img
              src={member.image}
              alt={member.name}
              className="mx-auto w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover mb-4 object-top"
            />
            <h3 className="text-xl font-semibold text-green-600 font-dmsans">
              {member.name}
            </h3>
            <p className="text-gray-600 font-semibold font-dmsans">{member.title}</p>
            <p className="text-gray-600 font-dmsans">{member.organisation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Aboutus = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="md:mt-[80px]  font-dmsans">
          <div className="bg-green-100"> 
            <div className="p-5 flex">
              <span>
                <a href="/" className="text-gray-500 font-semibold hover:underline">Home</a>
              </span>
              <span className="p-2 text-gray-500">
                <FaArrowAltCircleRight size={12} />
              </span>
              <span className="text-black font-semibold">About</span>
            </div>
            <h2 className="text-5xl font-semibold text-green-600 text-center pt-3 pb-6">About Us</h2>
          </div>

          <div className="max-w-7xl mx-auto mt-10">
            {/* What We Do Section */}
            <div className="mt-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-20 mb-10">
                <div>
                  <h3 className="text-2xl font-bold text-green-600 text-center font-dmsans">
                    What We Do
                  </h3>
                  <p className="mt-4 text-md text-gray-600 max-w-3xl mx-auto text-justify font-dmsans">
                    Nirmaan, the pre-incubator, started its journey on 31st October 2015, funded by the IITM batch of 1992. At Nirmaan, we are dedicated to delivering a rich entrepreneurial experience to our students by providing essential resources such as workspace, cutting-edge tools, expert mentorship, interactive workshops, funding opportunities, and valuable networking connections.
                  </p>
                </div>
                <div>
                  <img src={img1}
                    className="h-[200px] w-full border border rounded-lg ml-0"
                    alt="Image 1" />
                </div>
              </div>
            </div>

            {/* Our Goal Section */}
            <div className="mt-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-20 mb-10">
                <div>
                  <img src={img10}
                    className="w-full h-[200px] border border rounded-lg"
                    alt="Image 1" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-green-600 text-center font-dmsans">
                    Our Goal
                  </h3>
                  <p className="mt-4 text-md text-gray-900 max-w-3xl mx-auto text-justify font-dmsans">
                    With a commitment to “Bringing Ideas to Life,” our goal is to empower students to go beyond traditional career routes and cultivate their innovative ideas into thriving businesses. Through strategic collaboration with the IITM Research Park's Incubation Cell, we connect students with real-world entrepreneurial resources and support to help them turn their visions into viable enterprises.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission and Vision Section */}
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-20 mb-10">
              {/* Vision */}
              <div className="relative bg-green-50 p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                <h4 className="text-md font-bold text-green-600 mb-4 font-dmsans">Vision</h4>
                <p className="text-gray-700 font-dmsans">
                  Catalyzing entrepreneurship culture by developing a strong ecosystem that transforms creative ideas into successful startups in India.
                </p>
              </div>

              {/* Mission */}
              <div className="relative bg-green-50 p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                <h4 className="text-md font-bold text-green-600 mb-4">Mission</h4>
                <p className="text-gray-700">
                  Providing infrastructure, mentorship, funding, and workspace to help IITM students turn their innovative ideas into thriving enterprises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Team />
      <Footer />
    </div>
  );
}

export default Aboutus;
        