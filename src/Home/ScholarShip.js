import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import PageHeader from '../Components/PageHeader';

function ScholarShip() {
  return (
    <div className="site-wrap font-dmsans">
      <Navbar />
      <main className="site-main">
        <PageHeader title="Scholarship" trail={[{ label: 'Home', href: '/' }, { label: 'Scholarship' }]} />
        <div className="site-container py-8 pb-12 grid md:grid-cols-2 gap-6">
          <div className="pro-card text-center flex flex-col">
            <h2 className="text-xl font-semibold text-green-800 mb-3">UGFIR</h2>
            <p className="text-gray-700 flex-grow text-justify">UGFIR provides housing and a stipend, allowing undergraduate students to fully focus on their startup ventures while in college.</p>
            <a className="mt-5 inline-block bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800" href="/scholarship/ugfir">View More</a>
          </div>
          <div className="pro-card text-center flex flex-col">
            <h2 className="text-xl font-semibold text-green-800 mb-3">KGMG</h2>
            <p className="text-gray-700 flex-grow text-justify">KGMG helps postgraduate students turn their research into startup ideas, bridging the gap from thesis to successful business.</p>
            <a className="mt-5 inline-block bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800" href="/scholarship/kgmg">View More</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ScholarShip;