import React from 'react';

const PsychiatryBilling = () => {
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
          <h2 className="text-3xl font-bold">Psychiatry Billing</h2>
          <p className="mt-4 text-lg">
            We specialize in medical billing, revenue cycle management, and compliance solutions for psychiatric healthcare providers.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="px-6 py-12 mx-auto bg-white max-w-7xl">
        {/* Header Section */}
        <h2 className="text-3xl font-bold text-center">
          <span className="text-blue-500">Psychiatry</span> Billing Services We Offer
        </h2>

        {/* Description */}
        <p className="max-w-3xl mx-auto mt-4 text-center text-gray-700">
          Our psychiatric billing services ensure accurate claim submissions, compliance with mental health regulations, and optimized revenue for psychiatric professionals.
        </p>

        <p className="max-w-3xl mx-auto mt-2 text-center text-gray-700">
          We provide expert billing services, compliance solutions, and revenue cycle management to streamline operations and minimize claim denials.
        </p>

        {/* Services Section */}
        <div className="flex flex-col justify-center gap-6 mt-6 md:flex-row">
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center"><span className="mr-2 text-lg text-blue-500">✔</span> Free Consulting With Experts</li>
            <li className="flex items-center"><span className="mr-2 text-lg text-blue-500">✔</span> Seamless Claim Processing</li>
            <li className="flex items-center"><span className="mr-2 text-lg text-blue-500">✔</span> Monthly Revenue Reports</li>
            <li className="flex items-center"><span className="mr-2 text-lg text-blue-500">✔</span> Compliance & Audit Support</li>
            <li className="flex items-center"><span className="mr-2 text-lg text-blue-500">✔</span> End-to-End Revenue Management</li>
          </ul>
        </div>

        {/* Challenges Section */}
        <h3 className="mt-12 text-2xl font-bold text-center">
          Common Challenges In <span className="text-blue-500">Psychiatry</span> Billing
        </h3>

        <p className="max-w-4xl mx-auto mt-4 text-center text-gray-700">
          Psychiatric billing requires accuracy, compliance with mental health coding, and proper documentation to avoid claim denials and ensure proper reimbursements.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
          {/* Common Services */}
          <div className="p-6 bg-white border rounded-lg shadow-md">
            <h4 className="text-lg font-bold">Common Services</h4>
            <p className="mt-4 text-gray-600">
              We offer comprehensive billing solutions, including claim submission, denial management, and payment tracking for psychiatric services.
            </p>
            <p className="mt-4 text-gray-600">
              Our team ensures compliance with mental health regulations to minimize audit risks and penalties.
            </p>
            <p className="mt-4 text-gray-600">
              Efficient revenue cycle management to optimize reimbursements and enhance financial performance.
            </p>
            <p className="mt-4 text-gray-600">
              Real-time reporting and analytics for better financial planning and transparency.
            </p>
          </div>

          {/* Specialty Services */}
          <div className="p-6 text-white bg-blue-500 rounded-lg shadow-md">
            <h4 className="text-lg font-bold">Zemienie Services</h4>
            <p className="mt-4">
              Specialized billing solutions for psychiatric practices to improve revenue and ensure coding accuracy.
            </p>
            <p className="mt-4">
              Expert support for complex psychiatric coding, documentation, and compliance requirements.
            </p>
            <p className="mt-4">
              Dedicated assistance for audits, regulatory changes, and compliance management.
            </p>
            <p className="mt-4">
              Automated claim tracking and processing to guarantee timely reimbursements for psychiatric services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PsychiatryBilling;