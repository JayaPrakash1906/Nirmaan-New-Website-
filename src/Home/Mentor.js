import React from "react";
import Navbar from "../Components/Navbar";
import img1 from '../Assets/Mentors/pr.png';
import img2 from '../Assets/Mentors/devadula.png';
import img3 from '../Assets/Mentors/balas.png';
import img4 from "../Assets/Mentors/Satyesh Kumar.jpg";
import img5 from "../Assets/Mentors/profsatyav.jpg";
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
import img28 from "../Assets/Mentors/pandiyan.jpg";
import img29 from "../Assets/Mentors/lalithambika.jpg"
import img30 from "../Assets/Mentors/dhamodharan.jpg"
import img31 from "../Assets/Mentors/Prof. Milind Brahme.jpg"
import img32 from "../Assets/Mentors/Dr. Rama Shankar Verma.jpg"
import img33 from "../Assets/Mentors/m anand.png"
import img34 from "../Assets/Mentors/director.png"
import img35 from "../Assets/Mentors/aramesh.png"
import img36 from "../Assets/Mentors/M.Thenmozhi.jpg"
import img37 from "../Assets/Mentors/david.png"
import img38 from "../Assets/Mentors/JoelProfile.jpg"
import img39 from "../Assets/Mentors/santosh_sahu.jpg"
import img40 from "../Assets/Mentors/Manoj N.png"
import img41 from "../Assets/Mentors/vimal.png"
import img42 from "../Assets/Mentors/Bala_Ramadurai.jpg"
import img43 from "../Assets/Mentors/nandan_kumar.png"
import img44 from "../Assets/Mentors/John_Augustine.jpg"
import img45 from "../Assets/Mentors/Ganesan. AR.png"
import img46 from "../Assets/Mentors/Varadhan SKM.png"
import img47 from "../Assets/Mentors/hariharan.png"
import img48 from "../Assets/Mentors/Mukesh-Doble.webp"
import img49 from "../Assets/Mentors/V_Sriram.png"
import img50 from "../Assets/Mentors/Nitin Brave.avif"
import img51 from "../Assets/Mentors/Ramesh Nayaka.jpeg"
import img52 from "../Assets/Mentors/BobyGeorge.jpg"
import img53 from "../Assets/Mentors/Mathava Kumar.png"
import img54 from "../Assets/Mentors/Atul Jain.avif"
import img55 from "../Assets/Mentors/Velmurugan.png"
import img56 from "../Assets/Mentors/Gokul S Krishnan.jpg"
import img57 from "../Assets/Mentors/Raj_Jaswa.jpg"
import img58 from "../Assets/Mentors/shanti-k.png"
import Footer from "../Components/Footer";
import { FaArrowAltCircleRight, FaLinkedin } from "react-icons/fa";

