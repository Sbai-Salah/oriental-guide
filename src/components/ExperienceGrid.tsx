import { motion } from "framer-motion";
import React from "react";

const experiences = [
  {
    img: "images/1.png",
    title: "Museum Tours",
    description: "Explore the rich cultural heritage of our region.",
  },
  {
    img: "images/2.png",
    title: "Food Tours",
    description: "Taste the local delicacies from various cities.",
  },
  {
    img: "images/3.png",
    title: "Hiking Adventures",
    description: "Experience the breathtaking natural landscapes.",
  },
];

const ExperienceGrid = () => {
  return (
    // <section className="p-10 bg-gray-900">
    //   <h2 className="text-4xl font-bold text-center text-white mb-8">
    //     Local Experiences
    //   </h2>
    //   <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    //     {experiences.map((experience, index) => (
    //       <motion.div
    //         key={index}
    //         className="relative w-full h-80 bg-white overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
    //         whileHover={{ rotateY: 180 }}
    //         style={{ perspective: 1000 }}
    //       >
    //         <div className="absolute w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${experience.img})` }}></div>
    //         <div className="absolute w-full h-full bg-gray-800 bg-opacity-75 text-white p-5 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
    //           <h3 className="text-2xl font-bold mb-2">{experience.title}</h3>
    //           <p>{experience.description}</p>
    //         </div>
    //       </motion.div>
    //     ))}
    //   </div>
    // </section>
    <section className="p-10 bg-gray-900">
    <h2 className="text-4xl font-bold text-center text-white mb-8">
      Local Experiences
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {experiences.map((experience, index) => (
        <motion.div
          key={index}
          className="relative w-full h-80 bg-white overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
        >
          <motion.div
            className="absolute w-full h-full bg-cover bg-center transition-transform duration-500"
            style={{ backgroundImage: `url(${experience.img})` }}
            whileHover={{ scale: 1.1 }}
          ></motion.div>
          <div className="absolute w-full h-full bg-gray-800 bg-opacity-75 text-white p-5 flex flex-col justify-center items-center opacity-100 transition-opacity duration-300">
            <h3 className="text-2xl font-bold mb-2">{experience.title}</h3>
            <p className="text-center">{experience.description}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              onClick={() => alert(`Redirect to /city/${experience.title.replace(/\s+/g, '-').toLowerCase()}`)}
            >
              See Details
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
  );
};

export default ExperienceGrid;
