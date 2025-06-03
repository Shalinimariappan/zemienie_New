import { 
    FaXRay, 
    FaMoneyCheckAlt, 
    FaFileMedical, 
    FaChartBar,
    FaFileInvoiceDollar,
    FaCreditCard,
    FaShieldAlt,
    FaUserMd,
    FaTasks,
    FaHospital 
  } from 'react-icons/fa';
  
  const ImagingBilling = () => {
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
            <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">Imaging Center Billing</h2>
            <p className="mt-3 text-sm sm:text-base lg:text-lg">
              Streamline your imaging center's billing process with our expert solutions, ensuring accurate claims and faster reimbursements.
            </p>
          </div>
        </section>
  
        {/* Services Section */}
        <section className="p-8 text-center bg-white md:px-16 lg:px-24">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Comprehensive <span className="text-blue-600">Imaging Center Billing</span> Services
          </h2>
          <p className="mt-4 text-base text-gray-700 md:text-lg lg:text-xl">
            Optimize your revenue with specialized billing solutions for imaging centers.
          </p>
  
          <div className="grid items-center grid-cols-1 gap-10 mt-12 md:grid-cols-2">
            <div className="flex items-start">
              <FaXRay className="text-3xl text-blue-600 md:text-4xl" />
              <div className="ml-6 text-left">
                <h3 className="text-xl font-semibold md:text-2xl">Accurate Coding</h3>
                <p className="text-base md:text-lg">Ensure precise coding for radiology procedures.</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaMoneyCheckAlt className="text-3xl text-blue-600 md:text-4xl" />
              <div className="ml-6 text-left">
                <h3 className="text-xl font-semibold md:text-2xl">Faster Reimbursements</h3>
                <p className="text-base md:text-lg">Reduce claim denials and speed up payments.</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaFileMedical className="text-3xl text-blue-600 md:text-4xl" />
              <div className="ml-6 text-left">
                <h3 className="text-xl font-semibold md:text-2xl">Compliance Assurance</h3>
                <p className="text-base md:text-lg">Meet all regulatory standards and avoid penalties.</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaChartBar className="text-3xl text-blue-600 md:text-4xl" />
              <div className="ml-6 text-left">
                <h3 className="text-xl font-semibold md:text-2xl">Financial Insights</h3>
                <p className="text-base md:text-lg">Track revenue trends with detailed analytics.</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Features Section */}
        <section className="px-8 py-12 text-center bg-white md:px-16 lg:px-24 md:py-20">
          <h2 className="text-2xl font-semibold md:text-3xl">
            Why Choose Our <span className="text-blue-600">Imaging Center Billing</span> Services?
          </h2>
          <p className="mt-4 text-base text-gray-700 md:text-lg lg:text-xl">
            Experience seamless billing and revenue cycle management for imaging centers.
          </p>
  
          <div className="grid grid-cols-1 gap-10 mt-12 text-left md:grid-cols-2 lg:grid-cols-3">
            <div className="p-8 bg-white shadow-lg rounded-xl">
              <FaFileInvoiceDollar className="text-3xl text-blue-600" />
              <h3 className="mt-4 text-xl font-semibold md:text-2xl">Claims Optimization</h3>
              <p className="mt-2 text-base text-gray-600 md:text-lg">
                Reduce rejections with accurate and timely claims submission.
              </p>
            </div>
            <div className="p-8 bg-white shadow-lg rounded-xl">
              <FaCreditCard className="text-3xl text-blue-600" />
              <h3 className="mt-4 text-xl font-semibold md:text-2xl">Payment Processing</h3>
              <p className="mt-2 text-base text-gray-600 md:text-lg">
                Ensure quick and hassle-free payment collections.
              </p>
            </div>
            <div className="p-8 bg-white shadow-lg rounded-xl">
              <FaShieldAlt className="text-3xl text-blue-600" />
              <h3 className="mt-4 text-xl font-semibold md:text-2xl">HIPAA Compliance</h3>
              <p className="mt-2 text-base text-gray-600 md:text-lg">
                Secure patient data with strict HIPAA compliance protocols.
              </p>
            </div>
            <div className="p-8 bg-white shadow-lg rounded-xl">
              <FaUserMd className="text-3xl text-blue-600" />
              <h3 className="mt-4 text-xl font-semibold md:text-2xl">Dedicated Support</h3>
              <p className="mt-2 text-base text-gray-600 md:text-lg">
                Get expert assistance whenever you need it.
              </p>
            </div>
            <div className="p-8 bg-white shadow-lg rounded-xl">
              <FaTasks className="text-3xl text-blue-600" />
              <h3 className="mt-4 text-xl font-semibold md:text-2xl">Automated Workflow</h3>
              <p className="mt-2 text-base text-gray-600 md:text-lg">
                Streamline billing processes with automation.
              </p>
            </div>
            <div className="p-8 bg-white shadow-lg rounded-xl">
              <FaHospital className="text-3xl text-blue-600" />
              <h3 className="mt-4 text-xl font-semibold md:text-2xl">Customized Solutions</h3>
              <p className="mt-2 text-base text-gray-600 md:text-lg">
                Tailor our billing services to fit your imaging center's needs.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default ImagingBilling;