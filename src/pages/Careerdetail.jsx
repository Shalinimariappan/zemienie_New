import React from 'react';

const Careers = () => {
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
        <div className="relative z-10 max-w-3xl px-6 mx-auto sm:px-8 lg:px-10">
          <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">Career</h2>
          <p className="mt-3 text-sm sm:text-base lg:text-lg">
            Our expertise covers hospitals, clinics, telemedicine, diagnostics, and multi-specialty practices to ensure seamless financial operations.
          </p>
        </div>
      </section>

      {/* Careers Content Section */}
      <section className="px-5 py-10 bg-white">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Career Opportunities In Medical Billing & Coding Services
          </h1>
          <p className="mt-2 text-lg font-semibold text-blue-500">
            LEARN, DEVELOP AND GROW YOUR CAREERS WITH ZEMIENIE
          </p>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600">
            Build the career you want. Here at Zemienie Inc, we are committed not only to delivering services to our customers, 
            we also committed to your career development as well. We are leading in this industry and growing. 
            And growth creates new opportunities. Consider joining us! Mail your resume to info@zemienie.com
          </p>
        </div>

        {/* Job detail */}
        <section className="p-4">
          <div className="max-w-4xl p-6 mx-auto bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800">Charge Entry (Medical Billing)</h2>
    
            <p className="mt-2 text-gray-600"><strong>Experience:</strong> 0 - 5 Years</p>
            <p className="text-gray-600"><strong>Job Location:</strong> Chennai, India</p>
    
            <h3 className="mt-4 font-semibold text-gray-700">Job Description:</h3>
            <p className="mt-2 text-gray-600">
              Accurate posting of Patient demographic detail Charge Entry in to the client's medical billing system based on account-specific rules.
            </p>
    
            <ul className="mt-3 space-y-2 text-gray-600 list-disc list-inside">
              <li>Daily account productivity and reporting of activity.</li>
              <li>Mail Correspondence in a timely manner.</li>
              <li>Efficiently communicate with the other billing departments and to clients, if needed to request information.</li>
              <li>Familiar about billing clients and their types of services being rendered.</li>
              <li>Clarify patient and insurance issues and determine resolutions in a timely and accurate manner.</li>
              <li>Make recommendations to management and actively participate in continuous quality improvement and enhancement of reimbursement.</li>
              <li>Adhere to the company's information security guidelines.</li>
            </ul>
    
            <div className="mt-6">
              <button className="px-5 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">Apply Now</button>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Careers;