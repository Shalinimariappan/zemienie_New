import React from 'react';

const NeurologyBilling = () => {
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
          <h2 className="text-3xl font-bold">Neurology Billing Services</h2>
          <p className="mt-4 text-lg">
            We specialize in neurology medical billing, revenue cycle management, and compliance solutions for neurologists and neurology clinics. 
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="px-6 py-12 mx-auto bg-white max-w-7xl">
        {/* Header Section */}
        <h2 className="text-3xl font-bold text-center">
          <span className="text-blue-500">Neurology</span> Billing Services We Offer
        </h2>

        {/* Description */}
        <p className="max-w-3xl mx-auto mt-4 text-center text-gray-700">
          Neurology billing involves complex procedures, diagnostic codes, and compliance challenges. Our services ensure accurate claim submissions, timely reimbursements, and minimized denials.
        </p>

        <p className="max-w-3xl mx-auto mt-2 text-center text-gray-700">
          We streamline neurology revenue cycle management, handling intricate documentation, coding, and insurance regulations with precision.
        </p>

        {/* Services Section */}
        <div className="flex flex-col justify-center gap-6 mt-6 md:flex-row">
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center"><span className="mr-2 text-lg text-blue-500">✔</span> Expert Neurology Billing Support</li>
            <li className="flex items-center"><span className="mr-2 text-lg text-blue-500">✔</span> Seamless Insurance Claim Processing</li>
            <li className="flex items-center"><span className="mr-2 text-lg text-blue-500">✔</span> ICD-10 & CPT Coding for Neurology</li>
            <li className="flex items-center"><span className="mr-2 text-lg text-blue-500">✔</span> Compliance & HIPAA Adherence</li>
            <li className="flex items-center"><span className="mr-2 text-lg text-blue-500">✔</span> Revenue Optimization & Denial Management</li>
          </ul>
        </div>

        {/* Challenges Section */}
        <h3 className="mt-12 text-2xl font-bold text-center">
          Common Challenges In <span className="text-blue-500">Neurology</span> Billing
        </h3>

        <p className="max-w-4xl mx-auto mt-4 text-center text-gray-700">
          Neurology billing presents unique challenges due to the extensive diagnostic tests, procedures, and compliance regulations involved. Errors in coding, documentation, or claim submission can result in delayed payments and revenue loss.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
          {/* Common Services */}
          <div className="p-6 bg-white border rounded-lg shadow-md">
            <h4 className="text-lg font-bold">Common Neurology Services</h4>
            <p className="mt-4 text-gray-600">
              Our team handles EEG, EMG, nerve conduction studies, and other neurology-specific procedures with precision billing.
            </p>
            <p className="mt-4 text-gray-600">
              We ensure accurate coding for conditions such as epilepsy, stroke, migraines, and neurodegenerative diseases.
            </p>
            <p className="mt-4 text-gray-600">
              Our system tracks reimbursements and minimizes claim denials through proactive auditing.
            </p>
            <p className="mt-4 text-gray-600">
              We provide detailed financial reporting and analytics to help you optimize your neurology practice revenue.
            </p>
          </div>

          {/* Specialty Services */}
          <div className="p-6 text-white bg-blue-500 rounded-lg shadow-md">
            <h4 className="text-lg font-bold">Zemienie Neurology Services</h4>
            <p className="mt-4">
              Tailored billing services specifically designed for neurology practices, ensuring financial efficiency.
            </p>
            <p className="mt-4">
              Assistance with prior authorizations and insurance verification for neurology-related treatments.
            </p>
            <p className="mt-4">
              Expert support for compliance with Medicare, Medicaid, and private insurance regulations.
            </p>
            <p className="mt-4">
              AI-powered automated claim tracking and revenue cycle optimization for neurology specialists.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeurologyBilling;