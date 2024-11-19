"use client";

import { useEffect, useState } from 'react';
import { City } from '../interfaces/city';
import Link from 'next/link';

export default function CitiesPage() {
  const [cities, setCities] = useState<City[]>([]);

  useEffect(() => {
    async function fetchCities() {
      const response = await fetch('/api/cities');
      const data = await response.json();
      setCities(data);
    }
    fetchCities();
  }, []);

  return (
    <div>
      <h1>Cities in Oriental Region</h1>
      <ul>
        {cities.map((city) => (
          <li key={city.id}>
            <h2>{city.name}</h2>
            <p>{city.description}</p>
            <Link href={`/cities/${city.id}`}>View more</Link> {/* Use Link instead of a */}

          </li>
        ))}
      </ul>
    </div>
  );
}
