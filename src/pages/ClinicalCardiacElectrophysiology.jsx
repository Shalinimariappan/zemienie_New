import React from 'react';

const ClinicalCardiacElectrophysiology = () => {
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
          <h2 className="text-3xl font-bold">Clinical Cardiac Electrophysiology</h2>
          <p className="mt-4 text-lg">
            We specialize in medical billing, revenue cycle management, and compliance solutions for cardiac electrophysiology providers.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="px-6 py-12 mx-auto bg-white max-w-7xl">
        {/* Header Section */}
        <h2 className="text-3xl font-bold text-center">
          <span className="text-blue-500">Clinical Cardiac Electrophysiology</span> Billing Services We Offer
        </h2>

        {/* Description */}
        <p className="max-w-3xl mx-auto mt-4 text-center text-gray-700">
          Our medical billing services are tailored for cardiac electrophysiology practices, ensuring accurate claim submissions and compliance with industry standards.
        </p>

        <p className="max-w-3xl mx-auto mt-2 text-center text-gray-700">
          We provide expert billing solutions, insurance verification, and revenue optimization to enhance financial performance and reduce claim denials.
        </p>

        {/* Services Section */}
        <div className="flex flex-col justify-center gap-6 mt-6 md:flex-row">
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center"><span className="mr-2 text-lg text-blue-500">✔</span> Free Consulting With Experts</li>
            <li className="flex items-center"><span className="mr-2 text-lg text-blue-500">✔</span> Accurate Cardiac Electrophysiology Coding</li>
            <li className="flex items-center"><span className="mr-2 text-lg text-blue-500">✔</span> Insurance & Eligibility Verification</li>
            <li className="flex items-center"><span className="mr-2 text-lg text-blue-500">✔</span> Compliance & Audit Support</li>
            <li className="flex items-center"><span className="mr-2 text-lg text-blue-500">✔</span> End-to-End Revenue Management</li>
          </ul>
        </div>

        {/* Challenges Section */}
        <h3 className="mt-12 text-2xl font-bold text-center">
          Common Challenges In <span className="text-blue-500">Clinical Cardiac Electrophysiology</span> Billing
        </h3>

        <p className="max-w-4xl mx-auto mt-4 text-center text-gray-700">
          Billing for cardiac electrophysiology services requires precision in coding, compliance with insurance policies, and expertise in handling reimbursements to prevent revenue loss.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
          {/* Common Services */}
          <div className="p-6 bg-white border rounded-lg shadow-md">
            <h4 className="text-lg font-bold">Common Services</h4>
            <p className="mt-4 text-gray-600">
              We offer comprehensive billing solutions, including precise claim submission, denial management, and payment tracking.
            </p>
            <p className="mt-4 text-gray-600">
              Our team ensures compliance with evolving insurance guidelines and industry regulations to prevent audits and penalties.
            </p>
            <p className="mt-4 text-gray-600">
              Revenue cycle management solutions to maximize reimbursements and streamline financial operations.
            </p>
            <p className="mt-4 text-gray-600">
              Advanced reporting and analytics for financial transparency and strategic planning.
            </p>
          </div>

          {/* Specialty Services */}
          <div className="p-6 text-white bg-blue-500 rounded-lg shadow-md">
            <h4 className="text-lg font-bold">Specialized Cardiac Electrophysiology Billing</h4>
            <p className="mt-4">
              Tailored billing solutions for cardiac electrophysiology practices to ensure accurate claim processing and timely reimbursements.
            </p>
            <p className="mt-4">
              Expertise in handling complex cardiac electrophysiology coding and documentation requirements.
            </p>
            <p className="mt-4">
              Dedicated support for compliance, audits, and evolving healthcare regulations.
            </p>
            <p className="mt-4">
              Automated claim tracking and processing to minimize delays and optimize revenue.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicalCardiacElectrophysiology;