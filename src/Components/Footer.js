import React from "react";
import nirmaanLogo from "../Assets/nirmaan logo.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const socials = [
  {
    href: "https://www.linkedin.com/company/nirmaan-iitm/",
    label: "LinkedIn",
    Icon: FaLinkedinIn,
  },
  {
    href: "https://www.youtube.com/channel/UCqXpedHH46Y5_x-7MNY6nCw",
    label: "YouTube",
    Icon: FaYoutube,
  },
  {
    href: "https://www.instagram.com/nirmaan_iitm/",
    label: "Instagram",
    Icon: FaInstagram,
  },
  {
    href: "https://www.facebook.com/nirmaan.iitm",
    label: "Facebook",
    Icon: FaFacebookF,
  },
];

const navigateLinks = [
  { href: "/about_us", label: "About Nirmaan" },
  { href: "/programs", label: "Pratham & Akshar" },
  { href: "/teams", label: "Star Startups" },
  { href: "/events", label: "Events" },
];

const exploreLinks = [
  { href: "/genesis", label: "Genesis" },
  { href: "/mentor/faculty", label: "Mentors & Advisors" },
  { href: "/media", label: "Media" },
  { href: "/contact-us", label: "Contact" },
];

const Footer = () => {
  return (
    <footer className="site-footer mt-16 font-dmsans">
      <div className="site-container site-footer__top">
        <div className="site-footer__brand">
          <div className="flex items-center gap-3">
            <img src={nirmaanLogo} alt="" className="site-footer__logo" />
            <div>
              <div className="site-footer__name">NIRMAAN</div>
              <span className="site-footer__sub">Pre-Incubator · IIT Madras</span>
            </div>
          </div>
          <p className="site-footer__tag">
            The pre-incubator of IIT Madras — turning student ideas into ventures since 2015.
          </p>
          <div className="site-footer__social">
            {socials.map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="site-footer__heading">Navigate</h3>
          {navigateLinks.map(({ href, label }) => (
            <a key={href} href={href} className="site-footer__link">
              {label}
            </a>
          ))}
        </div>

        <div>
          <h3 className="site-footer__heading">Explore</h3>
          {exploreLinks.map(({ href, label }) => (
            <a key={href} href={href} className="site-footer__link">
              {label}
            </a>
          ))}
        </div>

        <div>
          <h3 className="site-footer__heading">Reach us</h3>
          <a href="mailto:nirmaan@smail.iitm.ac.in" className="site-footer__mail">
            nirmaan@smail.iitm.ac.in
          </a>
          <p className="site-footer__address">
            1<sup>st</sup> Floor, Sudha &amp; Shankar Innovation Hub,
          </p>
          <p className="site-footer__address">IIT Madras,</p>
          <p className="site-footer__address">Chennai – 600036, India</p>
        </div>
      </div>

      <div className="site-container site-footer__bottom">
        <span>&copy; {new Date().getFullYear()} Nirmaan · SIE, IIT Madras</span>
        <span>Bringing Ideas to Life</span>
      </div>
    </footer>
  );
};

export default Footer;