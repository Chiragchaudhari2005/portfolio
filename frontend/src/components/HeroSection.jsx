import React from "react";
import PFP from "../assets/PFP.png";

function HeroSection() {
    return (
        <div className="max-w-7xl py-10 md:px-20 md:py-15">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
                {/* Left Side - Text Content */}
                <div className="w-full md:w-[60%] text-center md:text-left">
                    <h2 className="text-2xl md:text-4xl font-bold my-2 md:my-4 text-secondary ">Hi, my name is</h2>
                    <h1 className="text-4xl md:text-6xl font-bold my-2 md:my-4 text-white transition-transform duration-300 hover:scale-101">Chirag Chaudhari</h1>
                    <h3 className="text-2xl md:text-4xl font-bold my-2 md:my-4 text-gray-400">I build Apps for Mobile & Web.</h3>
                    <p className="text-lg md:text-2xl my-2 md:py-2 text-gray-300">
                    I’m a skilled and passionate engineering student specializing in Android app and web development. With a strong foundation in software development, I love building innovative and user-friendly solutions that make an impact. Constantly learning and improving, I strive to create efficient and high-quality digital experiences.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 mt-4">
                        <button className="relative rounded w-28 px-6 py-2.5 text-center items-center font-semibold overflow-hidden group bg-secondary relative hover:bg-gradient-to-r hover:from-secondary hover:to-secondary2 text-white hover:ring-2 hover:ring-offset-2 hover:ring-secondary2 transition-all ease-out duration-300">
                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                            <span>CONTACT</span>
                        </button>
                        <button className="relative rounded w-28 px-6 py-2.5 text-center items-center font-semibold overflow-hidden group bg-secondary relative hover:bg-gradient-to-r hover:from-secondary hover:to-secondary2 text-white hover:ring-2 hover:ring-offset-2 hover:ring-secondary2 transition-all ease-out duration-300">
                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                            <span>RESUME</span>
                        </button>
                    </div>
                </div>

                {/* Right Side - Profile Image */}
                <div className="md:w-94 md:h-94 flex items-center justify-center">
                    <img src={PFP} alt="Profile Picture" className=" object-cover rounded-full" />
                </div>
            </div>
            <hr className="my-34 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
        </div>
    );
}

export default HeroSection;
