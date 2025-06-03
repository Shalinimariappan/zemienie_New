const Careers = () => {
  return (
    <div className="font-sans">
      {/* Intro Section */}
      <section className="relative py-12 overflow-hidden text-center text-white bg-blue-500 sm:py-16 lg:py-20">
        {/* Background Circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] lg:w-[550px] lg:h-[550px] bg-blue-400 rounded-full opacity-50"></div>
          <div className="absolute w-[180px] h-[180px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] bg-blue-300 rounded-full opacity-50"></div>
          <div className="absolute w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] lg:w-[250px] lg:h-[250px] bg-blue-200 rounded-full opacity-50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-6 mx-auto sm:px-8 lg:px-10">
          <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">Career</h2>
          <p className="mt-3 text-sm sm:text-base lg:text-lg">
            Our expertise covers hospitals, clinics, telemedicine, diagnostics, and multi-specialty practices to ensure seamless financial operations.
          </p>
        </div>
      </section>

      {/* Careers Section */}
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

        {/* Job Listings */}
        <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto mt-10 mb-4 md:grid-cols-3">
          {/* Job Card */}
          <div className="p-5 bg-white border rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900">
              Charge Entry (Medical Billing)
            </h3>
            <p className="mt-2 text-gray-700"><strong>Experience:</strong> 0 - 5 Years</p>
            <p className="text-gray-700"><strong>Job Location:</strong> Chennai, India</p>
            <p className="mt-2 text-gray-600"><strong>Job Description:</strong></p>
            <p className="mt-1 text-gray-600">
              Build the career you want. Here at Zemienie Inc, we are committed not only to deli..
              <a href="/career-detail" className="text-blue-500">Read more</a>
            </p>
            <button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600">
              Apply Now
            </button>
          </div>

          {/* Additional job cards can be added here following the same pattern */}
        </div>
      </section>
    </div>
  );
};

export default Careers;