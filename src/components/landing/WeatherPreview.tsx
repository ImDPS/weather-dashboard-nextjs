import Image from 'next/image';

const mockForecast = [
  {
    day: 'Today',
    condition: 'Partly Cloudy',
    icon: '/weather-partly-cloudy.svg',
    high: '27°C',
    low: '18°C'
  },
  {
    day: 'Tomorrow',
    condition: 'Sunny',
    icon: '/weather-sunny.svg',
    high: '29°C',
    low: '20°C'
  },
  {
    day: 'Wednesday',
    condition: 'Rainy',
    icon: '/weather-rain.svg',
    high: '22°C',
    low: '17°C'
  }
];

const WeatherPreview = () => {
  return (
    <section className="py-16 bg-light-gray">
      <div className="text-center mb-12">
        <h2 className="text-header-l font-bold text-neutral-black mb-4">Experience Our Dashboard</h2>
        <p className="text-body text-dark-gray max-w-2xl mx-auto">
          Get a preview of our intuitive weather dashboard with real-time data visualization.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto bg-white rounded-md shadow-card overflow-hidden">
        <div className="bg-dark-blue text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-light-blue flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <h3 className="font-medium">Weather Dashboard</h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-small">Toronto, CA</span>
            <button className="text-small bg-light-blue px-2 py-1 rounded-xs">Change</button>
          </div>
        </div>
        
        {/* Current Weather Card */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-[#C2E0E8] rounded-xl p-6 flex items-center justify-between">
              <div>
                <h4 className="text-[#1C1C1C] font-medium mb-2">Current Weather</h4>
                <div className="flex flex-col">
                  <span className="text-4xl font-bold">24°C</span>
                  <span className="text-[#565656]">Partly Cloudy</span>
                  <div className="flex items-center mt-2 text-sm text-[#565656]">
                    <span>Feels like: 26°C</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center w-24 h-24">
                <Image 
                  src="/weather-partly-cloudy.svg" 
                  width={80} 
                  height={80} 
                  alt="Partly cloudy weather icon"
                />
              </div>
            </div>
            
            <div className="bg-white rounded-xl border border-[#D3D3D3] p-6">
              <h4 className="text-[#1C1C1C] font-medium mb-4">Weather Details</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F5F5F3] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#565656" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#565656] text-sm">Humidity</p>
                    <p className="font-medium">65%</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F5F5F3] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#565656" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                      <line x1="9" y1="9" x2="9.01" y2="9" />
                      <line x1="15" y1="9" x2="15.01" y2="9" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#565656] text-sm">Pressure</p>
                    <p className="font-medium">1013 hPa</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F5F5F3] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#565656" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#565656] text-sm">Wind</p>
                    <p className="font-medium">12 km/h</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F5F5F3] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#565656" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="5" />
                      <line x1="12" y1="1" x2="12" y2="3" />
                      <line x1="12" y1="21" x2="12" y2="23" />
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                      <line x1="1" y1="12" x2="3" y2="12" />
                      <line x1="21" y1="12" x2="23" y2="12" />
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#565656] text-sm">UV Index</p>
                    <p className="font-medium">Moderate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 3-Day Forecast */}
          <div className="mt-8">
            <h4 className="text-[#1C1C1C] font-medium mb-4">3-Day Forecast</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {mockForecast.map((day, index) => (
                <div key={index} className="bg-white border border-[#D3D3D3] rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <p className="font-medium">{day.day}</p>
                    <p className="text-[#565656] text-sm">{day.condition}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Image 
                      src={day.icon} 
                      width={36} 
                      height={36} 
                      alt={day.condition}
                    />
                    <div className="text-right">
                      <p className="font-medium">{day.high}</p>
                      <p className="text-[#565656] text-sm">{day.low}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherPreview; 