"use client";
import React from 'react';
import CommitGrid from './CommitGrid'; 

const DesignContainer = () => {
  return (
    <div className="bg-black p-8 rounded-xl shadow-xl">
      {/* Title Section */}
    

      <div className=" justify-center shadow-xl rounded-md bg-gray-900 w-full p-3"> 
         <h1 className="text-4xl font-extrabold text-center text-[#00d9d9] mb-8 hover:text-[#00b8b8] transition-colors duration-300">
        Create A Commit Style
      </h1>
        <CommitGrid />
      </div>

      {/* Explanation Section */}
      <div className="bg-gray-900 p-6  shadow-md mb-2 flex justify-between">
        <span className="text-[#00d9d9] text-xl text-center self-center justify-self-center w-1/2">Click the squares to increase intensity</span>
        <ul className="list-inside text-lg text-[#d1d1d1] space-y-3">
          <li className="hover:text-[#4b8cbb] flex items-center transition-colors duration-300">
          <div className="bg-[#0e4429] w-5 h-5 mx-2 rounded-md cursor-pointer transition-all duration-300 "></div> : Represents a low level of commits for that day.
          </li>
          <li className="hover:text-[#6b7dff] flex items-center transition-colors duration-300">
          <div className="bg-[#006d32] w-5 h-5 mx-2 rounded-md cursor-pointer transition-all duration-300 "></div>: Represents a medium level of commits for that day.
          </li>
          <li className="hover:text-[#f59e42] flex items-center transition-colors duration-300">
          <div className="bg-[#26a641] w-5 h-5 mx-2 rounded-md cursor-pointer transition-all duration-300 "></div>:<span>Represents a high level of commits for that day.</span>
          </li>
          <li className="hover:text-[#ff3b3b] flex items-center transition-colors duration-300">
          <div className="bg-[#39d353] w-5 h-5 mx-2 rounded-md cursor-pointer transition-all duration-300 "></div>: <span> Represents a very high level of commits for that day.</span>
          </li>
          <li className="hover:text-[#2a2a3d] flex items-center transition-colors duration-300">
            
        <div className="bg-[#2a2a3d] w-5 h-5 mx-2 rounded-md cursor-pointer transition-all duration-300 "></div>: <span>Indicates no commits for that day.</span>
          </li>
        </ul>
      </div>

      {/* Commit Grid Section */}
     
    </div>
  );
};

export default DesignContainer;
