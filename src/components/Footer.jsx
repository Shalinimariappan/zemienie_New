import { FaEnvelope, FaPhone } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="py-12 bg-blue-600">
      <div className="p-10 mx-auto bg-white rounded-lg shadow-md max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and About Section - Now with equal width */}
          <div className="md:col-span-1">
            <div className="flex items-center">
              <img 
                src={logo} 
                alt="Zemienie Logo" 
                className="h-16"  /* Increased logo size from h-12 to h-16 */
              />
              <span className="ml-2 text-2xl font-bold text-blue-600 font-playfair md:ml-3">ZEMIENIE</span>
            </div>
            <p className="mt-2 text-sm text-gray-700">
              At Zemienie, we simplify healthcare operations with cutting-edge revenue cycle management, medical billing, and credentialing solutions.
            </p>
          </div>

          {/* Company Links - Equal width */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-gray-800">Zemienie</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li><a href="/" className="hover:text-blue-600">Home</a></li>
              <li><a href="about" className="hover:text-blue-600">About Us</a></li>
              <li><a href="specialist" className="hover:text-blue-600">Specialist</a></li>
              <li><a href="career" className="hover:text-blue-600">Career</a></li>
              <li><a href="contact" className="hover:text-blue-600">Contact Us</a></li>
              <li><a href="privacy" className="hover:text-blue-600">Terms of Use</a></li>
            </ul>
          </div>

          {/* Services Links - Equal width */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-gray-800">Services</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li><a href="revenue" className="hover:text-blue-600">Revenue Cycle Management</a></li>
              <li><a href="imaging" className="hover:text-blue-600">Imaging Center Billing</a></li>
              <li><a href="credentialing" className="hover:text-blue-600">Credentialing Services</a></li>
              <li><a href="macra" className="hover:text-blue-600">MACRA/QPP Compliance</a></li>
            </ul>
          </div>

          {/* Contact Info - Equal width */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-gray-800">Contact</h3>
            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <div className="flex items-center">
                <FaEnvelope className="mr-2" />
                <span>info@zemienie.com</span>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-sm text-center text-gray-500">
          <p>© 2025 Zemienie | All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;