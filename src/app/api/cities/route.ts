// import { NextRequest, NextResponse } from 'next/server';

// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export async function GET(request: NextRequest) {
//   const cities = await prisma.city.findMany({
//     include: { attractions: true },
//   });
//   return NextResponse.json(cities);
// }


import { NextResponse } from 'next/server';

const cities = [
  {
    image: "/images/Ayoun.jpg",
    name: "Laâyoune",
    description: "Une ville paisible dans la région orientale du Maroc, offrant des paysages pittoresques et des expériences marocaines authentiques.",
    topAttractions: [
      "Plage de Foum El Oued",
      "Musée de Laâyoune",
      "Mosquée Al Quds",
      "Jardin de la paix",
      "Vallée de la Moulouya"
    ],
    history: "Laâyoune est une ville riche en histoire, ayant été un point de rencontre important pour les cultures berbères et arabes.",
    culture: "La culture de Laâyoune est marquée par des traditions sahraouies, incluant la musique, l'artisanat et la cuisine locale.",
    coordinates: { top: "27%", left: "35%" },
  },
  {
    image: "/images/Barkane.png",
    name: "Berkane",
    description: "Une charmante ville située au nord-est du Maroc, proche de la côte méditerranéenne et riche en histoire.",
    topAttractions: [
      "Mont Beni Snassen",
      "Parc National de la Moulouya",
      "Sidi Yahya",
      "Jardin des 4 saisons",
      "Plage de Ras El Ma"
    ],
    history: "Berkane est connue pour son histoire riche, notamment en tant que centre de culture et d'agriculture.",
    culture: "La ville est célèbre pour ses oranges et ses jardins, reflétant une culture agricole prospère.",
    coordinates: { top: "20%", left: "30%" },
  },
  {
    image: "/images/Nador.JPG",
    name: "Nador",
    description: "Une ville côtière du nord-est du Maroc, offrant de belles plages et une culture locale vibrante.",
    topAttractions: [
      "Lagune de Marchica",
      "Plage de Kariat Arkmane",
      "Parc Corniche",
      "Plage de Ghazi",
      "Marina de Nador"
    ],
    history: "Nador a une histoire maritime riche, jouant un rôle clé dans le commerce entre l'Europe et l'Afrique.",
    culture: "La ville est un mélange de cultures, avec une forte influence amazigh et arabe.",
    coordinates: { top: "24%", left: "8%" },
  },
  {
    image: "/images/Taourirte.jpg",
    name: "Taourirt",
    description: "Une ville historique avec une kasbah célèbre, offrant un aperçu du mode de vie traditionnel marocain.",
    topAttractions: [
      "Kasbah de Taourirt",
      "Place Sidi Abdeljalil",
      "Souk traditionnel",
      "Musée de Taourirt",
      "Parc des loisirs"
    ],
    history: "Taourirt est célèbre pour sa kasbah, symbole de l'architecture traditionnelle marocaine.",
    culture: "La ville offre un riche aperçu de la culture berbère avec ses festivals et ses marchés.",
    coordinates: { top: "31%", left: "28%" },
  },
];

export async function GET(request: Request) {
  return NextResponse.json(cities);
}
