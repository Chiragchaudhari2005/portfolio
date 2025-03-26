import React from "react";
import Table from "../Table";
import SkillsCard from "../SkillsCard";
import TimeLine from "../TimeLine";

function AboutMe() {
    return (
        <section id="about" className="bg-primary pt-5 px-5 w-full flex items-center justify-center">
            <div className="text-left max-w-7xl">
                <h2 className="text-4xl text-center font-bold mb-8 text-secondary" >
                    About Me
                </h2>
                <p className="text-3xl text-white font-semibold mt-4 mb-4 ml-2">My Story</p>
                <p className="text-2xl mb-2 ml-5 mr-5 text-grey text-justify">
                    I developed a passion for programming in my 10th and chose to do a diploma to develop skills, and became a dedicated Computer Science student. Now pursuing a B.Tech, striving to create real-world solutions through technology.                </p>
                <p className="text-3xl text-white font-semibold mt-8 mb-4 ml-2">Education</p>
                
                <TimeLine />
                <p className="text-3xl text-white font-semibold mt-8 mb-4 ml-2">Skills</p>
                <SkillsCard />
                
            </div>
            <hr class="my-12 h-px mt-30 border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />

        </section>
    );
}

export default AboutMe;




