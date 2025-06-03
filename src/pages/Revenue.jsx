import { useState } from 'react';
import { 
  FaTasks,
  FaDollarSign,
  FaBan,
  FaChartPie,
  FaShieldAlt,
  FaWallet,
  FaHospital,
  FaVials,
  FaUserMd
} from 'react-icons/fa';

const RevenuePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  return (
    <div className="font-sans">
     
      {/* Intro Section */}
      <section className="relative py-12 overflow-hidden text-center text-white bg-blue-500 sm:py-16 lg:py-20">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] lg:w-[550px] lg:h-[550px] bg-blue-400 rounded-full opacity-50 absolute"></div>
          <div className="w-[180px] h-[180px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] bg-blue-300 rounded-full opacity-50 absolute"></div>
          <div className="w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] lg:w-[250px] lg:h-[250px] bg-blue-200 rounded-full opacity-50 absolute"></div>
        </div>

        <div className="relative z-10 max-w-3xl px-6 mx-auto sm:px-8 lg:px-10">
          <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">Revenue Cycle Management</h2>
          <p className="mt-3 text-sm sm:text-base lg:text-lg">
            Revenue Cycle Management (RCM) streamlines the financial process of healthcare providers, from patient registration to final payment collection.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="p-8 text-center bg-white md:px-16 lg:px-24">
        <h2 className="text-2xl font-semibold md:text-3xl">
          Healthcare <span className="text-blue-600">Revenue Cycle Management (RCM)</span> Services
        </h2>
        <p className="mt-4 text-base text-gray-700 md:text-lg lg:text-xl">
          Zemienie simplifies medical billing, ensuring faster payments with RCM
        </p>

        <div className="grid items-center grid-cols-1 gap-10 mt-12 md:grid-cols-2">
          <div className="flex items-start">
            <FaTasks className="text-3xl text-blue-600 md:text-4xl" />
            <div className="ml-6 text-left">
              <h3 className="text-xl font-semibold md:text-2xl">Reduce Administrative Burden</h3>
              <p className="text-base md:text-lg">Streamline processes and focus on patient care.</p>
            </div>
          </div>
          <div className="flex items-start">
            <FaDollarSign className="text-3xl text-blue-600 md:text-4xl" />
            <div className="ml-6 text-left">
              <h3 className="text-xl font-semibold md:text-2xl">Improve Cash Flow</h3>
              <p className="text-base md:text-lg">Enhance revenue collection with optimized billing.</p>
            </div>
          </div>
          <div className="flex items-start">
            <FaBan className="text-3xl text-blue-600 md:text-4xl" />
            <div className="ml-6 text-left">
              <h3 className="text-xl font-semibold md:text-2xl">Reduce Denial Rates</h3>
              <p className="text-base md:text-lg">Minimize rejections with accurate claim submissions.</p>
            </div>
          </div>
          <div className="flex items-start">
            <FaChartPie className="text-3xl text-blue-600 md:text-4xl" />
            <div className="ml-6 text-left">
              <h3 className="text-xl font-semibold md:text-2xl">Gain Financial Insights</h3>
              <p className="text-base md:text-lg">Make data-driven decisions with real-time reports.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Outsourcing Section */}
      <section className="px-8 py-12 text-center bg-white md:px-16 lg:px-24 md:py-20">
        <h2 className="text-2xl font-semibold md:text-3xl">
          Outsourcing <span className="text-blue-600">Revenue Cycle Management</span> Services to Zemienie
        </h2>
        <p className="mt-4 text-base text-gray-700 md:text-lg lg:text-xl">
          Experience hassle-free medical billing and revenue cycle optimization with Zemienie.
        </p>

        <div className="grid grid-cols-1 gap-10 mt-12 text-left md:grid-cols-2 lg:grid-cols-3">
          <div className="p-8 bg-white shadow-lg rounded-xl">
            <FaShieldAlt className="text-3xl text-blue-600" />
            <h3 className="mt-4 text-xl font-semibold md:text-2xl">Revenue Integrity</h3>
            <p className="mt-2 text-base text-gray-600 md:text-lg">
              Ensure accurate billing and compliance with industry regulations.
            </p>
          </div>
          <div className="p-8 bg-white shadow-lg rounded-xl">
            <FaWallet className="text-3xl text-blue-600" />
            <h3 className="mt-4 text-xl font-semibold md:text-2xl">Reimbursement Management</h3>
            <p className="mt-2 text-base text-gray-600 md:text-lg">
              Optimize insurance claims processing and maximize reimbursements.
            </p>
          </div>
          <div className="p-8 bg-white shadow-lg rounded-xl">
            <FaChartPie className="text-3xl text-blue-600" />
            <h3 className="mt-4 text-xl font-semibold md:text-2xl">Revenue Cycle Analytics</h3>
            <p className="mt-2 text-base text-gray-600 md:text-lg">
              Gain deep insights into financial performance with real-time analytics.
            </p>
          </div>
          <div className="p-8 bg-white shadow-lg rounded-xl">
            <FaHospital className="text-3xl text-blue-600" />
            <h3 className="mt-4 text-xl font-semibold md:text-2xl">RCM for Hospitals</h3>
            <p className="mt-2 text-base text-gray-600 md:text-lg">
              Comprehensive revenue cycle solutions tailored for hospitals.
            </p>
          </div>
          <div className="p-8 bg-white shadow-lg rounded-xl">
            <FaVials className="text-3xl text-blue-600" />
            <h3 className="mt-4 text-xl font-semibold md:text-2xl">RCM for Laboratories</h3>
            <p className="mt-2 text-base text-gray-600 md:text-lg">
              Simplify lab billing processes and enhance financial efficiency.
            </p>
          </div>
          <div className="p-8 bg-white shadow-lg rounded-xl">
            <FaUserMd className="text-3xl text-blue-600" />
            <h3 className="mt-4 text-xl font-semibold md:text-2xl">RCM for Physicians</h3>
            <p className="mt-2 text-base text-gray-600 md:text-lg">
              Custom revenue cycle solutions designed for individual practitioners.
            </p>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default RevenuePage;