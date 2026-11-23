import React from "react";
import Navbar from "../Components/Navbar";
import img3 from "../Assets/Media/Magazine_Innosphere_Final (19).jpg";
import img4 from "../Assets/Media/InnospherePodcast.jpeg";
import img6 from "../Assets/Media/medium.png";
import Footer from "../Components/Footer";
import PageHeader from "../Components/PageHeader";
import NirmaanNewsFeed from "../Components/NirmaanNewsFeed";
import MediaArchiveGrid from "../Components/MediaArchiveGrid";

const btnClass =
  "inline-block bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-green-800";

function Media() {
  return (
    <div className="site-wrap font-dmsans">
      <Navbar />
      <main className="site-main">
        <PageHeader title="Outreach & media" trail={[{ label: "Home", href: "/" }, { label: "Media" }]} />
        <div className="site-container py-6 space-y-10 pb-10">
          <section className="space-y-5">
            <h2 className="heading-section text-xl sm:text-2xl">Outreach initiatives</h2>
            <div className="grid md:grid-cols-3 gap-5">
              <div className="pro-card flex flex-col">
                <div className="text-xl text-center text-green-600 font-semibold mb-2">Innosphere Podcast</div>
                <img src={img4} alt="Innosphere Podcast" className="media-thumb" />
                <p className="text-sm mt-2 text-gray-700 leading-relaxed text-justify">
                  Our <strong>Innosphere Podcast</strong> on YouTube documents and chronicles the work and journey of
                  teams in our innovation sphere — the makerspace, Center for Innovation (CFI), and the pre-incubator
                  Nirmaan.
                </p>
                <div className="mt-auto pt-3 text-center">
                  <a
                    href="https://www.youtube.com/@InnovationEntrepreneurship"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={btnClass}
                  >
                    Watch on YouTube
                  </a>
                </div>
              </div>

              <div className="pro-card flex flex-col">
                <div className="text-xl text-center text-green-600 font-semibold mb-2">Innosphere Magazine</div>
                <img src={img3} alt="Innosphere Magazine" className="media-thumb" />
                <p className="text-sm mt-2 text-gray-700 leading-relaxed text-justify">
                  <strong>Innosphere magazine</strong> offers an in-depth look at our latest projects and milestones — a
                  curated collection of insights and breakthroughs from agritech, AI, edutech, healthtech, renewable
                  energy, spacetech, and beyond.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-2 mt-3">
                  <a
                    href="https://resume-data-nirmaan.s3.ap-south-1.amazonaws.com/Magazine_Innosphere_Final+(1).pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${btnClass} text-center`}
                  >
                    Open Edition 1 (PDF)
                  </a>
                  <a
                    href="https://resume-data-nirmaan.s3.ap-south-1.amazonaws.com/Inno_Mag_Final_2B_Submtd.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${btnClass} text-center`}
                  >
                    Open Edition 2 (PDF)
                  </a>
                </div>
              </div>

              <div className="pro-card flex flex-col">
                <div className="text-xl text-center text-green-600 font-semibold mb-2">Blog</div>
                <img src={img6} alt="Nirmaan on Medium" className="media-thumb" />
                <p className="text-sm mt-2 text-gray-700 leading-relaxed text-justify">
                  On Medium, Nirmaan shares stories, ideas, and insights to inspire and empower student founders and the
                  wider community.
                </p>
                <p className="text-xs text-gray-500 mt-1">Updated: Sept 11, 2024</p>
                <div className="mt-auto pt-3 text-center">
                  <a href="https://medium.com/@nirmaan_iitm" target="_blank" rel="noopener noreferrer" className={btnClass}>
                    Read on Medium
                  </a>
                </div>
              </div>
            </div>
          </section>

          <NirmaanNewsFeed title="Media coverage (live)" showThumbnails />

          <MediaArchiveGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Media;