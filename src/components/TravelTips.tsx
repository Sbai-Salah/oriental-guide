import React, { useState } from "react";

const citiesChecklist = [
  { name: "City 1", visited: false },
  { name: "City 2", visited: false },
  { name: "City 3", visited: false },
];

const TravelTips = () => {
  const [checklist, setChecklist] = useState(citiesChecklist);

  const toggleVisited = (index: number) => {
    const updatedChecklist = [...checklist];
    updatedChecklist[index].visited = !updatedChecklist[index].visited;
    setChecklist(updatedChecklist);
  };

  return (
    <section className="p-10 bg-white">
      <h2 className="text-4xl font-bold text-center mb-8">Travel Tips</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Checklist */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Checklist</h3>
          <ul>
            {checklist.map((city, index) => (
              <li key={index} className="mb-2">
                <label>
                  <input
                    type="checkbox"
                    checked={city.visited}
                    onChange={() => toggleVisited(index)}
                  />
                  <span className="ml-2">{city.name}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Weather Widget */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Best Time to Visit</h3>
          {/* Here you can integrate a weather API */}
          <div className="p-4 bg-blue-100 rounded-lg">
            <h4>City 1</h4>
            <p>Best time to visit: April - October</p>
          </div>
          <div className="p-4 bg-blue-100 rounded-lg mt-4">
            <h4>City 2</h4>
            <p>Best time to visit: June - September</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelTips;
