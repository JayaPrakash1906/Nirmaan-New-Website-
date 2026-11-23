import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import PageHeader from "../Components/PageHeader";
import MentorPhoto from "../Components/MentorPhoto";
import gopal from "../Assets/Mentors/Gopal.JPG";
import jeyappria from "../Assets/Mentors/jeyappriadhevi.png";
import krishnanJ from "../Assets/Mentors/Krishnan_jagadisan.jpg";
import mohan from "../Assets/Mentors/mohan_narayanan.jpg";
import ponguri from "../Assets/Mentors/ponguri_parthasarathy.jpg";
import vaibhav from "../Assets/Mentors/vaibhav_goyal.jpg";
import vishy from "../Assets/Mentors/vishy.jpg";
import kkRaman from "../Assets/Mentors/K K Raman.jpg";
import ravichandran from "../Assets/Mentors/Ravichandran Srinivasan.jpg";
import krishnamurti from "../Assets/Mentors/Krishnamurti.jpg";
import kidambi from "../Assets/Mentors/srinivasan-kidambi.png";
import amit from "../Assets/Mentors/Amit_Kumar_Mukherjee.jpg";
import naveena from "../Assets/Mentors/team-2.png";
import santoshP from "../Assets/Mentors/santosh_prasannan.jpg";
import { FaLinkedin } from "react-icons/fa";

/** Roster from New Nirmaan Website project (businessMentors) */
const businessMentors = [
  { img: vishy, name: "Mr. Srinivasan Viswanathan", role: "Mentor", link: "https://www.linkedin.com/in/vishy/" },
  { img: mohan, name: "Mr. Mohan Narayanan", role: "Mentor", link: "https://www.linkedin.com/in/mohan-narayanan-52626b12/" },
  { img: kkRaman, name: "Mr. K.K Raman", role: "Mentor", link: "https://www.linkedin.com/in/k-k-raman-427166a9/" },
  { img: ravichandran, name: "Mr. Ravichandran Srinivasan", role: "Mentor", link: "https://www.linkedin.com/in/ravichandran-srinivasan/" },
  { img: krishnamurti, name: "Mr. Krishnamurti R Rao", role: "Mentor", link: "https://www.linkedin.com/in/krishnamurti-r-rao-1ba0862/" },
  { img: gopal, name: "Mr. Gopal Raman", role: "Mentor", link: "https://www.linkedin.com/in/ramangopal/" },
  { img: krishnanJ, name: "Mr. Krishnan Jagadisan", role: "Mentor", link: "" },
  { img: jeyappria, name: "Ms. Jeyappria dhevi", role: "Mentor", link: "https://www.linkedin.com/in/jjpria/" },
  { img: ponguri, name: "Mr. Ponguri Parthasarathy", role: "Mentor", link: "https://www.linkedin.com/in/ponguriparthasarathy/" },
  { img: vaibhav, name: "Mr. Vaibhav Goyal", role: "Mentor", link: "https://www.linkedin.com/in/vaibhavg/" },
  { img: kidambi, name: "Mr. Srinivasan Kidambi", role: "Mentor", link: "https://www.linkedin.com/in/k-k-srinivasan/" },
  { img: amit, name: "Mr. Amit Kumar Mukherjee", role: "Mentor", link: "https://www.linkedin.com/in/k-k-srinivasan/" },
  { img: naveena, name: "Ms. Naveena Aswadhati Swamy", role: "Mentor", link: "https://www.linkedin.com/in/naveenaswamy/" },
  { img: santoshP, name: "Mr. Santosh Prasannan", role: "Mentor", link: "https://www.linkedin.com/in/santosh-prasannan-8b819559/" },
];

function Mentor() {
  return (
    <div className="site-wrap font-dmsans">
      <Navbar />
      <main className="site-main">
        <PageHeader
          title="Business Mentors"
          trail={[{ label: "Home", href: "/" }, { label: "Business Mentors" }]}
        />
        <div className="site-container py-6 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {businessMentors.map((mentor) => (
              <div key={mentor.name} className="pro-card flex flex-col items-center py-4">
                <MentorPhoto src={mentor.img} alt={mentor.name} />
                <h3 className="text-sm sm:text-md font-semibold text-green-700 text-center px-2">
                  {mentor.name}
                </h3>
                <p className="text-sm text-center text-gray-700">{mentor.role}</p>
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