// Current Weather Types
export interface CurrentWeather {
  location: string;
  currentTime: string;
  temperature: number;
  feelsLike: number;
  condition: string;
  conditionIcon: string;
  humidity: number;
  pressure: number;
  wind: {
    speed: number;
    direction: string;
    degree: number;
  };
  visibility: number;
  uvIndex: number;
  airQuality: {
    index: number;
    level: string;
    primaryPollutant: string;
  };
  dewPoint: number;
  sunrise: string;
  sunset: string;
  moonPhase: string;
  dayLength: string;
  chanceOfRain: number;
}

// Hourly Forecast Types
export interface HourlyForecast {
  time: string;
  temperature: number;
  condition: string;
  icon: string;
  precipitation: number;
}

// Daily Forecast Types
export interface DailyForecast {
  day: string;
  date: string;
  high: number;
  low: number;
  condition: string;
  icon: string;
  precipitation: number;
  humidity: number;
  wind: number;
  sunrise: string;
  sunset: string;
  uvIndex: number;
}

// Weather Alert Types
export interface WeatherAlert {
  id: number;
  type: string;
  severity: "Minor" | "Moderate" | "Severe" | "Extreme";
  description: string;
  issuedAt: string;
  expiresAt: string;
  areas: string;
}

// Historical Data Types
export interface HistoricalData {
  date: string;
  high: number;
  low: number;
  condition: string;
  icon: string;
}

// Weather Insight Types
export interface WeatherInsight {
  id: number;
  type: string;
  description: string;
}

// Air Quality Types
export interface AirQuality {
  aqi: number;
  level: string;
  primaryPollutant: string;
  components: {
    pm25: number;
    pm10: number;
    o3: number;
    no2: number;
    so2: number;
    co: number;
  };
  healthImplications: string;
  recommendations: string;
}

// User Settings Types
export interface UserSettings {
  temperatureUnit: "celsius" | "fahrenheit";
  windSpeedUnit: "km/h" | "mph" | "m/s";
  pressureUnit: "hPa" | "inHg";
  timeFormat: "12h" | "24h";
  theme: "light" | "dark" | "system";
  defaultLocation: string;
  savedLocations: string[];
}
