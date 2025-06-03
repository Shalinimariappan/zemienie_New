import React from 'react';

const RadiologyDiagnostic = () => {
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
          <h2 className="text-3xl font-bold">Radiology-Diagnostic</h2>
          <p className="mt-4 text-lg">
            We specialize in medical billing, revenue cycle management, and compliance solutions for radiology practices, ensuring seamless claim processing and maximum reimbursements.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="px-6 py-12 mx-auto bg-white max-w-7xl">
            
        {/* Header Section */}
        <h2 className="text-3xl font-bold text-center">
          <span className="text-blue-500">Radiology-Diagnostic</span> Billing Services We Offer
        </h2>

        {/* Description */}
        <p className="max-w-3xl mx-auto mt-4 text-center text-gray-700">
          Our billing solutions for radiologists ensure accurate claim submissions, reduced denials, and compliance with evolving healthcare regulations.
        </p>

        <p className="max-w-3xl mx-auto mt-2 text-center text-gray-700">
          We provide expert medical billing, compliance solutions, and revenue cycle management to optimize reimbursements for diagnostic radiology services.
        </p>

        {/* Services Section */}
        <div className="flex flex-col justify-center gap-6 mt-6 md:flex-row">
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center"><span className="mr-2 text-lg text-blue-500">✔</span> Dedicated Radiology Billing Specialists</li>
            <li className="flex items-center"><span className="mr-2 text-lg text-blue-500">✔</span> Seamless Claim Processing & Submission</li>
            <li className="flex items-center"><span className="mr-2 text-lg text-blue-500">✔</span> Accurate CPT & ICD-10 Coding</li>
            <li className="flex items-center"><span className="mr-2 text-lg text-blue-500">✔</span> Compliance & Audit Assistance</li>
            <li className="flex items-center"><span className="mr-2 text-lg text-blue-500">✔</span> End-to-End Revenue Cycle Management</li>
          </ul>
        </div>

        {/* Challenges Section */}
        <h3 className="mt-12 text-2xl font-bold text-center">
          Common Challenges In <span className="text-blue-500">Radiology-Diagnostic</span> Billing
        </h3>

        <p className="max-w-4xl mx-auto mt-4 text-center text-gray-700">
          Radiology billing requires detailed documentation, accurate coding, and compliance with insurance policies. Errors can lead to delayed payments, claim denials, and financial losses.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
          
          {/* Common Services */}
          <div className="p-6 bg-white border rounded-lg shadow-md">
            <h4 className="text-lg font-bold">Common Services</h4>
            <p className="mt-4 text-gray-600">
              Our billing services cover diagnostic imaging procedures like X-rays, MRIs, CT scans, ultrasounds, and nuclear medicine.
            </p>
            <p className="mt-4 text-gray-600">
              We ensure accurate coding (CPT, ICD-10) for all radiology procedures, reducing errors and increasing reimbursement rates.
            </p>
            <p className="mt-4 text-gray-600">
              Real-time tracking of claims, payments, and denials for transparency and optimized revenue management.
            </p>
            <p className="mt-4 text-gray-600">
              Compliance with HIPAA and CMS guidelines to protect patient data and prevent regulatory issues.
            </p>
          </div>

          {/* Specialty Services */}
          <div className="p-6 text-white bg-blue-500 rounded-lg shadow-md">
            <h4 className="text-lg font-bold">Specialized Radiology Billing Services</h4>
            <p className="mt-4">
              Advanced billing solutions for interventional radiology, diagnostic imaging, and tele-radiology practices.
            </p>
            <p className="mt-4">
              Expert assistance in navigating prior authorization requirements and insurance eligibility verification.
            </p>
            <p className="mt-4">
              AI-driven claim processing and real-time analytics to boost revenue efficiency.
            </p>
            <p className="mt-4">
              Personalized support for audits, compliance, and revenue cycle optimization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadiologyDiagnostic;