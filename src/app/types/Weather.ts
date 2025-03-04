export interface WeatherData {
    city: string;
    temperature: number;
    time: string;
  }
  
  export interface Result {
    current_weather: {
      time: string;
      temperature: number;
    };
  }
  