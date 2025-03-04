"use client";
import { WeatherData } from "../types/Weather";

interface WeatherCardProps {
  data: WeatherData;
  onClose: () => void;
}

export default function WeatherCard({ data, onClose }: WeatherCardProps) {
  return (
    <div className="weather-card border p-4 rounded-md shadow-md bg-white">
      <button 
        onClick={onClose}
        className="float-right text-red-500 font-bold"
      >
        X
      </button>
      <h2 className="text-xl font-semibold">{data.city}</h2>
      <p>Temperature: {data.temperature} °C</p>
      <p>Time: {data.time}</p>
    </div>
  );
}
