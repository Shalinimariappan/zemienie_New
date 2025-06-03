import React from 'react';

const PathologyBilling = () => {
  return (
    <div className="font-sans">
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
          <h2 className="text-3xl font-bold">Pathology Billing</h2>
          <p className="mt-4 text-lg">
            We provide specialized medical billing and revenue cycle management solutions tailored for pathology labs and diagnostic centers.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="px-6 py-12 mx-auto bg-white max-w-7xl">
        {/* Header Section */}
        <h2 className="text-3xl font-bold text-center">
          <span className="text-blue-500">Pathology</span> Billing Services We Offer
        </h2>

        {/* Description */}
        <p className="max-w-3xl mx-auto mt-4 text-center text-gray-700">
          Our pathology billing services ensure accurate claim submissions, compliance with regulatory guidelines, and optimized revenue for diagnostic labs.
        </p>

        <p className="max-w-3xl mx-auto mt-2 text-center text-gray-700">
          We specialize in efficient billing for laboratory tests, pathology procedures, and insurance reimbursements to maximize financial outcomes.
        </p>

        {/* Services Section */}
        <div className="flex flex-col justify-center gap-6 mt-6 md:flex-row">
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center"><span className="mr-2 text-lg text-blue-500">✔</span> Accurate Test Code Billing</li>
            <li className="flex items-center"><span className="mr-2 text-lg text-blue-500">✔</span> Seamless Insurance Verification</li>
            <li className="flex items-center"><span className="mr-2 text-lg text-blue-500">✔</span> Compliance & Regulatory Adherence</li>
            <li className="flex items-center"><span className="mr-2 text-lg text-blue-500">✔</span> Timely Claim Processing</li>
            <li className="flex items-center"><span className="mr-2 text-lg text-blue-500">✔</span> Revenue Cycle Optimization</li>
          </ul>
        </div>

        {/* Challenges Section */}
        <h3 className="mt-12 text-2xl font-bold text-center">
          Common Challenges In <span className="text-blue-500">Pathology</span> Billing
        </h3>

        <p className="max-w-4xl mx-auto mt-4 text-center text-gray-700">
          Pathology billing presents unique challenges, including coding complexities, regulatory compliance, and frequent claim denials due to documentation errors.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
          {/* Common Services */}
          <div className="p-6 bg-white border rounded-lg shadow-md">
            <h4 className="text-lg font-bold">Comprehensive Billing Solutions</h4>
            <p className="mt-4 text-gray-600">
              We provide end-to-end pathology billing services, ensuring accurate coding, claim management, and financial transparency.
            </p>
            <p className="mt-4 text-gray-600">
              Our compliance-driven approach minimizes audit risks and maximizes reimbursements for pathology labs.
            </p>
            <p className="mt-4 text-gray-600">
              Advanced analytics and real-time reporting for enhanced financial oversight and planning.
            </p>
          </div>

          {/* Specialty Services */}
          <div className="p-6 text-white bg-blue-500 rounded-lg shadow-md">
            <h4 className="text-lg font-bold">Zemienie Pathology Billing</h4>
            <p className="mt-4">
              Customized billing solutions for pathology labs to streamline insurance claims and improve cash flow.
            </p>
            <p className="mt-4">
              Expert support for navigating complex CPT coding and compliance regulations.
            </p>
            <p className="mt-4">
              Efficient management of denied claims and appeals to reduce revenue losses.
            </p>
            <p className="mt-4">
              AI-powered automation for claim tracking, reducing errors and improving reimbursement timelines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PathologyBilling;