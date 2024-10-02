import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer bg-sky-200 text-black py-10 flex flex-col">
      <div className="flex flex-wrap items-center lg:justify-between flex-col lg:flex-row w-full px-10">
        <nav className="flex flex-col  ">
          <h6 className="footer-title font-extrabold">Quick Links</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Properties</a>
          <a className="link link-hover">Services</a>
          <a className="link link-hover">Contact Us</a>
        </nav>

        <nav className="flex flex-col gap-2  ">
          <h6 className="footer-title font-extrabold">Social Media</h6>
          <a className="link link-hover flex items-center gap-2  " href="#">
            <FaFacebook className="text-lg" /> Facebook
          </a>
          <a className="link link-hover flex items-center gap-2 " href="#">
            <FaTwitter className="text-lg" /> Twitter
          </a>
          <a className="link link-hover flex items-center gap-2 " href="#">
            <FaInstagram className="text-lg" /> Instagram
          </a>
          <a className="link link-hover flex items-center gap-2 " href="#">
            <FaLinkedin className="text-lg" /> LinkedIn
          </a>
        </nav>

        <nav className="flex flex-col gap-2">
          <h6 className="footer-title font-extrabold">Contact Information</h6>
          <p className="flex items-center gap-2">
            <FaLocationDot />
            123 RE Real Estate Ave, Rajshahi, Bangladesh
          </p>
          <p className="flex items-center gap-2">
            <FaPhone />
            +880 1234 567890
          </p>
          <p className="flex items-center gap-2">
            <MdEmail />
            realestatecompany.info@re.com
          </p>
        </nav>
      </div>
      <div className="w-full border-t-2 border-black flex justify-center">
        <nav className="flex gap-10 pt-4">
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms of Service</a>
        </nav>
      </div>
      <div className=" w-full flex justify-center">
        <p className="">
          Copyright © {new Date().getFullYear()} - All right reserved by{" "}
          <strong>RE Real Estate Ltd</strong>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
