import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Outdoor Photographer',
    quote: 'This weather dashboard has been a game-changer for planning my outdoor shoots. The accuracy and detail of the forecasts have saved me countless hours and equipment.',
    avatar: '/avatar-1.png'
  },
  {
    name: 'Michael Chen',
    role: 'Hiking Enthusiast',
    quote: 'I rely on this dashboard for all my weekend adventures. The detailed precipitation forecasts and wind data help me prepare properly for any conditions.',
    avatar: '/avatar-2.png'
  }
];

const Testimonials = () => {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-header-l font-bold text-neutral-black mb-4">What Our Users Say</h2>
        <p className="text-body text-dark-gray max-w-2xl mx-auto">
          Discover how our weather dashboard is helping weather enthusiasts and professionals alike.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-white rounded-md p-6 shadow-card border border-light-gray"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-sky-blue flex items-center justify-center">
                <Image 
                  src={testimonial.avatar} 
                  width={48} 
                  height={48} 
                  alt={`${testimonial.name}'s avatar`}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-neutral-black">{testimonial.name}</h3>
                <p className="text-small text-dark-gray">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-body text-dark-gray italic">&quot;{testimonial.quote}&quot;</p>
            <div className="mt-4 flex">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="#F9D77E" 
                  stroke="#F9D77E" 
                  strokeWidth="1" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="mr-1"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials; 