function Mentor() {
    const mentors = [
         { img: img34, name: "Prof. V.Kamakoti", role: "Advisor", company: "Ystoxx", link: "https://www.linkedin.com/in/kamakoti-veezhinathan-9a8528b/" },
         { img: img5, name: "Prof. Satyanarayanan S", role: "Co-Founder", company: "Next carbon", link: "https://www.linkedin.com/in/satyaseshadri/" },
         { img: img1, name: "Prof. Prabhu Rajagopal", role: "Advisor", company: "Terraclime",link:"https://www.linkedin.com/in/prabhu-rajagopal-041ab74/"},
         { img: img7, name: "Prof. Parasuraman Swaminathan", role: "Advisor", company: "Uniscreen Solutions", link: "https://www.linkedin.com/in/parasuraman-swaminathan-19032533/" },
         { img: img8, name: "Dr.MohanaKrishnan Logan", role: "Advisor", company: "Eessan", link: "https://www.linkedin.com/in/mohanakrishnan-logan-3b4893b6/?originalSubdomain=in" },
        { img: img33, name: "Prof. Manish Anand", role: "Tech Advisor", company: "Jointsync",link:"https://www.linkedin.com/in/manish-anand-80985a170/"},
         { img: img2, name: "Dr. Sivasrinivasu Devadula", role: "Co-Founder & Advisor", company: "MachIntell", link: "https://www.linkedin.com/in/sivasrinivasu-devadula-74986812/" },
         { img: img3, name: "Prof. Krishnan Balasubramaniam", role: "Mentor & Advisor", company: "iGenie", link: "https://www.linkedin.com/in/krishnan-balasubramanian-534145157/" },
        // { img: img9, name: "Prof. Shyama Prasad das", role: "Advisor", company: "Renerzies", link: "https://www.linkedin.com/in/shyama-prasad-das-7167202/" },
        // { img: img10, name: "Prof. Dhiman Chatterjee", role: "Advisor", company: "Renerzies", link: "https://www.linkedin.com/in/dhiman-chatterjee-83ab532/" },
         { img: img4, name: "Dr. Satyesh Kumar Yadav", role: "Co-Founder", company: "MatLoad Solutions", link: "https://www.linkedin.com/in/satyesh-yadav-91a167a/" },
        // { img: img6, name: "Prof. Indumathi Manivannan Nambi", role: "Advisor", company: "EcoFarm", link: "https://www.linkedin.com/in/indunambi/" },
         { img: img13, name: "Prof. Sathiya N. Gummadi", role: "Co-Founder", company: "SSS Internation Drug Discovery & Development Research Pvt Ltd", link: "https://www.linkedin.com/in/sathyanarayana-gummadi-b37575250/" },
        // { img: img12, name: "Prof. P. Ramkumar", role: "Advisor", company: "Bhaskara Engineering Services", link: "" },
         { img: img14, name: "Dr.T. Pradeep", role: "Advisor", company: "Aqua Hive", link: "https://www.linkedin.com/in/thalappil-pradeep-b22505ba/?originalSubdomain=in" },
        // { img: img11, name: "Dr. Vidya Praveen Bhallamudi", role: "Advisor", company: "OptoMag Dia  gnostics", link: "https://www.linkedin.com/in/vidya-praveen-bhallamudi-b948a4336/" },
        // { img: img15, name: "Prof. Abdus Samad", role: "Advisor", company: "Tarang", link: "https://www.linkedin.com/in/abdussamad77/" },
         { img: img16, name: "Prof. Sivarama Krishnan", role: "Advisor", company: "Ashtachakra Innovations", link: "https://www.linkedin.com/in/srkris/?originalSubdomain=in" },
         { img: img17, name: "Prof.Vijayalakshmi", role: "Advisor", company: "MindVerve", link: "https://www.linkedin.com/in/m-thenmozhi-831894a/" },
         { img :img18, name: "Dr. Abhijit P. Deshpande", role: "Advisor", company: "Tawakkal", link: "https://www.linkedin.com/in/abhijit-deshpande-55ba3224a/?originalSubdomain=in" },
         { img: img19, name: "Prof. Manivannan M", role: "Advisor", company: "MindVerve", link: "https://www.linkedin.com/in/manivannan-muniyandi-5b2591224/?originalSubdomain=in" },
         { img: img20, name: "Prof. Basavaraja Madivala Gurappa", role: "Advisor", company: "OleoFoods", link: "https://www.linkedin.com/in/basaiitm/?originalSubdomain=in" },
         { img: img21, name: "Prof. G. Sai Krishnan", role: "Advisor", company: "SafeBrakes", link: "https://www.linkedin.com/in/sai-krishnan-9a0442197/?originalSubdomain=in" },
        // { img: img22, name: "Prof. Susy Varughese", role: "Advisor", company: "Tawakkal", link: "https://www.linkedin.com/in/satyajit-sahu-0b8a4a1b6/" },
         { img: img23, name: "Prof. m. pattabiraman", role: "Advisor", company: "SOMFIN", link: "https://www.linkedin.com/in/pattabiraman-murari/?originalSubdomain=in"},
        // { img: img24, name: "Dr. Prince Kumar", role: "Advisor", company: "Rakta Cure", link: "https://www.linkedin.com/in/prince-kumar-3a11391b1/?originalSubdomain=in" },
        // { img: img25, name: "Dr. Anuradha Sharma", role: "Advisor", company: "Rakta Cure", link: "" },
        // { img: img26, name: "Dr. Satyajit Singh", role: "Advisor", company: "Rakta Cure", link: "https://www.linkedin.com/in/satyajit-singh-619645321/?originalSubdomain=in" },
        // { img: img27, name: "Dheeraj Srivastava", role: "Advisor", company: "Rakta Cure", link: "https://www.linkedin.com/in/dheeraj-srivastava-01b4593/?originalSubdomain=in" },
        { img: img28, name: "Dr.S.Pandian", role: "Advisor", company: "Inbound Aerospace", link: "https://www.linkedin.com/in/pandian-ps-51721962/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in" },
        { img: img29, name: "Dr.Lalithambika", role: "Advisor", company: "Inbound Aerospace", link: "" },
         { img: img30, name: "Prof.R.Dhamodharan", role: "Advisor", company: "Sustainable Shield", link: "https://www.linkedin.com/in/dhamodharanraghavachari/" },
         { img: img31, name: "Prof. Milind Brahme", role: "Advisor", company: "Fix4Ever", link: "" },
         { img: img32, name: "Prof. Rama Shanker Verma", role: "Advisor", company: "Regeniche", link: "" },
         { img: img35, name: "Prof. Ramesh", role: "Advisor", company: "Phorcys Vx Marine Pvt Ltd", link: "" },
         { img: img36, name: "Prof. Thenmozhi", role: "Advisor", company: "Vaip", link: "https://www.linkedin.com/in/m-thenmozhi-831894a/" },
         { img: img37, name: "Prof. David Kumar", role: "Advisor", company: "TyranEx", link: "https://www.linkedin.com/in/david-kumar-22a15468/" },
         { img: img38, name: "Prof. Joel George M", role: "Advisor", company: "SwarmoPilot", link: "" },
         { img: img39, name: "Dr. Santhosh Kumar Sahu", role: "Advisor", company: "SwapVerse.ev", link: "https://www.linkedin.com/in/sksahuiitm/" },
         { img: img40, name: "Prof. N Manoj ", role: "Advisor", company: "Supersyringe", link: "https://www.linkedin.com/in/manoj-n-ba8b1211/" },
         { img: img41, name: "Dr. Vimal Edachery", role: "Guide/Advisor", company: "Stratagem Testing Solutions", link: "https://www.linkedin.com/in/dr-vimal-edachery-a15425aa/" },
         { img: img42, name: "Prof. Bala Ramadurai", role: "Advisor", company: "Utkarsha Spirelia", link: "https://www.linkedin.com/in/balaramadurai/" },
         { img: img43, name: "Prof. Nandan Kumar Sinha", role: "Guide", company: "SkyTrek Aeronautics", link: "https://www.linkedin.com/in/nandan-kumar-sinha-8a507014/" },
         { img: img44, name: "Prof. John Augustine", role: "Advisor", company: "PreOwn", link: "https://www.linkedin.com/in/johnaugustine/" },
         { img: img45, name: "Prof. A.R Ganesan", role: "Co-Founder/Technical Advisor", company: "Preciqube", link: "https://www.linkedin.com/in/a-r-ganesan-2159182a/" },
         { img: img46, name: "Prof. Varadhan SKM", role: "Founder", company: "Kriyaneuro Technologies", link: "https://www.linkedin.com/in/varadhanskm/" },
         { img: img47, name: "Dr.Hariharan K", role: "Advisor", company: "ExactaRobotics", link: "https://www.linkedin.com/in/hariharankrish/" },
         { img: img48, name: "Prof. Mukesh Doble", role: "Advisor", company: "Ecogreen Innovation Pvt Ltd", link: "https://www.linkedin.com/in/mukesh-doble-a213352/" },
         { img: img49, name: "Dr. V Sriram", role: "Advisor", company: "ArkEdge", link: "" },
         { img: img50, name: "Prof. Nitin Barve", role: "Advisor", company: "EZ Invest", link: "" },
         { img: img51, name: "Dr. Ramesh Nayaka", role: "Advisor", company: "Acala design and Tech Pvt Ltd", link: "https://www.linkedin.com/in/dr-ramesh-nayaka-aa17b347/" },
         { img: img52, name: "Prof. Boby George", role: "Advisor", company: "Qualgrip", link: "https://www.linkedin.com/in/boby-george-82090262/" },
         { img: img53, name: "Dr. Mathava Kumar S", role: "Advisor", company: "WAL & AL", link: "https://www.linkedin.com/in/mathava-kumar-s-iitm-1129983a8/" },
         { img: img54, name: "Prof.Atul Jain", role: "Advisor", company: "SMARTIE TECH", link: "" },
         { img: img55, name: "Dr.R.Velmurugan", role: "Advisor", company: "NIVAARA", link: "https://www.linkedin.com/in/velmurugan-r-iitm-0566ba1b9/" },
         { img: img56, name: "Dr. Gokul S Krishnan", role: "Advisor", company: "Juku AI", link: "https://www.linkedin.com/in/gokul-s-krishnan-437a7654/" },
         { img: img57, name: "Prof.Raj Jaswa", role: "Advisor", company: "Gaara AI", link: "https://www.linkedin.com/in/rjaswa/" },
         { img: img58, name: "Prof. Shanti Swarup K", role: "Advisor", company: "iEnergiX", link: "https://www.linkedin.com/in/shanti-swarup-7b15b312/" },



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
