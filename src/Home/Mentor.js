import React from "react";
import Navbar from "../Components/Navbar";
import prabhu from "../Assets/Mentors/pr.png";
import devadula from "../Assets/Mentors/devadula.png";
import balas from "../Assets/Mentors/balas.png";
import satyesh from "../Assets/Mentors/Satyesh Kumar.jpg";
import satya from "../Assets/Mentors/profsatyav.jpg";
import parasuraman from "../Assets/Mentors/PS.jpeg";
import mohanakrishnan from "../Assets/Mentors/Mohanakrishnan.jpg";
import sathya from "../Assets/Mentors/sathya.png";
import pradeep from "../Assets/Mentors/Prof.-T.-Pradeep.png";
import sivarama from "../Assets/Mentors/sivaramakrishnan.jpg";
import viji from "../Assets/Mentors/viji.jpg";
import abhijit from "../Assets/Mentors/Abhijith.png";
import basavaraj from "../Assets/Mentors/basavaraj.png";
import pattabiraman from "../Assets/Mentors/Pattabiraman. M.png";
import lalithambika from "../Assets/Mentors/lalithambika.jpg";
import dhamodharan from "../Assets/Mentors/dhamodharan.jpg";
import milind from "../Assets/Mentors/Prof. Milind Brahme.jpg";
import rama from "../Assets/Mentors/Dr. Rama Shankar Verma.jpg";
import manishAnand from "../Assets/Mentors/m anand.png";
import kamakoti from "../Assets/Mentors/director.png";
import aramesh from "../Assets/Mentors/aramesh.png";
import thenmozhi from "../Assets/Mentors/M.Thenmozhi.jpg";
import david from "../Assets/Mentors/david.png";
import joel from "../Assets/Mentors/JoelProfile.jpg";
import santoshSahu from "../Assets/Mentors/santosh_sahu.jpg";
import manoj from "../Assets/Mentors/Manoj N.png";
import vimal from "../Assets/Mentors/vimal.png";
import balaRamadurai from "../Assets/Mentors/Bala_Ramadurai.jpg";
import nandan from "../Assets/Mentors/nandan_kumar.png";
import john from "../Assets/Mentors/John_Augustine.jpg";
import ganesan from "../Assets/Mentors/Ganesan. AR.png";
import varadhan from "../Assets/Mentors/Varadhan SKM.png";
import hariharan from "../Assets/Mentors/hariharan.png";
import sriram from "../Assets/Mentors/V_Sriram.png";
import rameshNayaka from "../Assets/Mentors/Ramesh Nayaka.jpeg";
import boby from "../Assets/Mentors/BobyGeorge.jpg";
import mathava from "../Assets/Mentors/Mathava Kumar.png";
import velmurugan from "../Assets/Mentors/Velmurugan.png";
import shanti from "../Assets/Mentors/shanti-k.png";
import Footer from "../Components/Footer";
import PageHeader from "../Components/PageHeader";
import MentorPhoto from "../Components/MentorPhoto";
import { FaLinkedin } from "react-icons/fa";

