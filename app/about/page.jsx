"use client"
import React, { useState, useEffect } from "react";

const Section = ({ title, content, index }) => {
  return (
    <div
      id={`section-${index}`}
      className="section mb-12 pb-12 bg-black p-6 rounded-lg"
    >
      <h2 className="text-3xl font-semibold mb-4 text-[#00d9d9] transform hover:scale-105 transition-all duration-300 ease-in-out">
        {title}
      </h2>
      <p
        dangerouslySetInnerHTML={{ __html: content }}
        className="text-lg sm:text-xl mb-4 text-white"
      />
    </div>
  );
};

const About = () => {
  const sections = [
    {
      title: "What GitArt is About",
      content:
        "<p>GitArt was made to help developers bring style to their GitHub contributions. It allows you to transform your GitHub commits into visually appealing designs and add a personalized touch to your contributions. Whether you're looking to impress potential employers or simply make your GitHub activity more fun, GitArt is the tool for you!</p>",
    },
    {
      title: "How to Use GitArt",
      content:
        "<p>Styling your contributions is easy! Simply click the buttons to create unique styles for your contributions. Once you’re happy with your design, you can export it as an image or as an ICS file. The ICS file can be imported into your Google Calendar so you can follow up and track your commits with style.</p>",
    },
    {
      title: "About the Maker",
      content:
        "<p>GitArt was created by <a className='text-indigo-300' href='https://paulfruiful.com'><b>Paul Fruitful</b></a>, a software engineer passionate about making coding more enjoyable and visually engaging. When not coding, you can find Paul exploring new ideas and contributing to various open-source initiatives.</p>",
    },
  ];

  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const sectionsInView = [];
      const scrollPosition = window.scrollY + window.innerHeight;

      sections.forEach((section, index) => {
        const sectionElement = document.getElementById(`section-${index}`);
        const sectionTop = sectionElement.offsetTop;
        const sectionBottom = sectionTop + sectionElement.offsetHeight;

        if (scrollPosition > sectionTop && scrollPosition < sectionBottom) {
          sectionsInView.push(index);
        }
      });

      setVisibleSections(sectionsInView);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-[#f1f1f1] via-[#e3e3e3] to-[#d0d0d0] text-[#333]">
      <div className="max-w-4xl mx-auto text-center">
        {sections.map((section, index) => (
          <Section
            key={index}
            title={section.title}
            content={section.content}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default About;
