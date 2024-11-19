'use client'

import React from 'react'
import Image from 'next/image'
import { Card } from "@/components/CustomBasicComponents/Card"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const slides = [
  {
    id: 1,
    title: "Imperial city of Fez",
    question: "What makes Fez unique?",
    description: "Fez, founded in 789 AD, is known for its walled medina, Fes el Bali, with medieval Marinid architecture, vibrant souks, and the oldest university in the world, the University of Al Quaraouiyine.",
    image: "/images/Ayoun.jpg?height=800&width=1200"
  },
  {
    id: 2,
    title: "Imperial city of Marrakech",
    question: "Why is Marrakech called the Red City?",
    description: "Marrakech, founded in 1062 AD, is called the 'Red City' due to its buildings and ramparts of beaten clay, which have been baked rose red by the sun. It's famous for its bustling Djemaa el-Fna square and vibrant souks.",
    image: "/images/Ayoun.jpg?height=800&width=1200"
  },
  {
    id: 3,
    title: "Imperial city of Meknes",
    question: "What is Meknes known for?",
    description: "Meknes, founded in the 11th century, is known as the 'Versailles of Morocco' due to its impressive buildings and monuments. It's famous for its monumental Bab el-Mansour gate and the Dar el-Makhzen palace.",
    image: "/images/Ayoun.jpg?height=800&width=1200"
  },
  {
    id: 4,
    title: "Imperial city of Rabat",
    question: "What's special about Rabat?",
    description: "Rabat, the current capital of Morocco, combines modern and ancient architecture. It's known for the Hassan Tower, the Mausoleum of Mohammed V, and the Kasbah of the Udayas, a UNESCO World Heritage site.",
    image: "/images/Ayoun.jpg?height=800&width=1200"
  }
]

export default function ImperialCitiesSwiper({SliderData}) {


  return (
    <>
    <h1 className="text-3xl font-bold text-center mb-16">Divers</h1>
    <div className="relative w-full h-[400px] md:h-[600px]">
      <h1 className="absolute top-6 left-6 z-20 text-2xl md:text-4xl font-serif italic text-white drop-shadow-lg">
      {SliderData[0]?.headerTitle || "the deep alleys of the most famous medinas" }
      </h1>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="w-full h-full"
      >
        {(SliderData || slides).map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/20" />

              <Card className="absolute right-8 top-1/3 max-w-md bg-white/90 backdrop-blur-sm p-6 shadow-lg">
                <h2 className="text-2xl font-serif mb-4">{slide.question}</h2>
                <p className="text-gray-700 leading-relaxed">
                  {slide.description}
                </p>
                 {/* More Details Button */}
                 <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                 style={{backgroundColor: "#403301"}}>
                  En savoir plus
                  </button>
              </Card>

              <div className="absolute bottom-16 left-8 z-20">
                <h2 className="text-3xl font-serif text-white drop-shadow-lg">
                  {slide.title}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </>
  )
}








const data = [
    {
      id: 1,
      title: "a titlre represent a famous food in the city",
      question: "an open question and catchy about food and gastronomy in the city",
      description: "a description or answer of the above question",
      image: "just a random image i will add it myself"
    },
    {
      id: 2,
      title: "a titlre represent a famous activity we can do in the city",
      question: "an open question and catchy about activities and hobbies in the city",
      description: "a description or answer of the above question",
      image: "just a random image i will add it myself"
    },
    {
      id: 3,
      title: "a titlre represent a famous and first building or school or something in morocco and has a great value in Morocco in general ",
      question: "an open question and catchy about THAT catchy thing in the city",
      description: "a description or answer of the above question",
      image: "just a random image i will add it myself"
    }
  ]