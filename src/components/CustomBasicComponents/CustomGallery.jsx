// import { useState } from 'react';
// import Image from 'next/image';

// const Gallery = ({ image, additionalImages }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState('');

//   const openModal = (image) => {
//     setSelectedImage(image);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedImage('');
//   };

//   return (
//     <div className="flex justify-center mt-4 mx-4">
//       <div className="max-w-5xl w-full">
//         <div className="flex">
//           <div className="w-2/3 pr-2">
//             <div className="h-96 relative"> {/* Main image section */}
//               <Image 
//                 src={image} 
//                 alt="City" 
//                 layout="fill" 
//                 className="rounded-lg object-cover cursor-pointer" 
//                 onClick={() => openModal(image)} // Open modal on click
//               />
//             </div>
//           </div>
//           <div className="w-1/3 flex flex-col space-y-2">
//             <div className="h-48 relative"> {/* First smaller image */}
//               <Image 
//                 src={image} 
//                 alt="City" 
//                 layout="fill" 
//                 className="rounded-lg object-cover cursor-pointer" 
//                 onClick={() => openModal(image)} // Open modal on click
//               />
//             </div>
//             <div className="h-48 relative"> {/* Second smaller image */}
//               <Image 
//                 src={image} 
//                 alt="City" 
//                 layout="fill" 
//                 className="rounded-lg object-cover cursor-pointer" 
//                 onClick={() => openModal(image)} // Open modal on click
//               />
//             </div>
//           </div>
//         </div>
        
//         {/* "See More" button */}
//         {/* <button
//           className="mt-4 bg-orange-500 text-white rounded px-4 py-2 hover:bg-orange-600 transition duration-300"
//           onClick={() => openModal(additionalImages[0])} // Open modal for additional images
//         >
//           Voir plus
//         </button> */}
//       </div>

//       {/* Modal for viewing larger images */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
//           <img
//             src={selectedImage}
//             alt="Selected City"
//             className="max-w-full max-h-full object-contain"
//           />
//           <button
//             className="absolute top-4 right-4 text-white text-2xl"
//             onClick={closeModal}
//           >
//             &times; {/* Close button */}
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Gallery;


import { useState } from 'react';
import Image from 'next/image';

const Gallery = ({ image, additionalImages }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage('');
  };

  return (
    <div className="flex justify-center mt-4 mx-4 py-3" style={{ backgroundColor: 'rgb(246 246 246)' }}>
      <div className="max-w-5xl w-full">
        <div className="flex">
          <div className="w-2/3 pr-2">
            <div className="h-[500px] relative"> {/* Increased height for main image */}
              <Image 
                src={image} 
                alt="City" 
                layout="fill" 
                className="rounded-lg object-cover cursor-pointer" 
                onClick={() => openModal(image)}
              />
            </div>
          </div>
          <div className="w-1/3 flex flex-col space-y-2">
            <div className="h-[245px] relative"> {/* Increased height for first smaller image */}
              <Image 
                src={additionalImages[0]} 
                alt="City" 
                layout="fill" 
                className="rounded-lg object-cover cursor-pointer" 
                onClick={() => openModal(additionalImages[0])}
              />
            </div>
            <div className="h-[245px] relative"> {/* Increased height for second smaller image */}
              <Image 
                src={additionalImages[1]} 
                alt="City" 
                layout="fill" 
                className="rounded-lg object-cover cursor-pointer" 
                onClick={() => openModal(additionalImages[1])}
              />
            </div>
          </div>
        </div>

        {/* "See More" button */}
        {/* <button
          className="mt-4 bg-orange-500 text-white rounded px-4 py-2 hover:bg-orange-600 transition duration-300"
          onClick={() => openModal(additionalImages[0])}
        >
          Voir plus
        </button> */}
      </div>

      {/* Modal for viewing larger images */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center" style={{zIndex:  9999}}>
          <img
            src={selectedImage}
            alt="Selected City"
            className="max-w-full max-h-full object-contain"
          />
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={closeModal}
            style={{'backgroundColor': 'transparent'}}
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
