import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Image from '../Assets/iitm logo.png';
import Image2 from '../Assets/nirmaan logo.png';
import Image3 from '../Assets/SIE LOGO.jpeg';
import {FaBullhorn,FaArrowUp,  FaRocket,  FaCalendarAlt,  FaClock,  FaMapMarkerAlt,} from "react-icons/fa";


const Navbar = () => {
  const [activePage, setActivePage] = useState('');
  const [navOpen, setNavOpen] = useState(false);
  const [mentorDropdownOpen, setMentorDropdownOpen] = useState(false);
  const [otherDropdownOpen, setOtherDropdownOpen] = useState(false);
  const [mobileMentorOpen, setMobileMentorOpen] = useState(false);
  const [mobileOtherOpen, setMobileOtherOpen] = useState(false);

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActivePage(currentPath.toLowerCase());
  }, []);

  const toggleNav = () => {
    setNavOpen(!navOpen);
    setMentorDropdownOpen(false);
    setOtherDropdownOpen(false);
    setMobileMentorOpen(false);
    setMobileOtherOpen(false);
  };

  const handleMentorClick = (path) => {
    window.location.href = path;
    setNavOpen(false);
    setMentorDropdownOpen(false);
    setOtherDropdownOpen(false);
    setMobileMentorOpen(false);
    setMobileOtherOpen(false);
  };
  


  return (
    
    <div className="fixed top-0 left-0 w-full shadow-md text-black p-4 z-50" style={{ backgroundColor: '#83d687' }}>
      

      <div className="flex items-center justify-between ml-8">
       <a
  className="flex items-center gap-2 md:gap-4 flex-nowrap overflow-hidden"
  onClick={() => (window.location.href = "/")}
>
  {/* Logos */}
  <img src={Image} className="w-12 h-12 md:w-22 md:h-12" alt="IITM Logo" />
  <img src={Image3} className="w-36 h-12 md:w-22 md:h-12" alt="OIE Logo" />
  <img src={Image2} className="w-12 h-12 md:w-18 md:h-12" alt="Nirmaan Logo" />

  {/* Text */}
  <div className="ml-2 text-[11px] leading-4 md:text-base md:leading-5 font-dmsans font-bold whitespace-nowrap">
    <div className="text-[12px] md:text-xl tracking-wider">N I R M A A N</div>
    <div className="text-[10px] md:text-sm">The Pre-Incubator</div>
  </div>
</a>


        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 mr-12 font-dmsans font-semibold text-sm">
          <button onClick={() => (window.location.href = "/")} className={`md:pt-4 ${activePage === '/' ? 'border-b-2 border-green-800 text-green-800' : ''}`}>HOME</button>
          <button onClick={() => (window.location.href = "/about_us")} className={`md:pt-4 ${activePage === '/about_us' ? 'border-b-2 border-green-800 text-green-800' : ''}`}>ABOUT</button>
          <button onClick={() => (window.location.href = "/genesis")} className={`md:pt-4 ${activePage === '/genesis' ? 'border-b-2 border-green-800 text-green-800' : ''}`}>GENESIS</button>
          {/* <button onClick={() => (window.location.href = "/incubation")} className={`md:pt-4 ${activePage.includes('/incubation') ? 'border-b-2 border-green-800 text-green-800' : ''}`}>PRATHAM & AKSHAR</button> */}
          <button onClick={() => (window.location.href = "/events")} className={`md:pt-4 ${activePage === '/events' ? 'border-b-2 border-green-800 text-green-800' : ''}`}>EVENTS</button>
          <button onClick={() => (window.location.href = "/teams")} className={`md:pt-4 ${activePage === '/teams' ? 'border-b-2 border-green-800 text-green-800' : ''}`}>TEAMS</button>

          <div className="relative">
            <button
              type="button"
              onClick={() => setMentorDropdownOpen((prev) => !prev)}
              className={`md:pt-4 ${activePage.includes('/mentor') ? 'border-b-2 border-green-800 text-green-800' : ''}`}
            >
              MENTORS
            </button>
            {mentorDropdownOpen && (
              <div className="absolute bg-white text-black mt-1 shadow-lg rounded-sm right-[-20px] border-t-4 border-green-700 z-50">
                <button className="block py-2 px-4 text-sm hover:bg-gray-200 w-full text-left whitespace-nowrap" onClick={() => handleMentorClick("/mentor/faculty")}>Faculty Mentor</button>
                <button className="block py-2 px-4 text-sm hover:bg-gray-200 w-full text-left whitespace-nowrap" onClick={() => handleMentorClick("/mentor/business")}>Business Mentor</button>
              </div>
            )}
          </div>

          <button onClick={() => (window.location.href = "/media")} className={`md:pt-4 ${activePage === '/media' ? 'border-b-2 border-green-800 text-green-800' : ''}`}>MEDIA</button>
          <button onClick={() => (window.location.href = "/contact-us")} className={`md:pt-4 ${activePage === '/contact-us' ? 'border-b-2 border-green-800 text-green-800' : ''}`}>CONTACT</button>
          {/* <div className="relative">
            <button
              type="button"
              onClick={() => setOtherDropdownOpen((prev) => !prev)}
              className={`md:pt-4 }`}
            >
              RESOURCES
            </button>
            {otherDropdownOpen && (
              <div className="absolute bg-white text-black mt-1 shadow-lg rounded-sm right-[-20px] border-t-4 border-green-700 z-50">
                <button className="block py-2 px-4 text-sm hover:bg-gray-200 w-full text-left whitespace-nowrap" onClick={() => handleMentorClick("https://docs.google.com/forms/d/e/1FAIpQLSezO0mLM9d7UtiMRD7-b3qyNJo3RK_GGjoeXv4YmJFk9N0rqg/viewform?usp=header")}>Apply For Team Bonafide</button>
               <button className="block py-2 px-4 text-sm hover:bg-gray-200 w-full text-left whitespace-nowrap" onClick={() => handleMentorClick("/mentor/business")}>Business Mentor</button> 
              </div>
            )}
          </div> */}
        </div>
        

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleNav} className="text-2xl">
            {navOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Slide from Right */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white text-black shadow-lg transition-transform transform ${navOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleNav} className="text-2xl"><AiOutlineClose /></button>
        </div>
        <div className="flex flex-col items-end gap-6 px-6 mt-4 text-right font-dmsans font-semibold text-sm">
          <button onClick={() => handleMentorClick("/")}>HOME</button>
          <button onClick={() => handleMentorClick("/about_us")}>ABOUT</button>
          <button onClick={() => handleMentorClick("/genesis")}>GENESIS</button>
          {/* <button onClick={() => handleMentorClick("/incubation")}>PRATHAM & AKSHAR</button> */}
          <button onClick={() => handleMentorClick("/events")}>EVENTS</button>
          <button onClick={() => handleMentorClick("/teams")}>TEAMS</button>

          <div className="w-full flex flex-col items-end">
            <button onClick={() => setMobileMentorOpen(prev => !prev)}>
              MENTORS {mobileMentorOpen ? '▲' : '▼'}
            </button>
            {mobileMentorOpen && (
              <div className="flex flex-col gap-2 mt-2 pr-4 text-right text-sm font-semibold">
                <button onClick={() => handleMentorClick("/mentor/faculty")}>Faculty Mentor</button>
                <button onClick={() => handleMentorClick("/mentor/business")}>Business Mentor</button>
              </div>
            )}
          </div>

          <button onClick={() => handleMentorClick("/media")}>MEDIA</button>
          <button onClick={() => handleMentorClick("/contact-us")}>CONTACT</button>
          {/* <div className="w-full flex flex-col items-end">
            <button onClick={() => setMobileOtherOpen(prev => !prev)}>
              RESOURCES {mobileOtherOpen ? '▲' : '▼'}
            </button>
            {mobileOtherOpen && (
              <div className="flex flex-col gap-2 mt-2 pr-4 text-right text-sm font-semibold">
                <button onClick={() => handleMentorClick("https://docs.google.com/forms/d/e/1FAIpQLSezO0mLM9d7UtiMRD7-b3qyNJo3RK_GGjoeXv4YmJFk9N0rqg/viewform?usp=header")}>Apply for Team Bonafide</button>
              
              </div>
            )}
          </div> */}
        </div>
      </div>
      

    </div>
    
  );
};

