import { motion } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";
// import { AiOutlineAirplane } from "react-icons/ai";
import CustomBtn from '@/components/CustomBasicComponents/CustomBtn';
import "./CityDisplay.css";



  const cities = [
    {
      image: "/images/Oujda/3.jpg",
      name: "Oujda",
      description: "Une ville paisible dans la région orientale du Maroc, offrant des paysages pittoresques et des expériences marocaines authentiques.",
      topAttractions: ["Mosquée Al-Alawiyyin","Médina d'Oujda","Parc Lalla Aicha","Musée des Oudayas"],
      coordinates: { top: "20%", left: "45%" },
    },
    {
      image: "/images/Figuig/2.jpeg",
      name: "Figuig",
      description: "Une ville paisible dans la région orientale du Maroc, offrant des paysages pittoresques et des expériences marocaines authentiques.",
      topAttractions: ["Plage de Foum El Oued", "Musée de Laâyoune", "Mosquée Al Quds"],
      coordinates: { top: "46%", left: "88%" },
    },
    {
      image: "/images/Barkane.png",
      name: "Berkane",
      description: "Une charmante ville située au nord-est du Maroc, proche de la côte méditerranéenne et riche en histoire.",
      topAttractions: ["Mont Beni Snassen", "Parc National de la Moulouya", "Sidi Yahya"],
      coordinates: { top: "22%", left: "35%" },
    },
    {
      image: "/images/Nador.JPG",
      name: "Nador",
      description: "Une ville côtière du nord-est du Maroc, offrant de belles plages et une culture locale vibrante.",
      topAttractions: ["Lagune de Marchica", "Plage de Kariat Arkmane", "Parc Corniche"],
      coordinates: { top: "24%", left: "21%" },
    },
    {
      image: "/images/Taourirte.jpg",
      name: "Taourirt",
      description: "Une ville historique avec une kasbah célèbre, offrant un aperçu du mode de vie traditionnel marocain.",
      topAttractions: ["Kasbah de Taourirt", "Place Sidi Abdeljalil", "Souk traditionnel"],
      coordinates: { top: "31%", left: "34%" },
    },
    {
      image: "/images/Sadia/3.jpeg",
      name: "Saidia",
      description: "Saidia, surnommée la 'Perle Bleue', est une station balnéaire située à l'est du Maroc, réputée pour ses plages de sable fin, ses eaux cristallines et son climat méditerranéen agréable.",
      topAttractions: ["Plage de Saïdia", "Parc de la lagune de Saïdia", "Golf de Saïdia"],
      coordinates: { top: "17%", left: "33%" },
    },
    {
      image: "/images/Debdou.jpg",
      name: "Debdou",
      description: "Debdou est une petite ville située dans l'est du Maroc, connue pour son riche patrimoine historique, notamment son ancienne communauté juive et ses paysages pittoresques à proximité des montagnes et de la vallée de Figuig.",
      topAttractions: ["Ancien quartier juif", "Les montagnes du Rif", "La médina historique de Debdou"],
      coordinates: { top: "43%", left: "42%" }
    }
    
  ];
  

  

const CityDisplay = () => {
  const [selectedCity, setSelectedCity] = useState(cities[5]);

  return (
    <section className="flex bg-gray-100 p-8 space-x-8">
     
{/* Left Section - City Details */}
<div className="w-1/2 bg-white p-6 shadow-lg rounded-lg">
        {selectedCity ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold text-gray-800">{selectedCity.name}</h2>
            <img
              src={selectedCity.image}
              alt={selectedCity.name}
              className="w-full h-64 object-cover rounded-lg"
            />
            <p className="text-gray-600">{selectedCity.description}</p>
            <h3 className="text-xl font-semibold text-gray-700 mt-4">Principales attractions :</h3>
            <ul className="list-disc list-inside text-gray-600">
              {selectedCity.topAttractions.map((attraction, index) => (
                <li key={index}>{attraction}</li>
              ))}
            </ul>
            <Link href={`/city/${selectedCity.name.replace(/ /g, "-")}`}>
            <CustomBtn text="Voir plus de détails" />

            </Link>
          </motion.div>
        ) : (
          <div className="text-gray-500 text-lg">Sélectionnez une ville sur la carte pour voir les détails</div>
        )}
      </div>
      {/* Right Section - Map with Markers */}
      <div className="w-2/3 relative bg-gray-200 rounded-lg overflow-hidden shadow-lg">
        <img
          src="/images/maporiental.jpg"
          alt="Region Map"
          className="w-full h-full fill" // old value :object-cover instead of fill
        />
        {cities.map((city, index) => (
          <motion.div
            key={index}
            className="map-pin"
            style={{ top: city.coordinates.top, left: city.coordinates.left }}
            whileHover={{ scale: 1.2 }}
            onClick={() => setSelectedCity(city)}
            title={city.name}
          ></motion.div>
        ))}
      </div>
          {/* Right Section - Map with Pin Markers */}
          {/* <div className="w-1/2 relative">
        <div className="map-container relative overflow-hidden">
          <img
            src="/images/maporiental.jpg"
            alt="Carte de la région"
            className="w-full h-full object-cover"
          />
          {cities.map((city, index) => (
            <motion.div
              key={index}
              className="map-pin"
              style={{
                top: city.coordinates.top,
                left: city.coordinates.left,
              }}
              whileHover={{ scale: 1.2 }}
              onClick={() => setSelectedCity(city)}
              title={city.name}
            ></motion.div>
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default CityDisplay;
