// src/app/city/[cityName]/page.jsx
"use client"; 

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Gallery from '@/components/CustomBasicComponents/CustomGallery';
import HistoryTimeline from '@/components/CustomBasicComponents/HistoryTimeline';
import ImperialCitiesSwiper from '@/components/CustomBasicComponents/Swiper';
import styled from 'styled-components';
import LoadingPage from '@/components/Loader';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet styles
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { additionalImages } from './additionalImages';

// Fix for missing marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet/dist/images/marker-shadow.png',
});

const CityDetails = () => {
  const pathname = usePathname(); // Get the current pathname
  const [city, setCity] = useState(null);
  const cityName = pathname.split('/').pop(); // Extract city name from pathname
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the city details from the static API
    const fetchCityDetails = async () => {
      const res = await fetch(`/api/cities/${cityName}`);
      const data = await res.json();
      if (res.ok) {
        setCity(data);
      } else {
        console.error(data.message);
      }
    };
    fetchCityDetails();
      // Set the loader to be shown for 5 seconds
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000);
  
      // Cleanup the timer on component unmount or city change
      return () => clearTimeout(timer);
  }, [cityName]);

  if (loading || !city) {
    return <LoadingPage/>; // Handle loading state
  }
  // Safely access additionalImages and provide a fallback
  const additionalImagesForCity = additionalImages[cityName] || [];


  return (
    <div>
        <div className="bg-black-600 h-20 flex items-center justify-center">
            <Header />
        </div>
      <Gallery image={city.image} additionalImages={additionalImagesForCity} />
      <div className="container mx-auto p-4 flex mt-8">
        <div className="pr-4 w-full" style={{ width: '100%' }}>
          <Section title="Description">
            <div className='flex' >
              <div className="w-2/3"> 
                  <p>{city.description}</p>
                  <p>{city.culture}</p>
              </div>
              <div className="w-1/3 pl-4">
                  <MapPreview mapCoordinates={city.mapCoordinates} cityName={city.name}/>
              </div>
            </div>
          </Section>

          <Section isEven>
            <HistoryTimeline history={city.history} cityName={city.name} />
          </Section>

           <Section>
              <ImperialCitiesSwiper SliderData={city.swiperData}/>
           </Section>

          {/* <Section title="Most Famous Food">
            <p>Insert details about famous dishes from {city.name} here.</p>
          </Section> */}
        </div>
      </div>
    </div>
  );
};


// Section Component
const GraySection = styled.section`
${props => props.isEven && `
  background-color: rgb(246, 246, 246);
`}
`;
const Section = ({ title, children, className = '', isEven}) => {
  return (
    <GraySection isEven={isEven}>
      <div className={`mb-6 ${className}`}>
        {title && <h2 className="text-xl font-bold mb-2">{title}</h2>}
        {children}
      </div>
    </GraySection>
  );
};

// Map Preview Component
const MapPreview = ({ mapCoordinates, cityName}) => {  
  const center = [35.1761, -2.9333];
  return (
    <MapContainer
      center={mapCoordinates || center}
      zoom={12} // Adjust zoom level as needed
      style={{ width: '100%', height: '400px' }}
      className="w-full h-64 rounded-lg"
      zIndex={0}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={mapCoordinates || center}>
        <Popup>
          {cityName}, Maroc
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default CityDetails;
