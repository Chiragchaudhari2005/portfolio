import React from "react";

function Contact() {
  return (
    <section id="contact" className="py-24 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-center">
          <div className="flex items-center lg:mb-0 mb-10">
            <div>
                <h2 className="text-4xl text-center font-bold mb-8 text-secondary" >
                    Contact Me
                </h2>
              <form className="pt-10">
                <input
                  type="text"
                  className="w-full h-14 shadow-sm text-white placeholder-text-400 text-lg font-normal leading-7 rounded-xl border border-gray-200 focus:outline-none py-2 px-4 mb-8"
                  placeholder="Name"
                />
                <input
                  type="email"
                  className="w-full h-14 shadow-sm text-white placeholder-text-400 text-lg font-normal leading-7 rounded-xl border border-gray-200 focus:outline-none py-2 px-4 mb-8"
                  placeholder="Email"
                />
                <textarea
                  id="text"
                  className="w-full h-48 shadow-sm resize-none text-white placeholder-text-400 text-lg font-normal leading-7 rounded-2xl border border-gray-200 focus:outline-none px-4 py-4 mb-8"
                  placeholder="Message"
                ></textarea>
                <button className="relative rounded-xl w-full h-10  text-center items-center justify-center font-semibold overflow-hidden group bg-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-secondary2 text-white hover:ring-2 hover:ring-offset-2 hover:ring-secondary2 transition-all ease-out duration-300">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>  
  );
}

export default Contact;
