import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-gray-300 py-8">
      <div className="container mx-auto px-6">
        {/* Top Text */}
        <div className="text-center text-sm mb-6 text-gray-400">
          Pornhub provides you with unlimited free porn videos with the hottest adult performers. Enjoy the largest amateur porn community on the net as well as full-length scenes from the top XXX studios. We update our porn videos daily to ensure you always get the best quality sex movies.
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div>
            <h3 className="font-semibold text-gray-100 mb-2">Information</h3>
            <ul>
              {['Sitemap', 'Terms & Conditions', 'Privacy Notice', 'DMCA', '2257', 'EU DSA', 'Recommender System Guidelines', 'Cookie Notice'].map((item) => (
                <li key={item} className="mb-1">
                  <a href="#" className="text-orange-500 hover:text-orange-400">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-100 mb-2">Work With Us</h3>
            <ul>
              {['Content Partners', 'Advertise', 'Webmasters', 'Model Program', 'Press'].map((item) => (
                <li key={item} className="mb-1">
                  <a href="#" className="text-orange-500 hover:text-orange-400">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-100 mb-2">Support and Help</h3>
            <ul>
              {['Content Removal', 'Contact Support', 'FAQ', 'Trust and Safety', 'Parental Controls', 'Feedback', 'Manage Cookies'].map((item) => (
                <li key={item} className="mb-1">
                  <a href="#" className="text-orange-500 hover:text-orange-400">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-100 mb-2">Discover</h3>
            <ul>
              {['Pornhub Blog', 'Insights Blog', 'Sexual Wellness Center', 'Mobile', 'Visually Impaired', 'Audio Impaired'].map((item) => (
                <li key={item} className="mb-1">
                  <a href="#" className="text-orange-500 hover:text-orange-400">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          {/* Language Selection */}
          <div className="flex items-center mb-4 md:mb-0">
            <span>Language:</span>
            <button className="ml-2 bg-gray-800 text-white px-2 py-1 rounded">
              English <span className="ml-1">&#9662;</span>
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22.5c5.186 0 9.5-4.314 9.5-9.5S17.186 3.5 12 3.5 2.5 7.814 2.5 13s4.314 9.5 9.5 9.5zm0 0c1.845 0 3.5-1.655 3.5-3.5s-1.655-3.5-3.5-3.5-3.5 1.655-3.5 3.5 1.655 3.5 3.5 3.5z" />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <div className="mt-4 md:mt-0">
            &copy; Pornhub.com, {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
