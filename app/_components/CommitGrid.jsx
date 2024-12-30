"use client";
import React, { useState } from 'react';

const CommitGrid = () => {
  const [commitData, setCommitData] = useState(Array(52 * 7).fill(0)); // 52 columns, 7 rows
  const [designData,setDesignData]=useState([])

  const handleClick = (index) => {
    setCommitData((prev) => {
      const newCommitData = [...prev];
      newCommitData[index] = newCommitData[index] === 4 ? 0 : newCommitData[index] + 1; 
      return newCommitData;
    });
  
    setDesignData((prevDesignData) => [
      ...prevDesignData,
      { day: index + 1, commit: commitData[index] } 
    ]);
  };
  

  // Color mapping based on commit intensity
  const getColor = (commitIntensity) => {
    switch (commitIntensity) {
      case 1: return '#0e4429'; // Low Commit Intensity (Radiant Light Blue)
      case 2: return '#006d32'; // Medium Commit Intensity (Vivid Purple)
      case 3: return '#26a641'; // High Commit Intensity (Radiant Amber)
      case 4: return '#39d353'; // Very High Commit Intensity (Bright Crimson)
      default: return '#334155'; // Default (no commit) (Very Dark Blue)
    }
  };

  return (
    <div
      id="grid"
      className="grid gap-0.5 w-full"
      style={{
        gridTemplateColumns: 'repeat(52, 1fr)',  // 52 columns
        gridTemplateRows: 'repeat(7, 1fr)',    // 7 rows
      }}
    >
      {commitData.map((commitIntensity, index) => (
        <div
          key={index}
          className="w-5 h-5 rounded-md cursor-pointer transition-all duration-300"
          style={{ backgroundColor: getColor(commitIntensity) }}
          onClick={() => handleClick(index)}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#3c75a4')} // Hover effect
          onMouseLeave={(e) => (e.target.style.backgroundColor = getColor(commitIntensity))} // Reset on mouse leave
        />
      ))}
    </div>
  );
};

export default CommitGrid;