export default Navbar;



































































































// import React, { useState, useEffect } from 'react';
// import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Importing icons for hamburger menu
// import Image from '../Assets/iitm logo.png';
// import Image2 from '../Assets/nirmaan logo.png';
// import Image3 from '../Assets/OIE Logo.png';

// const Navbar = () => {
//   const [activePage, setActivePage] = useState("");
//   const [navOpen, setNavOpen] = useState(false); // State to handle the mobile nav menu

//   useEffect(() => {
//     // Set the active page based on the current URL
//     const currentPath = window.location.pathname;
//     setActivePage(currentPath);
//   }, []);

//   // Function to toggle mobile menu
//   const toggleNav = () => {
//     setNavOpen(!navOpen);
//   };

//   return (
//     <div className="fixed top-0 left-0 w-full shadow-md text-black p-4 z-50" style={{ backgroundColor: '#83d687' }} >
//       <div className="flex items-center justify-between ml-8">
//         <a className="flex items-center" onClick={() => (window.location.href = "/")}>
//           <img src={Image} className="w-22 h-12 mr-2" alt="Image1" />
//           <img src={Image3} className="w-22 h-14 mr-2" alt="Image2" />
//           <img src={Image2} className="w-18 h-12 mr-3.5" alt="Image3" />
//           <div className="font-dmsans font-bold md:text-xl ml-5">
//             <span> N I R M A A N </span>
//             <div className="text-base md:text-sm"> The Pre-Incubator </div>
//           </div>
//         </a>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex gap-8 mr-12 font-dmsans font-semibold text-sm">
//   <button
//     type="button"
//     onClick={() => (window.location.href = "/")}
//     className={`active:scale-[.90] active:duration-70 hover:scale-[1.02] transition-all ease-in-out md:pt-4 ${activePage === '/' ? 'border-b-2 border-green-800 text-green-800' : ''}`}
//   >
//     HOME
//   </button>
//   <button
//     type="button"
//     onClick={() => (window.location.href = "/About_us")}
//     className={`active:scale-[.90] active:duration-70 hover:scale-[1.02] transition-all ease-in-out md:pt-4 ${activePage === '/About_us' ? 'border-b-2 border-green-800 text-green-800' : ''}`}
//   >
//     ABOUT
//   </button>
//   <button
//     type="button"
//     onClick={() => (window.location.href = "/genesis")}
//     className={`active:scale-[.90] active:duration-70 hover:scale-[1.02] transition-all ease-in-out md:pt-4 ${activePage === '/genesis' ? 'border-b-2 border-green-800 text-green-800' : ''}`}
//   >
//     GENESIS
//   </button> 
//   <div className="relative group">
//     <button
//       type="button"
//       onClick={() => (window.location.href = "/incubation")}
//       className={`active:scale-[.90] active:duration-70 hover:scale-[1.02] transition-all ease-in-out md:pt-4 ${activePage.includes('incubation') ? 'border-b-2 border-green-800 text-green-800' : ''}`}
//     >
//       PRATHAM & AKSHAR
//     </button>
//     <div className="absolute hidden bg-white text-black mt-1 shadow-lg rounded-sm group-hover:block right-[-39px] border-t-4 border-green-700">
//       {/* <button
//         className="block px-1 py-2 text-sm hover:bg-gray-200 w-full text-left"
//         onClick={() => (window.location.href = "/incubation")}
//       >
        
