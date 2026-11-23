import React from 'react';
import Navbar from '../Components/Navbar';
import img1 from '../Assets/About/what we do image.jpg';
import img10 from '../Assets/About/ourgoal.jpg';
import imgNandhini from '../Assets/About/sie-nandhini.jpeg';
import imgAshwin from '../Assets/About/web-ashwin.jpg';
import imgKunal from '../Assets/About/kunal-upadhyay.png';
import imgVishy from '../Assets/About/web-vishy.jpg';
import imgKkRaman from '../Assets/About/web-kk-raman.jpg';
import imgPrabhu from '../Assets/About/web-prabhu.png';
import imgSatya from '../Assets/About/sie-satya.webp';
import imgMurugaiyan from '../Assets/About/sie-murugaiyan.jpg';
import imgManish from '../Assets/About/sie-manish-anand.jpg';
import Footer from '../Components/Footer';
import PageHeader from '../Components/PageHeader';

const MemberCard = ({ member, large = false }) => (
  <div className="flex flex-col items-center text-center px-2">
    {member.image ? (
      <div className={`person-photo mentor-photo mb-3 ${large ? '!h-32 !w-32 sm:!h-40 sm:!w-40' : '!h-32 !w-32'}`}>
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          decoding="async"
          className={`h-full w-full ${member.faceFocus ? "photo-prabhu" : "photo-face"}`}
        />
      </div>
    ) : (
      <div
        className={`flex items-center justify-center rounded-full bg-green-600 text-white font-semibold mb-3 ${
          large ? 'w-32 h-32 sm:w-40 sm:h-40 text-3xl' : 'w-32 h-32 text-2xl'
        }`}
        aria-hidden
      >
        {member.initials}
      </div>
    )}
    <p className="text-green-600 font-semibold text-md">{member.name}</p>
    {member.title && (
      <p className="text-gray-600 font-medium text-sm">{member.title}</p>
    )}
    {member.department && (
      <p className="text-gray-600 text-sm">{member.department}</p>
    )}
    {member.organisation && (
      <p className="text-gray-600 text-sm">{member.organisation}</p>
    )}
  </div>
);

const Team = () => {
  // Same roster as https://sie.iitm.ac.in/people (Governing Council)
  const governingCouncilMembers = [
    {
      name: 'Prof. Ashwin Mahalingam',
      title: 'Dean, Alumni & Corporate Relations',
      organisation: 'IIT Madras',
      image: imgAshwin,
    },
    {
      name: 'Mr. Kunal Upadhyay',
      title: 'Partner',
      organisation: 'IIMA Ventures',
      image: imgKunal,
    },
    {
      name: 'Mr. Vishy Vishwanathan',
      title: 'IIT Madras Alumnus',
      organisation: 'Ultimate Business Advisors LLP',
      image: imgVishy,
    },
    {
      name: 'Mr. K. K. Raman',
      title: 'IIT Madras Alumnus',
      image: imgKkRaman,
    },
    {
      name: 'Prof. Prabhu Rajagopal',
      title: 'Director in Charge',
      organisation: 'IITM Zanzibar',
      image: imgPrabhu,
      faceFocus: true,
    },
    {
      name: 'Prof. Satyanarayanan Seshadri',
      title: 'Head, SIE',
      organisation: 'IIT Madras',
      image: imgSatya,
    },
    {
      name: 'Prof. Murugaiyan Amirthalingam',
      title: 'Advisor, Nirmaan',
      organisation: 'IIT Madras',
      image: imgMurugaiyan,
    },
    {
      name: 'Prof. Manish Anand',
      title: 'Advisor, CFI',
      organisation: 'IIT Madras',
      image: imgManish,
    },
  ];

  const chiefOperatingOfficer = {
    name: 'Ms. K S Nandhini',
    title: 'COO',
    organisation: 'SIE, IIT Madras',
    image: imgNandhini,
  };

  return (
    <section className="site-container py-6">
      <h2 className="md:text-3xl font-semibold text-green-600 text-center mb-6 font-dmsans">
        Governing Council Members
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 justify-items-center">
        {governingCouncilMembers.map((member) => (
          <MemberCard key={member.name} member={member} />
        ))}
      </div>

      <div className="max-w-sm mx-auto flex justify-center mt-8 pt-6 border-t border-gray-200">
        <MemberCard member={chiefOperatingOfficer} />
      </div>
    </section>
  );
};

const Aboutus = () => {
  return (
    <div className="site-wrap font-dmsans">
      <Navbar />
      <main className="site-main">
        <PageHeader title="About Us" trail={[{ label: 'Home', href: '/' }, { label: 'About' }]} />

        <div className="site-container py-6 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 items-center">
              <div>
                <h3 className="text-2xl font-bold text-green-600 text-center font-dmsans">
                  What We Do
                </h3>
                <p className="mt-4 text-md text-gray-600 max-w-3xl mx-auto text-justify font-dmsans">
                  Nirmaan, the pre-incubator, started its journey on 31st October 2015, funded by the IITM batch of 1992. At Nirmaan, we are dedicated to delivering a rich entrepreneurial experience to our students by providing essential resources such as workspace, cutting-edge tools, expert mentorship, interactive workshops, funding opportunities, and valuable networking connections.
                </p>
              </div>
              <div>
                <img
                  src={img1}
                  className="h-[200px] w-full border rounded-lg object-cover"
                  alt="Nirmaan team at work"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 items-center">
              <div>
                <img
                  src={img10}
                  className="w-full h-[200px] border rounded-lg object-cover"
                  alt="Nirmaan goals and community"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-600 text-center font-dmsans">
                  Our Goal
                </h3>
                <p className="mt-4 text-md text-gray-900 max-w-3xl mx-auto text-justify font-dmsans">
                  With a commitment to “Bringing Ideas to Life,” our goal is to empower students to go beyond traditional career routes and cultivate their innovative ideas into thriving businesses. Through strategic collaboration with the IITM Research Park&apos;s Incubation Cell, we connect students with real-world entrepreneurial resources and support to help them turn their visions into viable enterprises.
                </p>
              </div>
            </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="pro-card border-green-100 bg-green-50/50">
              <h4 className="text-md font-bold text-green-700 mb-4 font-dmsans">Vision</h4>
              <p className="text-gray-700 font-dmsans">
                Catalyzing entrepreneurship culture by developing a strong ecosystem that transforms creative ideas into successful startups in India.
              </p>
            </div>
            <div className="pro-card border-green-100 bg-green-50/50">
              <h4 className="text-md font-bold text-green-700 mb-4">Mission</h4>
              <p className="text-gray-700">
                Providing infrastructure, mentorship, funding, and workspace to help IITM students turn their innovative ideas into thriving enterprises.
              </p>
            </div>
          </div>
        <Team />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Aboutus;