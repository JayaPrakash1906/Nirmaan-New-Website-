import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import PageHeader from "../Components/PageHeader";
import { FaClock } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import demo from "../Assets/Events/DemoDay2024.png";
import delta from "../Assets/delta_expo.jpg";
import "lity/dist/lity.css";
import "lity";

const events = [
  {
    title: "Delta Expo 2026",
    date: "14 & 15 March 2026",
    time: "09:00 AM – 06:00 PM",
    venue: "KV Ground, IIT Madras",
    image: delta,
    agendaUrl:
      "https://resume-data-nirmaan.s3.ap-south-1.amazonaws.com/Delta_Expo_2026_Agenda.pdf",
    body: `Delta Expo 2026, the flagship innovation showcase by the School of Innovation and Entrepreneurship, brings together student innovators and startups. Explore 45+ CFI teams and 30+ Nirmaan startups, with live demos across robotics, AI, biotech, aerospace, and more.`,
  },
  {
    title: "Demo Day 2024",
    date: "27 September 2024",
    time: "09:00 AM – 06:00 PM",
    venue: "Sudha & Shankar Innovation Hub",
    image: demo,
    agendaUrl: "https://resume-data-nirmaan.s3.ap-south-1.amazonaws.com/Demo+Day+Ag.pdf",
    body: `The inaugural Demo Day showcased IIT Madras entrepreneurs and graduated Nirmaan teams—innovations across nine+ sectors, with industry leaders, investors, alumni, faculty, and students.`,
  },
];

function Events() {
  return (
    <div className="site-wrap font-dmsans">
      <Navbar />
      <main className="site-main">
        <PageHeader title="Past Events" trail={[{ label: "Home", href: "/" }, { label: "Events" }]} />

        <div className="site-container py-6 space-y-6 pb-10">
          {events.map((event) => (
            <article
              key={event.title}
              className="pro-card grid md:grid-cols-5 gap-5 md:gap-6 items-start"
            >
              <div className="md:col-span-2 rounded-lg border border-gray-200 bg-gray-50 p-2 shadow-sm">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-auto max-h-[28rem] rounded-md object-contain mx-auto"
                />
              </div>
              <div className="md:col-span-3">
                <h2 className="text-xl sm:text-2xl font-semibold text-green-800">{event.title}</h2>
                <p className="font-semibold text-gray-900 mt-2">{event.date}</p>
                <div className="mt-3 space-y-1.5 text-gray-700 text-sm sm:text-base">
                  <p className="flex items-center gap-2">
                    <FaClock className="text-green-600 shrink-0" />
                    {event.time}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaLocationPin className="text-green-600 shrink-0" />
                    {event.venue}
                  </p>
                </div>
                <p className="mt-4 text-gray-700 leading-relaxed text-justify">{event.body}</p>
                <a
                  href={event.agendaUrl}
                  data-lity
                  className="inline-block mt-5 bg-green-700 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-green-800"
                >
                  View agenda
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Events;