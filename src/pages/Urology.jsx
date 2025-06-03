import React from 'react';

const UrologyBilling = () => {
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
          <h2 className="text-3xl font-bold">Urology Billing Services</h2>
          <p className="mt-4 text-lg">
            We specialize in comprehensive urology billing, revenue cycle management, and compliance solutions to help urologists streamline their financial operations and maximize reimbursements.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="px-6 py-12 mx-auto bg-white max-w-7xl">
        {/* Header Section */}
        <h2 className="text-3xl font-bold text-center">
          <span className="text-blue-500">Urology</span> Billing Services We Offer
        </h2>

        {/* Description */}
        <p className="max-w-3xl mx-auto mt-4 text-center text-gray-700">
          Urology billing requires precision due to complex coding for procedures like cystoscopies, lithotripsy, prostate treatments, and urinary tract surgeries. Our expert team ensures accurate claim submissions and faster reimbursements.
        </p>

        <p className="max-w-3xl mx-auto mt-2 text-center text-gray-700">
          We help urology practices optimize revenue cycle management by minimizing claim denials, ensuring compliance, and providing expert billing services tailored to specialty needs.
        </p>

        {/* Services Section */}
        <div className="flex flex-col justify-center gap-6 mt-6 md:flex-row">
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center"><span className="mr-2 text-lg text-blue-500">✔</span> Accurate CPT & ICD-10 Coding for Urology</li>
            <li className="flex items-center"><span className="mr-2 text-lg text-blue-500">✔</span> Prior Authorization & Claim Submission</li>
            <li className="flex items-center"><span className="mr-2 text-lg text-blue-500">✔</span> Denial Management & Appeals</li>
            <li className="flex items-center"><span className="mr-2 text-lg text-blue-500">✔</span> Compliance & Regulatory Support</li>
            <li className="flex items-center"><span className="mr-2 text-lg text-blue-500">✔</span> End-to-End Revenue Cycle Optimization</li>
          </ul>
        </div>

        {/* Challenges Section */}
        <h3 className="mt-12 text-2xl font-bold text-center">
          Common Challenges In <span className="text-blue-500">Urology</span> Billing
        </h3>

        <p className="max-w-4xl mx-auto mt-4 text-center text-gray-700">
          Urology billing is complex due to frequent coding changes, insurance policies, and procedure-specific documentation requirements. Without proper expertise, claim denials and delayed reimbursements can significantly impact a practice's financial health.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
          {/* Common Services */}
          <div className="p-6 bg-white border rounded-lg shadow-md">
            <h4 className="text-lg font-bold">Common Urology Billing Services</h4>
            <p className="mt-4 text-gray-600">
              Comprehensive claim management, including charge capture and coding audits.
            </p>
            <p className="mt-4 text-gray-600">
              Real-time eligibility verification to reduce claim rejections.
            </p>
            <p className="mt-4 text-gray-600">
              Efficient denial tracking and follow-up for quick reimbursements.
            </p>
            <p className="mt-4 text-gray-600">
              Accurate documentation support for urology procedures and diagnostic services.
            </p>
          </div>

          {/* Specialty Services */}
          <div className="p-6 text-white bg-blue-500 rounded-lg shadow-md">
            <h4 className="text-lg font-bold">Zemienie Urology Billing Services</h4>
            <p className="mt-4">
              Tailored urology billing solutions to ensure precise coding and compliance.
            </p>
            <p className="mt-4">
              Expert handling of complex procedures like TURP, lithotripsy, and urodynamic testing.
            </p>
            <p className="mt-4">
              Proactive claims management and denial resolution to boost revenue.
            </p>
            <p className="mt-4">
              Dedicated billing professionals ensuring seamless financial operations for urologists.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrologyBilling;