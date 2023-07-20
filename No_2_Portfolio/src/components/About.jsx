import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          🕸️ Hello, Everyone ✋ I’m Zihan
          <br />          
          🕸️ I’ve a great hold in Python 🐍, C++ & JavaScript
          <br />
          🕸️ Currently, I’m learning Data Structures & Algorithms and Full-Stack Development (React & Django)
          <br />
          🕸️ I’m in 9th Standard at a High School in Bangladesh 🇧🇩 
          <br />
          🕸️ I like reading books 📚as well
        </p>

        {/* <br />

        <p className="text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
          pariatur, vel similique sint, nobis aspernatur ut praesentium
          explicabo ipsam aliquid quasi laboriosam et culpa possimus repudiandae
          quisquam ullam maiores ab unde. Fugiat odio mollitia nemo alias.
          Commodi facilis atque nulla vero voluptatem explicabo. Quibusdam,
          magni quo! Eum cupiditate debitis labore.
        </p> */}
      </div>
    </div>
  );
};

export default About;