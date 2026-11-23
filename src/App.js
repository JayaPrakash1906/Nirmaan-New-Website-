import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Aboutus from './Home/Aboutus';
import Genesis from './Home/Genesis';
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

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about_us" element={<Aboutus />} />
      <Route path="/genesis" element={<Genesis />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/incubation" element={<Incubation />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/media" element={<Media />} />
      <Route path="/mentor/faculty" element={<Mentor />} />
      <Route path="/mentor/business" element={<BusinessMentor />} />
      <Route path="/events" element={<Events />} />
      <Route path="/scholarship" element={<ScholarShip />} />
      <Route path="/scholarship/ugfir" element={<Ugfir />} />
      <Route path="/scholarship/kgmg" element={<Kgmg />} />
    </Routes>
  );
};

export default App;