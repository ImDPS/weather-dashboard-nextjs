// Cities of Chhattisgarh with weather data
export const chhattisgarh_cities = [
  {
    id: 1,
    name: "Raipur",
    district: "Raipur",
    currentWeather: {
      temperature: 35,
      feelsLike: 38,
      humidity: 45,
      wind: { speed: 12, direction: "NE" },
      chanceOfRain: 5,
      pressure: 1012,
      condition: "Sunny",
      airQuality: 78
    },
    hourlyForecast: [
      { time: "09:00", temperature: 33, condition: "Sunny" },
      { time: "12:00", temperature: 36, condition: "Sunny" },
      { time: "15:00", temperature: 37, condition: "Partly Cloudy" },
      { time: "18:00", temperature: 34, condition: "Partly Cloudy" },
      { time: "21:00", temperature: 31, condition: "Clear" }
    ],
    dailyForecast: [
      { day: "Today", high: 37, low: 28, condition: "Sunny", chanceOfRain: 5 },
      { day: "Tomorrow", high: 36, low: 27, condition: "Partly Cloudy", chanceOfRain: 10 },
      { day: "Wed", high: 35, low: 26, condition: "Cloudy", chanceOfRain: 30 },
      { day: "Thu", high: 33, low: 25, condition: "Rainy", chanceOfRain: 70 },
      { day: "Fri", high: 32, low: 24, condition: "Rainy", chanceOfRain: 65 },
      { day: "Sat", high: 34, low: 25, condition: "Partly Cloudy", chanceOfRain: 25 },
      { day: "Sun", high: 35, low: 26, condition: "Sunny", chanceOfRain: 5 }
    ],
    pollution: { aqi: 78, pm25: 15.8, pm10: 25.3, o3: 48.5, no2: 12.1 }
  },
  {
    id: 2,
    name: "Bilaspur",
    district: "Bilaspur",
    currentWeather: {
      temperature: 34,
      feelsLike: 36,
      humidity: 48,
      wind: { speed: 10, direction: "NW" },
      chanceOfRain: 10,
      pressure: 1010,
      condition: "Partly Cloudy",
      airQuality: 65
    },
    hourlyForecast: [
      { time: "09:00", temperature: 32, condition: "Partly Cloudy" },
      { time: "12:00", temperature: 35, condition: "Partly Cloudy" },
      { time: "15:00", temperature: 36, condition: "Cloudy" },
      { time: "18:00", temperature: 33, condition: "Cloudy" },
      { time: "21:00", temperature: 30, condition: "Partly Cloudy" }
    ],
    dailyForecast: [
      { day: "Today", high: 36, low: 27, condition: "Partly Cloudy", chanceOfRain: 10 },
      { day: "Tomorrow", high: 35, low: 26, condition: "Cloudy", chanceOfRain: 25 },
      { day: "Wed", high: 34, low: 25, condition: "Rainy", chanceOfRain: 65 },
      { day: "Thu", high: 32, low: 24, condition: "Rainy", chanceOfRain: 80 },
      { day: "Fri", high: 31, low: 24, condition: "Cloudy", chanceOfRain: 40 },
      { day: "Sat", high: 33, low: 25, condition: "Partly Cloudy", chanceOfRain: 20 },
      { day: "Sun", high: 34, low: 26, condition: "Sunny", chanceOfRain: 5 }
    ],
    pollution: { aqi: 65, pm25: 12.5, pm10: 21.8, o3: 42.6, no2: 10.3 }
  },
  {
    id: 3,
    name: "Bhilai",
    district: "Durg",
    currentWeather: {
      temperature: 33,
      feelsLike: 35,
      humidity: 50,
      wind: { speed: 14, direction: "W" },
      chanceOfRain: 15,
      pressure: 1009,
      condition: "Cloudy",
      airQuality: 92
    },
    hourlyForecast: [
      { time: "09:00", temperature: 31, condition: "Cloudy" },
      { time: "12:00", temperature: 33, condition: "Cloudy" },
      { time: "15:00", temperature: 34, condition: "Partly Cloudy" },
      { time: "18:00", temperature: 32, condition: "Partly Cloudy" },
      { time: "21:00", temperature: 29, condition: "Clear" }
    ],
    dailyForecast: [
      { day: "Today", high: 34, low: 26, condition: "Cloudy", chanceOfRain: 15 },
      { day: "Tomorrow", high: 33, low: 25, condition: "Rainy", chanceOfRain: 60 },
      { day: "Wed", high: 31, low: 24, condition: "Rainy", chanceOfRain: 75 },
      { day: "Thu", high: 30, low: 23, condition: "Cloudy", chanceOfRain: 35 },
      { day: "Fri", high: 32, low: 24, condition: "Partly Cloudy", chanceOfRain: 20 },
      { day: "Sat", high: 33, low: 25, condition: "Sunny", chanceOfRain: 5 },
      { day: "Sun", high: 34, low: 26, condition: "Sunny", chanceOfRain: 5 }
    ],
    pollution: { aqi: 92, pm25: 22.4, pm10: 38.7, o3: 65.2, no2: 18.9 }
  },
  {
    id: 4,
    name: "Korba",
    district: "Korba",
    currentWeather: {
      temperature: 32,
      feelsLike: 34,
      humidity: 55,
      wind: { speed: 9, direction: "SE" },
      chanceOfRain: 20,
      pressure: 1008,
      condition: "Cloudy",
      airQuality: 110
    },
    hourlyForecast: [
      { time: "09:00", temperature: 30, condition: "Cloudy" },
      { time: "12:00", temperature: 32, condition: "Cloudy" },
      { time: "15:00", temperature: 33, condition: "Rainy" },
      { time: "18:00", temperature: 31, condition: "Rainy" },
      { time: "21:00", temperature: 28, condition: "Cloudy" }
    ],
    dailyForecast: [
      { day: "Today", high: 33, low: 25, condition: "Cloudy", chanceOfRain: 20 },
      { day: "Tomorrow", high: 32, low: 24, condition: "Rainy", chanceOfRain: 70 },
      { day: "Wed", high: 30, low: 23, condition: "Rainy", chanceOfRain: 85 },
      { day: "Thu", high: 29, low: 22, condition: "Cloudy", chanceOfRain: 30 },
      { day: "Fri", high: 31, low: 23, condition: "Partly Cloudy", chanceOfRain: 15 },
      { day: "Sat", high: 32, low: 24, condition: "Partly Cloudy", chanceOfRain: 10 },
      { day: "Sun", high: 33, low: 25, condition: "Sunny", chanceOfRain: 5 }
    ],
    pollution: { aqi: 110, pm25: 31.6, pm10: 52.4, o3: 72.8, no2: 22.5 }
  },
  {
    id: 5,
    name: "Raigarh",
    district: "Raigarh",
    currentWeather: {
      temperature: 33,
      feelsLike: 35,
      humidity: 52,
      wind: { speed: 11, direction: "S" },
      chanceOfRain: 10,
      pressure: 1010,
      condition: "Partly Cloudy",
      airQuality: 85
    },
    hourlyForecast: [
      { time: "09:00", temperature: 31, condition: "Partly Cloudy" },
      { time: "12:00", temperature: 33, condition: "Partly Cloudy" },
      { time: "15:00", temperature: 34, condition: "Cloudy" },
      { time: "18:00", temperature: 32, condition: "Partly Cloudy" },
      { time: "21:00", temperature: 29, condition: "Clear" }
    ],
    dailyForecast: [
      { day: "Today", high: 34, low: 26, condition: "Partly Cloudy", chanceOfRain: 10 },
      { day: "Tomorrow", high: 33, low: 25, condition: "Cloudy", chanceOfRain: 30 },
      { day: "Wed", high: 32, low: 24, condition: "Rainy", chanceOfRain: 65 },
      { day: "Thu", high: 30, low: 23, condition: "Rainy", chanceOfRain: 75 },
      { day: "Fri", high: 31, low: 24, condition: "Cloudy", chanceOfRain: 35 },
      { day: "Sat", high: 32, low: 25, condition: "Partly Cloudy", chanceOfRain: 15 },
      { day: "Sun", high: 33, low: 26, condition: "Sunny", chanceOfRain: 5 }
    ],
    pollution: { aqi: 85, pm25: 18.2, pm10: 32.5, o3: 55.3, no2: 15.6 }
  },
  {
    id: 6,
    name: "Jagdalpur",
    district: "Bastar",
    currentWeather: {
      temperature: 31,
      feelsLike: 33,
      humidity: 60,
      wind: { speed: 8, direction: "SW" },
      chanceOfRain: 25,
      pressure: 1007,
      condition: "Cloudy",
      airQuality: 55
    },
    hourlyForecast: [
      { time: "09:00", temperature: 29, condition: "Cloudy" },
      { time: "12:00", temperature: 31, condition: "Rainy" },
      { time: "15:00", temperature: 32, condition: "Rainy" },
      { time: "18:00", temperature: 30, condition: "Cloudy" },
      { time: "21:00", temperature: 27, condition: "Partly Cloudy" }
    ],
    dailyForecast: [
      { day: "Today", high: 32, low: 24, condition: "Cloudy", chanceOfRain: 25 },
      { day: "Tomorrow", high: 31, low: 24, condition: "Rainy", chanceOfRain: 75 },
      { day: "Wed", high: 29, low: 23, condition: "Rainy", chanceOfRain: 90 },
      { day: "Thu", high: 28, low: 22, condition: "Rainy", chanceOfRain: 65 },
      { day: "Fri", high: 30, low: 23, condition: "Cloudy", chanceOfRain: 40 },
      { day: "Sat", high: 31, low: 24, condition: "Partly Cloudy", chanceOfRain: 20 },
      { day: "Sun", high: 32, low: 25, condition: "Partly Cloudy", chanceOfRain: 15 }
    ],
    pollution: { aqi: 55, pm25: 9.8, pm10: 18.2, o3: 38.4, no2: 8.7 }
  },
  {
    id: 7,
    name: "Ambikapur",
    district: "Surguja",
    currentWeather: {
      temperature: 30,
      feelsLike: 32,
      humidity: 58,
      wind: { speed: 10, direction: "E" },
      chanceOfRain: 15,
      pressure: 1009,
      condition: "Partly Cloudy",
      airQuality: 60
    },
    hourlyForecast: [
      { time: "09:00", temperature: 28, condition: "Partly Cloudy" },
      { time: "12:00", temperature: 30, condition: "Partly Cloudy" },
      { time: "15:00", temperature: 31, condition: "Cloudy" },
      { time: "18:00", temperature: 29, condition: "Cloudy" },
      { time: "21:00", temperature: 26, condition: "Partly Cloudy" }
    ],
    dailyForecast: [
      { day: "Today", high: 31, low: 24, condition: "Partly Cloudy", chanceOfRain: 15 },
      { day: "Tomorrow", high: 30, low: 23, condition: "Cloudy", chanceOfRain: 35 },
      { day: "Wed", high: 29, low: 22, condition: "Rainy", chanceOfRain: 70 },
      { day: "Thu", high: 28, low: 21, condition: "Rainy", chanceOfRain: 80 },
      { day: "Fri", high: 29, low: 22, condition: "Cloudy", chanceOfRain: 45 },
      { day: "Sat", high: 30, low: 23, condition: "Partly Cloudy", chanceOfRain: 25 },
      { day: "Sun", high: 31, low: 24, condition: "Sunny", chanceOfRain: 10 }
    ],
    pollution: { aqi: 60, pm25: 10.5, pm10: 19.8, o3: 40.2, no2: 9.3 }
  },
  {
    id: 8,
    name: "Durg",
    district: "Durg",
    currentWeather: {
      temperature: 34,
      feelsLike: 36,
      humidity: 47,
      wind: { speed: 13, direction: "NW" },
      chanceOfRain: 10,
      pressure: 1010,
      condition: "Partly Cloudy",
      airQuality: 88
    },
    hourlyForecast: [
      { time: "09:00", temperature: 32, condition: "Partly Cloudy" },
      { time: "12:00", temperature: 34, condition: "Partly Cloudy" },
      { time: "15:00", temperature: 35, condition: "Cloudy" },
      { time: "18:00", temperature: 33, condition: "Partly Cloudy" },
      { time: "21:00", temperature: 30, condition: "Clear" }
    ],
    dailyForecast: [
      { day: "Today", high: 35, low: 27, condition: "Partly Cloudy", chanceOfRain: 10 },
      { day: "Tomorrow", high: 34, low: 26, condition: "Cloudy", chanceOfRain: 30 },
      { day: "Wed", high: 33, low: 25, condition: "Rainy", chanceOfRain: 60 },
      { day: "Thu", high: 31, low: 24, condition: "Rainy", chanceOfRain: 70 },
      { day: "Fri", high: 32, low: 25, condition: "Cloudy", chanceOfRain: 30 },
      { day: "Sat", high: 33, low: 26, condition: "Partly Cloudy", chanceOfRain: 15 },
      { day: "Sun", high: 34, low: 27, condition: "Sunny", chanceOfRain: 5 }
    ],
    pollution: { aqi: 88, pm25: 20.1, pm10: 35.2, o3: 60.5, no2: 17.3 }
  }
];

