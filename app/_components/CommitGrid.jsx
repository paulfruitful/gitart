"use client";
import React, { useState } from "react";
import html2canvas from "html2canvas";

const CommitGrid = () => {
  const [commitData, setCommitData] = useState(
    Array.from({ length: 7 }, (_, day) =>
      Array.from({ length: 52 }, (_, week) => {
        return 0; // Default to no commits
      })
    )
  );

  const [designData, setDesignData] = useState([]);

  const handleClick = (dayIndex, weekIndex) => {
    setCommitData((prev) => {
      const newCommitData = prev.map((row) => [...row]);
      const currentIntensity = newCommitData[dayIndex][weekIndex];
      const newIntensity = currentIntensity === 4 ? 0 : currentIntensity + 1;
      newCommitData[dayIndex][weekIndex] = newIntensity;

      const boxNumber = weekIndex * 7 + dayIndex + 1;
      const date = getDateFromDay(boxNumber);

      setDesignData((prevDesignData) => {
        const updatedData = prevDesignData.filter((data) => data.day !== date);
        if (newIntensity !== 0) {
          updatedData.push({ day: date, commit: newIntensity });
        }
        return updatedData;
      });

      return newCommitData;
    });
  };

  const getDateFromDay = (day) => {
    const now = new Date();
    const startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + day - 1);
    return date.toISOString().split("T")[0];
  };

  const getColor = (commitIntensity) => {
    switch (commitIntensity) {
      case 1: return "#0e4429";
      case 2: return "#006d32";
      case 3: return "#26a641";
      case 4: return "#39d353";
      default: return "#334155";
    }
  };

  const saveAsImage = () => {
    const calendarGrid = document.getElementById("calendar");
    html2canvas(calendarGrid).then((canvas) => {
      const link = document.createElement("a");
      link.download = "developer-calendar.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  };

  const exportToGoogleCalendar = () => {
    const baseURL = "https://calendar.google.com/calendar/render?action=TEMPLATE";
    designData.forEach(({ day, commit }) => {
      const eventStart = `${day}T09:00:00`;
      const eventEnd = `${day}T10:00:00`;
      const title = `Development Commit Intensity: ${commit}`;

      const calendarLink = `${baseURL}&text=${encodeURIComponent(
        title
      )}&dates=${eventStart.replace(/-/g, "")}/${eventEnd.replace(/-/g, "")}`;

      window.open(calendarLink, "_blank");
    });
  };

  const getDisplayDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const suffix = ['th', 'st', 'nd', 'rd'][(day % 10) > 3 ? 0 : (day % 100 - day % 10 !== 10) * (day % 10)] || 'th';
    return ` ${date.toLocaleString('en-US', { month: 'long', day: 'numeric' })}${suffix}`;
  };

  const renderCalendar = () => {
    const sortedDesignData = [...designData].sort((a, b) => new Date(a.day) - new Date(b.day));
  
    return (
      <div id="calendar" className="grid grid-cols-7 gap-2 mt-4">
        {sortedDesignData.map(({ day, commit }, index) => (
          <div
            key={index}
            className={`p-2 ${commit === 0 ? 'hidden' : ''} rounded-md text-white`}
            style={{
              backgroundColor: getColor(commit),
              textAlign: "center",
            }}
          >
            <span className="block text-xs">Day: {getDisplayDate(day)}</span>
            <span className="block text-sm">Commit: {commit}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="text-white">
      <div
        id="grid"
        className="grid gap-0.5 w-full"
        style={{
          gridTemplateColumns: "repeat(52, 1fr)",
          gridTemplateRows: "repeat(7, 1fr)",
        }}
      >
        {commitData.map((row, dayIndex) =>
          row.map((cell, weekIndex) => (
            <div
              key={`${dayIndex}-${weekIndex}`}
              className="w-5 h-5 rounded-md cursor-pointer"
              style={{ backgroundColor: getColor(cell) }}
              onClick={() => handleClick(dayIndex, weekIndex)}
            ></div>
          ))
        )}
      </div>

      <h2 className="mt-6 text-lg font-bold">Developer Calendar</h2>
      {designData.length > 0 ? renderCalendar() : <p>No data selected yet.</p>}
      <div className="mt-4">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md mr-4"
          onClick={saveAsImage}
        >
          Save as Image
        </button>
        <button
          className="px-4 py-2 bg-green-600 text-white rounded-md"
          onClick={exportToGoogleCalendar}
        >
          Export to Google Calendar
        </button>
      </div>
    </div>
  );
};

export default CommitGrid;
