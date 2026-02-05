import React from "react";
import Navbar from "../Components/Navbar";
import img1 from '../Assets/Mentors/pr.png';
import img2 from '../Assets/Mentors/devadula.png';
import img3 from '../Assets/Mentors/balas.png';
import img4 from "../Assets/Mentors/Satyesh Kumar.jpg";
import img5 from "../Assets/Mentors/satyaseshadri.png";
import img6 from "../Assets/Mentors/IMN - Indumathi Nambi.jpg";
import img7 from "../Assets/Mentors/PS.jpeg";
import img8 from "../Assets/Mentors/Mohanakrishnan.jpg";
import img9 from "../Assets/Mentors/spdas.png";
import img10 from "../Assets/Mentors/dhiman.png";
import img11 from "../Assets/Mentors/vidya.jpg";
import img12 from "../Assets/Mentors/ramkumar.jpg";
import img13 from "../Assets/Mentors/sathya.png";
import img14 from "../Assets/Mentors/Prof.-T.-Pradeep.png";
import img15 from "../Assets/Mentors/samad-jan2021pic3-942x1024-1-276x300.jpg";
import img16 from "../Assets/Mentors/sivaramakrishnan.jpg";
import img17 from "../Assets/Mentors/viji.jpg";
import img18 from "../Assets/Mentors/Abhijith.png";
import img19 from "../Assets/Mentors/manivannan.jpg";
import img20 from "../Assets/Mentors/basavaraj.png";
import img21 from "../Assets/Mentors/sai_krishnan.jpg";
import img22 from "../Assets/Mentors/Susy_Varughese.jpg";
import img23 from "../Assets/Mentors/Pattabiraman. M.png";
import img24 from "../Assets/Mentors/prince_kumar.jpg";
import img25 from "../Assets/Mentors/anuradhas.jpg";
import img26 from "../Assets/Mentors/satyajit_singh.jpg";
import img27 from "../Assets/Mentors/dheeraj_srivastava.jpg";
import img28 from "../Assets/Mentors/p_s_pandian.jpg";
import img29 from "../Assets/Mentors/lalithambika.jpg"
import Footer from "../Components/Footer";
import { FaArrowAltCircleRight, FaLinkedin } from "react-icons/fa";

