export const cities = [
  // ****************** Oujda ********************
  {
    image: "/images/Oujda/2.jpg",
    name: "Oujda",
    mapCoordinates: [34.6813, -1.9105],
    description: "Une ville dynamique située dans la région de l'Oriental, connue pour son histoire riche, son architecture arabo-andalouse et son rôle de plaque tournante commerciale.",
    topAttractions: [
      {
        "name": "Mosquée Al-Alawiyyin",
        "description": "Une magnifique mosquée, chef-d'œuvre de l'architecture islamique, avec un minaret imposant.",
      },
      {
        "name": "Médina d'Oujda",
        "description": "Un labyrinthe de ruelles étroites, de souks animés et de maisons traditionnelles.",
      },
      {
        "name": "Parc Lalla Aicha",
        "description": "Un espace vert paisible idéal pour se détendre et profiter de la nature.",
      },
      {
        "name": "Musée des Oudayas",
        "description": "Un musée présentant l'histoire et le patrimoine de la ville.",
        "image": "https://example.com/musee_oudayas.jpg"
      }
    ],
    history: [
      {
        "year": "11ème siècle",
        "event": "Fondation d'Oujda par les Almoravides.",
        "icon": "🕌", // Icon for a mosque
        "color": "bg-yellow-400",
        "position": "top",
        "details": "Oujda a été fondée comme une ville fortifiée par les Almoravides, qui ont joué un rôle important dans l'expansion de l'Islam en Afrique du Nord."
      },
      {
        "year": "16ème siècle",
        "event": "Oujda devient une importante ville commerciale.",
        "icon": "🐫", // Icon for a camel caravan
        "color": "bg-yellow-400",
        "position": "bottom",
        "details": "Grâce à sa position stratégique, Oujda est devenue un carrefour commercial, attirant des marchands de tout le continent africain."
      },
      {
        "year": "20ème siècle",
        "event": "Oujda connaît un essor urbain.",
        "icon": "🏢", // Icon for a building
        "color": "bg-yellow-400",
        "position": "top",
        "details": "Avec le développement du Maroc, Oujda s'est modernisée et est devenue un centre économique important de la région."
      }
    ],
    culture: "La culture d'Oujda est un mélange riche d'influences berbères, arabes et andalouses, se reflétant dans sa musique, sa danse, son artisanat et sa gastronomie.",
    coordinates: { top: "19%", left: "18%" },
    swiperData: [
      {
        id: 1,
        title: "Le Cœur Savoureux de l'Est",
        question: "Quels sont les plats incontournables d'Oujda qui mêlent les influences marocaine et algérienne ?",
        description: "Indétrônable de la cuisine oujdie, le Karane est un flan de farine de pois chiches et d’œufs qui se sert chaud, saupoudré de cumin. Il peut également se déguster en sandwich dans une baguette. Depuis 2015, cette gourmandise est célébrée lors du Festival Karane, Cultures et Traditions.",
        image: "/images/Oujda/karan.jpg",
        headerTitle: "Oujda, porte orientale du Maroc, allie histoire et culture vibrante."
      },
      {
        id: 2,
        title: "Explorer la Riche Histoire d'Oujda",
        question: "Quels sites historiques et monuments les visiteurs devraient-ils explorer à Oujda ?",
        description: "Oujda possède une riche histoire, visible dans son architecture magnifique. Visitez la majestueuse *Mosquée Al-Alawiyyin*, l'historique *Mellah* (quartier juif) et l'ancienne forteresse *Borj Sidi Moussa*. Plongez dans le patrimoine culturel de la ville et découvrez son passé.",
        image: "/images/Oujda/2.jpg"
      },
      {
        id: 3,
        title: "La Première Université de l'Est",
        question: "Quelle est la signification de l'Université Mohammed Ier à Oujda ?",
        description: "L'Université Mohammed Ier est une institution d'enseignement supérieur renommée au Maroc. Elle a joué un rôle crucial dans le développement intellectuel et culturel de la région. Explorez son beau campus et découvrez ses programmes académiques et ses initiatives de recherche.",
        image: "/images/Oujda/3.jpg"
      }
    ]
  },
  // ****************** Laâyoune ********************
  {
    image: "/images/Ayoun.jpg",
    name: "Laâyoune",
    description: "Une ville paisible dans la région orientale du Maroc, offrant des paysages pittoresques et des expériences marocaines authentiques.",
    topAttractions: [
      "Vallée de la Moulouya",
      "Source d'eau chaude de Ain Beni Mathar",
      "Désert de Boudnib",
      "Oasis de Figuig",
      "Palmeraies de la région"
    ],
    history: [
      {
        year: "1900s",
        event: "Établissement de Laâyoune comme village agricole clé.",
        icon: "🌾", // Icon for agriculture
        details: "Laâyoune a été fondée comme un village agricole important, servant de point de ravitaillement pour les tribus locales et favorisant l'agriculture dans la vallée de la Moulouya."
      },
      {
        year: "1956",
        event: "Indépendance du Maroc et intégration de Laâyoune dans la région orientale.",
        icon: "🇲🇦", // Icon for national identity
        details: "Après l'indépendance, Laâyoune a été intégrée dans le développement régional du Maroc, jouant un rôle stratégique en tant que carrefour dans l'Est du pays."
      },
      {
        year: "2000s",
        event: "Développement des infrastructures et promotion du tourisme.",
        icon: "🏗️", // Icon for development or infrastructure
        details: "La ville a bénéficié d'investissements pour améliorer les infrastructures, attirant des visiteurs intéressés par le patrimoine naturel et culturel de la région."
      }
    ],
    culture: "La culture de Laâyoune est marquée par un mélange d'influences berbères et sahariennes, mettant en valeur des traditions ancestrales, des festivals de musique et un artisanat unique.",
    firstsInCity: [
      {
        "event": "Première ville à abriter une grande école moderne dans la région de l'Oriental",
        "details": "Laâyoune est la première ville de la région de l'Oriental à abriter une grande école moderne, un pionnier dans l'extension de l'éducation formelle dans cette région.",
        "image": "/images/Ayoun.jpg",
        "eventId": "first-school-laayoune"
      }
    ],

    coordinates: { top: "27%", left: "35%" },
  },
  // ****************** Berkane ********************
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
    history: [
      {
        year: "1880",
        event: "Peuplement de Berkane comme centre de culture berbère.",
        icon: "🏞️", // Icon for a natural or cultural landmark
        "color": "bg-yellow-400",
        "position": "top",
        details: "Berkane s'est développée comme un foyer de la culture berbère, avec des traditions orales et une agriculture fondée sur les ressources naturelles de la région."
      },
      {
        year: "1913",
        event: "Établissement officiel de Berkane durant l'époque coloniale.",
        icon: "🏢", // Icon for colonization or official establishment
        "color": "bg-yellow-400",
        "position": "bottom",
        details: "Les autorités coloniales françaises ont reconnu Berkane comme un centre administratif, contribuant à l'urbanisation et à l'infrastructure."
      },
      {
        year: "1980",
        event: "Développement économique autour de l'agriculture, notamment des oranges.",
        icon: "🍊", // Icon for agriculture or farming
        "color": "bg-yellow-400",
        "position": "top",
        details: "Berkane est devenue célèbre pour sa production d'oranges de haute qualité, ce qui a stimulé son économie et renforcé son identité agricole."
      }
    ],
    culture: "La ville est célèbre pour ses oranges et ses jardins, reflétant une culture agricole prospère.",
    coordinates: { top: "20%", left: "30%" },
  },
  // ****************** Nador ********************
  {
    image: "/images/Nador.jpg",
    name: "Nador",
    mapCoordinates: [35.1761, -2.9333],
    description: "Une ville côtière située au nord-est du Maroc, offrant des vues imprenables sur la mer Méditerranée et une riche histoire de commerce et de culture berbère.",
    topAttractions: [
      "Lagune de Marchica",
      "La plage Charrana",
      "Mont Gourougou",
      "Mont Sept hommes"
    ],
    history: [
      {
        year: "16e siècle",
        event: "Établissement initial de Nador comme un village de pêcheurs berbères.",
        icon: "🎣", // Icon for fishing
        color: "bg-yellow-400",
        position: "top",
        details: "La ville a commencé comme un modeste village de pêcheurs, avec une communauté berbère vivant des ressources marines de la Méditerranée."
      },
      {
        year: "1912",
        event: "Nador sous le protectorat espagnol.",
        icon: "🇪🇸", // Icon for Spanish influence
        color: "bg-yellow-400",
        position: "bottom",
        details: "Sous le protectorat espagnol, Nador s'est développée en tant que centre commercial important, favorisant les échanges entre l'Espagne et le nord-est du Maroc."
      },
      {
        year: "1956",
        event: "Indépendance du Maroc et modernisation de Nador.",
        icon: "🏗️", // Icon for development
        color: "bg-yellow-400",
        position: "top",
        details: "Après l'indépendance, la ville a connu une expansion rapide avec des infrastructures modernes, attirant des investissements et une diaspora marocaine florissante."
      }
    ],
    culture: "Nador est un carrefour de cultures, influencée par les traditions berbères et les échanges maritimes, avec une cuisine centrée sur les fruits de mer et des festivals musicaux vibrants.",
    coordinates: { top: "24%", left: "8%" },
    swiperData: [
      {
        id: 1,
        title: "La Nature à l'État Pur",
        question: "Quelles sont les activités de plein air à pratiquer autour de Nador ?",
        description: "Les environs de Nador offrent de nombreuses possibilités pour les amoureux de la nature. Randonnées, plages, plongée sous-marine, vous trouverez votre bonheur. Découvrez les paysages époustouflants du Rif.",
        image: "/images/Nador/4.jpeg?height=800&width=1200",
        headerTitle: "Nador, perle méditerranéenne, séduit par ses plages et montagnes"
      },
      {
        id: 2,
        title: "Un Mélange de Cultures",
        question: "Quelles sont les influences culturelles qui ont façonné Nador ?",
        description: "Nador est un melting-pot de cultures, avec un mélange unique d'influences berbères, arabes et espagnoles. Découvrez l'artisanat local, la cuisine traditionnelle et les coutumes de cette ville multiculturelle.",
        image: "/images/Nador/septHommes.jpg?height=800&width=1200"
      },
      {
        id: 3,
        title: "La Perle du Rif",
        question: "Pourquoi Nador est-elle surnommée la 'Perle du Rif' et quelles sont ses principales attractions ?",
        description: "Nador, située sur la côte méditerranéenne, est réputée pour ses plages magnifiques, son atmosphère détendue et son riche patrimoine culturel. Découvrez les secrets de cette ville côtière.",
        image: "/images/Nador/1.jpeg?height=800&width=1200"
      },
      {
        id: 4,
        title: "Un Port Dynamique",
        question: "Quel est le rôle du port de Nador dans l'économie de la région ?",
        description: "Le port de Nador est un élément clé de l'économie locale. Il joue un rôle important dans le commerce et le transport maritime. Découvrez l'activité du port et son impact sur la ville.",
        image: "/images/Nador/2.jpeg?height=800&width=1200"
      }
    ]
  },
  // ****************** Taourirt ********************
  {
    image: "/images/Taourirte/1.jpg",
    name: "Taourirt",
    description: "Une ville historique située dans la région orientale du Maroc, connue pour sa kasbah impressionnante et son importance stratégique en tant que carrefour de routes commerciales.",
    topAttractions: [
      "Kasbah de Taourirt",
      "Palais des Oudaïas",
      "Oued Za",
      "Marché traditionnel de Taourirt",
      "Montagnes de l'Atlas Oriental"
    ],
    history: [
      {
        year: "9e siècle",
        event: "Fondation de Taourirt par les tribus berbères.",
        icon: "⛺", // Icon for nomadic or tribal history
        "color": "bg-yellow-400",
        "position": "top",
        details: "Taourirt a été fondée par les tribus berbères, qui ont utilisé la région comme un important centre de rassemblement et de commerce pour les caravanes traversant le Sahara."
      },
      {
        year: "19e siècle",
        event: "Construction de la Kasbah de Taourirt.",
        icon: "🏰", // Icon for a historical fortress
        "color": "bg-yellow-400",
        "position": "bottom",
        details: "La Kasbah a été construite pour protéger la région et servir de résidence aux dirigeants locaux, jouant un rôle clé dans la défense de la région orientale."
      },
      {
        year: "1950s",
        event: "Taourirt devient un centre de transport majeur.",
        icon: "🚂", // Icon for transportation
        "color": "bg-yellow-400",
        "position": "top",
        details: "Avec le développement du chemin de fer et des routes modernes, Taourirt est devenue un carrefour de transport crucial, reliant l'est du Maroc à d'autres régions."
      }
    ],
    culture: "La culture de Taourirt est profondément ancrée dans ses traditions berbères et sahariennes, avec des marchés animés, une architecture unique, et des festivals célébrant l'artisanat local.",
    coordinates: { top: "31%", left: "28%" },
  },
  // ****************** Saidia ********************
  {
    "image": "/images/Sadia/3.jpeg",
    "name": "Saidia",
     mapCoordinates: [35.08500000,-2.23916670],
    "description": "Saidia, surnommée la 'Perle Bleue', est une station balnéaire située à l'est du Maroc, réputée pour ses plages de sable fin, ses eaux cristallines et son climat méditerranéen agréable.",
    "topAttractions": [
      "Plage de Saïdia",
      "Port de Saïdia",
      "Parc de la lagune de Saïdia",
      "Golf de Saïdia"
    ],
    "history": [
      {
        "year": "1910",
        "event": "Fondation de Saïdia comme station balnéaire par les colons français.",
        "icon": "🏖️",
        "color": "bg-blue-400",
        "position": "top",
        "details": "La ville a été fondée au début du 20e siècle par les Français comme station balnéaire pour les touristes européens, attirés par ses plages idylliques."
      },
      {
        "year": "1960",
        "event": "Développement de Saïdia en destination touristique.",
        "icon": "🌴",
        "color": "bg-blue-400",
        "position": "bottom",
        "details": "Dans les années 60, Saïdia a commencé à se développer comme destination touristique populaire, attirant à la fois des locaux et des visiteurs internationaux."
      },
      {
        "year": "2000",
        "event": "Renouvellement touristique et développement d'infrastructures modernes.",
        "icon": "🏗️",
        "color": "bg-blue-400",
        "position": "top",
        "details": "Le début du 21e siècle a vu un afflux d'investissements dans des infrastructures modernes, notamment des hôtels et des complexes touristiques."
      }
    ],
    "culture": "Saidia est une ville de détente et de loisirs, où la culture locale se mêle à l'influence touristique. Les visiteurs peuvent savourer la cuisine méditerranéenne, découvrir l'artisanat local et profiter de festivals musicaux pendant l'été.",
    "coordinates": { "top": "20%", "left": "15%" },
    "swiperData": [
      {
        "id": 1,
        "title": "La Plage Parfaite",
        "question": "Quelles sont les meilleures activités à faire sur la plage de Saïdia ?",
        "description": "La plage de Saïdia est idéale pour la baignade, la plongée et les sports nautiques. Profitez de l'eau cristalline et des magnifiques couchers de soleil.",
        "image": "/images/Sadia/2.jpeg?height=800&width=1200",
        "headerTitle": "Saidia, la 'Perle Bleue' avec ses plages magnifiques"
      },
      {
        "id": 2,
        "title": "Un Port Animé",
        "question": "Quel rôle joue le port de Saïdia dans le développement touristique ?",
        "description": "Le port de Saïdia est non seulement un centre de pêche, mais aussi un lieu d'accueil pour les plaisanciers et un atout majeur pour le tourisme local.",
        "image": "/images/Sadia/1.jpeg?height=800&width=1200"
      },
      {
        "id": 3,
        "title": "Un Golf Unique",
        "question": "Quelles sont les attractions sportives de Saïdia ?",
        "description": "Saïdia abrite un magnifique parcours de golf de 18 trous, avec une vue imprenable sur la mer et des paysages verdoyants, offrant une expérience unique aux amateurs de golf.",
        "image": "/images/Sadia/beach.jpg?height=800&width=1200"
      },
      {
        "id": 4,
        "title": "Nature et Détente",
        "question": "Quelles sont les activités de plein air disponibles à Saïdia ?",
        "description": "Outre la plage, Saïdia offre de nombreuses options pour les amateurs de nature, telles que des balades dans les parcs et autour de la lagune, idéales pour la détente et l'observation des oiseaux.",
        "image": "/images/Sadia/4.jpeg?height=800&width=1200"
      }
    ]
  }
  
];
