/* eslint-disable react/no-unescaped-entities */
// src/LandingPage.js

import img from "../../public/img.jpg";
import chat from "../../public/chat.png";
import aboutUs from "../../public/aboutUs.jpg";
import aboutUs1 from "../../public/aboutUs.png";
import aboutUs2 from "../../public/about-us.png";
import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaBuffer } from "react-icons/fa";
import { Link } from "react-scroll";
const LandingPage = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-blue-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center cursor-pointer">
          <h1 className="text-2xl font-bold">Your Company</h1>

          {/* Hamburger menu for mobile */}
          <div className="md:hidden">
            <button className="text-xl" onClick={toggleMobileMenu}>
              ☰
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-0 left-0 right-0 bg-blue-500 text-white text-center p-4">
              <div className="flex flex-col space-y-4">
                <Link
                  to="header"
                  smooth={true}
                  duration={500}
                  className="hover:underline"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
                <Link
                  to="features"
                  smooth={true}
                  duration={500}
                  className="hover:underline"
                  onClick={closeMobileMenu}
                >
                  Features
                </Link>
                <Link
                  to="shopNow"
                  smooth={true}
                  duration={500}
                  className="hover:underline"
                  onClick={closeMobileMenu}
                >
                  Shop Now
                </Link>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="hover:underline"
                  onClick={closeMobileMenu}
                >
                  About Us
                </Link>
                <Link
                  to="testimonials"
                  smooth={true}
                  duration={500}
                  className="hover:underline"
                  onClick={closeMobileMenu}
                >
                  Testimonials
                </Link>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="hover:underline"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="header"
              smooth={true}
              duration={500}
              className="hover:underline "
            >
              Home
            </Link>
            <Link
              to="features"
              smooth={true}
              duration={500}
              className="hover:underline"
            >
              Features
            </Link>
            <Link
              to="shopNow"
              smooth={true}
              duration={500}
              className="hover:underline"
            >
              Shop Now
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="hover:underline"
            >
              About Us
            </Link>
            <Link
              to="testimonials"
              smooth={true}
              duration={500}
              className="hover:underline"
            >
              Testimonials
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hover:underline"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
      {/* Section 1: Header */}
      <header id="header" className="bg-blue-500 text-white text-center py-8">
        <h1 className="text-4xl font-bold">Welcome to Your Landing Page</h1>
        <p className="mt-4">Discover our amazing products and services.</p>
      </header>
      {/* section 2: banner */}
      <section
        id="shopNow"
        className="bg-cover bg-center my-8 bg-gradient-to-r from-blue-700 to-blue-500 text-white py-32 text-center"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4">Exclusive Offer</h2>
          <p className="text-lg mb-6">
            Discover our limited-time exclusive deals. Don't miss out!
          </p>
          <Link
                  to="pricing"
                  smooth={true}
                  duration={500}
                  
                >
                   <button className="px-8 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-900 transition duration-300 focus:outline-none">
            Shop Now
          </button>
                </Link>
         
        </div>
      </section>
      {/* Section 3: Features */}
      <section id="features" className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-4 bg-white rounded-md shadow-md">
              <h3 className="text-xl font-bold mb-2">Feature 1</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-4 bg-white rounded-md shadow-md">
              <h3 className="text-xl font-bold mb-2">Feature 2</h3>
              <p className="text-gray-700">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-4 bg-white rounded-md shadow-md">
              <h3 className="text-xl font-bold mb-2">Feature 3</h3>
              <p className="text-gray-700">
                Duis aute irure dolor in reprehenderit in voluptate velit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: About Us */}
      <section id="about" className="bg-gray-200  py-12 my-6  md:flex md:mx-auto mx-auto text-center justify-center items-center px-14 gap-4">
        <div className="container md:w-1/2 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="text-gray-700">
            We are a passionate team dedicated to providing high-quality
            products and services to our customers. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nullam vehicula arcu vitae dui
            hendrerit, vel fermentum risus vulputate.
          </p>
        </div>
        <div className="md:w-1/2">
            <img className="w-96 mx-auto container" src={aboutUs1} alt="About Us Image" />
        </div>
      </section>
{/* Section 5: Pricing */}
<section id="pricing" className="bg-gray-100 py-12">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6">Pricing Plans</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Monthly Plan */}
      <div className="p-4 bg-white rounded-md shadow-md">
        <h3 className="text-xl font-bold mb-2">Monthly Plan</h3>
        <p className="text-gray-700">Get access to our services on a monthly basis.</p>
        <p className="text-blue-500 font-bold mt-2">$19.99/month</p>
        <button className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-900 transition duration-300 focus:outline-none">
          Subscribe
        </button>
      </div>

      {/* Yearly Plan */}
      <div className="p-4 bg-white rounded-md shadow-md">
        <h3 className="text-xl font-bold mb-2">Yearly Plan</h3>
        <p className="text-gray-700">Save more with our yearly subscription.</p>
        <p className="text-blue-500 font-bold mt-2">$199.99/year</p>
        <button className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-900 transition duration-300 focus:outline-none">
          Subscribe
        </button>
      </div>

      {/* Lifetime Plan */}
      <div className="p-4 bg-white rounded-md shadow-md">
        <h3 className="text-xl font-bold mb-2">Lifetime Plan</h3>
        <p className="text-gray-700">One-time payment for a lifetime of benefits.</p>
        <p className="text-blue-500 font-bold mt-2">$499.99</p>
        <button className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-900 transition duration-300 focus:outline-none">
          Purchase
        </button>
      </div>
    </div>
  </div>
