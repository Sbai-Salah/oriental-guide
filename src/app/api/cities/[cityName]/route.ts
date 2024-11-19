import { NextResponse } from 'next/server';
import { cities } from './cities';

export async function GET(request: Request, { params }: { params: { cityName: string } }) {
  const cityName = decodeURIComponent(params.cityName);
  const city = cities.find(city => city.name === cityName);
  
  if (!city) {
    return NextResponse.json({ message: 'City not found' }, { status: 404 });
  }

  return NextResponse.json(city);
}
