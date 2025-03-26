import React, { useEffect, useRef } from "react";
import reactlogo from "../assets/reactlogo.png"; 
import tailwindlogo from "../assets/tailwindlogo.svg";
import cpplogo from "../assets/cpp logo.svg";
import pythonlogo from "../assets/pythonlogo.svg";
import javascriptlogo from "../assets/javascriptlogo.svg";
import javalogo from "../assets/javalogo.svg";
import '../index.css';

function SkillsCard() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    let scrollAmount = 0;
    let scrollSpeed = 1; // Adjust the speed here
    let direction = 1; // 1 for right, -1 for left

    const scroll = () => {
      if (scrollContainer) {
        scrollAmount += scrollSpeed * direction;
        scrollContainer.scrollLeft = scrollAmount;

        // Reverse scroll direction when reaching the end
        if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          direction = -1;
        } else if (scrollAmount <= 0) {
          direction = 1;
        }
      }
    };

    const interval = setInterval(scroll, 30); // Adjust interval for speed

    return () => clearInterval(interval);
  }, []);

  const cards = [
    {
      image: cpplogo,
      title: "C++",
      description: "A JavaScript library for building UI.",
    },
    {
      image: javalogo,
      title: "Java",
      description: "Android development with Java.",
    },
    {
      image: pythonlogo,
      title: "Python",
      description: "A JavaScript library for building UI.",
    },
    {
      image: javascriptlogo,
      title: "Javascript",
      description: "A JavaScript library for building UI.",
    },
    {
      image: reactlogo,
      title: "React",
      description: "A JavaScript library for building UI.",
    },
    {
      image: tailwindlogo,
      title: "Tailwind CSS",
      description: "CSS framework for styling.",
    },
  ];

  return (
    <div className="flex flex-col justify-center m-auto p-auto max-w-7xl pb-10 mt-10">
      <div
        ref={scrollRef}
        className="lg:ml-20 mr-20 md:ml-20 ml-10 pb-5 overflow-hidden whitespace-nowrap relative"
      >
        <div className="flex">
          {cards.map((card, index) => (
            <div key={index} className="inline-block px-2">
              <div className="w-64 h-32 max-w-xs overflow-hidden rounded-lg shadow-md bg-primary hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-[#2A313C] bg-clip-border text-gray-700 shadow-md">
                  <div className="relative m-0 h-32 w-32 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-[#2A313C] bg-clip-border text-gray-700">
                    <img
                      src={card.image}
                      alt={`image-${index}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h6 className="mb-2 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-white antialiased">
                      {card.title}
                    </h6>
                    <p className="text-sm text-gray-400">{card.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Duplicate cards for smooth looping effect */}
          {cards.map((card, index) => (
            <div key={index + cards.length} className="inline-block px-2">
              <div className="w-64 h-32 max-w-xs overflow-hidden rounded-lg shadow-md bg-primary hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-[#2A313C] bg-clip-border text-gray-700 shadow-md">
                  <div className="relative m-0 h-32 w-32 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-[#2A313C] bg-clip-border text-gray-700">
                    <img
                      src={card.image}
                      alt={`image-${index + cards.length}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h6 className="mb-2 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-white antialiased">
                      {card.title}
                    </h6>
                    <p className="text-sm text-gray-400">{card.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsCard;
