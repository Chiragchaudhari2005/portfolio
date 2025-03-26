import React from "react";
import ProjectsCard from "../ProjectsCard";

function Projects(){

    return(
        <section id="projects" className="bg-primary pt-10 px-5 w-full flex items-center justify-center"> 
            <div className="flex-col items-center justify-center">
                <h2 className="text-4xl text-center font-bold mb-8 text-secondary" >
                        Projects
                </h2>
            
                <div className="flex items-center justify-center">
                    
                    <ProjectsCard />

                </div>
            </div>
        </section>
    );
}

export default Projects;