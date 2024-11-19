import { events } from "./events";

  const EventCalendar = () => {
    return (
      <section className="p-10 bg-white">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Événements à Venir</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105"
            >
              <img src={event.image} alt={event.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">{event.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{event.date}</p>
              <p className="text-sm text-gray-700 mb-2">Location: <span className="text-blue-500">{event.location}</span></p>
              <p className="text-gray-800">{event.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default EventCalendar;
  