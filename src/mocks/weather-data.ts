// Current Weather Data
export const currentWeather = {
  location: "Toronto, Canada",
  currentTime: "10:30 AM",
  temperature: 24,
  feelsLike: 26,
  condition: "Partly Cloudy",
  conditionIcon: "/weather-partly-cloudy.svg",
  humidity: 65,
  pressure: 1012,
  wind: {
    speed: 12,
    direction: "NE",
    degree: 45
  },
  visibility: 10,
  uvIndex: 5,
  airQuality: {
    index: 38,
    level: "Good",
    primaryPollutant: "PM2.5"
  },
  dewPoint: 16,
  sunrise: "6:15 AM",
  sunset: "8:32 PM",
  moonPhase: "Waxing Gibbous",
  dayLength: "14h 17m",
  chanceOfRain: 20
};

// Hourly Forecast Data
export const hourlyForecast = [
  { time: "Now", temperature: 24, condition: "Partly Cloudy", icon: "/weather-partly-cloudy.svg", precipitation: 20 },
  { time: "11 AM", temperature: 25, condition: "Partly Cloudy", icon: "/weather-partly-cloudy.svg", precipitation: 15 },
  { time: "12 PM", temperature: 26, condition: "Mostly Sunny", icon: "/weather-sunny.svg", precipitation: 5 },
  { time: "1 PM", temperature: 27, condition: "Mostly Sunny", icon: "/weather-sunny.svg", precipitation: 0 },
  { time: "2 PM", temperature: 28, condition: "Sunny", icon: "/weather-sun.svg", precipitation: 0 },
  { time: "3 PM", temperature: 28, condition: "Sunny", icon: "/weather-sun.svg", precipitation: 0 },
  { time: "4 PM", temperature: 28, condition: "Sunny", icon: "/weather-sun.svg", precipitation: 0 },
  { time: "5 PM", temperature: 27, condition: "Mostly Sunny", icon: "/weather-sunny.svg", precipitation: 10 },
  { time: "6 PM", temperature: 26, condition: "Partly Cloudy", icon: "/weather-partly-cloudy.svg", precipitation: 15 },
  { time: "7 PM", temperature: 24, condition: "Partly Cloudy", icon: "/weather-partly-cloudy.svg", precipitation: 20 },
  { time: "8 PM", temperature: 22, condition: "Cloudy", icon: "/weather-cloudy.svg", precipitation: 35 },
  { time: "9 PM", temperature: 21, condition: "Cloudy", icon: "/weather-cloudy.svg", precipitation: 40 },
  { time: "10 PM", temperature: 20, condition: "Light Rain", icon: "/weather-rain.svg", precipitation: 60 },
  { time: "11 PM", temperature: 19, condition: "Light Rain", icon: "/weather-rain.svg", precipitation: 65 },
  { time: "12 AM", temperature: 18, condition: "Rain", icon: "/weather-rain.svg", precipitation: 70 },
  { time: "1 AM", temperature: 17, condition: "Rain", icon: "/weather-rain.svg", precipitation: 75 },
  { time: "2 AM", temperature: 17, condition: "Rain", icon: "/weather-rain.svg", precipitation: 80 },
  { time: "3 AM", temperature: 16, condition: "Light Rain", icon: "/weather-rain.svg", precipitation: 70 },
  { time: "4 AM", temperature: 16, condition: "Light Rain", icon: "/weather-rain.svg", precipitation: 60 },
  { time: "5 AM", temperature: 15, condition: "Cloudy", icon: "/weather-cloudy.svg", precipitation: 40 },
  { time: "6 AM", temperature: 16, condition: "Cloudy", icon: "/weather-cloudy.svg", precipitation: 30 },
  { time: "7 AM", temperature: 17, condition: "Partly Cloudy", icon: "/weather-partly-cloudy.svg", precipitation: 20 },
  { time: "8 AM", temperature: 19, condition: "Partly Cloudy", icon: "/weather-partly-cloudy.svg", precipitation: 15 },
  { time: "9 AM", temperature: 22, condition: "Mostly Sunny", icon: "/weather-sunny.svg", precipitation: 10 }
];