</section>

      {/* Section 6: Testimonials */}
      <section id="testimonials" className="bg-gray-200 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="p-4 bg-white rounded-md shadow-md">
              <p className="text-gray-700">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum sit amet libero efficitur, euismod velit nec,
                scelerisque tortor."
              </p>
              <p className="text-blue-500 font-bold mt-2">- Client 1</p>
            </div>

            {/* Testimonial 2 */}
            <div className="p-4 bg-white rounded-md shadow-md">
              <p className="text-gray-700">
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat."
              </p>
              <p className="text-blue-500 font-bold mt-2">- Client 2</p>
            </div>

            {/* Testimonial 3 */}
            <div className="p-4 bg-white rounded-md shadow-md">
              <p className="text-gray-700">
                "Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur."
              </p>
              <p className="text-blue-500 font-bold mt-2">- Client 3</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Contact */}
      <section id="contact" className="mx-auto con">
  <div className="bg-gray-300 py-12 md:flex md:mx-auto text-center justify-center items-center gap-4">
    <div className="container md:w-1/2 md:px-9 mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <p className="text-gray-700">
        Ready to get started? Reach out to us for any inquiries or
        partnerships.
      </p>

      {/* Contact Form */}
      <form className="mt-8 max-w-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-2 p-3 w-full border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-2 p-3 w-full border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="john@example.com"
            />
          </div>
        </div>

        {/* Message */}
        <div className="mt-4">
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="mt-2 p-3 w-full border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Your message..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
{/* icon image */}
    <div className="md:w-1/2">
      <img className="w-96 mx-auto" src={chat} alt="chat image" />
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-gray-900 text-white cursor-pointer text-center py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <aside className="mb-6 md:mb-0 md:col-span-2 lg:col-span-1">
            <div className="flex flex-col items-center">
              <FaBuffer className="text-3xl mb-2" />
              <p>
                Your Company
                <br />
                Providing reliable tech since 1992
              </p>
            </div>
          </aside>

          {/* Company Links */}
          <nav className="mb-6">
            <h6 className="footer-title mb-4">Company</h6>
            <Link
              to="about-us"
              smooth={true}
              duration={500}
              className="link link-hover block mb-2"
            >
              About us
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="link link-hover block mb-2"
            >
              Contact
            </Link>
            <Link
              to="jobs"
              smooth={true}
              duration={500}
              className="link link-hover block mb-2"
            >
              Jobs
            </Link>
            <Link
              to="press-kit"
              smooth={true}
              duration={500}
              className="link link-hover block mb-2"
            >
              Press kit
            </Link>
          </nav>

          {/* Legal Links */}
          <nav>
            <h6 className="footer-title mb-4">Legal</h6>
            <Link
              to="terms-of-use"
              smooth={true}
              duration={500}
              className="link link-hover block mb-2"
            >
              Terms of use
            </Link>
            <Link
              to="privacy-policy"
              smooth={true}
              duration={500}
              className="link link-hover block mb-2"
            >
              Privacy policy
            </Link>
            <Link
              to="cookie-policy"
              smooth={true}
              duration={500}
              className="link link-hover block mb-2"
            >
              Cookie policy
            </Link>
          </nav>

          {/* Social Links */}
          <div className="flex justify-center md:col-span-2 lg:col-span-1 space-x-4">
            <a href="#" className="text-2xl hover:text-gray-400">
              <FaFacebook />
            </a>
            <a href="#" className="text-2xl hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="#" className="text-2xl hover:text-gray-400">
              <FaInstagram />
            </a>
          </div>
        </div>

        <p className="mt-8">&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
