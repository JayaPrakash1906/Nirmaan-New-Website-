import React from "react";
import Img9 from "../Assets/footer.jpg";
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedin, FaLocationDot, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="mt-16 md:mb-auto">
      <div
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: `url(${Img9})`,
          height: "auto",
        }}
      >
        {/* Contact, Quick Links, and Socials */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-8 px-8 py-6 text-white">
          {/* Contact Section */}
          <div>
            <h3 className="font-semibold mt-4 mb-3">Contact</h3>
            <div className="flex items-start text-sm">
              <FaEnvelope className="mr-2 h-5 w-5" />
              <span>Nirmaan@smail.iitm.ac.in</span>
            </div>
            <div className="flex items-start mt-2 text-sm">
              <FaLocationDot className="mr-2 h-5 w-5" />
              <div>
                <p>Sudha & Shankar Innovation Hub</p>
                <p>IIT Madras, Chennai</p>
                <p>600036, India</p>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="font-semibold mt-4 mb-3">Quick Links</h3>
            <div className="grid grid-cols-1 gap-2 text-sm">
              <a href="/media" className="hover:underline" >Blog</a>
              <a href="/media" className="hover:underline">Innosphere Podcast</a>
              <a href="/media" className="hover:underline">Innosphere Magazine</a>
            </div>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="font-semibold mt-4 mb-3">Follow Us</h3>
            <div className="flex space-x-6 mt-4"target="_blank" >
              <a href="https://www.linkedin.com/company/nirmaan-iitm/" target="_blank" rel="noopener noreferrer"  aria-label="LinkedIn">
                <FaLinkedin className="h-6 w-6 hover:text-gray-400" />
              </a>
              <a href="https://www.youtube.com/channel/UCqXpedHH46Y5_x-7MNY6nCw" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube className="h-6 w-6 hover:text-gray-400" />
              </a>
              <a href="https://www.instagram.com/nirmaan_iitm?igsh=YWdocTFid3Y5Zmdx" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="h-6 w-6 hover:text-gray-400" />
              </a>
              <a href="https://www.facebook.com/nirmaan.iitm?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF className="h-6 w-6 hover:text-gray-400" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-white bg-green-900 py-3">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Designed by Nirmaan Team
        </p>
      </div>
    </div>
  );
};

export default Footer;
