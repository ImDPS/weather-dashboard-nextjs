import { 
  Header, 
  Hero, 
  Features, 
  WeatherPreview, 
  Testimonials, 
  Cta, 
  Footer 
} from "@/components/landing";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-light-gray to-white">
      <Header />
      <main className="flex-grow">
        {/* Hero Section with Gradient Background */}
        <div className="curved-section bg-gradient-to-br from-sky-blue/30 to-light-blue/10 pt-16 pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Hero />
          </div>
        </div>
        
        {/* Features Section */}
        <div className="py-24 relative z-10 -mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-md p-8 mb-16">
              <Features />
            </div>
          </div>
        </div>
        
        {/* Weather Preview Section */}
        <div className="py-16 bg-light-gray">
          <WeatherPreview />
        </div>
        
        {/* Testimonials Section */}
        <div className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Testimonials />
          </div>
        </div>
        
        {/* CTA Section with Gradient */}
        <div className="bg-gradient-to-r from-dark-blue to-storm-blue text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Cta />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
