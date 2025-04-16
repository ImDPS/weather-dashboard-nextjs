import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-light-gray py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-light-blue flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v7"></path>
                  <path d="M12 22v-3"></path>
                  <path d="M4.93 4.93l4.24 4.24"></path>
                  <path d="M14.83 14.83l4.24 4.24"></path>
                  <path d="M2 12h3"></path>
                  <path d="M19 12h3"></path>
                  <path d="M4.93 19.07l4.24-4.24"></path>
                  <path d="M14.83 9.17l4.24-4.24"></path>
                </svg>
              </div>
              <span className="font-bold text-xl text-dark-blue">WeatherDash</span>
            </Link>
            <p className="text-dark-gray mb-4">
              Accurate weather forecasts and insights, right at your fingertips.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Twitter" className="text-light-blue hover:text-[#619fca]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="text-light-blue hover:text-[#619fca]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-light-blue hover:text-[#619fca]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-neutral-black mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link href="/features" className="text-dark-gray hover:text-neutral-black">Features</Link></li>
              <li><Link href="/pricing" className="text-dark-gray hover:text-neutral-black">Pricing</Link></li>
              <li><Link href="/dashboard" className="text-dark-gray hover:text-neutral-black">Dashboard</Link></li>
              <li><Link href="/mobile" className="text-dark-gray hover:text-neutral-black">Mobile App</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-neutral-black mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-dark-gray hover:text-neutral-black">Blog</Link></li>
              <li><Link href="/help" className="text-dark-gray hover:text-neutral-black">Help Center</Link></li>
              <li><Link href="/guides" className="text-dark-gray hover:text-neutral-black">User Guides</Link></li>
              <li><Link href="/api" className="text-dark-gray hover:text-neutral-black">API Documentation</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-neutral-black mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-dark-gray hover:text-neutral-black">About Us</Link></li>
              <li><Link href="/contact" className="text-dark-gray hover:text-neutral-black">Contact</Link></li>
              <li><Link href="/privacy" className="text-dark-gray hover:text-neutral-black">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-dark-gray hover:text-neutral-black">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-medium-gray mt-12 pt-8 text-center text-dark-gray">
          <p>&copy; {new Date().getFullYear()} WeatherDash. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 