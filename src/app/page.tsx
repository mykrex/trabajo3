'use client'

import {useState} from "react";
import Navigation from "./components/Navigation";
import SearchBar from "./components/SearchBar";
import SearchResultsList from "./components/SearchResultsList";
import WeatherCard from "./components/WeatherCard";

import { WeatherData, Result } from "./types/weather";


export default function Home() {

  const [results, setResults] = useState([]);

  const [weatherCards, setWeatherCards] = useState<WeatherData[]>([]);

  const handleSelectCity = async (city: string, latitude: number, longitude: number) => {
    try {
      const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
      const data: Result = await res.json();

      if (!data.current_weather) {
        console.error("There is no weather data");
        return;
      }

      const newCard: WeatherData = {
        city,
        temperature: data.current_weather.temperature,
        time: data.current_weather.time,
      };

      setWeatherCards((prev) => [...prev, newCard]);
    } catch (error) {
      console.error("Error getting weather data:", error);
    }
  };

  const removeCard = (index: number) => {
    setWeatherCards((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-stretch min-h-screen w-full">
      <Navigation />
      
      <main className="flex flex-col gap-8 items-center justify-items-center">
        <h1 className="text-4xl font-bold"> How is the weather?</h1>

        <div className="search-bar-container">
          <SearchBar setResults={setResults} />

          <SearchResultsList 
            results={results} 
            onSelectCity={handleSelectCity}
          />
        </div>

        <div className="cards-container grid lg:grid-cols-3 gap-4">
          {weatherCards.map((card, index) => (
            <WeatherCard
              key={index}
              data={card}
              onClose={() => removeCard(index)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
