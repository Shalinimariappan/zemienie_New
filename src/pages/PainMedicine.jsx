import React from 'react';

const PainMedicine = () => {
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
          <h2 className="text-3xl font-bold">Pain Medicine</h2>
          <p className="mt-4 text-lg">
            We specialize in medical billing, revenue cycle management, and compliance solutions for pain management providers.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="px-6 py-12 mx-auto bg-white max-w-7xl">
        {/* Header Section */}
        <h2 className="text-3xl font-bold text-center">
          <span className="text-blue-500">Pain Medicine</span> Billing Services We Offer
        </h2>

        {/* Description */}
        <p className="max-w-3xl mx-auto mt-4 text-center text-gray-700">
          Our medical billing services ensure accurate coding, efficient claim submissions, and regulatory compliance to maximize revenue for pain management specialists.
        </p>

        <p className="max-w-3xl mx-auto mt-2 text-center text-gray-700">
          We provide specialized billing services, compliance support, and revenue cycle management to optimize reimbursements and minimize claim denials.
        </p>

        {/* Services Section */}
        <div className="flex flex-col justify-center gap-6 mt-6 md:flex-row">
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center"><span className="mr-2 text-lg text-blue-500">✔</span> Expert Pain Medicine Billing</li>
            <li className="flex items-center"><span className="mr-2 text-lg text-blue-500">✔</span> Streamlined Claim Submissions</li>
            <li className="flex items-center"><span className="mr-2 text-lg text-blue-500">✔</span> Monthly Financial Reports</li>
            <li className="flex items-center"><span className="mr-2 text-lg text-blue-500">✔</span> Compliance & Audit Readiness</li>
            <li className="flex items-center"><span className="mr-2 text-lg text-blue-500">✔</span> End-to-End Revenue Cycle Management</li>
          </ul>
        </div>

        {/* Challenges Section */}
        <h3 className="mt-12 text-2xl font-bold text-center">
          Common Challenges In <span className="text-blue-500">Pain Medicine</span> Billing
        </h3>

        <p className="max-w-4xl mx-auto mt-4 text-center text-gray-700">
          Pain medicine billing requires precise coding, thorough documentation, and adherence to ever-changing industry regulations. Billing errors can result in claim denials and financial losses.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
          {/* Common Services */}
          <div className="p-6 bg-white border rounded-lg shadow-md">
            <h4 className="text-lg font-bold">Common Services</h4>
            <p className="mt-4 text-gray-600">
              We provide comprehensive billing solutions, including claim submission, denial management, and reimbursement optimization.
            </p>
            <p className="mt-4 text-gray-600">
              Our compliance team ensures that your practice meets all industry regulations to avoid penalties and audits.
            </p>
            <p className="mt-4 text-gray-600">
              Streamlined revenue cycle management to enhance financial efficiency and operational workflow.
            </p>
            <p className="mt-4 text-gray-600">
              Real-time financial tracking and analytics for better decision-making and planning.
            </p>
          </div>

          {/* Specialty Services */}
          <div className="p-6 text-white bg-blue-500 rounded-lg shadow-md">
            <h4 className="text-lg font-bold">Zemienie Pain Medicine Solutions</h4>
            <p className="mt-4">
              Tailored billing strategies to support pain management providers in achieving maximum reimbursements.
            </p>
            <p className="mt-4">
              Expertise in complex coding and documentation requirements specific to pain medicine practices.
            </p>
            <p className="mt-4">
              Dedicated compliance and audit support to mitigate risks and ensure smooth operations.
            </p>
            <p className="mt-4">
              Automated claim tracking and expedited processing to ensure timely payments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PainMedicine;