// Daily Forecast Data
export const dailyForecast = [
  { 
    day: "Today", 
    date: "Jun 15",
    high: 28, 
    low: 18, 
    condition: "Partly Cloudy", 
    icon: "/weather-partly-cloudy.svg", 
    precipitation: 20,
    humidity: 65,
    wind: 12,
    sunrise: "6:15 AM",
    sunset: "8:32 PM",
    uvIndex: 5
  },
  { 
    day: "Thu", 
    date: "Jun 16",
    high: 26, 
    low: 17, 
    condition: "Light Rain", 
    icon: "/weather-rain.svg", 
    precipitation: 70,
    humidity: 75,
    wind: 15,
    sunrise: "6:15 AM",
    sunset: "8:32 PM",
    uvIndex: 4
  },
  { 
    day: "Fri", 
    date: "Jun 17",
    high: 24, 
    low: 16, 
    condition: "Rain", 
    icon: "/weather-rain.svg", 
    precipitation: 80,
    humidity: 80,
    wind: 18,
    sunrise: "6:16 AM",
    sunset: "8:33 PM",
    uvIndex: 3
  },
  { 
    day: "Sat", 
    date: "Jun 18",
    high: 25, 
    low: 15, 
    condition: "Mostly Cloudy", 
    icon: "/weather-cloudy.svg", 
    precipitation: 30,
    humidity: 70,
    wind: 14,
    sunrise: "6:16 AM",
    sunset: "8:33 PM",
    uvIndex: 4
  },
  { 
    day: "Sun", 
    date: "Jun 19",
    high: 27, 
    low: 16, 
    condition: "Partly Cloudy", 
    icon: "/weather-partly-cloudy.svg", 
    precipitation: 20,
    humidity: 65,
    wind: 10,
    sunrise: "6:16 AM",
    sunset: "8:33 PM", 
    uvIndex: 6
  },
  { 
    day: "Mon", 
    date: "Jun 20",
    high: 29, 
    low: 17, 
    condition: "Sunny", 
    icon: "/weather-sun.svg", 
    precipitation: 5,
    humidity: 60,
    wind: 8,
    sunrise: "6:17 AM",
    sunset: "8:34 PM",
    uvIndex: 7
  },
  { 
    day: "Tue", 
    date: "Jun 21",
    high: 30, 
    low: 18, 
    condition: "Sunny", 
    icon: "/weather-sun.svg", 
    precipitation: 0,
    humidity: 55,
    wind: 7,
    sunrise: "6:17 AM",
    sunset: "8:34 PM",
    uvIndex: 8
  }
];

// Weather Alerts
export const weatherAlerts = [
  {
    id: 1,
    type: "Thunderstorm Warning",
    severity: "Moderate",
    description: "Thunderstorms with possible heavy rain and strong winds expected in the evening around 8 PM to 11 PM.",
    issuedAt: "10:15 AM",
    expiresAt: "11:00 PM",
    areas: "Greater Toronto Area, Hamilton, Niagara Region"
  },
  {
    id: 2,
    type: "Flood Watch",
    severity: "Minor",
    description: "Due to recent rainfall and expected precipitation, low-lying areas may experience minor flooding.",
    issuedAt: "9:30 AM", 
    expiresAt: "6:00 AM Tomorrow",
    areas: "Lakeshore areas, Don Valley"
  }
];

// Historical Data
export const historicalData = [
  { date: "Jun 8", high: 25, low: 15, condition: "Sunny", icon: "/weather-sun.svg" },
  { date: "Jun 9", high: 26, low: 16, condition: "Mostly Sunny", icon: "/weather-sunny.svg" },
  { date: "Jun 10", high: 27, low: 17, condition: "Partly Cloudy", icon: "/weather-partly-cloudy.svg" },
  { date: "Jun 11", high: 26, low: 17, condition: "Light Rain", icon: "/weather-rain.svg" },
  { date: "Jun 12", high: 24, low: 16, condition: "Rain", icon: "/weather-rain.svg" },
  { date: "Jun 13", high: 24, low: 15, condition: "Cloudy", icon: "/weather-cloudy.svg" },
  { date: "Jun 14", high: 26, low: 17, condition: "Partly Cloudy", icon: "/weather-partly-cloudy.svg" }
];

// Insights
export const weatherInsights = [
  {
    id: 1,
    type: "Daily Summary",
    description: "Today will be partly cloudy with a slight chance of rain in the evening. Temperatures will be warm, peaking at 28°C in the afternoon."
  },
  {
    id: 2,
    type: "Clothing Recommendation",
    description: "Light clothing recommended with a light jacket or umbrella for the evening as there's a chance of rain."
  },
  {
    id: 3,
    type: "Activity Suggestion",
    description: "Good morning for outdoor activities. The afternoon is ideal for beach or park visits before potential evening showers."
  },
  {
    id: 4,
    type: "Energy Usage",
    description: "Moderate AC usage expected due to warm temperatures during midday and afternoon hours."
  }
];

// Air Quality Data
export const airQuality = {
  aqi: 38,
  level: "Good",
  primaryPollutant: "PM2.5",
  components: {
    pm25: 9.2,
    pm10: 18.5,
    o3: 42,
    no2: 15,
    so2: 3,
    co: 0.4
  },
  healthImplications: "Air quality is satisfactory, and air pollution poses little or no risk.",
  recommendations: "It's a good day for outdoor activities."
};

// User Settings
export const userSettings = {
  temperatureUnit: "celsius", // celsius or fahrenheit
  windSpeedUnit: "km/h", // km/h, mph, m/s
  pressureUnit: "hPa", // hPa, inHg
  timeFormat: "24h", // 12h or 24h
  theme: "light", // light, dark, system
  defaultLocation: "Toronto, Canada",
  savedLocations: [
    "Toronto, Canada",
    "New York, USA",
    "London, UK",
    "Tokyo, Japan"
  ]
};
