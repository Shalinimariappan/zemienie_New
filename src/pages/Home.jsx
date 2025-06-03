import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import slide1 from '../assets/Hero.png';
import about from '../assets/image 1.png';
import slide2 from '../assets/Property 1=Group 38.png';
import slide3 from '../assets/Property 1=Group 1000004242.png';
import { 
  FaHandshake, FaEye, FaSmile, FaCheckCircle, FaBalanceScale, FaAward,
  FaSpa, FaProcedures, FaLungs, FaUserInjured, FaMicrophone, FaVial, FaDiagnoses, FaUserMd
} from 'react-icons/fa';

const Home = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

 // Auto-slide functionality with pause on hover
 useEffect(() => {
  const interval = setInterval(() => {
    if (!isHovered) {
      setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
    }
  }, 5000); // Change slide every 5 seconds
  
  return () => clearInterval(interval);
}, [isHovered]);

const openTab = (tabId) => {
  setActiveTab(tabId);
};

const nextSlide = () => {
  setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
};

const prevSlide = () => {
  setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1));
};

const goToSlide = (index) => {
  setCurrentSlide(index);
};

  return (
    <div className="font-sans">
     

      {/* Carousel */}
      <div className="relative w-full">
        <div className="relative overflow-hidden rounded-lg">
          <div 
            className="flex transition-transform duration-500 ease-in-out" 
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            <div className="relative min-w-full">
              <a href="about">
                <img src={slide1} className="object-cover w-full" alt="Slide 1" />
              </a>
            </div>
            <div className="relative min-w-full">
              <a href="specailist">
                <img src={slide2} className="object-cover w-full" alt="Slide 2" />
              </a>
            </div>
            <div className="relative min-w-full">
              <a href="revenue">
                <img src={slide3} className="w-full" alt="Slide 3" />
              </a>
            </div>
          </div>
        </div>

        <button 
          onClick={prevSlide}
          className="absolute z-10 flex items-center justify-center w-6 h-6 p-1 text-xs text-white transform -translate-y-1/2 bg-blue-500 rounded-full top-1/2 left-2 sm:left-4 hover:bg-gray-900 sm:w-8 sm:h-8 md:w-10 md:h-10 sm:text-sm md:text-base"
        >
          ❮
        </button>
        <button 
          onClick={nextSlide}
          className="absolute z-10 flex items-center justify-center w-6 h-6 p-1 text-xs text-white transform -translate-y-1/2 bg-blue-500 rounded-full top-1/2 right-2 sm:right-4 hover:bg-gray-900 sm:w-8 sm:h-8 md:w-10 md:h-10 sm:text-sm md:text-base"
        >
          ❯
        </button>

        <div className="flex justify-center mt-4 space-x-2">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 rounded-full cursor-pointer ${currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="flex flex-col items-center px-4 py-8 overflow-hidden bg-white md:flex-row md:px-16 lg:px-32 lg:py-12">
        <div className="flex justify-center hidden w-full md:w-1/2 md:block">
          <img 
            src={about}
            alt="Doctors Discussing" 
            className="w-64 h-64 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] object-cover rounded-lg"
          />
        </div>

        <div className="w-full p-4 md:w-1/2 md:p-8 lg:p-12">
          <div className="flex items-center mb-4 space-x-2">
            <span className="font-semibold text-blue-400">About Us</span>
          </div>
          <h2 className="mb-4 text-2xl font-bold text-gray-700">A Short Story Of Zemienie</h2>
          
          <p className="mb-4 text-gray-500">
            Zemienie is a comprehensive healthcare solutions provider specializing in medical billing, practice management, and healthcare consulting. Our mission is to streamline the revenue cycle process for healthcare providers, ensuring they receive accurate and timely reimbursements.
          </p>
          
          <p className="mb-4 text-gray-500">
            At Zemienie, we prioritize transparency, efficiency, and accountability at every level of our operations. Our structured approach ensures seamless workflow management, allowing healthcare providers to experience minimal claim denials and faster revenue recovery.
          </p>

          <p className="hidden mb-4 text-gray-500 md:block">
            Our services cover End-to-End Revenue Cycle Management, Medical Coding, Insurance Verification, Credentialing, MACRA/QPP compliance, and Imaging Center Billing. We are committed to delivering tailored solutions that enhance practice efficiency, reduce operational costs, and maximize revenue for medical providers.
          </p>
          <a href="about">
            <button className="px-4 py-2 mt-4 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600">
              View More
            </button>
          </a>
        </div>
      </div>

      {/* Tab Content */}
      <div className="w-full p-6 bg-white rounded-lg shadow-lg md:p-12">
        <div className="flex space-x-4 overflow-x-auto border-b scrollbar-hide">
          <button 
            className={`tab-button flex-shrink-0 px-4 py-3 font-semibold ${activeTab === 'tab1' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'} focus:outline-none`}
            onClick={() => openTab('tab1')}
          >
            Revenue Cycle Management
          </button>
          <button 
            className={`tab-button flex-shrink-0 px-4 py-3 font-semibold ${activeTab === 'tab2' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'} focus:outline-none`}
            onClick={() => openTab('tab2')}
          >
            Imaging Center Billing
          </button>
          <button 
            className={`tab-button flex-shrink-0 px-4 py-3 font-semibold ${activeTab === 'tab3' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'} focus:outline-none`}
            onClick={() => openTab('tab3')}
          >
            Credentialing Process
          </button>
          <button 
            className={`tab-button flex-shrink-0 px-4 py-3 font-semibold ${activeTab === 'tab4' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'} focus:outline-none`}
            onClick={() => openTab('tab4')}
          >
            MACRA / QPP
          </button>
        </div>

        {/* Tab 1 */}
        <div className={`tab-content py-6 ${activeTab !== 'tab1' ? 'hidden' : ''}`} id="tab1">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-2/3">
              <h2 className="flex items-center text-2xl font-bold">
                Revenue Cycle Management
              </h2>
              <p className="mt-3 text-gray-700">
                Managing medical billing efficiently is crucial for healthcare providers to ensure seamless financial operations. Our Revenue Cycle Management (RCM) services streamline the billing process, track every incoming payment, and reduce claim denials. By leveraging advanced technology and expert insights, we help healthcare professionals focus on patient care while maintaining a steady cash flow.
              </p>
              <p className="hidden mt-3 text-gray-700 md:block">
                Our comprehensive approach covers insurance verification, claim submission, payment posting, and denial management, ensuring maximum reimbursement. With real-time tracking and automated workflows, we enhance financial transparency and optimize revenue collection for medical practices of all sizes.
              </p>
            </div>
            <div className="w-full mt-4 md:w-1/3 md:mt-12 md:mx-16">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="mr-2 text-xl text-blue-500">✔</span> Streamline Claims Submission
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-xl text-blue-500">✔</span> Optimize Revenue Collection
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-xl text-blue-500">✔</span> Reduce Denials & Rejections
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-xl text-blue-500">✔</span> Enhance Financial Transparency
                </li>
              </ul>
            </div>
          </div>
          <a href="revenue">
            <button className="px-5 py-2 mt-8 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700">
              View More
            </button>
          </a>
        </div>

        {/* Tab 2 */}
        <div className={`tab-content py-6 ${activeTab !== 'tab2' ? 'hidden' : ''}`} id="tab2">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-2/3">
              <h2 className="flex items-center text-2xl font-bold">
                Imaging Center Billing
              </h2>
              <p className="mt-3 text-gray-700">
                Efficient billing is crucial for imaging centers to ensure accurate claim submission and timely reimbursements. Our Imaging Center Billing services are designed to optimize financial operations, reduce coding errors, and minimize claim denials. By implementing advanced billing solutions, we help radiology providers focus on patient diagnostics while maintaining a healthy revenue flow.
              </p>
              <p className="hidden mt-3 text-gray-700 md:block">
                We handle insurance verification, claim submission, payment processing, and compliance requirements to streamline imaging center billing. Our real-time reporting and error-free workflows enhance operational efficiency and ensure maximum reimbursement.
              </p>
            </div>
            <div className="w-full mt-4 md:w-1/3 md:mt-12 md:mx-16">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="mr-2 text-xl text-blue-500">✔</span> Accurate Medical Coding
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-xl text-blue-500">✔</span> Minimize Claim Denials
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-xl text-blue-500">✔</span> Faster Reimbursements
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-xl text-blue-500">✔</span> Compliance & Documentation Support
                </li>
              </ul>
            </div>
          </div>
          <a href="imaging">
            <button className="px-5 py-2 mt-8 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700">
              View More
            </button>
          </a>
        </div>

        {/* Tab 3 */}
        <div className={`tab-content py-6 ${activeTab !== 'tab3' ? 'hidden' : ''}`} id="tab3">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-2/3">
              <h2 className="flex items-center text-2xl font-bold">
                Credentialing Process
              </h2>
              <p className="mt-3 text-gray-700">
                Healthcare providers must maintain compliance and credibility through proper credentialing. Our Credentialing Process services ensure that providers meet payer and regulatory requirements, reducing delays in patient care and insurance reimbursements.
              </p>
              <p className="hidden mt-3 text-gray-700 md:block">
                We manage the entire credentialing workflow, from document verification to enrollment, helping providers avoid rejections and maintain active participation in insurance networks. Our system ensures accuracy and compliance, preventing administrative bottlenecks.
              </p>
            </div>
            <div className="w-full mt-4 md:w-1/3 md:mt-12 md:mx-16">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="mr-2 text-xl text-blue-500">✔</span> Provider Enrollment Support
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-xl text-blue-500">✔</span> Compliance with Regulations
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-xl text-blue-500">✔</span> Reduced Rejections & Delays
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-xl text-blue-500">✔</span> End-to-End Documentation Management
                </li>
              </ul>
            </div>
          </div>
          <a href="credentialing">
            <button className="px-5 py-2 mt-8 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700">
              View More
            </button>
          </a>
        </div>

        {/* Tab 4 */}
        <div className={`tab-content py-6 ${activeTab !== 'tab4' ? 'hidden' : ''}`} id="tab4">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-2/3">
              <h2 className="flex items-center text-2xl font-bold">
                MACRA / QPP
              </h2>
              <p className="mt-3 text-gray-700">
                Navigating MACRA and QPP compliance can be complex for healthcare providers. Our services help simplify the process by guiding providers through reporting requirements, performance tracking, and quality improvement programs.
              </p>
              <p className="hidden mt-3 text-gray-700 md:block">
                We ensure that medical practices meet Medicare's Merit-Based Incentive Payment System (MIPS) and Advanced APM requirements, optimizing reimbursements and avoiding penalties. Our strategic approach enhances compliance and maximizes provider benefits.
              </p>
            </div>
            <div className="w-full mt-4 md:w-1/3 md:mt-12 md:mx-16">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="mr-2 text-xl text-blue-500">✔</span> MIPS & APM Compliance
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-xl text-blue-500">✔</span> Performance Tracking & Reporting
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-xl text-blue-500">✔</span> Maximize Reimbursements
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-xl text-blue-500">✔</span> Avoid Compliance Penalties
                </li>
              </ul>
            </div>
          </div>
          <a href="macra">
            <button className="px-5 py-2 mt-8 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700">
              View More
            </button>
          </a>
        </div>
      </div>

      {/* Values Section */}
      <section className="px-6 py-12 mx-auto bg-blue-400 md:px-16 md:py-24">
        <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <h2 className="text-3xl font-bold leading-snug text-white md:text-4xl">
              Our Values In Zemienie For <br /> Following A Success
            </h2>
            <a href="contact">
              <button className="mt-6 px-5 py-2.5 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-100 transition">
                Reach Out Now
              </button>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            <div className="flex flex-col items-center justify-center p-4 bg-transparent border border-white rounded-lg md:p-6">
              <FaHandshake className="mb-3 text-3xl text-white opacity-80" />
              <p className="text-sm font-semibold text-center text-white md:text-lg">Integrity</p>
            </div>

            <div className="flex flex-col items-center justify-center p-4 bg-transparent border border-white rounded-lg md:p-6">
              <FaEye className="mb-3 text-3xl text-white opacity-80" />
              <p className="text-sm font-semibold text-center text-white md:text-lg">Transparency</p>
            </div>

            <div className="flex flex-col items-center justify-center p-4 bg-transparent border border-white rounded-lg md:p-6">
              <FaSmile className="mb-3 text-3xl text-white opacity-80" />
              <p className="text-sm font-semibold text-center text-white md:text-lg">Customer Delight</p>
            </div>

            <div className="flex flex-col items-center justify-center p-4 bg-transparent border border-white rounded-lg md:p-6">
              <FaCheckCircle className="mb-3 text-3xl text-white opacity-80" />
              <p className="text-sm font-semibold text-center text-white md:text-lg">Quality</p>
            </div>

            <div className="flex flex-col items-center justify-center p-4 bg-transparent border border-white rounded-lg md:p-6">
              <FaBalanceScale className="mb-3 text-3xl text-white opacity-80" />
              <p className="text-sm font-semibold text-center text-white md:text-lg">Support</p>
            </div>

            <div className="flex flex-col items-center justify-center p-4 bg-transparent border border-white rounded-lg md:p-6">
              <FaAward className="mb-3 text-3xl text-white opacity-80" />
              <p className="text-sm font-semibold text-center text-white md:text-lg">Excellence</p>
            </div>
          </div>
        </div>
      </section>


 {/* Specialist Section */}
<section className="flex flex-col items-center p-6 bg-white">
  {/* Title */}
  <h2 className="text-2xl font-semibold text-center">Zemienie Specialties</h2>
  <p className="hidden px-6 mt-2 text-center text-gray-600 md:px-12 md:block">
    Zemienie specializes in providing high-quality healthcare solutions with a focus on innovation and patient care.
  </p>

  {/* Specialist Grid */}
  <div className="grid w-full grid-cols-1 gap-4 px-4 pt-4 pb-4 mt-6 sm:grid-cols-2 md:grid-cols-4 md:px-24">
    {/* Specialist Cards */}
    <div className="flex items-center w-full p-4 bg-white border rounded-lg shadow-md">
      <FaSpa className="p-4 mr-4 text-5xl text-white bg-blue-600 rounded" />
      <span className="text-lg font-semibold text-black">Acupuncture Therapy</span>
    </div>
    <div className="flex items-center w-full p-4 bg-white border rounded-lg shadow-md">
      <FaProcedures className="p-4 mr-4 text-5xl text-white bg-blue-600 rounded" />
      <span className="text-lg font-semibold text-black">Urology</span>
    </div>
    <div className="flex items-center w-full p-4 bg-white border rounded-lg shadow-md">
      <FaLungs className="p-4 mr-4 text-5xl text-white bg-blue-600 rounded" />
      <span className="text-lg font-semibold text-black">Thoracic Surgery</span>
    </div>
    <div className="flex items-center w-full p-4 bg-white border rounded-lg shadow-md">
      <FaUserInjured className="p-4 mr-4 text-5xl text-white bg-blue-600 rounded" />
      <span className="text-lg font-semibold text-black">General Surgery</span>
    </div>
    <div className="flex items-center hidden w-full p-4 bg-white border rounded-lg shadow-md sm:flex">
      <FaMicrophone className="p-4 mr-4 text-5xl text-white bg-blue-600 rounded" />
      <span className="text-lg font-semibold text-black">Speech Therapy</span>
    </div>
    <div className="flex items-center hidden w-full p-4 bg-white border rounded-lg shadow-md sm:flex">
      <FaVial className="p-4 mr-4 text-5xl text-white bg-blue-600 rounded" />
      <span className="text-lg font-semibold text-black">Pathology</span>
    </div>
    <div className="flex items-center hidden w-full p-4 bg-white border rounded-lg shadow-md sm:flex">
      <FaDiagnoses className="p-4 mr-4 text-5xl text-white bg-blue-600 rounded" />
      <span className="text-lg font-semibold text-black">Pain Medicine</span>
    </div>
    <div className="flex items-center hidden w-full p-4 bg-white border rounded-lg shadow-md sm:flex">
      <FaUserMd className="p-4 mr-4 text-5xl text-white bg-blue-600 rounded" />
      <span className="text-lg font-semibold text-black">Plastic Surgery</span>
    </div>
  </div>

  {/* View All Specialist Button */}
  <Link to="/specialist">
    <button className="px-6 py-3 mt-6 font-semibold text-white transition duration-300 bg-blue-600 rounded-md shadow-md hover:bg-blue-700">
      View All Specialist
    </button>
  </Link>
</section>


     
    </div>
  );
};

export default Home;