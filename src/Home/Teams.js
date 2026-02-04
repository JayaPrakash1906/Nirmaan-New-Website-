import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FaArrowAltCircleRight, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import img1 from '../Assets/Teams/grow_your_farm.jpg';
import img2 from '../Assets/Teams/Machintell.png';
import img3 from "../Assets/Teams/ravvio_logo.jpg";
import img4 from "../Assets/Teams/SSS.png";
import img5 from "../Assets/Teams/terraclime.svg";
import img6 from "../Assets/Teams/ofline.jpg";
import img7 from '../Assets/Teams/EWebstore.jpeg';
import img8 from '../Assets/Teams/pravahan_logo.jpg';
import img9 from '../Assets/Teams/waterfly_technologies.jpg';
import img10 from '../Assets/Teams/somfin.jpg';
import img11 from '../Assets/Teams/inbound.png';
import img12 from '../Assets/Teams/sukoon.jpg';
import img13 from '../Assets/Teams/matterize_logo.jpg';
import img14 from '../Assets/Teams/Krishaka.png';
import img15 from '../Assets/Teams/anitum.jpg';
import img16 from '../Assets/Teams/cosmic_soul_logo.jpg'
import img17 from '../Assets/Teams/fixonow_logo.jpg'
import img18 from '../Assets/Teams/QPo logo.png'
import img19 from '../Assets/Teams/Bhaskara Enginering services.jpeg'
import img20 from '../Assets/Teams/galaxy.png';
import img21 from '../Assets/Teams/tt.png';
import img22 from '../Assets/Teams/prescribe_wellnexus_technologies_pvt_ltd_logo.jpg';
import img23 from '../Assets/Teams/Infyulabs.png';
import img24 from '../Assets/Teams/involveedu_logo.jpg';
import img25 from '../Assets/Teams/aavrtti_logo.jpg';
import img26 from '../Assets/Teams/melvano.jpg';
import img27 from '../Assets/Teams/urbanmatrix_logo.jpg';
import img28 from '../Assets/Teams/tocal.jpg';
import img29 from '../Assets/Teams/modulus_housing.jpg';
import img30 from '../Assets/Teams/tan90thermal_logo.jpg';
import img31 from '../Assets/Teams/susstains.jpg';
import img32 from '../Assets/Teams/green_aadhaar_logo.jpg'
import img33 from '../Assets/Teams/zenith.jpg';
import img34 from '../Assets/Teams/gims_pvt_ltd_logo.jpg';
import img35 from '../Assets/Teams/uniscreen_logo.jpg';
import img36 from '../Assets/Teams/nikotto_logo.jpg';
import img37 from '../Assets/Teams/logo.png';
import img38 from '../Assets/Teams/plenome_logo.jpeg';
import img39 from '../Assets/Teams/Scimplify Logo.8a1aba1d.svg';
import img40 from '../Assets/Teams/aerodome_technologies.jpeg';
import img41 from '../Assets/Teams/officialsubspace_logo.jpg';
import img42 from '../Assets/Teams/UNS Edutech.jpeg';
import img43 from '../Assets/Teams/arctusaerospace_logo.jpg';
import img44 from '../Assets/Teams/infillion_global_logo.jpg';




import { FaCircleXmark, FaFileCircleXmark, FaGlobe, FaX } from "react-icons/fa6";