//       </button> */}
//       {/* <button
//         className="block py-2 text-sm hover:bg-gray-200 w-full text-left mr-8 ml-1"
//         onClick={() => (window.location.href = "/scholarship")}
//       >
//         SCHOLARSHIP
//       </button> */}
//     </div>
//   </div>
//   <button
//     onClick={() => (window.location.href = "/events")}
//     className={`pt-4 ${activePage === '/events' ? 'border-b-2 border-green-800 text-green-800' : ''}`}
//   >
//     EVENTS
//   </button>
//   <button
//     onClick={() => (window.location.href = "/teams")}
//     className={`pt-4 ${activePage === '/teams' ? 'border-b-2 border-green-800 text-green-800' : ''}`}
//   >
//     TEAMS
//   </button>
//   <button
//     onClick={() => (window.location.href = "/mentor")}
//     className={`pt-4 ${activePage === '/mentor' ? 'border-b-2 border-green-800 text-green-800' : ''}`}
//   >
//     MENTORS
//   </button>
//   <button
//     onClick={() => (window.location.href = "/media")}
//     className={`pt-4 ${activePage === '/media' ? 'border-b-2 border-green-800 text-green-800' : ''}`}
//   >
//     MEDIA
//   </button>
//   <button
//     onClick={() => (window.location.href = "/contact-us")}
//     className={`pt-4 ${activePage === '/contact-us' ? 'border-b-2 border-green-800 text-green-800' : ''}`}
//   >
//     CONTACT
//   </button>
// </div>


