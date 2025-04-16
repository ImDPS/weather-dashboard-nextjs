import Link from 'next/link';

const Cta = () => {
  return (
    <section className="py-20 bg-dark-blue text-white text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-header-xl font-bold mb-4">Ready to Elevate Your Weather Experience?</h2>
        <p className="text-body opacity-90 mb-8 max-w-xl mx-auto">
          Join thousands of users who rely on our dashboard for accurate weather insights and forecasts tailored to their needs.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/dashboard" 
            className="inline-flex items-center justify-center h-12 px-8 font-medium bg-light-blue rounded-sm hover:bg-[#619fca] transition-colors"
          >
            Try Dashboard Now
          </Link>
          <Link 
            href="/about" 
            className="inline-flex items-center justify-center h-12 px-8 font-medium bg-transparent border border-white rounded-sm hover:bg-white/10 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta; 