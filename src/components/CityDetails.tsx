// import { useRouter } from 'next/router';
// import Image from 'next/image';  // To optimize images
// import React from 'react';
// import Header from './Header';

// const CityDetails = () => {
//   const router = useRouter();
//   const { id } = router.query;

//   // Fetch city data based on ID (in real app, this data can be fetched from an API)
//   const city = citiesData.find((city) => city.id === Number(id));

//   if (!city) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <main className="bg-gray-100 min-h-screen">
//       <Header /> {/* Assuming you already have a Header component */}

//       {/* City Title Section */}
//       <section className="bg-white py-8 px-4 md:px-10 shadow-md">
//         <div className="max-w-6xl mx-auto">
//           <h1 className="text-4xl font-bold">{city.title}</h1>
//           <p className="text-lg mt-2 text-gray-600">{city.shortDescription}</p>
//         </div>
//       </section>

//       {/* Image/Video Gallery */}
//       <section className="py-8 px-4 md:px-10">
//         <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {city.media.map((mediaItem, index) => (
//             mediaItem.type === 'image' ? (
//               <div key={index} className="relative w-full h-64">
//                 <Image
//                   src={mediaItem.url}
//                   alt={`City image ${index}`}
//                   fill
//                   className="object-cover rounded-lg"
//                 />
//               </div>
//             ) : (
//               <div key={index} className="relative w-full h-64">
//                 <video
//                   src={mediaItem.url}
//                   controls
//                   className="w-full h-full object-cover rounded-lg"
//                 />
//               </div>
//             )
//           ))}
//         </div>
//       </section>

//       {/* City Description Section */}
//       <section className="bg-white py-8 px-4 md:px-10 shadow-md mt-6">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-2xl font-bold mb-4">About {city.title}</h2>
//           <p className="text-lg text-gray-600">{city.description}</p>
//         </div>
//       </section>

//       {/* Map Section */}
//       <section className="py-8 px-4 md:px-10">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-2xl font-bold mb-4">Explore {city.title}</h2>
//           <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center">
//             {/* Placeholder for Map */}
//             <p className="text-gray-600">Map goes here</p>
//           </div>
//         </div>
//       </section>

//       {/* Social Media Links */}
//       <section className="bg-white py-8 px-4 md:px-10 shadow-md mt-6">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-2xl font-bold mb-4">Share {city.title}</h2>
//           <div className="flex space-x-4">
//             {/* Replace with actual icons */}
//             <a href={`https://facebook.com/share?url=${router.asPath}`} className="text-blue-600">
//               Facebook
//             </a>
//             <a href={`https://twitter.com/share?url=${router.asPath}`} className="text-blue-400">
//               Twitter
//             </a>
//             <a href={`https://instagram.com/share?url=${router.asPath}`} className="text-pink-500">
//               Instagram
//             </a>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default CityDetails;



// const citiesData = [
//   {
//     "id": 1,
//     "title": "Paris",
//     "shortDescription": "The capital city of France, known for its art, fashion, and culture.",
//     "description": "Paris is renowned for its rich history, iconic landmarks like the Eiffel Tower and Louvre Museum, and vibrant cultural scene. Whether you're exploring art galleries, dining in world-class restaurants, or walking along the Seine, Paris offers something for everyone.",
//     "media": [
//       { "type": "image", "url": "/images/paris1.jpg" },
//       { "type": "image", "url": "/images/paris2.jpg" },
//       { "type": "video", "url": "/videos/paris_tour.mp4" }
//     ],
//     "location": { "lat": 48.8566, "lng": 2.3522 },
//     "social": {
//       "facebook": "https://facebook.com/paris",
//       "twitter": "https://twitter.com/paris",
//       "instagram": "https://instagram.com/paris"
//     }
//   },
//   {
//     "id": 2,
//     "title": "Lyon",
//     "shortDescription": "A city in east-central France, known for its historical architecture.",
//     "description": "Lyon is famous for its beautiful Renaissance buildings, UNESCO World Heritage sites, and its rich gastronomy. Explore old town streets, visit the Basilica of Notre-Dame de Fourvière, and enjoy some of the best food France has to offer.",
//     "media": [
//       { "type": "image", "url": "/images/lyon1.jpg" },
//       { "type": "image", "url": "/images/lyon2.jpg" }
//     ],
//     "location": { "lat": 45.7640, "lng": 4.8357 },
//     "social": {
//       "facebook": "https://facebook.com/lyon",
//       "twitter": "https://twitter.com/lyon",
//       "instagram": "https://instagram.com/lyon"
//     }
//   }
// ];


"use client"

import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


type MediaItem = {
    type: 'image' | 'videos'; // Ensure this is a union of literal types
    url: string;
};

type CityData = {
    id: number;
    title: string;
    shortDescription: string; 
    description: string;
    media: MediaItem[]; // This should match the type of media in your citiesData
    location: {
        lat: number;
        lng: number;
    };
    social: {
        facebook: string;
        twitter: string;
        instagram: string;
    };
}

type CityDetailsProps = {
    city: CityData; // Update to match new structure
}
  
  const CityDetails: React.FC<CityDetailsProps> = ({ city }) => {
    return (
      <div className="min-h-screen">
        <header className="sticky top-0 z-20 bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <button className="text-blue-500" >
              ← Back
            </button>
            <h1 className="text-2xl font-semibold">{city.title}</h1>
          </div>
        </header>
  
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-4xl font-bold mb-6">{city.title}</h2>
  
          {/* Gallery (Images and Videos) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {city.media.map((item, index) => (
              <div key={index} className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                {item.type === 'image' ? (
                  <Image
                    src={item.url}
                    alt={`${city.title} Image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <video controls className="w-full h-full object-cover">
                    <source src={item.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            ))}
          </div>
  
          {/* City Description */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">About {city.title}</h3>
            <p>{city.description}</p>
          </div>
  
          {/* Social Media Links */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Share this City</h3>
            <div className="flex space-x-4">
              <a href={`https://www.facebook.com/}`} target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} className="text-blue-600" />
              </a>
              <a href={`https://www.twitter.com/`} target="_blank" rel="noopener noreferrer">
                <FaTwitter size={30} className="text-blue-400" />
              </a>
              <a href={`https://www.instagram.com`} target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} className="text-pink-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CityDetails;
  
