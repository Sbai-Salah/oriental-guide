
// import React, { useState } from "react";
// import Masonry from "react-masonry-css";
// import ReactPlayer from 'react-player';



// const photoData = [
//   {
//     videoUrl: "/videos/bgHeroSection.mp4",
//     title: "Barkane",
//     description: "Explorez les paysages charmants et la culture vibrante de Barkane, un véritable trésor de la région.",
//   },
//   {
//     videoUrl: "/videos/bgHeroSection.mp4",
//     title: "Nador",
//     description: "Découvrez la belle côte et les marchés animés de Nador, où tradition et modernité se rencontrent.",
//   },
//   {
//     videoUrl: "/videos/bgHeroSection.mp4",
//     title: "Tafoughalt",
//     description: "Vivez la sérénité de Tafoughalt, connue pour ses vues pittoresques et son atmosphère tranquille.",
//   },
//   {
//     videoUrl: "/videos/bgHeroSection.mp4",
//     title: "Laayoune",
//     description: "Imprégnez-vous de l'histoire et de la culture riches de Laayoune, une ville au caractère unique.",
//   },
//   {
//     videoUrl: "/videos/bgHeroSection.mp4",
//     title: "Taourirte",
//     description: "Explorez la charmante ville de Taourirte, célèbre pour ses paysages pittoresques et ses habitants accueillants.",
//   },
//   {
//     videoUrl: "/videos/bgHeroSection.mp4",
//     title: "Oujda",
//     description: "Visitez Oujda, une ville riche en histoire et en culture, avec de beaux parcs et une vie de rue animée.",
//   },
//   // Ajoutez d'autres lieux si nécessaire
// ];

// const PhotoGallery = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [currentVideoUrl, setCurrentVideoUrl] = useState("");
  
//     const openModal = (videoUrl: string) => {
//       setCurrentVideoUrl(videoUrl);
//       setIsModalOpen(true);
//     };
  
//     const closeModal = () => {
//       setIsModalOpen(false);
//       setCurrentVideoUrl("/videos/bgHeroSection.mp4");
//     };
  
//     const breakpointColumnsObj = {
//       default: 2,
//       1100: 1, // Adjust for responsiveness
//     };
  
//     return (
//       <div className="container mx-auto px-4 py-10">
//         {/* Masonry Grid */}
//         <Masonry
//           breakpointCols={breakpointColumnsObj}
//           className="flex gap-4"
//           columnClassName="masonry-grid-column"
//         >
//           {photoData.map((item, index) => (
//             <div key={index} className="flex flex-col md:flex-row bg-gray-900 p-5 mb-6 rounded-lg shadow-lg">
//               {/* Left side: Video (Click to open modal) */}
//               <div className="md:w-1/2 w-full cursor-pointer" onClick={() => openModal(item.videoUrl)}>
//                 <ReactPlayer
//                   url={item.videoUrl}
//                   playing={false}
//                   controls={true}
//                   width="100%"
//                   height="100%"
//                 />
//               </div>
  
//               {/* Right side: Description */}
//               <div className="md:w-1/2 w-full flex flex-col justify-center text-white p-6">
//                 <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
//                 <p className="text-lg">{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </Masonry>
  
//      {/* Custom Modal for fullscreen video */}
//      {isModalOpen && (
//         <div style={styles.modalOverlay} onClick={closeModal}>
//           <div style={styles.modalContent}>
//             <button onClick={closeModal} style={styles.closeButton}>
//               &times;
//             </button>
//             <ReactPlayer url={currentVideoUrl} playing={true} controls={true} width="100%" height="100%" />
//           </div>
//         </div>
//       )}
//       </div>
//     );
//   };
  

// // Inline styles for the custom modal and video cards
// const styles: { [key: string]: React.CSSProperties } = {
//     modalOverlay: {
//       position: "fixed",
//       top: 0,
//       left: 0,
//       width: "100vw",
//       height: "100vh",
//       backgroundColor: "rgba(0, 0, 0, 0.85)",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       zIndex: 1000,
//     },
//     modalContent: {
//       position: "relative",
//       width: "80%",
//       height: "80%",
//       backgroundColor: "#000",
//       borderRadius: "10px",
//       overflow: "hidden",
//     },
//     closeButton: {
//       position: "absolute",
//       top: "15px",
//       right: "20px",
//       fontSize: "2rem",
//       color: "white",
//       background: "none",
//       border: "none",
//       cursor: "pointer",
//     },
//     videoCard: {
//       backgroundColor: "#1a202c",
//       padding: "20px",
//       marginBottom: "20px",
//       borderRadius: "10px",
//       boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//       display: "flex",
//       flexDirection: "row",
//     },
//     description: {
//       paddingLeft: "20px",
//       color: "white",
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//     },
//     videoPlayerWrapper: {
//       width: "50%",
//       cursor: "pointer",
//     },
//   };
  
  
//   export default PhotoGallery;
  