// Major Indian Cities
export const major_indian_cities = [
  {
    id: 101,
    name: "Delhi",
    district: "Delhi",
    currentWeather: {
      temperature: 38,
      feelsLike: 42,
      humidity: 35,
      wind: { speed: 18, direction: "NW" },
      chanceOfRain: 2,
      pressure: 1009,
      condition: "Sunny",
      airQuality: 145
    },
    hourlyForecast: [
      { time: "09:00", temperature: 36, condition: "Sunny" },
      { time: "12:00", temperature: 39, condition: "Sunny" },
      { time: "15:00", temperature: 41, condition: "Sunny" },
      { time: "18:00", temperature: 38, condition: "Clear" },
      { time: "21:00", temperature: 34, condition: "Clear" }
    ],
    dailyForecast: [
      { day: "Today", high: 41, low: 32, condition: "Sunny", chanceOfRain: 2 },
      { day: "Tomorrow", high: 40, low: 31, condition: "Sunny", chanceOfRain: 5 },
      { day: "Wed", high: 39, low: 31, condition: "Partly Cloudy", chanceOfRain: 10 },
      { day: "Thu", high: 38, low: 30, condition: "Partly Cloudy", chanceOfRain: 15 },
      { day: "Fri", high: 39, low: 30, condition: "Sunny", chanceOfRain: 5 },
      { day: "Sat", high: 40, low: 31, condition: "Sunny", chanceOfRain: 3 },
      { day: "Sun", high: 41, low: 32, condition: "Sunny", chanceOfRain: 2 }
    ],
    pollution: { aqi: 145, pm25: 42.3, pm10: 78.6, o3: 95.4, no2: 35.7 }
  },
  {
    id: 102,
    name: "Mumbai",
    district: "Mumbai",
    currentWeather: {
      temperature: 32,
      feelsLike: 36,
      humidity: 76,
      wind: { speed: 14, direction: "SW" },
      chanceOfRain: 40,
      pressure: 1004,
      condition: "Partly Cloudy",
      airQuality: 105
    },
    hourlyForecast: [
      { time: "09:00", temperature: 30, condition: "Partly Cloudy" },
      { time: "12:00", temperature: 32, condition: "Cloudy" },
      { time: "15:00", temperature: 33, condition: "Rainy" },
      { time: "18:00", temperature: 31, condition: "Rainy" },
      { time: "21:00", temperature: 29, condition: "Cloudy" }
    ],
    dailyForecast: [
      { day: "Today", high: 33, low: 27, condition: "Partly Cloudy", chanceOfRain: 40 },
      { day: "Tomorrow", high: 32, low: 27, condition: "Rainy", chanceOfRain: 70 },
      { day: "Wed", high: 31, low: 26, condition: "Rainy", chanceOfRain: 85 },
      { day: "Thu", high: 30, low: 26, condition: "Rainy", chanceOfRain: 90 },
      { day: "Fri", high: 31, low: 27, condition: "Cloudy", chanceOfRain: 60 },
      { day: "Sat", high: 32, low: 27, condition: "Partly Cloudy", chanceOfRain: 30 },
      { day: "Sun", high: 33, low: 28, condition: "Partly Cloudy", chanceOfRain: 20 }
    ],
    pollution: { aqi: 105, pm25: 28.6, pm10: 48.3, o3: 65.2, no2: 24.5 }
  },
  {
    id: 103,
    name: "Kolkata",
    district: "Kolkata",
    currentWeather: {
      temperature: 33,
      feelsLike: 38,
      humidity: 80,
      wind: { speed: 8, direction: "SE" },
      chanceOfRain: 35,
      pressure: 1002,
      condition: "Cloudy",
      airQuality: 120
    },
    hourlyForecast: [
      { time: "09:00", temperature: 31, condition: "Cloudy" },
      { time: "12:00", temperature: 33, condition: "Cloudy" },
      { time: "15:00", temperature: 34, condition: "Rainy" },
      { time: "18:00", temperature: 32, condition: "Rainy" },
      { time: "21:00", temperature: 30, condition: "Cloudy" }
    ],
    dailyForecast: [
      { day: "Today", high: 34, low: 28, condition: "Cloudy", chanceOfRain: 35 },
      { day: "Tomorrow", high: 33, low: 28, condition: "Rainy", chanceOfRain: 65 },
      { day: "Wed", high: 32, low: 27, condition: "Rainy", chanceOfRain: 80 },
      { day: "Thu", high: 31, low: 26, condition: "Cloudy", chanceOfRain: 45 },
      { day: "Fri", high: 32, low: 27, condition: "Partly Cloudy", chanceOfRain: 25 },
      { day: "Sat", high: 33, low: 28, condition: "Partly Cloudy", chanceOfRain: 15 },
      { day: "Sun", high: 34, low: 29, condition: "Partly Cloudy", chanceOfRain: 10 }
    ],
    pollution: { aqi: 120, pm25: 35.2, pm10: 60.7, o3: 75.3, no2: 28.9 }
  },
  {
    id: 104,
    name: "Bangalore",
    district: "Bangalore",
    currentWeather: {
      temperature: 28,
      feelsLike: 30,
      humidity: 65,
      wind: { speed: 12, direction: "W" },
      chanceOfRain: 20,
      pressure: 1010,
      condition: "Partly Cloudy",
      airQuality: 95
    },
    hourlyForecast: [
      { time: "09:00", temperature: 26, condition: "Partly Cloudy" },
      { time: "12:00", temperature: 28, condition: "Partly Cloudy" },
      { time: "15:00", temperature: 29, condition: "Cloudy" },
      { time: "18:00", temperature: 27, condition: "Partly Cloudy" },
      { time: "21:00", temperature: 25, condition: "Clear" }
    ],
    dailyForecast: [
      { day: "Today", high: 29, low: 22, condition: "Partly Cloudy", chanceOfRain: 20 },
      { day: "Tomorrow", high: 28, low: 21, condition: "Partly Cloudy", chanceOfRain: 25 },
      { day: "Wed", high: 27, low: 21, condition: "Cloudy", chanceOfRain: 45 },
      { day: "Thu", high: 26, low: 20, condition: "Rainy", chanceOfRain: 70 },
      { day: "Fri", high: 27, low: 21, condition: "Cloudy", chanceOfRain: 40 },
      { day: "Sat", high: 28, low: 22, condition: "Partly Cloudy", chanceOfRain: 25 },
      { day: "Sun", high: 29, low: 22, condition: "Sunny", chanceOfRain: 10 }
    ],
    pollution: { aqi: 95, pm25: 22.4, pm10: 42.8, o3: 58.3, no2: 19.7 }
  },
  {
    id: 105,
    name: "Hyderabad",
    district: "Hyderabad",
    currentWeather: {
      temperature: 31,
      feelsLike: 34,
      humidity: 60,
      wind: { speed: 10, direction: "SW" },
      chanceOfRain: 15,
      pressure: 1008,
      condition: "Sunny",
      airQuality: 110
    },
    hourlyForecast: [
      { time: "09:00", temperature: 29, condition: "Sunny" },
      { time: "12:00", temperature: 31, condition: "Sunny" },
      { time: "15:00", temperature: 32, condition: "Partly Cloudy" },
      { time: "18:00", temperature: 30, condition: "Partly Cloudy" },
      { time: "21:00", temperature: 28, condition: "Clear" }
    ],
    dailyForecast: [
      { day: "Today", high: 32, low: 25, condition: "Sunny", chanceOfRain: 15 },
      { day: "Tomorrow", high: 32, low: 24, condition: "Partly Cloudy", chanceOfRain: 20 },
      { day: "Wed", high: 31, low: 24, condition: "Partly Cloudy", chanceOfRain: 30 },
      { day: "Thu", high: 30, low: 23, condition: "Cloudy", chanceOfRain: 45 },
      { day: "Fri", high: 29, low: 23, condition: "Rainy", chanceOfRain: 60 },
      { day: "Sat", high: 30, low: 24, condition: "Partly Cloudy", chanceOfRain: 35 },
      { day: "Sun", high: 31, low: 25, condition: "Sunny", chanceOfRain: 15 }
    ],
    pollution: { aqi: 110, pm25: 30.5, pm10: 52.4, o3: 68.1, no2: 25.3 }
  }
];

