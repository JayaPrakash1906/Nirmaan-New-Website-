import React from 'react'
import Navbar from '../Components/Navbar'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { FaGraduationCap, FaRegClock } from 'react-icons/fa6'
import Footer from '../Components/Footer'
function Kgmg() {
  return (
    <div>
        <Navbar />
        <div className="mt-[88px] font-dmsans">
                <div className="bg-green-100">
                        <div className="p-5 flex"><span><a href="/" className="text-gray-500 font-semibold hover:underline">Home</a></span> <span className="p-2 text-gray-500"><FaArrowAltCircleRight size={12}/></span> <a className="text-black font-semibold" href="/scholarship">Scholarship</a> <span className="p-2 text-gray-500"><FaArrowAltCircleRight size={12}/></span> <span className="text-black font-semibold">KGMG</span></div>
                        <h2 className="md:text-5xl font-semibold text-green-600 pb-3 pt-8  text-center sm:text-3xl">K Ganesh Meena Ganesh </h2>
                        
                </div> 
                <div className="mt-10 px-20 text-justify" id="content">
                           <div>The K. Ganesh and Meena Ganesh Scholarship for Entrepreneurship Development is aimed at supporting entrepreneurship development activities at the post-graduate level, particularly on translation of research to market. It is available to recently graduated (or soon to be graduating) M.S /PhD scholars who intend to commercialize their research and to scholars who have joined the MS (Entrepreneurship) program. The scholarship offers a stipend for a period of 6 months extendable by another 6 months for the graduating scholars and for a period of up to 2 years for the MS (Entrepreneurship) scholars. If you are an MS or a PhD student interested in commercializing your venture and have submitted your synopsis within the past 6 months (a necessary criteria for selection), you can apply for this scholarship by filling in the form below. For scholars should not be receiving any HTRA or other project funding to be eligible for this fellowship. The last date for filling in the form is April 15th, 2023.</div>
                           <div className="mt-14">    
                                    <h2 className="md:text-2xl font-semibold text-green-600 text-center sm:text-3xl">Students supported by KGMG</h2>
                                    {/* grid */}
                                    <div className="md:grid md:grid-cols-4 gap-10 mt-7 mb-2">
                                            <div className="border  border-t-4 border-green-400">
                                                    <div className="px-3 py-2">
                                                            <div className="m-1 text-sm">Year: 2020</div>   
                                                            <div className="text-5xl flex justify-center items-center text-gray-500 font-semibold py-5">6</div>
                                                            
                                                    </div>
                                            </div>
                                            <div className="border border-t-4 border-green-400 mt-4">
                                                    <div className="px-3 py-2">
                                                            <div className="m-1 text-sm">Year: 2021</div>   
                                                            <div className="text-5xl flex justify-center items-center text-gray-500 font-semibold py-5">3</div>
                                                            
                                                    </div>
                                            </div>
                                            <div className="border border-t-4 border-green-400 mt-4">
                                                    <div className="px-3 py-2">
                                                            <div className="m-1 text-sm">Year: 2022</div>   
                                                            <div className="text-5xl flex justify-center items-center text-gray-500 font-semibold py-5">3</div>
                                                            
                                                    </div>
                                            </div>
                                            <div className="border border-t-4 border-green-400 mt-4">
                                                    <div className="px-3 py-2">
                                                            <div className="m-1 text-sm">Year: 2023</div>   
                                                            <div className="text-5xl flex justify-center items-center text-gray-500 font-semibold py-5">5</div>
                                                            
                                                    </div>
                                            </div>
                                            <div className="border border-t-4 border-green-400 mt-4">
                                                    <div className="px-3 py-2">
                                                            <div className="m-1 text-sm">Year: 2024</div>   
                                                            <div className="text-5xl flex justify-center items-center text-gray-500 font-semibold py-5">1</div>
                                                            
                                                    </div>
                                            </div>
                                    </div>
                                    {/* jhdk */}

                                    <div className="mt-20 mb-10" id="ugfir">
                                                <h2 className="md:text-2xl font-semibold text-green-600 text-center sm:text-3xl">Stipend Details & Duration</h2>
                                                <div className="md:grid md:grid-cols-3 md:gap-5 mt-10">
                                                    <center>
                                                            <div className="">
                                                                <div className="border h-[140px] w-[140px] rounded-full bg-gray-100">
                                                                        <div className="flex justify-center items-center pt-[33px]" style={{color: '#66bb6a'}}><FaGraduationCap size={70}/></div>
                                                                </div>
                                                                <div className="pt-2 text-xl font-semibold">MS Scholar</div>
                                                                <div className="text-md">₹20,000</div>
                                                        </div>
                                                    </center>
                                                    <center>
                                                            <div className="">
                                                                <div className="border h-[140px] w-[140px] rounded-full bg-gray-100">
                                                                        <div className="flex justify-center items-center pt-[33px]" style={{color: '#66bb6a'}}><FaGraduationCap size={70}/></div>
                                                                </div>
                                                                <div className="text-xl pt-2 font-semibold">Phd Scholar</div>
                                                                <div className="text-md">₹30,000</div>
                                                        </div>
                                                    </center>
                                                    <center>
                                                            <div className="">
                                                                <div className="border h-[140px] w-[140px] rounded-full bg-gray-100">
                                                                        <div className="flex justify-center items-center pt-[33px]" style={{color: '#66bb6a'}}><FaRegClock size={70}/></div>
                                                                </div>
                                                                <div className="text-xl pt-2 font-semibold">Period</div>
                                                                <div className="text-md">6 Months</div>
                                                        </div>
                                                    </center>
                                                </div>
                                    </div>
                           </div>
                </div>

        </div>
        <Footer />
    </div>
  )
}

export default Kgmg
 