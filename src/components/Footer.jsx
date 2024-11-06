import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

          {/* Section 1: Brand/Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-600">Paste</h3>
            <p className="text-sm">
              Post your opinion and connect with others.
            </p>
            <p className="text-sm text-gray-500">&copy; 2024 Paste. All rights reserved.</p>
          </div>

          {/* Section 2: Social Media Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-600">Follow Me</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="https://github.com/mdrijoanmaruf" aria-label="GitHub" className="hover:text-blue-600 transition">
                <FaGithub className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/mdrijoanmaruf/" aria-label="LinkedIn" className="hover:text-blue-600 transition">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/md.rijoanmaruf" aria-label="Facebook" className="hover:text-blue-600 transition">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/rijoanmaruf/" aria-label="Instagram" className="hover:text-blue-600 transition">
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Section 3: Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-600">Contact Me</h3>
            <p className="text-sm">Email: <a href="mailto:rijoanmaruf@gmail.com" className="hover:underline text-blue-600">rijoanmaruf@gmail.com</a></p>
            <p className="text-sm">Phone: +8801813606468</p>
            <p className="text-sm">Address: Road-7, Block-C, Bashundhara R/A, Dhaka</p>
          </div>
          
        </div>

        {/* Bottom Section: Developer Information */}
        <div className="mt-8 border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center">
          <p className="text-sm text-gray-600">Developed by <span className="font-semibold"><a href="https://rijoan.netlify.app" className="hover:underline text-blue-600">Md Rijoan Maruf</a></span></p>
          <p className="text-sm text-gray-600">Project built with React, Tailwind CSS & Firebase</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