//         {/* Hamburger Menu Icon for Mobile */}
//         <div className="md:hidden">
//           <button onClick={toggleNav} className="text-2xl">
//             {navOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`fixed top-0 left-0 h-full w-full bg-white text-black transition-transform transform ${navOpen ? 'translate-x-0' : '-translate-x-full'}`}
//         style={{ zIndex: 1000 }}
//       >
//         <div className="flex justify-between items-center p-4">
//           <button onClick={toggleNav} className="text-2xl">
//             <AiOutlineClose />
//           </button>
//         </div>
//         <div className="flex flex-col gap-6 mt-4 text-center font-dmsans font-semibold text-sm">
//           <button onClick={() => (window.location.href = "/")} className={`${activePage === '/' ? 'border-b-2 border-green-800 text-green-800 w-1/2 mx-auto' : ''}`}>HOME</button>
//           <button onClick={() => (window.location.href = "/About_us")} className={`${activePage === '/About_us' ? 'border-b-2 border-green-800 text-green-800 w-1/2 mx-auto' : ''}`}>ABOUT</button>
//           <button onClick={() => (window.location.href = "/genesis")} className={`${activePage === '/genesis' ? 'border-b-2 border-green-800 text-green-800 w-1/2 mx-auto' : ''}`}>GENESIS</button>
//           <button onClick={() => (window.location.href = "/incubation")} className={`${activePage === '/incubation' ? 'border-b-2 border-green-800 text-green-800 w-1/2 mx-auto' : ''}`}>PRATHAM & AKSHAR</button>
//           {/* <button onClick={() => (window.location.href = "/scholarship")} className={`${activePage === '/scholarship' ? 'border-b-2 border-green-800 text-green-800 w-1/2 mx-auto' : ''}`}>SCHOLARSHIP</button> */}
//           <button onClick={() => (window.location.href = "/events")} className={`${activePage === '/events' ? 'border-b-2 border-green-800 text-green-800 w-1/2 mx-auto' : ''}`}>EVENTS</button>
//           <button onClick={() => (window.location.href = "/teams")} className={`${activePage === '/teams' ? 'border-b-2 border-green-800 text-green-800 w-1/2 mx-auto' : ''}`}>TEAMS</button>
//           <button onClick={() => (window.location.href = "/mentor")} className={`${activePage === '/mentor' ? 'border-b-2 border-green-800 text-green-800 w-1/2 mx-auto' : ''}`}>MENTORS</button>
//           <button onClick={() => (window.location.href = "/media")} className={`${activePage === '/media' ? 'border-b-2 border-green-800 text-green-800 w-1/2 mx-auto' : ''}`}>MEDIA</button>
//           <button onClick={() => (window.location.href = "/contact-us")} className={`${activePage === '/contact-us' ? 'border-b-2 border-green-800 text-green-800 w-1/2 mx-auto' : ''}`}>CONTACT</button>
        
        
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
