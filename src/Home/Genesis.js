import React from "react";
import Navbar from "../Components/Navbar";
import PageHeader from "../Components/PageHeader";
import img1 from "../Assets/Genisis/profsatyav5.webp";
import img2 from "../Assets/Genisis/SambitMishra.jpg";
import img3 from "../Assets/Genisis/AadilKhan.jpg";
import img4 from "../Assets/Genisis/AshwanthBhat.jpg";
import img5 from "../Assets/Genisis/AnirudhSharma.jpg";
import img6 from "../Assets/Genisis/dr.richa_doms.png";
import img7 from "../Assets/Genisis/Sai_Bhargavi.jpg";
import imgPrabhu from "../Assets/About/web-prabhu.png";
import img9 from "../Assets/Genisis/Harsha.jpg";
import img10 from "../Assets/Genisis/Yuvaraj_Thakur.jpg";
import img11 from "../Assets/Genisis/bala saimani.jpg";
import imgMurugaiyan from "../Assets/About/sie-murugaiyan.jpg";
import Footer from "../Components/Footer";
import MentorPhoto from "../Components/MentorPhoto";

const eras = [
  {
    duration: "2017 – 2022",
    people: [
      { src: img1, name: "Prof. Satyanarayanan Seshadri", role: "Advisor" },
      { src: img2, name: "Sambit Mishra", role: "Student Head (2017–2018)" },
      { src: img3, name: "Aadil Khan", role: "Student Head (2018–2020)" },
      { src: img4, name: "Ashwanth Bhat", role: "Student Head (2020–2021)" },
      { src: img5, name: "V.S.S. Anirudh Sharma", role: "Student Head (2021–2022)" },
    ],
  },
  {
    duration: "2022 – 2023",
    people: [
      { src: img6, name: "Prof. Richa Agrawal", role: "Advisor" },
      { src: img7, name: "Sai Bhargavi", role: "Student Head (2022–2023)" },
    ],
  },
  {
    duration: "2023 – 2025",
    people: [
      { src: imgPrabhu, name: "Prof. Prabhu Rajagopal", role: "Advisor", faceFocus: true },
      { src: img9, name: "Harsha", role: "Student Head (2023–2024)" },
      { src: img10, name: "Yuvaraj Thakur", role: "Student Head (2024–2025)" },
    ],
  },
  {
    duration: "2025 – present",
    people: [
      { src: imgMurugaiyan, name: "Prof. Murugaiyan Amirthalingam", role: "Advisor" },
      { src: img11, name: "Bala Saimani Voonna", role: "Student Head (2025–2026)" },
    ],
  },
];

const Person = ({ src, name, role, faceFocus }) => (
  <div className="flex flex-col items-center text-center">
    <MentorPhoto src={src} alt={name} faceFocus={faceFocus} className="!h-24 !w-24 !mb-2 ring-2 ring-green-100" />
    <p className="mt-2 text-sm font-semibold text-gray-900 leading-tight">{name}</p>
    <p className="text-xs text-gray-600 mt-0.5">{role}</p>
  </div>
);

const gridCols = (n) => {
  if (n >= 5) return "grid-cols-2 sm:grid-cols-3 md:grid-cols-5";
  if (n === 3) return "grid-cols-1 sm:grid-cols-3";
  return "grid-cols-1 sm:grid-cols-2";
};

const Timeline = () => (
  <div className="site-wrap font-dmsans">
    <Navbar />
    <main className="site-main">
      <PageHeader title="Nirmaan Genesis" trail={[{ label: "Home", href: "/" }, { label: "Genesis" }]} />

      <div className="site-container py-8 space-y-6 pb-12">
        {eras.map((era) => (
          <section key={era.duration} className="pro-card">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-3 mb-5">
              <h2 className="text-lg font-semibold text-green-800">{era.duration}</h2>
              <span className="text-xs font-medium uppercase tracking-wide text-gray-500">Leadership</span>
            </div>
            <div className={`grid gap-5 ${gridCols(era.people.length)}`}>
              {era.people.map((p) => (
                <Person key={p.name} {...p} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default Timeline;