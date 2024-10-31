// *useClient
import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const LandingPage = () => {
  //   const [isBlurred, setIsBlurred] = useState(true);
  //   const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     if (e.target.value.length > 0) {
  //       setIsBlurred(false);
  //     } else {
  //       setIsBlurred(true);
  //     }
  //   };
  return (
    <div className="relative bg-white py-0 px-12 md:px-5 big-container">
      <div className="flex flex-row flex-wrap">
        <div className="flex flex-col md:flex-row md:space-x-10">
          {/* Text and Social Media Links */}
          <div className="text-black md:w-1/2">
            <div>
              <p className="md:text-[40px] text-[20px] leading-12 pb-10 font-extrabold">
                Get Touch
              </p>
              <p className="md:text-[18px] leading-8 text-black mb-12">
                At North Rays, we are dedicated to empowering businesses with
                cutting-edge technology solutions and innovative marketing
                strategies. Whether you're looking for custom software,
                AI-powered tools, VR/AR experiences, or IT consulting and
                support, our team is here to help your business thrive in the
                digital age. Let’s work together to illuminate your path to
                success. Reach out to us today and discover how we can help your
                business stay ahead in the fast-evolving digital world.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="text-black hover:text-blue-800 transition duration-200 text-2xl" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-black hover:text-pink-700 transition duration-200 text-2xl" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="text-black hover:text-blue-600 transition duration-200 text-2xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:w-1/2">
            <form className="form-box text-black py-9 md:px-8">
              <div className="form-wrapper">
                <input
                  className="input w-full h-[40px] bg-transparent text-[18px] py-[1px] px-[22.5px] border border-black rounded mb-4"
                  type="text"
                  name="FirstName"
                  placeholder="First Name"
                />
                <input
                  className="input w-full h-[40px] bg-transparent text-[18px] py-[1px] px-[22.5px] border border-black rounded mb-4"
                  type="text"
                  name="LastName"
                  placeholder="Last Name"
                />
                <input
                  className="input w-full md:w-1/2 h-[40px] bg-transparent text-[18px] py-[1px] px-[22.5px] border border-black rounded mb-4"
                  type="email"
                  name="Email"
                  placeholder="Email"
                />
                <input
                  className="input w-full md:w-1/2 h-[40px] bg-transparent text-[18px] py-[1px] px-[22.5px] border border-black rounded mb-4"
                  type="text"
                  name="PhoneNumber"
                  placeholder="Phone Number"
                />
                <textarea
                  className="textinput w-full h-[233px] bg-transparent text-[18px] py-5 px-[22px] border border-black rounded mb-4"
                  placeholder="Type message here"
                />
                <button className="submit-btn w-full h-[56px] bg-black text-white hover:bg-black hover:text-white border border-[#767676] font-semibold text-[18px] rounded">
                  Get quote
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