function Mentor() {
    const mentors = [
        { img: img5, name: "Prof. Satyanarayanan S", role: "Co-Founder", company: "Next carbon", link: "https://www.linkedin.com/in/satyaseshadri/" },
        { img: img1, name: "Prof. Prabhu Rajagopal", role: "Advisor", company: "Terraclime",link:"https://www.linkedin.com/in/prabhu-rajagopal-041ab74/"},
        { img: img7, name: "Prof. Parasuraman Swaminathan", role: "Advisor", company: "Uniscreen Solutions", link: "https://www.linkedin.com/in/parasuraman-swaminathan-19032533/" },
        { img: img8, name: "Dr.MohanaKrishnan Logan", role: "Advisor", company: "Eessan", link: "https://www.linkedin.com/in/mohanakrishnan-logan-3b4893b6/?originalSubdomain=in" },
        { img: img2, name: "Dr. Sivasrinivasu Devadula", role: "Co-Founder & Advisor", company: "MachIntell", link: "https://www.linkedin.com/in/sivasrinivasu-devadula-74986812/" },
        { img: img3, name: "Prof. Krishnan Balasubramaniam", role: "Mentor & Advisor", company: "iGenie", link: "https://www.linkedin.com/in/krishnan-balasubramanian-534145157/" },
        { img: img9, name: "Prof. Shyama Prasad das", role: "Advisor", company: "Renerzies", link: "https://www.linkedin.com/in/shyama-prasad-das-7167202/" },
        { img: img10, name: "Prof. Dhiman Chatterjee", role: "Advisor", company: "Renerzies", link: "https://www.linkedin.com/in/dhiman-chatterjee-83ab532/" },
        { img: img4, name: "Dr. Satyesh Kumar Yadav", role: "Co-Founder", company: "MatLoad Solutions", link: "https://www.linkedin.com/in/satyesh-yadav-91a167a/" },
        { img: img6, name: "Prof. Indumathi Manivannan Nambi", role: "Advisor", company: "EcoFarm", link: "https://www.linkedin.com/in/indunambi/" },
        { img: img13, name: "Prof. Sathiya N. Gummadi", role: "Co-Founder", company: "SSS Internation Drug Discovery & Development Research Pvt Ltd", link: "https://www.linkedin.com/in/sathyanarayana-gummadi-b37575250/" },
        { img: img12, name: "Prof. P. Ramkumar", role: "Advisor", company: "Bhaskara Engineering Services", link: "" },
        { img: img14, name: "Dr.T. Pradeep", role: "Advisor", company: "Aqua Hive", link: "https://www.linkedin.com/in/thalappil-pradeep-b22505ba/?originalSubdomain=in" },
        { img: img11, name: "Dr. Vidya Praveen Bhallamudi", role: "Advisor", company: "OptoMag Dia  gnostics", link: "https://www.linkedin.com/in/vidya-praveen-bhallamudi-b948a4336/" },
        { img: img15, name: "Prof. Abdus Samad", role: "Advisor", company: "Tarang", link: "https://www.linkedin.com/in/abdussamad77/" },
        { img: img16, name: "Prof. Sivarama Krishnan", role: "Advisor", company: "Ashtachakra Innovations", link: "https://www.linkedin.com/in/srkris/?originalSubdomain=in" },
        { img: img17, name: "Prof.Vijayalakshmi", role: "Advisor", company: "MindVerve", link: "https://www.linkedin.com/in/abdussamad77/" },
        { img :img18, name: "Dr. Abhijit P. Deshpande", role: "Advisor", company: "Tawakkal", link: "https://www.linkedin.com/in/abhijit-deshpande-55ba3224a/?originalSubdomain=in" },
        { img: img19, name: "Prof. Manivannan M", role: "Advisor", company: "MindVerve", link: "https://www.linkedin.com/in/manivannan-muniyandi-5b2591224/?originalSubdomain=in" },
        { img: img20, name: "Prof. Basavaraja Madivala Gurappa", role: "Advisor", company: "OleoFoods", link: "https://www.linkedin.com/in/basaiitm/?originalSubdomain=in" },
        { img: img21, name: "Prof. G. Sai Krishnan", role: "Advisor", company: "SafeBrakes", link: "https://www.linkedin.com/in/sai-krishnan-9a0442197/?originalSubdomain=in" },
        { img: img22, name: "Prof. Susy Varughese", role: "Advisor", company: "Tawakkal", link: "https://www.linkedin.com/in/satyajit-sahu-0b8a4a1b6/" },
        { img: img23, name: "Prof. m. pattabiraman", role: "Advisor", company: "SOMFIN", link: "https://www.linkedin.com/in/pattabiraman-murari/?originalSubdomain=in"},
        { img: img24, name: "Dr. Prince Kumar", role: "Advisor", company: "Rakta Cure", link: "https://www.linkedin.com/in/prince-kumar-3a11391b1/?originalSubdomain=in" },
        { img: img25, name: "Dr. Anuradha Sharma", role: "Advisor", company: "Rakta Cure", link: "" },
        { img: img26, name: "Dr. Satyajit Singh", role: "Advisor", company: "Rakta Cure", link: "https://www.linkedin.com/in/satyajit-singh-619645321/?originalSubdomain=in" },
        { img: img27, name: "Dheeraj Srivastava", role: "Advisor", company: "Rakta Cure", link: "https://www.linkedin.com/in/dheeraj-srivastava-01b4593/?originalSubdomain=in" },
        { img: img28, name: "Prof. P.S.Pandian", role: "Advisor", company: "Inbound Aerospace", link: "https://www.linkedin.com/in/pandian-ps-51721962/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in" },
        { img: img29, name: "DR.Lalithambika", role: "Advisor", company: "Inbound Aerospace", link: "" },
    ];

    return (
        <div>
            <Navbar />
            <div className="md:mt-[80px] font-dmsans">
                <div className="bg-green-100">
                    <div className="pt-5 pl-5 flex">
                        <span><a href="/" className="text-gray-500 font-semibold hover:underline">Home</a></span>
                        <span className="p-2 text-gray-500"><FaArrowAltCircleRight size={12} /></span>
                        <span className="text-black font-semibold">Faculty Mentors</span>
                    </div>
                    <h2 className="text-5xl font-semibold text-green-600 pt-7 pb-6 text-center">Faculty Mentors</h2>
                    
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