import React, { useState } from "react";
import Masonry from "react-masonry-css";
import ReactPlayer from "react-player";
import  Link from "next/link"; // Ensure you have react-router-dom installed

const photoData = [
  {
    id: "barkane",
    videoUrl: "/videos/bgHeroSection.mp4",
    title: "Barkane",
    description: "Explorez les paysages charmants et la culture vibrante de Barkane, un véritable trésor de la région.",
  },
  {
    id: "nador",
    videoUrl: "/videos/bgHeroSection.mp4",
    title: "Nador",
    description: "Découvrez la belle côte et les marchés animés de Nador, où tradition et modernité se rencontrent.",
  },
  {
    id: "tafoughalt",
    videoUrl: "/videos/bgHeroSection.mp4",
    title: "Tafoughalt",
    description: "Vivez la sérénité de Tafoughalt, connue pour ses vues pittoresques et son atmosphère tranquille.",
  },
  {
    id: "laayoune",
    videoUrl: "/videos/bgHeroSection.mp4",
    title: "Laayoune",
    description: "Imprégnez-vous de l'histoire et de la culture riches de Laayoune, une ville au caractère unique.",
  },
  {
    id: "taourirte",
    videoUrl: "/videos/bgHeroSection.mp4",
    title: "Taourirte",
    description: "Explorez la charmante ville de Taourirte, célèbre pour ses paysages pittoresques et ses habitants accueillants.",
  },
  {
    id: "oujda",
    videoUrl: "/videos/bgHeroSection.mp4",
    title: "Oujda",
    description: "Visitez Oujda, une ville riche en histoire et en culture, avec de beaux parcs et une vie de rue animée.",
  },
  // Ajoutez d'autres lieux si nécessaire
];

const PhotoGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");

  const openModal = (videoUrl: React.SetStateAction<string>) => {
    setCurrentVideoUrl(videoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideoUrl("");
  };

  const breakpointColumnsObj = {
    default: 2,
    1100: 1, // Adjust for responsiveness
  };

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Masonry Grid */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-4"
        columnClassName="masonry-grid-column"
      >
        {photoData.map((item) => (
          <div key={item.id} className="relative group bg-gray-900 rounded-lg shadow-lg overflow-hidden mb-6 transition-transform transform hover:scale-105">
            {/* Card Content */}
            <div
              className="cursor-pointer"
              onClick={() => openModal(item.videoUrl)}
            >
              <ReactPlayer
                url={item.videoUrl}
                playing={false}
                controls={true}
                width="100%"
                height="200px"
                className="transition-opacity duration-300 ease-in-out group-hover:opacity-50"
              />
            </div>

            {/* Overlay for description */}
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-lg text-gray-300 mb-4">{item.description}</p>
              <Link href={`/cities/${item.id}`}>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                  En savoir plus
                </button>
              </Link>
            </div>
          </div>
        ))}
      </Masonry>

      {/* Custom Modal for fullscreen video */}
      {isModalOpen && (
        <div style={styles.modalOverlay} onClick={closeModal}>
          <div style={styles.modalContent}>
            <button onClick={closeModal} style={styles.closeButton}>
              &times;
            </button>
            <ReactPlayer
              url={currentVideoUrl}
              playing={true}
              controls={true}
              width="100%"
              height="100%"
            />
          </div>
        </div>
      )}
    </div>
  );
};

// Inline styles for the custom modal
const styles: { [key: string]: React.CSSProperties } = {
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalContent: {
    position: "relative",
    width: "80%",
    height: "80%",
    backgroundColor: "#000",
    borderRadius: "10px",
    overflow: "hidden",
  },
  closeButton: {
    position: "absolute",
    top: "15px",
    right: "20px",
    fontSize: "2rem",
    color: "white",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
};

export default PhotoGallery;
