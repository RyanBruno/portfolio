import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const HomePage = () => {
  return (
    <div className="bg-gray-100">
      {/* Introduction Section */}
      {/* Introduction Section */}
      <section
        className="px-5 bg-cover bg-center bg-fixed h-screen flex items-center justify-center text-white"
        style={{ backgroundImage: "url(your-background-image.jpg)" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto text-center z-10">
          <div className="rounded-full overflow-hidden w-20 h-20 mx-auto">
            <img
              src={"/Profile_Picture_00002.png"}
              className="object-cover w-full h-full"
              alt="Profile Pic"
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Ryan Bruno
          </h1>
          <p className="text-lg mb-8">
            Hi there! My name's Ryan and I helping organizations harness
            technology to drive sales and lower costs. Ask me about boosting
            online sales, website design, and system integrations.
          </p>
          <a
            href="#portfolio"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full inline-block transition duration-300"
          >
            View Portfolio
          </a>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section id="portfolio" className="py-16 px-5">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Cards */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <img
                src="/IMG_3107.png"
                alt="Project 1"
                className="w-full object-contain object-center"
                style={{ height: "30rem" }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  The Meat Wagon BBQ's Catering App
                </h3>
                <p className="text-gray-700">
                  This custom app replaces traditional Google Forms used for
                  booking catering events. The app handles $100k+ per year
                  without issue. The simplified process led to boost in sales
                  and lower labor costs required.
                </p>
                <a
                  href="https://catering.themeatwagonbbq.com"
                  className="uppercase bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mt-4 rounded-full inline-block transition duration-300"
                >
                  Check it out!
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <img
                src="Frame_1.png"
                alt="Project 1"
                className="w-full object-contain object-center"
                style={{ height: "30rem" }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  My Professional Career
                </h3>
                <p className="text-gray-700">
                  I have over a half-decade of experience in the technology
                  space. Helping US Federal Agency clients with Software and IT,
                  I have solved countless problems over my career.
                </p>{" "}
                <a
                  href="https://catering.themeatwagonbbq.com"
                  className="uppercase bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mt-4 rounded-full inline-block transition duration-300"
                >
                  VIEW MY Résumé
                </a>
              </div>
            </div>
            {/* Repeat for other projects */}
          </div>
        </div>
      </section>
      {/* Contact Me Section */}
      <section id="contact" className="bg-gray-800 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Contact Me
          </h2>
          <p className="text-lg mb-8">
            Interested in working together? Let's get in touch!
          </p>
          <a
            href="#contact"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full inline-block transition duration-300"
          >
            Send Message
          </a>
          <div className="flex justify-center mt-10">
            <a
              href="your-facebook-url"
              className="text-blue-500 hover:text-blue-600 mr-4"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
              href="your-twitter-url"
              className="text-blue-500 hover:text-blue-600 mr-4"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="your-instagram-url"
              className="text-blue-500 hover:text-blue-600 mr-4"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
              href="your-linkedin-url"
              className="text-blue-500 hover:text-blue-600 mr-4"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
