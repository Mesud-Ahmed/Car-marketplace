import React from "react";
import { FaTelegramPlane, FaFacebook, FaInstagram,FaPhone, FaEnvelope } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center text-teal-600">
          <h2 className="text-2xl font-bold">Freedom Car Sale</h2>
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
          Discover your dream car with our Car Marketplace. We offer a wide range of
          vehicles, from luxury SUVs to reliable sedans, ensuring you find the
          perfect match for your needs.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          <div className="flex items-center text-gray-700">
            <FaPhone className="mr-2 size-5" />
            <a href="tel:+251992229292" className="hover:text-gray-700/75 transition">
            +2519123456789
            </a>
          </div>
          <div className="flex items-center text-gray-700">
            <FaEnvelope className="mr-2 size-5" />
            <a href="mailto:support@carmarketplace.com" className="hover:text-gray-700/75 transition">
              support@carmarketplace.com
            </a>
          </div>
        </div>

        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Telegram</span>
              <FaTelegramPlane className="size-6" />
            </a>
          </li>
          <li>
            <a
              href="https://facebook.com/yourfacebook"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Facebook</span>
              <FaFacebook className="size-6" />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/yourinstagram"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Instagram</span>
              <FaInstagram className="size-6" />
            </a>
          </li>
        </ul>

        <div className="mt-16 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Car Marketplace. All rights
            reserved.
          </p>
          <p className="mt-2">
            Made by{" "}
            <a
              href="https://my-portfolio-kappa-lyart-53.vercel.app/"
              className="text-blue-400"
            >
              Mesud Ahmed
            </a>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
