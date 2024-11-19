'use client'

import { useState } from 'react'
import { Dialog, DialogContent } from "@/components/CustomBasicComponents/DialogTwo"
import { Button } from "@/components/CustomBasicComponents/Button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/CustomBasicComponents/avatar"
import Header from '@/components/Header';
import { Heart, MessageCircle, Share2, X } from 'lucide-react'

const places = [
  { id: 1, image: "/images/instagramable/Ayoune.jpg?height=600&width=400", location: "Ayoun Oriental", likes: 1234, comments: 56, user: { name: "Khadija", avatar: "/images/instagramable//avatar.png?height=40&width=40" } },
  { id: 2, image: "/images/instagramable/MontMahsar.jpg?height=800&width=600", location: "Jerada", likes: 2345, comments: 78, user: { name: "Meryem", avatar: "/images/instagramable//avatar.png?height=40&width=40" } },
  { id: 3, image: "/images/instagramable/Saidia.jpg?height=500&width=400", location: "Saidia", likes: 3456, comments: 90, user: { name: "Youssef", avatar: "/images/instagramable//avatar.png?height=40&width=40" } },
  { id: 4, image: "/images/instagramable/septHommes.jpg?height=700&width=500", location: "Nador", likes: 4567, comments: 123, user: { name: "Alae", avatar: "/images/instagramable//avatar.png?height=40&width=40" } },
]

export default function InstagramGallery() {
  const [selectedPlace, setSelectedPlace] = useState(null)
  const [likedPlaces, setLikedPlaces] = useState({})

  const handleLike = (id) => {
    setLikedPlaces(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  return (
   <div className="relative z-20 h-full w-full">
    <Header/>
    <div className="container mx-auto px-4 py-16" style={{paddingTop: '200px'}}>
     
      <h1 className="text-3xl font-bold text-center mb-12">Lieux Instagramables</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {places.map((place) => (
          <div key={place.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative aspect-square">
              <img
                src={place.image}
                alt={place.location}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => setSelectedPlace(place)}
              />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage src={place.user.avatar} alt={place.user.name} />
                    <AvatarFallback>{place.user.name[0]}</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold">{place.user.name}</span>
                </div>
                <span className="text-sm text-gray-500">{place.location}</span>
              </div>
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleLike(place.id)}
                  className={likedPlaces[place.id] ? "text-red-500" : ""}
                >
                  <Heart className="w-5 h-5 mr-1" />
                  {place.likes + (likedPlaces[place.id] ? 1 : 0)}
                </Button>
                <Button variant="ghost" size="sm">
                  <MessageCircle className="w-5 h-5 mr-1" />
                  {place.comments}
                </Button>
                <Button variant="ghost" size="sm">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
      <Dialog open={!!selectedPlace} onOpenChange={() => setSelectedPlace(null)}>
        <DialogContent className="sm:max-w-[90vw] sm:max-h-[90vh] p-0 overflow-hidden bg-white ">
            
          <div className="flex flex-col md:flex-row h-full">
            <div className="md:w-2/3 bg-gray-100 flex items-center justify-center">
              {selectedPlace && (
                <img
                  src={selectedPlace.image}
                  alt={selectedPlace.location}
                  className="max-w-full max-h-full object-contain"
                />
              )}
            </div>
            <div className="md:w-1/3 p-6 flex flex-col">
              {selectedPlace && (
                <>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Avatar>
                        <AvatarImage src={selectedPlace.user.avatar} alt={selectedPlace.user.name} />
                        <AvatarFallback>{selectedPlace.user.name[0]}</AvatarFallback>
                      </Avatar>
                      <span className="font-semibold">{selectedPlace.user.name}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedPlace(null)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  </div>
                  <h2 className="text-xl font-bold mb-2">{selectedPlace.location}</h2>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <div className="flex items-center space-x-4 mt-auto">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleLike(selectedPlace.id)}
                      className={likedPlaces[selectedPlace.id] ? "text-red-500" : ""}
                    >
                      <Heart className="w-5 h-5 mr-1" />
                      {selectedPlace.likes + (likedPlaces[selectedPlace.id] ? 1 : 0)}
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MessageCircle className="w-5 h-5 mr-1" />
                      {selectedPlace.comments}
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Share2 className="w-5 h-5" />
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  
  )
}