// "use client";

import CityDetails from "@/components/CityDetails";

// import { useEffect, useState } from 'react';
// import { City } from '@/app/interfaces/city';
// import { log } from 'console';

// export default function CityPage({ params }: { params: { id: string } }) {
//   const [city, setCity] = useState<City | null>(null);

//   useEffect(() => {
//     async function fetchCity() {

//       const response = await fetch(`/api/cities/${params.id}`);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       setCity(data);
//     }

//     fetchCity().catch(error => {
//       console.error("Failed to fetch city data:", error);
//       // Optionally handle the error state here
//     });
//   }, [params.id]);

//   if (!city) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <h1>{city.name}</h1>
//       <p>{city.description}</p>
//       <h3>Attractions</h3>
//       <ul>
//         {city.attractions.map((attraction) => (
//           <li key={attraction.id}>
//             <h4>{attraction.name}</h4>
//             <p>{attraction.description}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// app/cities/[id]/page.tsx
// import CityDetails from '@/components/CityDetails';
// import { citiesData } from '@/data/cities'; // Suppose we have a static JSON or TS object with city data

// export default function CityDetailsPage({ params }: { params: { id: string } }) {
//   const cityId = params.id;
  
//   // Find the city data based on the id (for now, using static data)
//   const city = citiesData.find(city => city.id.toString() === cityId);
  
//   if (!city) {
//     return <p>City not found.</p>;
//   }

//   return <CityDetails city={city} />;
// }


// app/cities/[id]/page.tsx
export default function CityDetailsPage({ params }: { params: { id: string } }) {
  const cityId = parseInt(params.id); // Parse ID to number

  // Find the city data based on the id
  const city = citiesData.find(city => city.id === cityId);
  
  if (!city) {
    return <p>City not found.</p>;
  }

  return <CityDetails city={city} />;
}

const citiesData = [
  {
    id: 1,
    title: "Paris",
    shortDescription: "The capital city of France, known for its art, fashion, and culture.",
    description: "Paris is one of the most iconic cities in the world, boasting landmarks like the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral. It's a center for art, fashion, and history, attracting millions of visitors each year.",
    media: [
      { type: 'image' as 'image', url: '/images/paris1.jpg' }, // Change to "image"
      { type: 'image' as 'image', url: '/images/paris2.jpg' }, // Change to "image"
      { type: 'videos' as 'videos', url: '/videos/paris1.mp4' }  // Change to 'video'
    ],
    location: { lat: 48.8566, lng: 2.3522 },
    social: {
      facebook: "https://www.facebook.com/paris",
      twitter: "https://www.twitter.com/paris",
      instagram: "https://www.instagram.com/paris"
    }
  },
  {
    id: 2,
    title: "Tokyo",
    shortDescription: "A vibrant city blending the ultramodern and traditional cultures of Japan.",
    description: "Tokyo is the capital of Japan and one of the most populous metropolitan areas in the world. Known for its skyscrapers, neon-lit streets, and historic temples, Tokyo offers a unique fusion of old and new Japan.",
    media: [
      { type: 'image' as 'image', url: '/images/tokyo1.jpg' }, // Change to "image"
      { type: 'image' as 'image', url: '/images/tokyo2.jpg' }, // Change to "image"
      { type: 'videos' as 'videos', url: '/videos/tokyo1.mp4' }  // Change to 'video'
    ],
    location: { lat: 35.6895, lng: 139.6917 },
    social: {
      facebook: "https://www.facebook.com/tokyo",
      twitter: "https://www.twitter.com/tokyo",
      instagram: "https://www.instagram.com/tokyo"
    }
  },
  {
    id: 3,
    title: "New York City",
    shortDescription: "The city that never sleeps, offering a fast-paced urban experience.",
    description: "New York City, also known as the Big Apple, is the largest city in the United States. Famous for landmarks like Times Square, Central Park, and the Statue of Liberty, NYC is a hub of business, culture, and entertainment.",
    media: [
      { type: 'image' as 'image', url: '/images/nyc1.jpg' }, // Change to "image"
      { type: 'image' as 'image', url: '/images/nyc2.jpg' }, // Change to "image"
      { type: 'videos' as 'videos', url: '/videos/nyc1.mp4' }  // Change to 'video'
    ],
    location: { lat: 40.7128, lng: -74.0060 },
    social: {
      facebook: "https://www.facebook.com/newyorkcity",
      twitter: "https://www.twitter.com/newyorkcity",
      instagram: "https://www.instagram.com/newyorkcity"
    }
  }
];
