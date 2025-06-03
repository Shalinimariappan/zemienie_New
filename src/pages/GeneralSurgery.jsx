import React from 'react';

const GeneralSurgery = () => {
  return (
    <div>
      {/* Intro Section */}
      <section className="relative py-12 overflow-hidden text-center text-white bg-blue-500 sm:py-16 lg:py-20">
        {/* Background Circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] lg:w-[550px] lg:h-[550px] bg-blue-400 rounded-full opacity-50 absolute"></div>
          <div className="w-[180px] h-[180px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] bg-blue-300 rounded-full opacity-50 absolute"></div>
          <div className="w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] lg:w-[250px] lg:h-[250px] bg-blue-200 rounded-full opacity-50 absolute"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold">General Surgery</h2>
          <p className="mt-4 text-lg">
            We specialize in medical billing, revenue cycle management, and compliance solutions for general surgery providers.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="px-6 py-12 mx-auto bg-white max-w-7xl">
        {/* Header Section */}
        <h2 className="text-3xl font-bold text-center">
          <span className="text-blue-500">General Surgery</span> Billing Services We Offer
        </h2>

        {/* Description */}
        <p className="max-w-3xl mx-auto mt-4 text-center text-gray-700">
          Our medical billing services for general surgery ensure accurate claim submissions, compliance, and optimized financial performance.
        </p>

        <p className="max-w-3xl mx-auto mt-2 text-center text-gray-700">
          We offer end-to-end billing solutions, revenue cycle management, and compliance support to maximize reimbursements and minimize denials.
        </p>

        {/* Services Section */}
        <div className="flex flex-col justify-center gap-6 mt-6 md:flex-row">
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center"><span className="mr-2 text-lg text-blue-500">✔</span> Expert Consulting for General Surgeons</li>
            <li className="flex items-center"><span className="mr-2 text-lg text-blue-500">✔</span> Efficient Claim Submission & Processing</li>
            <li className="flex items-center"><span className="mr-2 text-lg text-blue-500">✔</span> Monthly Financial Reports & Insights</li>
            <li className="flex items-center"><span className="mr-2 text-lg text-blue-500">✔</span> Regulatory Compliance & Audit Support</li>
            <li className="flex items-center"><span className="mr-2 text-lg text-blue-500">✔</span> Comprehensive Revenue Cycle Management</li>
          </ul>
        </div>

        {/* Challenges Section */}
        <h3 className="mt-12 text-2xl font-bold text-center">
          Common Challenges In <span className="text-blue-500">General Surgery</span> Billing
        </h3>

        <p className="max-w-4xl mx-auto mt-4 text-center text-gray-700">
          General surgery billing is complex, requiring precise coding, documentation, and compliance to avoid claim denials and revenue loss.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
          {/* Common Services */}
          <div className="p-6 bg-white border rounded-lg shadow-md">
            <h4 className="text-lg font-bold">Common Services</h4>
            <p className="mt-4 text-gray-600">
              We provide full-spectrum billing solutions, including claim submissions, denial management, and reimbursement tracking.
            </p>
            <p className="mt-4 text-gray-600">
              Our team ensures compliance with surgical billing guidelines, minimizing financial risks.
            </p>
            <p className="mt-4 text-gray-600">
              Advanced revenue cycle management for accurate payments and reduced delays.
            </p>
            <p className="mt-4 text-gray-600">
              Data-driven reporting and financial planning support for surgical practices.
            </p>
          </div>

          {/* Specialty Services */}
          <div className="p-6 text-white bg-blue-500 rounded-lg shadow-md">
            <h4 className="text-lg font-bold">Specialized Billing Services</h4>
            <p className="mt-4">
              Customized billing solutions tailored for general surgery practices to enhance revenue efficiency.
            </p>
            <p className="mt-4">
              Expertise in complex surgical coding, modifier applications, and documentation accuracy.
            </p>
            <p className="mt-4">
              Dedicated support for compliance, audits, and regulatory updates.
            </p>
            <p className="mt-4">
              Automated claim tracking and management for seamless reimbursement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralSurgery;