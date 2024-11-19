"use client";

import {Righteous} from "next/font/google";
import {AnimatePresence} from "framer-motion";
import React from 'react';
import BackgroundImage from '@/components/BackgroundImage';
import Header from '@/components/Header';
import SlideInfo from '@/components/SlideInfo';
import Slides from '@/components/Slides';
import Controls from '@/components/Controls';
import { motion } from "framer-motion";
import ExperienceGrid from "@/components/ExperienceGrid";
import CityDisplay from "@/components/CityDisplay";
import PhotoGallery from "@/components/PhotoGallery";
import EventCalendar from "@/components/EventCalendar";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GalleryWithTab } from "@/components/ImageGallerie";

const inter = Righteous({
  subsets: ['latin'],
  weight: ["400"],
});

export type Data = {
  img : string;
  title: string;
  description: string;
  location: string;
};
const sliderData:Data[] = [
  {
    img: "/images/Oujda/3.jpg",
    location: "Oujda",
    description: "Une ville paisible dans la région orientale du Maroc, offrant des paysages pittoresques et des expériences marocaines authentiques.",
    title: "Découvrez Oujda",
  },
  {
    img: "/images/Barkane.png",
    location: "Berkane",
    description: "Une charmante ville située au nord-est du Maroc, proche de la côte méditerranéenne et riche en histoire.",
    title: "Explorez Berkane",
  },
  {
    img: "/images/Nador.JPG",
    location: "Nador",
    description: "Une ville côtière du nord-est du Maroc, offrant de belles plages et une culture locale vibrante.",
    title: "Visitez Nador",
  },
  {
    img: "/images/Taourirte.jpg",
    location: "Taourirt",
    description: "Une ville historique avec une kasbah célèbre, offrant un aperçu du mode de vie traditionnel marocain.",
    title: "Découvrez Taourirt",
  },
  {
    img: "/images/Tafoughalt.JPG",
    location: "Tafoughalt",
    description: "Nichée dans les montagnes de Beni Snassen, connue pour sa beauté naturelle et son climat rafraîchissant.",
    title: "Découvrez Tafoughalt",
  },
];

const initData = sliderData[0];

export type CurrentSliderData = {
  data : Data;
  index: number;
};

const Home: React.FC = () =>  {
  const [data, setData] = React.useState<Data[]>(sliderData.slice(1));
  const [transitionData, setTransitionData] = React.useState<Data>(sliderData[0]);
  const [currentSliderData, setCurrentSliderData] = React.useState<CurrentSliderData>({
    data: initData,
    index: 0,
  });

  return (
    
    <main className={`${inter.className} relative min-h-screen select-none overflow-hidden text-white antialiased`}>
      <section className="relative min-h-screen">
        <AnimatePresence>
          <BackgroundImage
                transitionData={transitionData}
                currentSlideData={currentSliderData}
          />
          <div className="absolute z-20 h-full w-full">
            <Header/>
            <div className="flex h-full w-full grid-cols-10 flex-col md:grid">

              <div className="col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
                  <SlideInfo transitionData={transitionData} currentSlideData={currentSliderData}/>
              </div>

              <div className="col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:mb-0 md:justify-center md:p-10">
                  <Slides data={data}/>
                  <Controls
                    currentSlideData={currentSliderData}
                    data={data}
                    transitionData={transitionData}
                    initData={initData}
                    handleData={setData}
                    handleTransitionData={setTransitionData}
                    handleCurrentSlideData={setCurrentSliderData}
                    sliderData={sliderData}
                  /> 
              </div>
            </div>
          </div>
        </AnimatePresence>
      </section>

      {/* Section with background video */}
      <section className="relative z-10 ">
        <div className="absolute inset-0 z-[-1] overflow-hidden">
          <video
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            id="background-video"
          >
            <source src="/videos/bgHeroSection_2.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
              <div className="absolute top-0 left-0 right-0 h-32 z-10 pointer-events-none">
                <div className="h-full bg-gradient-to-b from-black to-transparent"></div>
              </div>
          </div>

          <div className="relative flex items-center justify-center min-h-screen bg-opacity-50 text-center text-white">
            <div>
            <h2 className="text-5xl font-bold mb-4">Bienvenue dans l'Oriental</h2>
            <p className="text-lg"> Explorez les merveilles de la région de l'Oriental, où chaque destination raconte une histoire unique.</p>
            <h3 className="text-3xl font-semibold mt-6 mb-2">Parc Lalla Aicha</h3>
            <p className="text-lg">
                Situé à Oujda, au cœur de l'Oriental, le Parc Lalla Aicha est un véritable sanctuaire de verdure. À son entrée, une porte ornée de deux girafes majestueuses symbolise l’harmonie entre l’art et la nature. Cette œuvre unique invite les visiteurs à découvrir la beauté et la sérénité de cette région extraordinaire.
            </p>
          </div>
          
        </div>
      </section>
      
   
        <CityDisplay />
        {/* <ExperienceGrid/>
        <PhotoGallery/>
        <GalleryWithTab/> */}
        <EventCalendar/>
    </main>
  );
}

export default Home;


