import './App.css';
import React from 'react';
import Home from './Home/Home';
import Aboutus from './Home/Aboutus';
import Genesis from './Home/Genesis';
import Footer from './Components/Footer';
import { Routes, Route } from 'react-router-dom';
import Programs from './Home/Programs';
import Contact from './Home/Contact';
import Incubation from './Home/Incubation';
import Teams from './Home/Teams';
import Media from './Home/Media';
import Events from './Home/Events';
import Mentor from './Home/Mentor';
import BusinessMentor from './Home/Mentorbusiness';
import ScholarShip from './Home/ScholarShip';
import Ugfir from './Home/Ugfir';
import Kgmg from './Home/Kgmg';
// import img1 from "../src/Assets/satyaseshadri.png";
// import img2 from "../src/Assets/SambitMishra.jpg";
// import img3 from "../src/Assets/AadilKhan.jpg";
const App = () => {
  

// const events = [
//   {
//     direction: "left",
//     heading: "Event 1",
//     subHeading: "Description for Event 1.",
//     image: img1, // Image path
//   },
//   {
//     direction: "right",
//     heading: "Event 2",
//     subHeading: "Description for Event 2.",
//     image: img2, // Image path
//   },
//   {
//     direction: "left",
//     heading: "Event 3",
//     subHeading: "Description for Event 3.",
//     image: img3, // Image path   
//   },
// ];   events={events}

  
  return (
  <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About_us" element={<Aboutus />} />
      <Route path="/genesis" element={<Genesis  />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/incubation" element={<Incubation/>} />
      <Route path="/teams" element={<Teams/>} />
      <Route path="/media" element={<Media />} />
      <Route path="/mentor/faculty" element={<Mentor />} />
      <Route path="/mentor/business" element={<BusinessMentor />} />
      <Route path="/events" element={<Events />} />
      <Route path="/scholarship" element={<ScholarShip />} />
      <Route path="/scholarship/ugfir" element={<Ugfir />} />
      <Route path="/scholarship/kgmg" element={<Kgmg/>} />
    </Routes>
  </div>
  );
};

export default App;  