// Combined cities for the filter
export const all_cities = [...chhattisgarh_cities, ...major_indian_cities];

// Default selected city (Raipur)
export const DEFAULT_CITY_ID = 1;

// Get city by ID
export const getCityById = (id: number) => {
  return all_cities.find(city => city.id === id) || all_cities[0];
};

// Weather alerts for Chhattisgarh
export const chhattisgarh_alerts = [
  {
    id: 1,
    type: "Heavy Rainfall",
    severity: "Moderate",
    title: "Heavy Rainfall Warning for Southern Districts",
    description: "Heavy rainfall expected in Bastar, Dantewada, and Sukma districts over the next 48 hours.",
    issuedAt: new Date("2023-07-15T08:30:00"),
    expiresAt: new Date("2023-07-17T08:30:00"),
    affectedAreas: ["Bastar", "Dantewada", "Sukma"]
  },
  {
    id: 2,
    type: "Heat Wave",
    severity: "High",
    title: "Heat Wave Alert for Northern Chhattisgarh",
    description: "Temperatures expected to rise above 40°C in Raipur, Bilaspur, and surrounding areas. Take necessary precautions.",
    issuedAt: new Date("2023-05-20T10:00:00"),
    expiresAt: new Date("2023-05-24T18:00:00"),
    affectedAreas: ["Raipur", "Bilaspur", "Raigarh", "Korba"]
  }
];

// Weather insights based on location and conditions
export const getWeatherInsights = (cityId: number) => {
  const city = getCityById(cityId);
  const insights = [
    {
      type: "Summary",
      description: `${city.currentWeather.condition} conditions in ${city.name} with a high of ${city.dailyForecast[0].high}°C.`
    },
    {
      type: "Clothing",
      description: city.currentWeather.temperature > 32 
        ? "Light clothing recommended. Don't forget sun protection." 
        : "Light to moderate clothing. Carry an umbrella if heading out in the evening."
    },
    {
      type: "Activity",
      description: city.currentWeather.chanceOfRain > 30 
        ? "Indoor activities recommended due to possible rainfall." 
        : "Good conditions for outdoor activities, best in morning or evening."
    },
    {
      type: "Health",
      description: city.pollution.aqi > 100 
        ? "Air quality is poor. Limit outdoor exposure if you have respiratory issues." 
        : "Air quality is moderate to good. Good day for outdoor exercise."
    }
  ];
  
  return insights;
}; 