/** Roster from New Nirmaan Website project (facultyMentors) */
const facultyMentors = [
  { img: kamakoti, name: "Prof. V. Kamakoti", role: "Advisor", company: "shivkiranmobility", link: "https://www.linkedin.com/in/kamakoti-veezhinathan-9a8528b/" },
  { img: satya, name: "Prof. Satyanarayanan S", role: "Advisor", company: "Waterfly Technologies", link: "https://www.linkedin.com/in/satyaseshadri/" },
  { img: prabhu, name: "Prof. Prabhu Rajagopal", role: "Advisor", company: "Terraclime,GEMESH", link: "https://www.linkedin.com/in/prabhu-rajagopal-041ab74/", faceFocus: true },
  { img: parasuraman, name: "Prof. Parasuraman Swaminathan", role: "Advisor", company: "Uniscreen Solutions", link: "https://www.linkedin.com/in/parasuraman-swaminathan-19032533/" },
  { img: mohanakrishnan, name: "Dr. MohanaKrishnan Logan", role: "Advisor", company: "Eessan", link: "https://www.linkedin.com/in/mohanakrishnan-logan-3b4893b6/" },
  { img: manishAnand, name: "Prof. Manish Anand", role: "Tech Advisor", company: "Jointsync", link: "https://www.linkedin.com/in/manish-anand-80985a170/" },
  { img: devadula, name: "Dr. Sivasrinivasu Devadula", role: "Advisor", company: "MachIntell", link: "https://www.linkedin.com/in/sivasrinivasu-devadula-74986812/" },
  { img: balas, name: "Prof. Krishnan Balasubramaniam", role: " Advisor", company: "Exrisol,iGenie", link: "https://www.linkedin.com/in/krishnan-balasubramanian-534145157/" },
  { img: satyesh, name: "Dr. Satyesh Kumar Yadav", role: "Mentor", company: "MatLoad Solutions", link: "https://www.linkedin.com/in/satyesh-yadav-91a167a/" },
  { img: sathya, name: "Prof. Sathyanarayana N Gummadi", role: "Advisor", company: "SSS Internation Drug Discovery & Development Research Pvt Ltd", link: "https://www.linkedin.com/in/sathyanarayana-gummadi-b37575250/" },
  { img: pradeep, name: "Dr. T. Pradeep", role: "Advisor", company: "Aqua Hive", link: "https://www.linkedin.com/in/thalappil-pradeep-b22505ba/" },
  { img: sivarama, name: "Prof. Sivarama Krishnan", role: "Advisor", company: "Ashtachakra Innovations", link: "https://www.linkedin.com/in/srkris/" },
  { img: viji, name: "Prof. Vijayalakshmi", role: "Advisor", company: "MindVerve", link: "https://www.linkedin.com/in/m-thenmozhi-831894a/" },
  { img: abhijit, name: "Dr. Abhijit P. Deshpande", role: "Advisor", company: "Tawakkal", link: "https://www.linkedin.com/in/abhijit-deshpande-55ba3224a/" },
  { img: basavaraj, name: "Prof. Basavaraja Madivala Gurappa", role: "Advisor", company: "OleoFoods", link: "https://www.linkedin.com/in/basaiitm/" },
  { img: pattabiraman, name: "Prof. M. Pattabiraman", role: "Advisor", company: "SOMFIN", link: "https://www.linkedin.com/in/pattabiraman-murari/" },
  { img: lalithambika, name: "Dr. Lalithambika", role: "Advisor", company: "Inbound Aerospace", link: "" },
  { img: dhamodharan, name: "Prof. R. Dhamodharan", role: "Advisor", company: "Sustainable Shield", link: "https://www.linkedin.com/in/dhamodharanraghavachari/" },
  { img: milind, name: "Prof. Milind Brahme", role: "Advisor", company: "Fix4Ever", link: "" },
  { img: rama, name: "Prof. Rama Shanker Verma", role: "Advisor", company: "Regeniche", link: "" },
  { img: aramesh, name: "Prof. Ramesh", role: "Advisor", company: "Phorcys Vx Marine Pvt Ltd", link: "" },
  { img: thenmozhi, name: "Prof. Thenmozhi", role: "Advisor", company: "Kubbera.in", link: "https://www.linkedin.com/in/m-thenmozhi-831894a/" },
  { img: david, name: "Prof. David Kumar", role: "Advisor", company: "TyranEx", link: "https://www.linkedin.com/in/david-kumar-22a15468/" },
  { img: joel, name: "Prof. Joel George M", role: "Advisor", company: "SwarmoPilot", link: "" },
  { img: santoshSahu, name: "Dr. Santhosh Kumar Sahu", role: "Advisor", company: "SwapVerse.ev", link: "https://www.linkedin.com/in/sksahuiitm/" },
  { img: manoj, name: "Prof. N Manoj", role: "Advisor", company: "Supersyringe", link: "https://www.linkedin.com/in/manoj-n-ba8b1211/" },
  { img: vimal, name: "Dr. Vimal Edachery", role: "Guide/Advisor", company: "Stratagem Testing Solutions", link: "https://www.linkedin.com/in/dr-vimal-edachery-a15425aa/" },
  { img: balaRamadurai, name: "Prof. Bala Ramadurai", role: "Advisor", company: "Utkarsha Spirelia", link: "https://www.linkedin.com/in/balaramadurai/" },
  { img: nandan, name: "Prof. Nandan Kumar Sinha", role: "Guide", company: "SkyTrek Aeronautics", link: "https://www.linkedin.com/in/nandan-kumar-sinha-8a507014/" },
  { img: john, name: "Prof. John Augustine", role: "Advisor", company: "PreOwn", link: "https://www.linkedin.com/in/johnaugustine/" },
  { img: ganesan, name: "Prof. A.R Ganesan", role: "Co-Founder/Technical Advisor", company: "Preciqube", link: "https://www.linkedin.com/in/a-r-ganesan-2159182a/" },
  { img: varadhan, name: "Prof. Varadhan SKM", role: "Founder", company: "Kriyaneuro Technologies", link: "https://www.linkedin.com/in/varadhanskm/" },
  { img: hariharan, name: "Dr. Hariharan K", role: "Advisor", company: "ExactaRobotics", link: "https://www.linkedin.com/in/hariharankrish/" },
  { img: sriram, name: "Dr. V Sriram", role: "Advisor", company: "ArkEdge", link: "" },
  { img: rameshNayaka, name: "Dr. Ramesh Nayaka", role: "Advisor", company: "Acala design and Tech Pvt Ltd", link: "https://www.linkedin.com/in/dr-ramesh-nayaka-aa17b347/" },
  { img: boby, name: "Prof. Boby George", role: "Advisor", company: "Qualgrip", link: "https://www.linkedin.com/in/boby-george-82090262/" },
  { img: mathava, name: "Dr. Mathava Kumar S", role: "Advisor", company: "WAL & AL", link: "https://www.linkedin.com/in/mathava-kumar-s-iitm-1129983a8/" },
  { img: velmurugan, name: "Dr. R. Velmurugan", role: "Advisor", company: "NIVAARA", link: "https://www.linkedin.com/in/velmurugan-r-iitm-0566ba1b9/" },
  { img: shanti, name: "Prof. Shanti Swarup K", role: "Advisor", company: "iEnergiX", link: "https://www.linkedin.com/in/shanti-swarup-7b15b312/" },
];

function Mentor() {
  return (
    <div className="site-wrap font-dmsans">
      <Navbar />
      <main className="site-main">
        <PageHeader
          title="Faculty Mentors"
          trail={[{ label: "Home", href: "/" }, { label: "Faculty Mentors" }]}
        />
        <div className="site-container py-6 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {facultyMentors.map((mentor) => (
              <div key={mentor.name} className="pro-card flex flex-col items-center py-4">
                <MentorPhoto src={mentor.img} alt={mentor.name} faceFocus={mentor.faceFocus} />
                <h3 className="text-sm sm:text-md font-semibold text-green-700 text-center px-2">
                  {mentor.name}
                </h3>
                <p className="text-sm text-center text-gray-700">{mentor.role}</p>
                {mentor.company ? (
                  <p className="text-xs text-center font-medium text-gray-500 px-2 mt-1">{mentor.company}</p>
                ) : null}
                {mentor.link ? (
                  <div className="flex justify-center mt-2">
                    <a
                      href={mentor.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                      aria-label={`${mentor.name} on LinkedIn`}
                    >
                      <FaLinkedin size={22} />
                    </a>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Mentor;