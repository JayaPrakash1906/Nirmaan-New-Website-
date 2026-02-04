import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FaArrowAltCircleRight } from "react-icons/fa";

function Contact() {
    return (
        <div>
            <Navbar />
            <div className="md:mt-[130px] font-dmsans">
                <div className="bg-green-100">
                    <div className="pt-5 pl-5 flex">
                        <span><a href="/" className="text-gray-500 font-semibold hover:underline">Home</a></span>
                        <span className="p-2 text-gray-500"><FaArrowAltCircleRight size={12}/> </span>
                        <span className="text-black font-semibold">Contact us</span>
                    </div>
                    <h2 className="md:text-5xl font-semibold text-green-600 pt-7 pb-6 text-center sm:text-4xl">Contact us</h2>
                </div>

                <div id="form-input" className="grid gap-4 px-4 py-6 md:grid-cols-2 md:px-[200px]">
                    <input
                        type="text"
                        placeholder="First Name"
                        className="p-2 bg-gray-100 border-gray-300 rounded-md focus:ring-2 focus:ring-green-200 focus:outline-none w-full"
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="p-2 bg-gray-100 border-gray-300 rounded-md focus:ring-2 focus:ring-green-200 focus:outline-none w-full"
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="p-2 bg-gray-100 border-gray-300 rounded-md focus:ring-2 focus:ring-green-200 focus:outline-none w-full"
                    />
                    <input
                        type="text"
                        placeholder="Contact Number"
                        className="p-2 bg-gray-100 border-gray-300 rounded-md focus:ring-2 focus:ring-green-200 focus:outline-none w-full"
                    />
                    <div className="md:col-span-2">
                        <textarea
                            placeholder="Your Message"
                            rows="4"
                            className="w-full p-2 bg-gray-100 border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-green-200 focus:outline-none"
                        ></textarea>
                    </div>
                    <div className="flex justify-end md:col-span-2">
                        <button className="mt-6 bg-green-600 text-white font-dmsans px-8 py-1 rounded-2xl hover:bg-green-400 transition mb-9">
                            Submit
                        </button>
                    </div>
                    
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;
