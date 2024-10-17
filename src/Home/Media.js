import React from "react";
import Navbar from "../Components/Navbar";
import img from "../Assets/newsletter1.png";
import img1 from "../Assets/newsletter2.png";
import img2 from "../Assets/newsletter3.png";
import img3 from "../Assets/Magazine_Innosphere_Final (19).jpg";
import img4 from "../Assets/InnospherePodcast.jpeg";
import img6 from "../Assets/medium.png";
import img7 from "../Assets/E-cell-iitm.jpeg";
import img8 from "../Assets/incubation-researchpark-media.png";
import img9 from "../Assets/team1.png";
import img10 from "../Assets/demoday 1.jpeg";
import img11 from "../Assets/demoday director.png";
import img12 from "../Assets/DemoDay2024.png";
import img13 from "../Assets/team2.png";
import Footer from "../Components/Footer";
import { FaArrowAltCircleRight } from "react-icons/fa";
function Media(){
    return (
        <div>
            <Navbar />

            <div className="mt-[88px] font-dmsans">
                <div className="bg-green-100">
                        <div className="p-5 flex"><span><a href="/" className="text-gray-500 font-semibold hover:underline">Home</a></span> <span className="p-2 text-gray-500"><FaArrowAltCircleRight size={12}/></span> <span className="text-black font-semibold">Media</span></div>
                        <h2 className="text-5xl font-semibold text-green-600 pt-8 pb-5 text-center">Outreach initiative</h2>
                    
                </div>
                <div className="md:grid md:grid-cols-3 md:gap-4 px-20 mt-5">
                        <div className="border border-gray-300 rounded-lg shadow-lg p-4">
                        <div className="text-xl text-center text-green-600 font-semibold mb-2">Innosphere Podcast</div>
                            <div className="bg-black bg-opacity-100 rounded-lg">
                                    <img src={img4} alt="Image 1" className="w-full h-[240px] object-cover rounded-lg filter brightness-20 hover:brightness-0 hover:filter-none" />
                            </div>
                            <h3 className="text-sm mt-2">Our <b>Innosphere Podcast</b> on YouTube documents and chronicles the work and journey of the teams within our innovation sphere, which is the makerspace, center for Innovation (CFI) and the pre-incubator Nirmaan. </h3>
                            <center><a href="https://www.youtube.com/@InnovationEntrepreneurship"target="_blank" rel="noopener noreferrer"><button className="bg-green-400 px-2 py-2 rounded-full mt-1">View More</button></a></center>
                        </div>
                        

                        <div className="border border-gray-300 rounded-lg shadow-lg p-4">
                        <div className="text-xl text-center text-green-600 font-semibold mb-2">Innosphere Magazine</div>
                            <img src={img3} alt="Image 2" className="w-full h-[240px] object-cover rounded-lg  filter brightness-20 hover:brightness-0 hover:filter-none" />
                            <h3 className="text-sm mt-2"><b>Innosphere magazine</b> offers readers an in-depth look at our latest projects and milestones. It introduces you to a curated collection of insights, breakthroughs, and visionary ideas from the realms of agritech, AI, edutech, healthtech, renewable energy, spacetech, and beyond.</h3>
                            <a href="https://website-nirmaan.s3.ap-south-1.amazonaws.com/Magazine_Innosphere_Final+(6).pdf" target="_blank" rel="noopener noreferrer" // Replace with your actual PDF path
                            data-lity>                            
                            <center><button className="bg-green-400 px-2 py-2 rounded-full mt-1">View More</button></center>
                            </a>
              <div className="mt-4">
            </div>
                        </div>
                        
                        <div className="border rounded-md shadow-lg">
                        <div className="text-xl text-center text-green-600 font-semibold mt-2">Blog</div>

                                        <div className="flex justify-center items-center p-4">
                                            
                                        <img src={img6} alt="Image 2" className="w-full h-[240px] object-cover rounded-lg  hover:filter-none" />

                                        </div>
                                        <div className="ps-5 font-semibold text-md">On Medium.com, Nirmaan brings you stories, ideas, and insights to inspire and empower. </div>
                                        <div className="ps-5 text-sm text-gray-500 mt-2">Updated: Sept 11, 2024</div>
                                        <center><a href="https://medium.com/@nirmaan_iitm"target="_blank" rel="noopener noreferrer"><button className="bg-green-400 px-2 py-2 rounded-full mt-2">View More</button></a></center>
                                        
                                    </div>
                        
                </div>
                
                <div className="mt-7">
                        <div className="text-3xl text-center text-green-600 font-semibold">Media Coverage</div>
                        <div className="md:grid md:grid-cols-3 px-10 mt-5 md:gap-10 my-10">
                        
                        <div className="border rounded-md pb-2">
                                        <div className="flex justify-center items-center">
                                                <img src={img13} className="max-h-40 h-70 w-50  my-5 mx-10"/>
                                        </div>
                                        <div className="ps-5 font-semibold text-md">IIT Madras organizes great Nirmaan Demo Day 2024</div>
                                        <div className="ps-5 text-sm text-gray-500 mt-2">Updated: Oct 4, 2024</div>
                                        <center><a href="https://www.collegechalo.com/news/iit-madras-organizes-great-nir"target="_blank" rel="noopener noreferrer"><button className="bg-green-400 px-2 py-2 rounded-full mt-1">View More</button></a></center>
                                    </div>

                        <div className="border rounded-md pb-2">
                                        <div className="flex justify-center items-center">
                                                <img src={img12} className="max-h-40 h-70 w-50  my-5 mx-10"/>
                                        </div>
                                        <div className="ps-5 font-semibold text-md">‘Nirmaan Demo Day 2024’ (Youtube Live)</div>
                                        <div className="ps-5 text-sm text-gray-500 mt-2">Updated: Oct 4, 2024</div>
                                        <center><a href="https://www.youtube.com/live/IT01BBz26B4?si=4DSF1QuQY0_jrE-2"target="_blank" rel="noopener noreferrer"><button className="bg-green-400 px-2 py-2 rounded-full mt-1">View More</button></a></center>
                                    </div>

                        <div className="border rounded-md pb-2">
                                        <div className="flex justify-center items-center">
                                                <img src={img11} className="max-h-40 h-70 w-50  my-5 mx-10"/>
                                        </div>
                                        <div className="ps-5 font-semibold text-md">IIT Madras hosts its first ‘Nirmaan Demo Day 2024’ to showcase student innovations</div>
                                        <div className="ps-5 text-sm text-gray-500 mt-2">Updated: Oct 4, 2024</div>
                                        <center><a href="https://news.careers360.com/iit-madras-hosts-its-first-nirmaan-demo-day-2024-showcase-student-innovations/amp"target="_blank" rel="noopener noreferrer"><button className="bg-green-400 px-2 py-2 rounded-full mt-1">View More</button></a></center>
                                    </div>

                        <div className="border rounded-md pb-2">
                                        <div className="flex justify-center items-center">
                                                <img src={img10} className="max-h-40 h-70 w-50  my-5 mx-10"/>
                                        </div>
                                        <div className="ps-5 font-semibold text-md">30 teams demonstrate their ideas on Nirmaan Day at IIT-Madras</div>
                                        <div className="ps-5 text-sm text-gray-500 mt-2">Updated: Oct 4, 2024</div>
                                        <center><a href="https://www.thehindu.com/news/national/tamil-nadu/30-teams-demonstrate-their-ideas-on-nirmaan-day-at-iit-madras/article68690365.ece/amp/"target="_blank" rel="noopener noreferrer"><button className="bg-green-400 px-2 py-2 rounded-full mt-1">View More</button></a></center>
                                    </div>

                                    <div className="border rounded-md pb-2">
                                        <div className="flex justify-center items-center">
                                                <img src={img9} className="max-h-40 h-70 w-50  my-5 mx-10"/>
                                        </div>
                                        <div className="ps-5 font-semibold text-md">IIT Madras Showcases Students' Innovations At First-Ever 'Nirmaan Demo Day 2024'</div>
                                        <div className="ps-5 text-sm text-gray-500 mt-2">Updated: Oct 4, 2024</div>
                                        <center><a href="https://www.etvbharat.com/amp/en/!bharat/iit-madras-showcases-students-innovations-at-first-ever-nirmaan-demo-day-2024-enn24092704646"target="_blank" rel="noopener noreferrer"><button className="bg-green-400 px-2 py-2 rounded-full mt-1">View More</button></a></center>
                                    </div>


                                    <div className="border rounded-md pb-2">
                                        <div className="flex justify-center items-center">
                                                <img src={img} className="max-h-40 h-70 w-50  my-5 mx-10"/>
                                        </div>
                                        <div className="ps-5 font-semibold text-md">Nirmaan News Letter - January 2021 to January 2022 Edition</div>
                                        <div className="ps-5 text-sm text-gray-500 mt-2">Updated: Sept 11, 2024</div>
                                        <center><a href="https://acr.iitm.ac.in/wp-content/uploads/2022/07/NirmaanNewsletter2021_22-compressed.pdf"target="_blank" rel="noopener noreferrer"><button className="bg-green-400 px-2 py-2 rounded-full mt-1">View More</button></a></center>
                                    </div>
                                    <div className="border rounded-md pb-2">
                                        <div className="flex justify-center items-center">
                                                <img src={img1} className="max-h-40 h-70 w-50  my-5 mx-10"/>
                                        </div>
                                        <div className="ps-5 font-semibold text-md">IITM batch from 1998 donated and shared their view on Nirmaan</div>
                                        <div className="ps-5 text-sm text-gray-500 mt-2">Updated: Sept 11, 2024</div>
                                        <center><a href="https://joyofgiving.alumni.iitm.ac.in/data/utilreports/NIRMAAN.pdf"target="_blank" rel="noopener noreferrer"><button className="bg-green-400 px-2 py-2 rounded-full mt-1">View More</button></a></center>
                                    </div>
                                    <div className="border rounded-md pb-2">
                                        <div className="flex justify-center items-center">
                                                <img src={img2} className="max-h-40 h-70 w-50  my-5 mx-10"/>
                                        </div>
                                        <div className="ps-5 font-semibold text-md">Krishaka, A startup pre-incubated by Nirmaan IIT Madras works on helping farmers by reducing their cost of production</div>
                                        <div className="ps-5 text-sm text-gray-500 mt-2">Updated: Sept 11, 2024</div>
                                        <center><button className="bg-green-400 px-2 py-2 rounded-full">View More</button></center>
                                    </div>
                                    <div className="border rounded-md pb-2">
                                        <div className="flex justify-center items-center">
                                                <img src={img7} className="max-h-40 h-70 w-50  my-5 mx-10"/>
                                        </div>
                                        <div className="ps-5 font-semibold text-md">E-Cell, IITM Zanzibar mentions Nirmaan on its official LinkedIn page </div>
                                        <div className="ps-5 text-sm text-gray-500 mt-2">Updated: Sept 17, 2024</div>
                                        <center><a href="https://www.linkedin.com/posts/e-cell-zanzibar_entrepreneurship-startups-innovation-activity-7200939813716299776-uVyO/"target="_blank" rel="noopener noreferrer"><button className="bg-green-400 px-2 py-2 rounded-full mt-1">View More</button></a></center>
                                    </div>
                                    <div className="border rounded-md pb-2">
                                        <div className="flex justify-center items-center">
                                                <img src={img8} className="max-h-40 h-70 w-50  my-5 mx-10"/>
                                        </div>
                                        <div className="ps-5 font-semibold text-md">IITM Incubation Cell mentions Nirmaan in its online post while talking about Entrepreneurial Ecosystem @ IITM</div>
                                        <div className="ps-5 text-sm text-gray-500 mt-2">Updated: Sept 17, 2024</div>
                                        <center><a href="http://rtbi.in/incubationiitm/about-us/ecosystem.html"target="_blank" rel="noopener noreferrer"><button className="bg-green-400 px-2 py-2 rounded-full mt-1">View More</button></a></center>
                                    </div>
                                    
                                    
                        </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Media;