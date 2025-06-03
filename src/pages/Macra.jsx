import { 
    FaChartLine,
    FaFileMedical,
    FaTasks,
    FaCogs,
    FaCheckCircle,
    FaSyncAlt,
    FaChartBar,
    FaUserTie,
    FaMedal,
    FaLightbulb
  } from 'react-icons/fa';
  
  const MacraPage = () => {
    return (
      <div className="font-sans">
        {/* Intro Section */}
        <section className="relative py-12 overflow-hidden text-center text-white bg-blue-500 sm:py-16 lg:py-20">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] lg:w-[550px] lg:h-[550px] bg-blue-400 rounded-full opacity-50 absolute"></div>
            <div className="w-[180px] h-[180px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] bg-blue-300 rounded-full opacity-50 absolute"></div>
            <div className="w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] lg:w-[250px] lg:h-[250px] bg-blue-200 rounded-full opacity-50 absolute"></div>
          </div>
  
          <div className="relative z-10 max-w-3xl px-6 mx-auto sm:px-8 lg:px-10">
            <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">MACRA / QPP Compliance</h2>
            <p className="mt-3 text-sm sm:text-base lg:text-lg">
              Optimize provider performance and reimbursement under MACRA's Quality Payment Program (QPP) with our expert solutions.
            </p>
          </div>
        </section>
  
        {/* MACRA / QPP Services */}
        <section className="p-8 text-center bg-white md:px-16 lg:px-24">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Comprehensive <span className="text-blue-600">MACRA / QPP</span> Services
          </h2>
          <p className="mt-4 text-base text-gray-700 md:text-lg lg:text-xl">
            Ensure compliance and maximize incentives with our expert QPP solutions.
          </p>
  
          <div className="grid items-center grid-cols-1 gap-10 mt-12 md:grid-cols-2">
            <div className="flex items-start">
              <FaChartLine className="text-3xl text-blue-600 md:text-4xl" />
              <div className="ml-6 text-left">
                <h3 className="text-xl font-semibold md:text-2xl">MIPS Reporting</h3>
                <p className="text-base md:text-lg">Track and submit your Merit-based Incentive Payment System (MIPS) scores efficiently.</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaFileMedical className="text-3xl text-blue-600 md:text-4xl" />
              <div className="ml-6 text-left">
                <h3 className="text-xl font-semibold md:text-2xl">Advanced APM Support</h3>
                <p className="text-base md:text-lg">Transition smoothly into Alternative Payment Models (APMs) for higher reimbursements.</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaTasks className="text-3xl text-blue-600 md:text-4xl" />
              <div className="ml-6 text-left">
                <h3 className="text-xl font-semibold md:text-2xl">Performance Optimization</h3>
                <p className="text-base md:text-lg">Enhance clinical workflows to improve quality and cost efficiency.</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaCogs className="text-3xl text-blue-600 md:text-4xl" />
              <div className="ml-6 text-left">
                <h3 className="text-xl font-semibold md:text-2xl">Data Integration</h3>
                <p className="text-base md:text-lg">Seamlessly integrate EHR systems for accurate QPP data tracking.</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Why Choose Our MACRA / QPP Services */}
        <section className="px-8 py-12 text-center bg-white md:px-16 lg:px-24 md:py-20">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Why Choose Our <span className="text-blue-600">MACRA / QPP Services?</span>
          </h2>
          <p className="mt-4 text-base text-gray-700 md:text-lg lg:text-xl">
            Achieve compliance and financial success with our proven QPP strategies.
          </p>
  
          <div className="grid grid-cols-1 gap-10 mt-12 text-left md:grid-cols-2 lg:grid-cols-3">
            <div className="p-8 bg-white shadow-lg rounded-xl">
              <FaCheckCircle className="text-3xl text-blue-600" />
              <h3 className="mt-4 text-xl font-semibold md:text-2xl">Regulatory Compliance</h3>
              <p className="mt-2 text-base text-gray-600 md:text-lg">
                Stay ahead of CMS regulations and QPP requirements.
              </p>
            </div>
            <div className="p-8 bg-white shadow-lg rounded-xl">
              <FaSyncAlt className="text-3xl text-blue-600" />
              <h3 className="mt-4 text-xl font-semibold md:text-2xl">Automated Reporting</h3>
              <p className="mt-2 text-base text-gray-600 md:text-lg">
                Simplify data submission with automated MIPS and APM reporting.
              </p>
            </div>
            <div className="p-8 bg-white shadow-lg rounded-xl">
              <FaChartBar className="text-3xl text-blue-600" />
              <h3 className="mt-4 text-xl font-semibold md:text-2xl">Performance Benchmarking</h3>
              <p className="mt-2 text-base text-gray-600 md:text-lg">
                Compare your practice's performance to industry standards.
              </p>
            </div>
            <div className="p-8 bg-white shadow-lg rounded-xl">
              <FaUserTie className="text-3xl text-blue-600" />
              <h3 className="mt-4 text-xl font-semibold md:text-2xl">Expert Consultation</h3>
              <p className="mt-2 text-base text-gray-600 md:text-lg">
                Receive personalized guidance from MACRA compliance specialists.
              </p>
            </div>
            <div className="p-8 bg-white shadow-lg rounded-xl">
              <FaMedal className="text-3xl text-blue-600" />
              <h3 className="mt-4 text-xl font-semibold md:text-2xl">Maximized Incentives</h3>
              <p className="mt-2 text-base text-gray-600 md:text-lg">
                Earn higher reimbursements through strategic QPP participation.
              </p>
            </div>
            <div className="p-8 bg-white shadow-lg rounded-xl">
              <FaLightbulb className="text-3xl text-blue-600" />
              <h3 className="mt-4 text-xl font-semibold md:text-2xl">Custom Solutions</h3>
              <p className="mt-2 text-base text-gray-600 md:text-lg">
                Tailor our MACRA / QPP services to your practice's unique needs.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default MacraPage;