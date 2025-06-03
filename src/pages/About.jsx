import { FaBullseye, FaEye, FaUserTie, FaUsers, FaLightbulb, FaCode, FaChartLine, FaHandshake } from 'react-icons/fa';
import aboutImage from '../assets/image 1.png';

const About = () => {
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
          <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">About Us</h2>
          <p className="mt-3 text-sm sm:text-base lg:text-lg">
            Our goal is to empower healthcare providers by handling billing complexities so they can focus on patient care.
          </p>
        </div>
      </section>

      {/* About Section */}
      <div className="flex flex-col items-center px-4 py-8 overflow-hidden bg-white md:flex-row md:px-16 lg:px-32 lg:py-12">
        <div className="flex justify-center w-full md:w-1/2">
          <img 
            src={aboutImage} 
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

          <p className="mb-4 text-gray-500">
            Our services cover End-to-End Revenue Cycle Management, Medical Coding, Insurance Verification, Credentialing, MACRA/QPP compliance, and Imaging Center Billing. We are committed to delivering tailored solutions that enhance practice efficiency, reduce operational costs, and maximize revenue for medical providers.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="flex items-center justify-center pt-4 pb-8 bg-white">
        <div className="flex flex-col w-full max-w-6xl gap-6 px-4 md:flex-row">
          {/* Mission Card */}
          <div className="w-full p-6 bg-white border rounded-lg shadow-md md:p-12">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500 rounded">
                <FaBullseye className="text-2xl text-white" />
              </div>
              <h2 className="text-xl font-semibold">Our Mission</h2>
            </div>
            <p className="mt-4 text-gray-600">
              At Zemienie, our mission is to revolutionize healthcare operations through seamless medical billing solutions.  
              We empower healthcare providers with technology-driven services, ensuring faster reimbursements, fewer denials,  
              and compliance with industry standards. By handling the complexities of billing, credentialing, and revenue management,  
              we allow doctors, clinics, and hospitals to focus on delivering quality patient care without administrative burdens.
            </p>
          </div>
    
          {/* Vision Card */}
          <div className="w-full p-6 bg-white border rounded-lg shadow-md md:p-12">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500 rounded">
                <FaEye className="text-2xl text-white" />
              </div>
              <h2 className="text-xl font-semibold">Our Vision</h2>
            </div>
            <p className="mt-4 text-gray-600">
              Our vision is to redefine medical billing by creating a future where healthcare providers no longer  
              face revenue cycle challenges. We strive to build an ecosystem where financial efficiency meets  
              operational excellence, ensuring every healthcare facility (big or small) has access to stress-free,  
              innovative billing solutions that drive growth and sustainability in the medical industry.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="pb-12 bg-white">
        <h2 className="pt-12 text-2xl font-semibold text-center">Our Core Values</h2>
        <p className="px-12 mt-2 text-center text-gray-600">
          We specialize in medical billing, revenue cycle management, and compliance solutions for all healthcare providers.
        </p>

        <div className="flex items-center justify-center p-6 sm:p-12">
          <div className="grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Value Cards */}
            <div className="p-6 bg-white border rounded-lg shadow-md">
              <FaUserTie className="text-3xl text-blue-500" />
              <h3 className="mt-2 text-lg font-semibold">Leadership</h3>
              <p className="mt-2 text-sm text-gray-600">Empowering teams with strong guidance and clear vision.</p>
            </div>

            <div className="p-6 bg-white border rounded-lg shadow-md">
              <FaUsers className="text-3xl text-blue-500" />
              <h3 className="mt-2 text-lg font-semibold">Collaboration</h3>
              <p className="mt-2 text-sm text-gray-600">Building connections and fostering teamwork for success.</p>
            </div>

            <div className="p-6 bg-white border rounded-lg shadow-md">
              <FaLightbulb className="text-3xl text-blue-500" />
              <h3 className="mt-2 text-lg font-semibold">Innovation</h3>
              <p className="mt-2 text-sm text-gray-600">Driving creativity and continuous improvement in all areas.</p>
            </div>

            <div className="p-6 bg-white border rounded-lg shadow-md">
              <FaCode className="text-3xl text-blue-500" />
              <h3 className="mt-2 text-lg font-semibold">Technology</h3>
              <p className="mt-2 text-sm text-gray-600">Leveraging cutting-edge tech to enhance efficiency and growth.</p>
            </div>

            <div className="p-6 bg-white border rounded-lg shadow-md">
              <FaChartLine className="text-3xl text-blue-500" />
              <h3 className="mt-2 text-lg font-semibold">Growth</h3>
              <p className="mt-2 text-sm text-gray-600">Focusing on personal and professional development.</p>
            </div>

            <div className="p-6 bg-white border rounded-lg shadow-md">
              <FaHandshake className="text-3xl text-blue-500" />
              <h3 className="mt-2 text-lg font-semibold">Trust</h3>
              <p className="mt-2 text-sm text-gray-600">Building lasting relationships through integrity and reliability.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
