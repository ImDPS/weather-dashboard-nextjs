import Image from 'next/image';

const features = [
  {
    title: 'Real-time Forecasts',
    description: 'Get accurate, up-to-the-minute weather forecasts for any location worldwide.',
    icon: '/weather-sun.svg',
    iconAlt: 'Sun icon',
    gradient: 'from-sunshine-yellow/20 to-sunset-orange/20'
  },
  {
    title: 'Interactive Weather Maps',
    description: 'Visualize precipitation, temperature, and wind patterns on our interactive maps.',
    icon: '/weather-rain.svg',
    iconAlt: 'Rain icon',
    gradient: 'from-sky-blue/20 to-rain-blue/20'
  },
  {
    title: 'Detailed Analytics',
    description: 'Track temperature trends, precipitation patterns, and more with detailed charts.',
    icon: '/weather-chart.svg',
    iconAlt: 'Chart icon',
    gradient: 'from-light-blue/20 to-storm-blue/20'
  },
  {
    title: 'Personalized Alerts',
    description: 'Receive timely notifications for weather events that matter to you.',
    icon: '/weather-storm.svg',
    iconAlt: 'Storm icon',
    gradient: 'from-storm-blue/20 to-dark-blue/20'
  }
];

const Features = () => {
  return (
    <section className="py-8">
      <div className="text-center mb-16">
        <span className="inline-block px-3 py-1 text-sm font-medium text-light-blue bg-light-blue/10 rounded-full mb-4">
          Powerful Tools
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Everything You Need for <span className="text-gradient-cool">Weather Insights</span>
        </h2>
        <p className="text-lg text-dark-gray max-w-2xl mx-auto">
          Our dashboard offers comprehensive tools designed to keep you informed about changing weather conditions.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-light-gray/50 relative overflow-hidden group"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            
            <div className="relative z-10">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-md transform group-hover:scale-110 transition-transform duration-300`}>
                <Image 
                  src={feature.icon} 
                  width={32} 
                  height={32} 
                  alt={feature.iconAlt}
                  className="group-hover:animate-pulse"
                />
              </div>
              
              <h3 className="text-xl font-bold text-neutral-black mb-3">{feature.title}</h3>
              <p className="text-dark-gray">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <div className="inline-flex items-center justify-center p-1 rounded-xl bg-light-gray">
          <div className="px-4 py-2 rounded-lg bg-white shadow-sm text-dark-gray text-sm">
            <strong>10K+</strong> Active Users
          </div>
          <div className="px-4 py-2 text-dark-gray text-sm">
            <strong>200K+</strong> Cities
          </div>
          <div className="px-4 py-2 text-dark-gray text-sm">
            <strong>99.9%</strong> Uptime
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 