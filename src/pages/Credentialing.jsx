import React from 'react';
import { 
  FaUserCheck, 
  FaFileSignature, 
  FaShieldAlt, 
  FaHandshake,
  FaUserShield,
  FaClock,
  FaFileAlt,
  FaUsersCog,
  FaSync,
  FaFileMedical
} from 'react-icons/fa';

const CredentialingProcess = () => {
  return (
    <div className="font-sans">
      {/* Intro Section */}
      <section className="relative py-12 overflow-hidden text-center text-white bg-blue-500 sm:py-16 lg:py-20">
        {/* Background Circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] lg:w-[550px] lg:h-[550px] bg-blue-400 rounded-full opacity-50"></div>
          <div className="absolute w-[180px] h-[180px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] bg-blue-300 rounded-full opacity-50"></div>
          <div className="absolute w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] lg:w-[250px] lg:h-[250px] bg-blue-200 rounded-full opacity-50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-6 mx-auto sm:px-8 lg:px-10">
          <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">Credentialing Process</h2>
          <p className="mt-3 text-sm sm:text-base lg:text-lg">
            Ensure seamless provider credentialing and compliance with our expert solutions, making the enrollment process hassle-free and efficient.
          </p>
        </div>
      </section>

      {/* Credentialing Process Services */}
      <section className="p-8 text-center bg-white md:px-16 lg:px-24">
        <h2 className="text-2xl font-semibold md:text-3xl">
          Comprehensive <span className="text-blue-600">Credentialing Process</span> Services
        </h2>
        <p className="mt-4 text-base text-gray-700 md:text-lg lg:text-xl">
          Accelerate provider enrollment and compliance with our end-to-end credentialing services.
        </p>

        <div className="grid items-center grid-cols-1 gap-10 mt-12 md:grid-cols-2">
          <div className="flex items-start">
            <FaUserCheck className="text-3xl text-blue-600 md:text-4xl" />
            <div className="ml-6 text-left">
              <h3 className="text-xl font-semibold md:text-2xl">Provider Verification</h3>
              <p className="text-base md:text-lg">Ensure accurate and thorough credential verification.</p>
            </div>
          </div>
          <div className="flex items-start">
            <FaFileSignature className="text-3xl text-blue-600 md:text-4xl" />
            <div className="ml-6 text-left">
              <h3 className="text-xl font-semibold md:text-2xl">Document Management</h3>
              <p className="text-base md:text-lg">Streamline application and credential submission.</p>
            </div>
          </div>
          <div className="flex items-start">
            <FaShieldAlt className="text-3xl text-blue-600 md:text-4xl" />
            <div className="ml-6 text-left">
              <h3 className="text-xl font-semibold md:text-2xl">Regulatory Compliance</h3>
              <p className="text-base md:text-lg">Meet state and federal credentialing requirements.</p>
            </div>
          </div>
          <div className="flex items-start">
            <FaHandshake className="text-3xl text-blue-600 md:text-4xl" />
            <div className="ml-6 text-left">
              <h3 className="text-xl font-semibold md:text-2xl">Insurance Enrollment</h3>
              <p className="text-base md:text-lg">Fast-track provider enrollment with insurance networks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Credentialing Services */}
      <section className="px-8 py-12 text-center bg-white md:px-16 lg:px-24 md:py-20">
        <h2 className="text-2xl font-semibold md:text-3xl">
          Why Choose Our <span className="text-blue-600">Credentialing Services?</span>
        </h2>
        <p className="mt-4 text-base text-gray-700 md:text-lg lg:text-xl">
          Simplify provider credentialing with our expert team and proven process.
        </p>

        <div className="grid grid-cols-1 gap-10 mt-12 text-left md:grid-cols-2 lg:grid-cols-3">
          <div className="p-8 bg-white shadow-lg rounded-xl">
            <FaUserShield className="text-3xl text-blue-600" />
            <h3 className="mt-4 text-xl font-semibold md:text-2xl">Comprehensive Verification</h3>
            <p className="mt-2 text-base text-gray-600 md:text-lg">
              We verify every credential to ensure accuracy and compliance.
            </p>
          </div>
          <div className="p-8 bg-white shadow-lg rounded-xl">
            <FaClock className="text-3xl text-blue-600" />
            <h3 className="mt-4 text-xl font-semibold md:text-2xl">Faster Processing</h3>
            <p className="mt-2 text-base text-gray-600 md:text-lg">
              Reduce delays with our streamlined credentialing approach.
            </p>
          </div>
          <div className="p-8 bg-white shadow-lg rounded-xl">
            <FaFileAlt className="text-3xl text-blue-600" />
            <h3 className="mt-4 text-xl font-semibold md:text-2xl">Automated Documentation</h3>
            <p className="mt-2 text-base text-gray-600 md:text-lg">
              Keep track of all provider documents in one secure platform.
            </p>
          </div>
          <div className="p-8 bg-white shadow-lg rounded-xl">
            <FaUsersCog className="text-3xl text-blue-600" />
            <h3 className="mt-4 text-xl font-semibold md:text-2xl">Dedicated Support</h3>
            <p className="mt-2 text-base text-gray-600 md:text-lg">
              Get expert assistance throughout the credentialing process.
            </p>
          </div>
          <div className="p-8 bg-white shadow-lg rounded-xl">
            <FaSync className="text-3xl text-blue-600" />
            <h3 className="mt-4 text-xl font-semibold md:text-2xl">Ongoing Maintenance</h3>
            <p className="mt-2 text-base text-gray-600 md:text-lg">
              We handle re-credentialing and renewals for long-term compliance.
            </p>
          </div>
          <div className="p-8 bg-white shadow-lg rounded-xl">
            <FaFileMedical className="text-3xl text-blue-600" />
            <h3 className="mt-4 text-xl font-semibold md:text-2xl">Tailored Solutions</h3>
            <p className="mt-2 text-base text-gray-600 md:text-lg">
              Customize our credentialing services to fit your organization's needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CredentialingProcess;