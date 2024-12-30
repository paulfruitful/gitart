import React from 'react';

const Hero = () => {
  return (
    <section className=" text-[#f1f1f1] py-16 px-6 h-[50vh] lg:h-[80vh] items-center grid text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-[#00d9d9]">
          Design Your GitHub Commit Art
        </h1>
        <p className="text-lg sm:text-xl mb-6 text-[#b0b0b0]">
          Give your Github Commits Beauty, a Pattern and a Style
        </p>
        <a href='#grid' className="bg-[#00d9d9] text-[#1e1e2f] font-semibold py-3 px-6 rounded-md flex items-center justify-center space-x-2 hover:bg-[#00b8b8] transition duration-300 self-center justify-self-center">
  <span>Start Styling</span>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path fillRule="evenodd" d="M20.599 1.5c-.376 0-.743.111-1.055.32l-5.08 3.385a18.747 18.747 0 0 0-3.471 2.987 10.04 10.04 0 0 1 4.815 4.815 18.748 18.748 0 0 0 2.987-3.472l3.386-5.079A1.902 1.902 0 0 0 20.599 1.5Zm-8.3 14.025a18.76 18.76 0 0 0 1.896-1.207 8.026 8.026 0 0 0-4.513-4.513A18.75 18.75 0 0 0 8.475 11.7l-.278.5a5.26 5.26 0 0 1 3.601 3.602l.502-.278ZM6.75 13.5A3.75 3.75 0 0 0 3 17.25a1.5 1.5 0 0 1-1.601 1.497.75.75 0 0 0-.7 1.123 5.25 5.25 0 0 0 9.8-2.62 3.75 3.75 0 0 0-3.75-3.75Z" clipRule="evenodd" />
  </svg>
</a>

      </div>
    </section>
  );
};

export default Hero;