function Teams() {
    const [selectedTeam, setSelectedTeam] = useState(null);

    // Hardcoded team data
    const teamData = [
        {
            id: 1,
            project_name: "GalaxEye",
            profile_photo: img20,
            description: "GalaxEye is a Space Technology company, building the future of Satellite Image Acquisition by launching an advanced constellation of smart Satellites to acquire data from space, thus enabling businesses and governments to make data-driven decisions and perform efficient operations.",
            members_name: "Denil Chawda, Suyash Singh",
            members_linkedin: "https://www.linkedin.com/company/galaxeye/?originalSubdomain=in",
            website: "https://www.galaxeye.space/"
        },
        {
           id: 2,
             project_name: "Matterize",
           profile_photo: img13,
            description: "We provide a user-friendly online dashboard for process flow optimization and manufacturing cost estimation, enabling SMEs, suppliers, and OEMs to easily upload CAD files, select specifications, and automatically have their parts analyzed for manufacturing feasibility, get optimal process flow mapping, and detailed cost breakdown. Matterize uses AI to automate custom manufacturing processes.",
            members_name: "Sarthak Saurav ",
            members_linkedin: "https://www.linkedin.com/company/matterize/?originalSubdomain=in",
            website: "https://www.matterize.it/"
        },
        {
            id: 3,
            project_name: "Modulus Housing Solutions",
            profile_photo: img29,
            description: "Modulus envisions to re-imagine temporary structures. Fold-able cabin is a flagship product from Modulus Housing. Building a fully covered structure that can be setup easily with durable materials. The structures are foldable which makes them easy to transport. The space can also be used as a workspace with in-built sanitation facilities",
            members_name: "Shreeram Ravichandran, Gobinath",
            members_linkedin: "https://www.linkedin.com/company/modulushousing/",
            website: "https://www.modulushousing.com/"
        }, 
        {
            id: 4,
            project_name: "Tan90 Thermal Solutions Pvt. Ltd",
            profile_photo: img30,
            description: " Portable cold storage that simplifies the transportation of temperature-controlled products from the Farm to the Fork. Aims at providing modular and retro-fitted cold storage units with flexible volume range",
            members_name: "Soumalya Mukerjee, Shiv Sharma, Rajni",
            members_linkedin: "https://www.linkedin.com/company/tan90thermal/",
            website: "https://tan90thermal.com/"
        },
        {
            id: 5,
            project_name: "Susstains Engineering Solutions LLP",
            profile_photo: img31,
            description: " Produces activated carbon and charcoal from agricultural residues using an eco-friendly methods",
            members_name: "Muthu Kumar",
            members_linkedin: "https://www.linkedin.com/in/susstains-engineering-solutions-llp-17b218222/",
            website: "https://www.susstains.com/home"
        },
       
        {
            id: 6,
            project_name: "Inbound Aerospace",
            profile_photo: img11,
            description: "We are building a  Low-Earth-Orbit (LEO) based autonomous, unmanned, free-flying, recoverable spacecraft for customers to conduct in-orbit technology demonstrations, microgravity research and in-space manufacturing of products that have use cases back on Earth.",
            members_name: "ARAVIND I B",
            members_linkedin: "https://www.linkedin.com/company/inboundaerospace/",
            website: "https://inboundaerospace.com/"
        },
        {
            id: 7,
            project_name: "Sukoon",
            profile_photo: img12,
            description: "We at 'Sukoon' are creating the next generation wearables. Wearable which provide comfort and relief as per your need. Customised Temperature Wearable - The Perfect Ambient providing the optimal Comfort in harsh conditions",
            members_name: "Phalgun Vyas",
            members_linkedin: "https://www.linkedin.com/company/thesukoonworld/",
            website: ""
        }, 
         {
            id: 8,
            project_name: "Krishaka",
            profile_photo: img14,
            description: "Krishaka empowers small-scale farmers with affordable, energy-efficient automated machinery like paddy transplanters and groundnut harvesters. Using advanced tech such as Ultra-Wideband localization and camera-based perception, we simplify farming and boost productivity. Our mission is to make agriculture smarter, sustainable, and more profitable for farmers everywhere.",
            members_name: "Easwar Veeragandham",
            members_linkedin: "https://www.linkedin.com/company/krishaka/?originalSubdomain=in",
            website: "https://www.krishaka.in/"
        },
         {
            id: 9,
            project_name: "Plenome Technologies",
            profile_photo: img38,
            description: " Plenome is a IIT Madras incubated company, that provides Blockchain as a service (BaaS), Software as a service (SaaS), Telemedicine services, Hardware for Edge Computing, and Internet of Things (IoT) & Remote Environment Management (REM) products. We shorten our clients' time to market by offering dependable and secure solutions.",
            members_name: "Vijayaraja R",
            members_linkedin: "https://www.linkedin.com/company/plenome/",
            website: "https://plenome.com/"
        },
        {
            id: 10,
            project_name: "Involve learning solutions foundation",
            profile_photo: img24,
            description: "Involve is a Social Enterprise based in India that believes that developing agency in students and making them more self-reliant is essential to reduce the dependence on adults in the learning process. For this to happen, students will need to take ownership of their learning and develop the necessary skillsets for them to thrive. Towards this vision, Involve aims to create an ecosystem of support for students through Peer-based learning.",
            members_name: "Divanshu Kumar, Samyak Jain",
            members_linkedin: "https://www.linkedin.com/company/involveedu/",
            website: "http://www.involveedu.com"
        },
        
        
                {
            id: 11,
            project_name: "SSS International Drug Discovery and Development Research Pvt Ltd",
            profile_photo: img4,
            description: "To eradicate the malaria in world Recently in our lab we have discovered new drug for Malaria disease. In vitro and preclinical experimental results of arjunetin against Plasmodium berghei infected mice showed arjunetin act as potential drug candidates against malarial disease and showed activity even at sub-micromolar concentration with no cytotoxicity. For Further development of this drug we need emergency funding for further development this drug and INTERNATIONAL PATNET FILE.",
            members_name: "Senthilkumar",
            members_linkedin: "https://www.linkedin.com/in/gandarvakottai-senthilkumar-arumugam-39607769/?originalSubdomain=in",
            website: ""
        },
        
        {
            id: 12,
            project_name: "Bhaskara Engineering Services Pvt Ltd",
            profile_photo: img19,
            description: "BES (P) Ltd. delivers cost-effective, time-bound engineering solutions in CAD/CAE/CFD across sectors like Automotive, Aerospace, and Renewable Energy.We partner with OEMs and manufacturers to provide robust design, analysis, and optimization services using advanced engineering tools.BES also supports sustainability by designing wind-solar hybrid systems for standalone renewable energy applications.",
            members_name: " Indhumathy B",
            members_linkedin: "https://www.linkedin.com/company/bhaskara-engineering-services-pvt-ltd/",
            website: "https://www.bhaskaraengg.com/"
        },
         {
            id: 13,
            project_name: "Somfin",
            profile_photo: img10,
            description: " A digital platform providing a private space for personal finances. Providing personalized financial literacy and management to individuals and businesses, helping them cater through finances through features - SAFE, SECURE, GROW",
            members_name: "Om Prakash Tiwari , Souryadeepta",
            members_linkedin: "https://www.linkedin.com/company/somfin/",
            website: "https://thesomfin.com/"
        },
        {
            id: 14,
            project_name: "Terraclime",
            profile_photo: img5,
            description: "Urban areas are facing high levels of water stress due to hidden leakages in piped water supply (which could be as high as 65%) and non-metering of water in apartment complexes and gated communities. By not measuring individual household water consumption, expenses are forced to be split evenly amongst all residents which erodes the incentive to reduce water consumption, thereby leading to its excessive use and consequently water stress.",
            members_name: "Hariprasad Manoharan",
            members_linkedin: "https://www.linkedin.com/company/terraclime/",
            website: "https://www.terraclime.com/"
        },
        {
            id: 15,
            project_name: "Ewebstore AI",
            profile_photo: img7,
            description: "Create a website in 2 Minutes using voice of local language using our AI powered website builder - Voice to Code in Real time",
            members_name: "R Lokesh",
            members_linkedin: "https://www.linkedin.com/company/ewebstore/",
            website: "https://ewebstore.in/"
        },
        {
            id: 16,
            project_name: "ofline",
            profile_photo: img6,
            description: "Ofline is building one of the world's most user-friendly local marketplace in an online-to-offline model, with the mission to solve problems of discoverability, uncertainty, and time consumption in local markets. Our vision is to serve daily one billion customers in their local markets.",
            members_name: "Shine Jaiswal",
            members_linkedin: "https://www.linkedin.com/company/ofline-local-market/",
            website: "https://ofline.in/"
        },
        
        {
            id: 17,
            project_name: "Nikotto",
            profile_photo: img36,
            description: " To carry on the business of research and development, hardware and software development for automotive and allied applications. It includes but not limited to engine controls, engine test systems, electric and hybrid powertrain measurement and analysis, data acquisitions, vehicle to vehicle communications, vehicle safety, wireless communications, driver monitoring and autonomous driving, development of mobile applications, software, hardware and mechanical systems for the above applications. Services provided also include consultancy and training for the above applications.",
            members_name: "Jubin V Jose",
            members_linkedin: "https://www.linkedin.com/company/nikotto/?viewAsMember=true",
            website: "https://nikotto.in/"
        },
        {
            id: 18,
            project_name: "Grow Your Farms Private Limited",
            profile_photo: img1,
            description: "Grow Your Farms Private Limited is an AgriTech Startup providing Innovative Agricultural Extension & Advisory Services at Farmers Doorstep towards Sustainable (Organic & Conservation) Agriculture. We help produce safer food while reducing the inputs cost & increasing the output of the farm produce. We developed an expert system that ensure farmers get assured access and control over rightful basic resources at right time.",
            members_name: "Aruneswar MGB",
            members_linkedin: "https://www.linkedin.com/company/growyourfarms/about/",
            website: "https://growyourfarms.com/"
        },
         {
            id: 19,
            project_name: "Ravvio",
            profile_photo: img3,
            description: "Ravvio enhances sales operations by offering agents a unified, user-friendly dashboard that enables seamless management of all tasks throughout a call.",
            members_name: "Sujay Srivastava , Nithin Maloth",
            sector: "EdTech",
            members_linkedin: "https://www.linkedin.com/company/ravvio/",
            website: "https://www.ravvio.in/"
        }, 
       {
            id: 20,
            project_name: "Pravahan",
            profile_photo: img8,
            description: "Project Pravahan is an ambitious research endeavor aimed at exploring the utilization of alternative clean energy fuels in marine vessels. With the growing concern over climate change and environmental sustainability, there is a pressing need to reduce the carbon footprint of the maritime industry. By focusing on innovative fuel sources and propulsion systems, we aim to pave the way for a greener and more sustainable future in maritime transportation.",
            members_name: "Rakshin Ramesh",
            members_linkedin: "https://www.linkedin.com/company/pravahan/?originalSubdomain=in",
            website: ""
        },
        {
            id: 21,
            project_name: "Waterfly Technologies",
            profile_photo: img9,
            description: "Waterfly offers an intelligent energy management hub designed to optimize energy costs and enhance system reliability in photovoltaic (PV) and battery-based off-grid power systems.",
            members_name: "Harish Rajesh, Keshav Kumar, Harshin N",
            members_linkedin: "https://www.linkedin.com/company/waterfly/",
            website: "www.waterfly.info"
        },
        {
            id: 22,
            project_name: "Anitum",
            profile_photo: img15,
            description: "We're revolutionizing the way organizations understand and improve their work environments. Our cutting-edge AI platform analyzes workplace patterns to enhance employee well-being, optimize processes, and boost productivity.S",
            members_name: "Het Patel ",
            members_linkedin: "https://www.linkedin.com/company/anitum/",
            website: "https://therightattention.com/"
        },
                {
            id: 23,
            project_name: "Cosmic Soul",
            profile_photo: img16,
            description: "Cosmic Soul is pioneering AI-powered digital wellness, incubated at IIT Madras and backed by top investors. We bridge the gap between hyper-connectivity and true self-connection through emotionally intelligent, adaptive technology. Our platform redefines wellness with personalized guidance that cuts through digital noise to foster genuine connection.",
            members_name: " Abhishek Dixit",
            members_linkedin: "https://www.linkedin.com/company/cosmic-soul/",
            website: "https://www.cosmicsoulyoga.com/"
        },
        {
            id: 24,
            project_name: "Fixo",
            profile_photo: img17,
            description: "  Fixo offers fast, affordable, and transparent repair services for smartphones, laptops, and tablets.With certified technicians and genuine parts, we ensure quality repairs at competitive prices. From doorstep service to real-time tracking, Fixo gives your devices a reliable second life.",
            members_name: "Pallav Jha, Harshit Lata , Lakshay Sharma",
            members_linkedin: "https://www.linkedin.com/company/fixorepairs/",
            website: "https://fixonow.com/"
        },
        {
            id: 25,
            project_name: "QPo Cabs",
            profile_photo: img18,
            description: "Welcome to QPo Cabs, your premier destination for seamless ridesharing solutions. Tired of public transport delays, overcrowded buses, and unpredictable share auto waits? With QPo, track share autos in real-time, signal your location to drivers for easy pickups, and enjoy hassle-free drop-offs at your preferred location—all for FREE!",
            members_name: "Asfaq Jalal",
            members_linkedin: "https://www.linkedin.com/company/qpo-cabs/",
            website: "https://qpocabs.com/index.html"
        },
        {
            id: 26,
            project_name: "Tech Table Digital Solutions",
            profile_photo: img21,
            description: "Tech Table : Setting The Platform For Bringing Students And Startups Together Tech Table is building an ecosystem for students and startups by bridging the distance between startups and students and providing more opportunities. ",
            members_name: "Rakesh Raushan",
            members_linkedin: "https://www.linkedin.com/company/tech-table/",
            website: "https://techtable.co.in"
        },
        {
            id: 27,
            project_name: "Prescribe",
            profile_photo: img22,
            description: "Prescribe makes doctor-patient interaction easier than ever before, making use of the recent advancements in speech recognition and artificial intelligence. We tackle almost all major problems prevalent in the Indian Healthcare system starting with the documentation problem",
            members_name: "Nived Narayanan",
            members_linkedin: "https://www.linkedin.com/company/heyprescribe/",
            website: "http://www.heyprescribe.com"
        },
        {
            id: 28,
            project_name: "InfyU Labs Pvt Ltd",
            profile_photo: img23,
            description: "Ultraportable wireless smartphone spectometer for field implementation in non-invasive non-destructive analysis of food and agriculture products",
            members_name: "Amit Srivastava",
            members_linkedin: "https://www.linkedin.com/company/infyu-labs/",
            website: "https://infyulabs.com/"
        },
        
        {
            id: 29,
            project_name: " Aavritti Technologies Pvt Ltd",
            profile_photo: img25,
            description: "AAVRTTI is a knowledge-based company providing engineering solutions to infrastructure & construction industries using our expertise in Electromagnetics Non-Destructive Techniques.Our founding team is a combination of experienced professors and motivated graduates from IIT Madras.We are funded by the Department of Scientific & Industrial Research, GoI.We are developing our first product which is RUDI for detection, identification and mapping of buried utilities under the subsurface.",
            members_name: "Pragyan",
            members_linkedin: "https://www.linkedin.com/company/aavrtti/",
            website: "https://aavrtti.com/"
        },
        {
            id: 30,
            project_name: "Melvano",
            profile_photo: img26,
            description: "Melvano is a blended learning platform for entrance exams. We are an intersection of offline coaching & online learning. At Melvano, our mentors handhold students in their academic journey along with Melvano app - That provides them with personalised coursework using AI",
            members_name: "Taran Singh",
            members_linkedin: "https://www.linkedin.com/company/melvano/",
            website: "https://www.melvano.com/"
        },
        {
            id: 31,
            project_name: "UrbanMatrix Technologies",
            profile_photo: img27,
            description: "UrbanMatrix is a Drone-Technology company that originated from IIT Madras, Chennai. The company was founded in 2019 with a focus on developing cutting-edge Drone-systems along with class-leading software capabilities.",
            members_name: "Rishabh Verma",
            members_linkedin: "https://www.linkedin.com/company/urbanmatrix/",
            website: "https://urbanmatrix.co.in/"
        },
        {
            id: 32,
            project_name: "TOCAL",
            profile_photo: img28,
            description: "Replacing the chain-sprocket mechanism in a bicycle with a bevel gear + electric drive system",
            members_name: "Dhairyasheel Deshmukh",
            members_linkedin: "https://www.linkedin.com/company/dbyt-dynamics-mobility-solutions-private-limited/?originalSubdomain=in",
            website: "http://www.tocal.in"
        },
      
        
        {
            id: 33,
            project_name: "Green Aadhaar",
            profile_photo: img32,
            description: " GREEN AADHAAR provides a scalable SaaS platform for end-to-end waste and resource management, enabling full traceability and operational efficiency.Our tools reduce overheads by up to 35% while ensuring compliance, transparency, and climate impact reporting.With features like Green Coin Tools and blockchain-based Digital Product Passports, we empower sustainable circular economies across all waste streams.",
            members_name: "Nkhil Panchal",
            members_linkedin: "https://www.linkedin.com/company/green-aadhaar/",
            website: "https://www.greenaadhaar.in/"
        },
        {
            id: 34,
            project_name: "Zenith",
            profile_photo: img33,
            description: " Keep aside the traditional way of learning in online classes and get ready to step into immersive 3D world of education. Zenith believe it is inevitable that metaverse will have a huge impact on learning. With Zenith make learning engaging and embrace the ‘wow’ moments in everything you do",
            members_name: "Shoaib Mustaque Ansari",
            members_linkedin: "https://www.linkedin.com/company/zenith-tuitions/",
            website: "https://zenithtuition.com/"
        },
        {
            id: 35,
            project_name: "Guhan Industrial & Manufacturing Solutions Pvt. Ltd.",
            profile_photo: img34,
            description: " Guhan Industrial and Manufacturing Solutions Pvt. Ltd is an engineering and technological product development and licensing company. We focus on indigenous design and development of sophisticated technologies for high energy machine tools and manufacturing processes and sustainable technologies.",
            members_name: "Guhan Gunasekaran ",
            members_linkedin: "https://www.linkedin.com/company/gims-pvt-ltd/",
            website: "https://www.gimsindia.in/"
        },
        {
            id: 36,
            project_name: "Uniscreen Solutions",
            profile_photo: img35,
            description: " Uniscreen is an Indian Multinational Medical Devices company headquartered in IIT Madras. Our products are specifically focused on a Continuous Glucose Monitoring (CGM) technology, which are available at an optimal cost.",
            members_name: "Balamurugan L",
            members_linkedin: "https://www.linkedin.com/company/uniscreen/",
            website: "https://www.uniscreen.in/"
        },
         
         {
            id: 37,
            project_name: "Clueso",
            profile_photo: img37,
            description: " Clueso helps SaaS companies turn rough screen recordings into polished explainer videos and help docs.It auto-generates scripts, AI voiceovers, and pro-level video effects.From the same recording, it also creates step-by-step articles with screenshots.Easily update or translate content in 30+ languages with just one click.",
            members_name: "Akash Anand",
            members_linkedin: "https://www.linkedin.com/company/clueso/",
            website: "https://www.clueso.io/?utm_source=linkedin&utm_medium=company_page"
        },
        
         {
            id: 38,
            project_name: "Scimplify",
            profile_photo: img39,
            description: "Scimplify is a science-first company for end-to-end development and manufacturing of specialty chemicals. We provide support across the product life cycle, from contract research to commercial chemical manufacturing across Pharmaceuticals, Agrochemicals, Industrial Chemicals, Flavors & Fragrances, Food & Nutrition, Beauty & Personal Care, and other industries.",
            members_name: "Pranav Singh Pundir",
            members_linkedin: "https://www.linkedin.com/company/scimplify/",
            website: "https://www.scimplify.com/"
        },
        {
            id: 39,
            project_name: "Aero Dome Technologies",
            profile_photo: img40,
            description: "AeroDome is a forward-thinking start-up that aims to revolutionize the entertainment industry with our state-of-the-art drone light shows. We are committed to crafting spellbinding experiences for global audiences, blending art and technology in a unique fusion.",
            members_name: "Vibhor Jain",
            members_linkedin: "https://www.linkedin.com/company/aerodome-technologies/",
            website: "https://www.aerodome.com/"
        },
        {
            id: 40,
            project_name: "Subspace",
            profile_photo: img41,
            description: "At Subspace, we make managing your finances simple and hassle-free. Our app simplifies splitting expenses with friends, tracking bills, and saving money. We're a team of finance experts and tech enthusiasts committed to providing a safe and secure platform backed by top banks and payment services. Join us on our mission to transform the way people manage their finances and take control of your money with Subspace!",
            members_name: "Joey Dash ",
            members_linkedin: "https://www.linkedin.com/company/officialsubspace/",
            website: "https://subspace.money/"
        },
        {
            id: 41,
            project_name: "UNS EduTech",
            profile_photo: img42,
            description: "UNS EduTech is on a mission to make the most of cutting-edge technology to impart the best education to help young generations build a solid foundation in science and mathematics and be ahead of time. We surpass boundaries and go the extra mile to impart the highest quality education by adopting innovative ways and the latest technologies. UNS EduTech offers live interactive sessions for students from 9th to 12th grade, JEE, NEET, KVPY, etc. We also provide NEET/JEE bilingual education programs, the best solutions to help students crack the competitive exams.",
            members_name: " Suraj CK",
            members_linkedin: "https://www.linkedin.com/company/uns-edutech/about/",
            website: "http://unsedutech.com/"
        },
        {
            id: 42,
            project_name: "Arctus Aerospace",
            profile_photo: img43,
            description: "Arctus builds unmanned fighter jets for armed forces to counter-terrorism, manage border control, and conduct sky surveillance. Our product will reach altitudes of 35,000 feet, gathering surveillance data, analyzing it, and presenting it in a format that enables the commander, situated in the control room, to make informed decisions.",
            members_name: " Shreepoorna",
            members_linkedin: "https://www.linkedin.com/company/arctusaerospace/",
            website: "https://arctus.space/"
        },
        {
            id: 43,
            project_name: "Infillion Global",
            profile_photo: img44,
            description: "Infillion Global is a startup in gesture recognition technology. We specialize in creating intuitive and hands-free human-computer interactions. Our expertise in gesture recognition enhances user experiences across various industries, from healthcare to gaming, by redefining the way people interact with technology. Join us in shaping the future of gesture-based interactions.",
            members_name: " Renju P B ",
            members_linkedin: "https://www.linkedin.com/company/infillion-global/",
            website: "https://www.infillion.global/"
        },
        
        
    ];

    const handleTeamClick = (team) => setSelectedTeam(team);
    const handleClose = () => setSelectedTeam(null);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow md:mt-[130px]">
                <div className="bg-green-100 pb-6">
                    <div className="pt-5 pl-5 flex items-center">
                        <a href="/" className="text-gray-600 font-semibold hover:underline text-sm sm:text-base">Home</a>
                        <span className="p-1 sm:p-2 text-gray-500"><FaArrowAltCircleRight size={12} /></span>
                        <span className="text-black font-semibold text-sm sm:text-base">Teams</span>
                    </div>
                    <h2 className="md:text-5xl font-semibold text-green-600 text-center pt-7 pb-6 sm:text-3xl">
            Star Startups
          </h2>
                </div>

     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 px-4 sm:px-6 md:px-10">
    {teamData.length > 0 ? (
        teamData.map((item) => (
            <div key={item.id} className="cursor-pointer" onClick={() => handleTeamClick(item)}>
                <div className="relative group overflow-hidden  bg-white transition-transform transform hover:scale-105      hover:shadow-lg">
                    <img
                        src={item.profile_photo}
                        alt={item.project_name}
                        className="w-[160px] h-[160px] sm:w-[180px] sm:h-[150px] object-contain transition-transform duration-300 ease-in-out group-hover:scale-110 mx-auto my-5"
                    />
                    {/* Slide-up hover effect with smaller text */}
                    {/* <div className="font-dmsans absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-400 to-transparent text-black text-center py-2 text-xxs sm:text-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        Click here for more info
                    </div> */}
                </div>
            </div>
        ))
    ) : (
        <p className="text-center col-span-full">No startups found.</p>
    )}
</div>


            </div>

            {/* Popup Modal */}
            <AnimatePresence>
                {selectedTeam && (
                    <>
                        {/* Background Overlay */}
                        <motion.div
                            className="fixed inset-0 bg-black bg-opacity-50 z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                        />

                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 flex items-center justify-center z-50 p-4"
                        >
                            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl w-full max-w-[850px] max-h-[90vh] overflow-y-auto p-4 sm:p-6 md:p-8 relative">
                                <button
                                    onClick={handleClose}
                                    className="absolute top-2 right-2 sm:top-4 sm:right-4 text-xl sm:text-2xl font-bold text-red-600 hover:text-red-800"
                                >
                                <FaCircleXmark />
                                </button>

                                <div className="flex items-center gap-3 sm:gap-5 mb-4 sm:mb-6">
                                    <img
                                        src={selectedTeam.profile_photo}
                                        alt={selectedTeam.project_name}
                                        className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] object-contain"
                                    />
                                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">{selectedTeam.project_name}</h2>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 sm:gap-6 text-xs text-justify sm:text-sm">
                                    <div className="sm:col-span-3 text-gray-700">
                                        <strong>Description:</strong><br />
                                        {selectedTeam.description}
                                    </div>

                                    <div className="sm:col-span-2 text-gray-800">
                                        <p className="mb-2">
                                            <strong>Founder(s):</strong><br />
                                            {selectedTeam.members_name}
                                        </p>
                                        <p className="flex items-center gap-2 mb-2">
                                            <strong>LinkedIn:</strong>
                                            {selectedTeam.members_linkedin ? (
                                                <a
                                                    href={selectedTeam.members_linkedin}
                                                    className="text-green-600 hover:underline"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    <FaLinkedin size={16} />
                                                </a>
                                            ) : (
                                                "N/A"
                                            )}
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <strong>Website:</strong>
                                            {selectedTeam.website ? (
                                                <a
                                                    href={selectedTeam.website}
                                                    className="text-green-500 hover:underline"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    <FaGlobe size={14} />
                                                </a>
                                            ) : (
                                                "N/A"
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <Footer />
        </div>
    );
}

export default Teams;






































































































// import React, { useEffect, useState } from "react";
// import Navbar from "../Components/Navbar";
// import axios from "axios";
// import Footer from "../Components/Footer";
// import Popover from "../Components/Popover";
// import { FaLinkedin } from "react-icons/fa6";
// import { FaArrowAltCircleRight } from "react-icons/fa";

// function Teams() {
//     const [data, setData] = useState([]);
//     const [selectedTeam, setSelectedTeam] = useState(null);
//     const [openEstablishPopUp, setOpenEstablishPopUp] = useState(false);
//     const [status, setStatus] = useState("");

//     const handleEstablish = (team) => {

//         setSelectedTeam(team);
//         setOpenEstablishPopUp(true);
//     };

//     const url = "https://nirmaan.iitm.ac.in:8000/api/images/";

//     const fetchTeamsData = async (teamStatus = "") => {
//         try {
//             const apiUrl = `https://nirmaan.iitm.ac.in:8000/api/projects`;
//             console.log("Fetching data from:", apiUrl); // Debug statement
//             const result = await axios.get(apiUrl);
//             console.log("API Response:", result.data); // Debug statement

//             let filteredData = result.data;

//             // Filter based on `status`:
//             if (teamStatus === "Active") {
//                 filteredData = filteredData.filter(
//                     (team) => ["Akshar", "Pratham"].includes(team.start_up_name)
//                 );
//             } else if (teamStatus === "Graduated") {
//                 filteredData = filteredData.filter(
//                     (team) => team.start_up_name === "Graduated"
//                 );
//             }

//             setData(filteredData);
//         } catch (err) {
//             console.error("API Error:", err);
//         }
//     };

//     useEffect(() => {
//         fetchTeamsData(status);
//     }, [status]);

//     const handleStatusChange = (e) => {
//         setStatus(e.target.value);
//     };

//     return (
//         <div>
//             <Navbar />
//             <div className="mt-[88px]">
//                 <div className="bg-green-100">
//                     <div className="pt-5 pl-5 flex">
//                         <span>
//                             <a href="/" className="text-gray-600 font-semibold hover:underline">
//                                 Home
//                             </a>
//                         </span>
//                         <span className="p-2 text-gray-500">
//                             <FaArrowAltCircleRight size={12} />
//                         </span>
//                         <span className="text-black font-semibold">Teams</span>
//                     </div>
//                     <h2 className="md:text-5xl font-semibold text-green-600 pt-7 pb-6 text-center sm:text-3xl">
//                         All Startups
//                     </h2>
//                     <div className="ml-2">
//                         <select
//                             id="options"
//                             className="font-dmsans"
//                             name="startups"
//                             onChange={handleStatusChange}
//                             value={status}
//                         >
//                             <option value="">Select</option>
//                             <option value="Active">Active</option>
//                             <option value="Graduated">Graduated</option>
//                         </select>
//                     </div>
//                 </div>
//                 <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10 mt-10 px-10">
//                     {data.length > 0 ? (
//                         data.map((item, index) => (
//                             <div key={index}>
//                                 <div
//                                     className="flex flex-col justify-center items-center p-4 font-dmsans"
//                                     onClick={() => handleEstablish(item)}
//                                 >
//                                     <img
//                                         src={item.profile_photo ? url + item.profile_photo : "default-image.png"}
//                                         alt={item.name}
//                                         className="w-[90px] h-[70px]"
//                                     />
//                                     <br />
//                                     <div className="pt-5">{item.project_name || "No Name"}</div>
//                                 </div>
//                             </div>
//                         ))
//                     ) : (
//                         <p className="text-center col-span-4">No teams found for this status.</p>
//                     )}
//                 </div>
//             </div>
//             <Footer />
//             <Popover isVisible={openEstablishPopUp} onClose={() => setOpenEstablishPopUp(false)}>
//                 {selectedTeam && (
//                     <div>
//                         <div className="flex gap-10">
//                             <div>
//                                 <h2 className="text-2xl font-bold mb-4 mt-2">
//                                     {selectedTeam.project_name}
//                                 </h2>
//                             </div>
//                             <div>
//                                 <img
//                                     src={selectedTeam.profile_photo ? url + selectedTeam.profile_photo : "default-image.png"}
//                                     alt={selectedTeam.name}
//                                     className="w-[50px] h-auto"
//                                 />
//                             </div>
//                             <div className="md:ms-[290px]">
//                                 <p className="mt-2">
//                                     <strong>Stage:</strong> {selectedTeam.start_up_name || "No team lead"}
//                                 </p>
//                                 <p className="mt-2">
//                                     <strong>Cohort:</strong> {selectedTeam.incubation_year || "Unknown"}
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="grid grid-cols-2">
//                             <div className="font-semibold">
//                                 Founder: {selectedTeam.members_name || "-"}
//                             </div>
//                         </div>
//                         <p className="mt-4"> 
//                             <strong>Description:</strong>{" "}
//                             {selectedTeam.description || "No description available"}
//                         </p>
//                         <p className="flex mt-2">
//                             <strong className="mt-[2px]">Social Media:</strong>
//                             {selectedTeam.members_linkedin ? (
//                                 <a
//                                     href={selectedTeam.members_linkedin}
//                                     className="m-[5px] text-green-600"
//                                 >
//                                     <FaLinkedin size={20} />
//                                 </a>
//                             ) : (
//                                 "No LinkedIn profile available"
//                             )}
//                         </p>
//                     </div>
//                 )}
//             </Popover>
//         </div>
//     );
// }

// export default Teams;

































// {
//             id: 1,
//             project_name: "Grow Your Farms Private Limited",
//             profile_photo: img1,
//             description: "Grow Your Farms Private Limited is an AgriTech Startup providing Innovative Agricultural Extension & Advisory Services at Farmers Doorstep towards Sustainable (Organic & Conservation) Agriculture. We help produce safer food while reducing the inputs cost & increasing the output of the farm produce. We developed an expert system that ensure farmers get assured access and control over rightful basic resources at right time.",
//             members_name: "Aruneswar MGB",
//             members_linkedin: "https://www.linkedin.com/company/growyourfarms/about/",
//             website: "https://growyourfarms.com/"
//         },
//         {
//             id: 2,
//             project_name: "MachIntell Corporation",
//             profile_photo: img2,
//             description: "We at MachIntell are developing a unique SaaS platform to organize shopfloor data of a discrete manufacturing factory and provide a diagnostic tool to monitor and produce reliable products.",
//             members_name: "Shashi Bhushan Gunjan",
//             members_linkedin: "https://www.linkedin.com/company/machintell-solutions/posts/?feedView=all",
//             website: "https://machintell.co.in/"
//         },
//         {
//             id: 3,
//             project_name: "Ravvio",
//             profile_photo: img3,
//             description: "Ravvio enhances sales operations by offering agents a unified, user-friendly dashboard that enables seamless management of all tasks throughout a call.",
//             members_name: "Sujay Srivastava , Nithin Maloth",
//             sector: "EdTech",
//             members_linkedin: "https://www.linkedin.com/company/ravvio/",
//             website: "https://www.ravvio.in/"
//         },
//         {
//             id: 4,
//             project_name: "SSS International Drug Discovery and Development Research Pvt Ltd",
//             profile_photo: img4,
//             description: "To eradicate the malaria in world Recently in our lab we have discovered new drug for Malaria disease. In vitro and preclinical experimental results of arjunetin against Plasmodium berghei infected mice showed arjunetin act as potential drug candidates against malarial disease and showed activity even at sub-micromolar concentration with no cytotoxicity. For Further development of this drug we need emergency funding for further development this drug and INTERNATIONAL PATNET FILE.",
//             members_name: "Senthilkumar",
//             members_linkedin: "https://www.linkedin.com/in/gandarvakottai-senthilkumar-arumugam-39607769/?originalSubdomain=in",
//             website: ""
//         },
//         {
//             id: 5,
//             project_name: "Terraclime",
//             profile_photo: img5,
//             description: "Urban areas are facing high levels of water stress due to hidden leakages in piped water supply (which could be as high as 65%) and non-metering of water in apartment complexes and gated communities. By not measuring individual household water consumption, expenses are forced to be split evenly amongst all residents which erodes the incentive to reduce water consumption, thereby leading to its excessive use and consequently water stress.",
//             members_name: "Hariprasad Manoharan",
//             members_linkedin: "https://www.linkedin.com/company/terraclime/",
//             website: "https://www.terraclime.com/"
//         },
//         {
//             id: 6,
//             project_name: "ofline",
//             profile_photo: img6,
//             description: "Ofline is building one of the world's most user-friendly local marketplace in an online-to-offline model, with the mission to solve problems of discoverability, uncertainty, and time consumption in local markets. Our vision is to serve daily one billion customers in their local markets.",
//             members_name: "Shine Jaiswal",
//             members_linkedin: "https://www.linkedin.com/company/ofline-local-market/",
//             website: "https://ofline.in/"
//         },
//         {
//             id: 7,
//             project_name: "Ewebstore AI",
//             profile_photo: img7,
//             description: "Create a website in 2 Minutes using voice of local language using our AI powered website builder - Voice to Code in Real time",
//             members_name: "R Lokesh",
//             members_linkedin: "https://www.linkedin.com/company/ewebstore/",
//             website: ""
//         },
//         {
//             id: 8,
//             project_name: "Pravahan",
//             profile_photo: img8,
//             description: "Project Pravahan is an ambitious research endeavor aimed at exploring the utilization of alternative clean energy fuels in marine vessels. With the growing concern over climate change and environmental sustainability, there is a pressing need to reduce the carbon footprint of the maritime industry. By focusing on innovative fuel sources and propulsion systems, we aim to pave the way for a greener and more sustainable future in maritime transportation.",
//             members_name: "Rakshin Ramesh",
//             members_linkedin: "https://www.linkedin.com/company/pravahan/?originalSubdomain=in",
//             website: ""
//         },
//         {
//             id: 9,
//             project_name: "Waterfly Technologies",
//             profile_photo: img9,
//             description: "Waterfly offers an intelligent energy management hub designed to optimize energy costs and enhance system reliability in photovoltaic (PV) and battery-based off-grid power systems.",
//             members_name: "Harish Rajesh, Keshav Kumar, Harshin N",
//             members_linkedin: "https://www.linkedin.com/company/waterfly/",
//             website: "www.waterfly.info"
//         },
//         {
//             id: 10,
//             project_name: "Somfin",
//             profile_photo: img10,
//             description: " A digital platform providing a private space for personal finances. Providing personalized financial literacy and management to individuals and businesses, helping them cater through finances through features - SAFE, SECURE, GROW",
//             members_name: "Om Prakash Tiwari , Souryadeepta",
//             members_linkedin: "https://www.linkedin.com/company/somfin/",
//             website: "https://thesomfin.com/"
//         },
//         {
//             id: 11,
//             project_name: "Inbound Aerospace",
//             profile_photo: img11,
//             description: "We are building a  Low-Earth-Orbit (LEO) based autonomous, unmanned, free-flying, recoverable spacecraft for customers to conduct in-orbit technology demonstrations, microgravity research and in-space manufacturing of products that have use cases back on Earth.",
//             members_name: "ARAVIND I B",
//             members_linkedin: "https://www.linkedin.com/company/inboundaerospace/",
//             website: "https://inboundaerospace.com/"
//         },
//         {
//             id: 12,
//             project_name: "Sukoon",
//             profile_photo: img12,
//             description: "We at 'Sukoon' are creating the next generation wearables. Wearable which provide comfort and relief as per your need. Customised Temperature Wearable - The Perfect Ambient providing the optimal Comfort in harsh conditions",
//             members_name: "Phalgun Vyas",
//             members_linkedin: "https://www.linkedin.com/company/thesukoonworld/",
//             website: ""
//         },
//         {
//             id: 13,
//             project_name: "Matterize",
//             profile_photo: img13,
//             description: "We provide a user-friendly online dashboard for process flow optimization and manufacturing cost estimation, enabling SMEs, suppliers, and OEMs to easily upload CAD files, select specifications, and automatically have their parts analyzed for manufacturing feasibility, get optimal process flow mapping, and detailed cost breakdown. Matterize uses AI to automate custom manufacturing processes.",
//             members_name: "Sarthak Saurav ",
//             members_linkedin: "https://www.linkedin.com/company/matterize/?originalSubdomain=in",
//             website: "https://www.matterize.it/"
//         },
//         {
//             id: 14,
//             project_name: "Krishaka",
//             profile_photo: img14,
//             description: "Krishaka empowers small-scale farmers with affordable, energy-efficient automated machinery like paddy transplanters and groundnut harvesters. Using advanced tech such as Ultra-Wideband localization and camera-based perception, we simplify farming and boost productivity. Our mission is to make agriculture smarter, sustainable, and more profitable for farmers everywhere.",
//             members_name: "Easwar Veeragandham",
//             members_linkedin: "https://www.linkedin.com/company/krishaka/?originalSubdomain=in",
//             website: "https://www.krishaka.in/"
//         },
//         {
//             id: 15,
//             project_name: "Anitum",
//             profile_photo: img15,
//             description: "We're revolutionizing the way organizations understand and improve their work environments. Our cutting-edge AI platform analyzes workplace patterns to enhance employee well-being, optimize processes, and boost productivity.S",
//             members_name: "Het Patel ",
//             members_linkedin: "https://www.linkedin.com/company/anitum/",
//             website: "https://therightattention.com/"
//         },
//         {
//             id: 16,
//             project_name: "Cosmic Soul",
//             profile_photo: img16,
//             description: "Cosmic Soul is pioneering AI-powered digital wellness, incubated at IIT Madras and backed by top investors. We bridge the gap between hyper-connectivity and true self-connection through emotionally intelligent, adaptive technology. Our platform redefines wellness with personalized guidance that cuts through digital noise to foster genuine connection.",
//             members_name: " Abhishek Dixit",
//             members_linkedin: "https://www.linkedin.com/company/cosmic-soul/",
//             website: ""
//         },
//         {
//             id: 17,
//             project_name: "Fixo",
//             profile_photo: img17,
//             description: "  Fixo offers fast, affordable, and transparent repair services for smartphones, laptops, and tablets.With certified technicians and genuine parts, we ensure quality repairs at competitive prices. From doorstep service to real-time tracking, Fixo gives your devices a reliable second life.",
//             members_name: "Pallav Jha, Harshit Lata , Lakshay Sharma",
//             members_linkedin: "https://www.linkedin.com/company/fixorepairs/",
//             website: "https://fixonow.com/"
//         },
//         {
//             id: 18,
//             project_name: "QPo Cabs",
//             profile_photo: img18,
//             description: "Welcome to QPo Cabs, your premier destination for seamless ridesharing solutions. Tired of public transport delays, overcrowded buses, and unpredictable share auto waits? With QPo, track share autos in real-time, signal your location to drivers for easy pickups, and enjoy hassle-free drop-offs at your preferred location—all for FREE!",
//             members_name: "Asfaq Jalal",
//             members_linkedin: "https://www.linkedin.com/company/qpo-cabs/",
//             website: "https://qpocabs.com/index.html"
//         },
//         {
//             id: 19,
//             project_name: "Bhaskara Engineering Services Pvt Ltd",
//             profile_photo: img19,
//             description: "BES (P) Ltd. delivers cost-effective, time-bound engineering solutions in CAD/CAE/CFD across sectors like Automotive, Aerospace, and Renewable Energy.We partner with OEMs and manufacturers to provide robust design, analysis, and optimization services using advanced engineering tools.BES also supports sustainability by designing wind-solar hybrid systems for standalone renewable energy applications.",
//             members_name: " Indhumathy B",
//             members_linkedin: "https://www.linkedin.com/company/bhaskara-engineering-services-pvt-ltd/",
//             website: "https://www.bhaskaraengg.com/"
//         },