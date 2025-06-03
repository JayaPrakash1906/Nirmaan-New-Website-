import React from "react";
import Navbar from "../Components/Navbar";
import img1 from '../Assets/Mentors/anirudh_javacapital.avif';
import img2 from '../Assets/Mentors/Gopal.JPG';
import img3 from '../Assets/Mentors/jeyappriadhevi.png';
import img4 from "../Assets/Mentors/Krishnan_jagadisan.jpg";
import img5 from "../Assets/Mentors/Manish Gandhi Photo.jpg";
import img6 from "../Assets/Mentors/mohan_narayanan.jpg";
import img7 from "../Assets/Mentors/ponguri_parthasarathy.jpg"
import img8 from "../Assets/Mentors/praveenkumar_debard.jpg"
import img9 from "../Assets/Mentors/rahuldev_algaram.jpg"
import img10 from "../Assets/Mentors/vaibhav_goyal.jpg"

import Footer from "../Components/Footer";
import { FaArrowAltCircleRight, FaLinkedin } from "react-icons/fa";

function Mentor() {
    const mentors = [
        { img: img1, name: "Anirudh Jayagopal", role: "Principal", company: "Java Capital",link:"https://www.linkedin.com/in/anirudh-jayagopal/?jobid=1234"},
        { img: img2, name: "Gopal Raman", role: "Formerly President ", company: "Hinduja Group", link: "https://www.linkedin.com/in/ramangopal/" },
        { img: img3, name: "Jeyappria dhevi ", role: "Founder ", company: "Kodate", link: "https://www.linkedin.com/in/jjpria/" },
        { img: img4, name: "Krishnan Jagadisan", role: "Managing Director", company: "Unimity Solutions", link: "" },
        { img: img5, name: "Manish Gandhi", role: "Angel Investor", company: "", link: "https://www.linkedin.com/in/manish-gandhi-b0401a1b2/?originalSubdomain=in" },
        { img: img6, name: "Mohan Narayanan", role: "Governing Board Member", company: "PALS", link: "https://www.linkedin.com/in/mohan-narayanan-52626b12/?jobid=1234" },
        { img: img7, name: "Ponguri Parthasarathy", role: "Business Mentor", company: "Deep Technology Healthcare Startups", link: "https://www.linkedin.com/in/ponguriparthasarathy/" },
        { img: img8, name: "PraveenKumar Radhakrishnan", role: "CTO", company: "Debord Technologies", link: "https://www.linkedin.com/in/praveenkumar-radhakrishnan-9806514b/" },
        { img: img9, name: "Rahuldev Radhakrishnan", role: "Director", company: "Algram Labs Private Limited", link: "https://www.linkedin.com/in/rahuldev-radhakrishnan-2589b9b0/" },
        { img: img10, name: "Vaibhav Goyal", role: "Co-Founder", company: "Predixion AI", link: "https://www.linkedin.com/in/vaibhavg/" },
        
    ];

    return (
        <div>
            <Navbar />
            <div className="md:mt-[80px] font-dmsans">
                <div className="bg-green-100">
                    <div className="pt-5 pl-5 flex">
                        <span><a href="/" className="text-gray-500 font-semibold hover:underline">Home</a></span>
                        <span className="p-2 text-gray-500"><FaArrowAltCircleRight size={12} /></span>
                        <span className="text-black font-semibold">Business Mentors</span>
                    </div>
                    <h2 className="text-5xl font-semibold text-green-600 pt-7 pb-6 text-center">Business Mentors</h2>
                    
                </div>
                <div className="mt-10">
                    <div className="md:grid md:grid-cols-4 md:gap-5 px-10 mb-8">
    {mentors.map((mentor, index) => (
        <div key={index} className="border py-3 mt-3">
            <div className="flex justify-center items-center mx-auto w-[144px] h-[144px] mb-4">
                <img 
                    src={mentor.img} 
                    alt={mentor.name} 
                    className="rounded-sm w-full h-full object-top transition-all duration-500 "
                />
            </div>
            <h3 className="text-md font-semibold text-green-600 text-center">{mentor.name}</h3>
            <p className="text-sm text-center">{mentor.role}</p>
            <p className="text-sm text-center font-semibold text-gray-500">{mentor.company}</p>
            <div className="flex justify-center mt-2">
                <a 
                    href={mentor.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                >
                    <FaLinkedin size={25} />
                </a>
            </div>
        </div>
    ))}
</div>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Mentor;
