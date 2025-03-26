import React from "react";
import PFP from "../../assets/PFP.png";

export const Home = () => {
    return(
        <div className="bg-primary">
        <section id="home" className="max-w-7xl h-screen mx-auto flex items-center justify-center relative">
            <div className="text-center z-10 px-4 ">
                <div>
                            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
                    
                                <div className="w-full md:w-[60%] text-center md:text-left">
                                    <h2 className="text-2xl md:text-4xl font-bold my-2 md:my-5 text-secondary ">Hi, my name is</h2>
                                    <h1 className="text-4xl md:text-6xl font-bold my-2 md:my-5 text-white transition-transform duration-300 hover:scale-101">Chirag Chaudhari</h1>
                                    <h3 className="text-2xl md:text-4xl font-bold my-2 md:my-5 text-gray-400">I build Apps for Mobile & Web.</h3>
                                    <p className="text-lg md:text-2xl my-2 md:py-2 text-justify text-gray-300">
                                    I’m a skilled and passionate engineering student specializing in Android app and web development. With a strong foundation in software development, I love building innovative and user-friendly solutions that make an impact. Constantly learning and improving, I strive to create efficient and high-quality digital experiences.
                                    </p>
                                    <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 mt-5 ml-1">
                                    <a 
                                        href="#contact" 
                                        className="relative rounded w-28 h-10 text-center flex items-center justify-center font-semibold overflow-hidden group bg-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-secondary2 text-white hover:ring-2 hover:ring-offset-2 hover:ring-secondary2 transition-all ease-out duration-300 cursor-pointer"
                                        >
                                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                        <span>CONTACT</span>
                                    </a>

                                        <div className="relative rounded w-28 h-10 text-center font-semibold overflow-hidden group bg-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-secondary2 text-white hover:ring-2 hover:ring-offset-2 hover:ring-secondary2 transition-all ease-out duration-300">
                                            <a
                                                href="/resume.pdf"
                                                download="Chirag Chaudhari Resume.pdf"
                                                className="w-full h-full flex items-center justify-center"
                                            >
                                                <span className="absolute right-0 w-8 h-32 mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                                <span>RESUME</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                
                                <div className="top-0 md:w-94 md:h-94 flex items-center justify-center">
                                    <img 
                                        src={PFP} 
                                        alt="Profile Picture" 
                                        className="object-cover rounded-full hover:scale-110 transition-transform duration-300 ease-in-out"
                                    />
                                </div>

                            </div>
                        </div>
            </div>
        </section>
        </div>
    );
}