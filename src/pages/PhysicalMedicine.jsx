import React from 'react';

const PhysicalMedicineRehabilitation = () => {
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
          <h2 className="text-3xl font-bold">Physical Medicine & Rehabilitation</h2>
          <p className="mt-4 text-lg">
            We specialize in medical billing, revenue cycle management, and compliance solutions for healthcare providers in Physical Medicine & Rehabilitation.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="px-6 py-12 mx-auto bg-white max-w-7xl">
        {/* Header Section */}
        <h2 className="text-3xl font-bold text-center">
          <span className="text-blue-500">Physical Medicine & Rehabilitation</span> Billing Services We Offer
        </h2>

        {/* Description */}
        <p className="max-w-3xl mx-auto mt-4 text-center text-gray-700">
          Our specialized medical billing services ensure accurate claim submissions, compliance, and financial stability for Physical Medicine & Rehabilitation practices.
        </p>

        <p className="max-w-3xl mx-auto mt-2 text-center text-gray-700">
          We provide expert billing services, revenue cycle management, and compliance solutions to optimize reimbursements and reduce claim denials.
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
          Common Challenges In <span className="text-blue-500">Physical Medicine & Rehabilitation</span> Billing
        </h3>

        <p className="max-w-4xl mx-auto mt-4 text-center text-gray-700">
          Medical billing for rehabilitation and physical medicine requires precision, compliance, and deep industry knowledge. Errors in documentation and coding can result in claim denials and revenue losses.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
          {/* Common Services */}
          <div className="p-6 bg-white border rounded-lg shadow-md">
            <h4 className="text-lg font-bold">Common Services</h4>
            <p className="mt-4 text-gray-600">
              We offer comprehensive billing solutions, including claim submission, denial management, and payment tracking for rehabilitation services.
            </p>
            <p className="mt-4 text-gray-600">
              Our team ensures compliance with industry regulations, reducing the risk of audits and penalties.
            </p>
            <p className="mt-4 text-gray-600">
              Efficient revenue cycle management to maximize reimbursements and streamline operations.
            </p>
            <p className="mt-4 text-gray-600">
              Real-time reporting and analytics for financial transparency and planning.
            </p>
          </div>

          {/* Specialty Services */}
          <div className="p-6 text-white bg-blue-500 rounded-lg shadow-md">
            <h4 className="text-lg font-bold">Specialized Services</h4>
            <p className="mt-4">
              Tailored billing solutions for Physical Medicine & Rehabilitation practices to optimize revenue and minimize errors.
            </p>
            <p className="mt-4">
              Expert guidance on complex coding and documentation requirements for rehabilitation treatments and therapies.
            </p>
            <p className="mt-4">
              Dedicated support for compliance, audits, and regulatory changes.
            </p>
            <p className="mt-4">
              Automated claim tracking and processing to ensure timely reimbursements.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="flex items-center justify-center px-4 py-24 bg-white sm:px-6 lg:px-4">
        <div className="w-full max-w-4xl p-6 bg-white sm:p-8">
          <h2 className="text-2xl font-bold text-center text-black sm:text-3xl">
            Get in touch with us. 
            <span className="text-blue-600"> We're here</span> to assist you.
          </h2>
          
          <form className="mt-6 space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              <input type="text" placeholder="Your Name" className="w-full py-2 border-b-2 border-gray-300 outline-none focus:border-blue-600" />
              <input type="email" placeholder="Email Address" className="w-full py-2 border-b-2 border-gray-300 outline-none focus:border-blue-600" />
              <input type="text" placeholder="Phone Number (optional)" className="w-full py-2 border-b-2 border-gray-300 outline-none focus:border-blue-600" />
            </div>
            
            <textarea placeholder="Message" className="w-full py-2 mt-4 border-b-2 border-gray-300 outline-none focus:border-blue-600"></textarea>
            
            <div className="text-center">
              <button type="submit" className="px-6 py-2 text-white transition bg-blue-600 rounded-md hover:bg-blue-700">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default PhysicalMedicineRehabilitation;