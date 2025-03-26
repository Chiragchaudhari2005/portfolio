import React from "react";
import smp from "../assets/cpp logo.svg";
import fittrackb from "../assets/fittrack banner.png"
import clgbanner from "../assets/clg banner.jpeg"
import parklybanner from "../assets/parkly banner.jpg"

function ProjectsCard() {
  const projects = [
    {
      title: "FitTrack - Fitness Application",
      description:
        "Fitness Application that provides user with Exercise guidance, Water tracker, Diet tips and Fitness facts",
      image: fittrackb,
      link: "#",
    },
    {
      title: "SIOT - College Application",
      description:
        "An Application to simplify daily college chores like Attendance management, Supplying notes to students, Providing student information to students, and Library records",
      image: clgbanner,
      //link: "#",
    },
    {
      title: "Parkly - Parking Management System",
      description:
        "Website to manage Parking slot allocation and Financial management for the Parking administrator",
      image: parklybanner,
      // link: "#",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-[#2A313C] dark:border-gray-700 flex flex-col"
        >
          <a href={project.link}>
            <img className="rounded-t-lg w-full h-48 object-cover" src={project.image} alt={project.title} />
          </a>
          <div className="p-5 flex flex-col flex-grow">
            <a href={project.link}>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {project.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex-grow">
              {project.description}
            </p>
            <div className="mt-auto">
              <a
                href={project.link}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-secondary rounded-lg hover:bg-gradient-to-r hover:from-secondary hover:to-secondary2 hover:ring-2 hover:ring-offset-2 hover:ring-secondary2 transition-all ease-out duration-300"
              >
                Learn more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectsCard;
