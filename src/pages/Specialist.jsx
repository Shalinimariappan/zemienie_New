import { 
    FaSpa, FaUserMd, FaProcedures, FaMicrophoneAlt, FaVials, FaXRay, 
    FaBrain, FaWalking, FaBone, FaHandHoldingMedical, FaEye, 
    FaBaby, FaHeart, FaVirus, FaSyringe, FaDeaf, FaHands, FaHeartbeat, 
    FaAirFreshener, FaVial, FaUtensils, FaThermometer, FaNotesMedical,
  } from 'react-icons/fa';

const Specialties = () => {
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
          <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">Specialties</h2>
          <p className="mt-3 text-sm sm:text-base lg:text-lg">
            Our expertise covers hospitals, clinics, telemedicine, diagnostics, and multi-specialty practices to ensure seamless financial operations.
          </p>
        </div>
      </section>
  
      {/* Specialties Section */}
      <section className="p-12 bg-gray-100">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            
            
            {/* Acupuncture Therapy */}
            <SpecialtyCard 
              icon={<FaSpa className="mx-auto text-4xl text-blue-500" />}
              title="Acupuncture Therapy"
              description="A traditional healing practice that stimulates specific body points to promote health."
              link="/acupuncture"
            />

            {/* Urology */}
            <SpecialtyCard 
              icon={<FaUserMd className="mx-auto text-4xl text-blue-500" />}
              title="Urology"
              description="Medical field focusing on urinary tract diseases and male reproductive health."
              link="/urology"
            />

            {/* Thoracic Surgery */}
            <SpecialtyCard 
              icon={<FaProcedures className="mx-auto text-4xl text-blue-500" />}
              title="Thoracic Surgery"
              description="Surgical treatment of diseases affecting the lungs, chest, and esophagus."
              link="/thoracic-surgery"
            />

            {/* Continue with all other specialties using the SpecialtyCard component */}
            {/* General Surgery */}
            <SpecialtyCard 
              icon={<FaUserMd className="mx-auto text-4xl text-blue-500" />}
              title="General Surgery"
              description="Surgical care for a wide range of conditions affecting various organs."
              link="/general-surgery"
            />

            {/* Speech Therapy */}
            <SpecialtyCard 
              icon={<FaMicrophoneAlt className="mx-auto text-4xl text-blue-500" />}
              title="Speech Therapy"
              description="Specialized therapy to improve speech, language, and communication skills."
              link="/speech-therapy"
            />

            {/* Pathology */}
            <SpecialtyCard 
              icon={<FaVials className="mx-auto text-4xl text-blue-500" />}
              title="Pathology"
              description="Study and diagnosis of diseases through laboratory analysis of body tissues."
              link="/pathology"
            />

            {/* Radiology-Diagnostic */}
            <SpecialtyCard 
              icon={<FaXRay className="mx-auto text-4xl text-blue-500" />}
              title="Radiology-Diagnostic"
              description="Imaging techniques like X-rays, MRIs, and CT scans for diagnosis."
              link="/radiology"
            />

            {/* Psychiatry */}
            <SpecialtyCard 
              icon={<FaBrain className="mx-auto text-4xl text-blue-500" />}
              title="Psychiatry"
              description="Mental health specialty dealing with emotional and behavioral disorders."
              link="/psychiatry"
            />

            {/* Plastic Surgery */}
            <SpecialtyCard 
              icon={<FaUserMd className="mx-auto text-4xl text-blue-500" />}
              title="Plastic Surgery"
              description="Surgical specialty focused on reconstructing and enhancing body appearance."
              link="/plastic-surgery"
            />

            {/* Physiotherapy */}
            <SpecialtyCard 
              icon={<FaWalking className="mx-auto text-4xl text-blue-500" />}
              title="Physiotherapy"
              description="Rehabilitation through exercises, massage, and movement therapy."
              link="/physiotherapy"
            />

            {/* Physical Medicine & Rehabilitation */}
            <SpecialtyCard 
              icon={<FaProcedures className="mx-auto text-4xl text-blue-500" />}
              title="Physical Medicine & Rehabilitation"
              description="Medical specialty focused on restoring function and improving quality of life."
              link="/physical-medicine"
            />

            {/* Otolaryngology */}
          
            <SpecialtyCard 
              icon={<FaDeaf className="mx-auto text-4xl text-blue-500" />}
              title="Otolaryngology"
              description="Specialized care for ear, nose, and throat disorders."
              link="/otolaryngology"
            />

            {/* Orthopedic Surgery */}
            <SpecialtyCard 
              icon={<FaBone className="mx-auto text-4xl text-blue-500" />}
              title="Orthopedic Surgery"
              description="Surgical treatment for musculoskeletal conditions."
              link="/orthopedic-surgery"
            />

            {/* Pain Medicine */}
            <SpecialtyCard 
              icon={<FaHandHoldingMedical className="mx-auto text-4xl text-blue-500" />}
              title="Pain Medicine"
              description="Management and treatment of chronic pain conditions."
              link="/pain-medicine"
            />

            {/* Ophthalmology */}
            <SpecialtyCard 
              icon={<FaEye className="mx-auto text-4xl text-blue-500" />}
              title="Ophthalmology"
              description="Diagnosis and treatment of eye-related disorders."
              link="/ophthalmology"
            />

            {/* Obstetrics & Gynecology */}
            <SpecialtyCard 
              icon={<FaBaby className="mx-auto text-4xl text-blue-500" />}
              title="Obstetrics & Gynecology"
              description="Healthcare for pregnancy, childbirth, and female reproductive health."
              link="/obgyn"
            />

            {/* Neurology */}
            <SpecialtyCard 
              icon={<FaBrain className="mx-auto text-4xl text-blue-500" />}
              title="Neurology"
              description="Diagnosis and treatment of brain, spine, and nervous system disorders."
              link="/neurology"
            />

            {/* Interventional Cardiology */}
            <SpecialtyCard 
              icon={<FaHeart className="mx-auto text-4xl text-blue-500" />}
              title="Interventional Cardiology"
              description="Minimally invasive treatments for heart disease."
              link="/interventional-cardiology"
            />

            {/* Pediatrics */}
            <SpecialtyCard 
              icon={<FaBaby className="mx-auto text-4xl text-blue-500" />}
              title="Pediatrics"
              description="Comprehensive healthcare for infants, children, and adolescents."
              link="/pediatrics"
            />

            {/* Allergy & Immunology */}
            <SpecialtyCard 
              icon={<FaVirus className="mx-auto text-4xl text-blue-500" />}
              title="Allergy & Immunology"
              description="Diagnosis and treatment of immune system disorders."
              link="/allergy-immunology"
            />

            {/* Anesthesiology */}
            <SpecialtyCard 
              icon={<FaSyringe className="mx-auto text-4xl text-blue-500" />}
              title="Anesthesiology"
              description="Pain management and sedation for surgical procedures."
              link="/anesthesiology"
            />

            {/* Audiology */}
            <SpecialtyCard 
              icon={<FaDeaf className="mx-auto text-4xl text-blue-500" />}
              title="Audiology (Hearing Therapy)"
              description="Diagnosis and treatment of hearing and balance disorders."
              link="/audiology"
            />

            {/* Cardiovascular Disease */}
            <SpecialtyCard 
              icon={<FaProcedures className="mx-auto text-4xl text-blue-500" />}
              title="Cardiovascular Disease"
              description="Comprehensive care for heart and circulatory system conditions."
              link="/cardiovascular"
            />

            {/* Chiropractic */}
            <SpecialtyCard 
              icon={<FaHands className="mx-auto text-4xl text-blue-500" />}
              title="Chiropractic"
              description="Treatment focusing on musculoskeletal system, especially spine health."
              link="/chiropractic"
            />

            {/* Clinical Cardiac Electrophysiology */}
            <SpecialtyCard 
              icon={<FaHeartbeat className="mx-auto text-4xl text-blue-500" />}
              title="Clinical Cardiac Electrophysiology"
              description="Specialized in heart rhythm disorders and electrical activities."
              link="/cardiac-electrophysiology"
            />

            {/* Dermatology */}
            <SpecialtyCard 
              icon={<FaAirFreshener className="mx-auto text-4xl text-blue-500" />}
              title="Dermatology"
              description="Diagnosis and treatment of skin, hair, and nail disorders."
              link="/dermatology"
            />

            {/* Family Medicine */}
            <SpecialtyCard 
              icon={<FaUserMd className="mx-auto text-4xl text-blue-500" />}
              title="Family Medicine"
              description="Comprehensive healthcare for individuals and families across all ages."
              link="/family-medicine"
            />

            {/* Hematology & Oncology */}
            <SpecialtyCard 
              icon={<FaVial className="mx-auto text-4xl text-blue-500" />}
              title="Hematology & Oncology"
              description="Specialized in blood disorders and cancer treatment."
              link="/hematology-oncology"
            />

            {/* Gastroenterology */}
            <SpecialtyCard 
              icon={<FaUtensils className="mx-auto text-4xl text-blue-500" />}
              title="Gastroenterology"
              description="Diagnosis and treatment of digestive system disorders."
              link="/gastroenterology"
            />

            {/* Infectious Disease */}
            <SpecialtyCard 
              icon={<FaThermometer className="mx-auto text-4xl text-blue-500" />}
              title="Infectious Disease"
              description="Treatment of diseases caused by bacteria, viruses, and fungi."
              link="/infectious-disease"
            />

            {/* Internal Medicine */}
            <SpecialtyCard 
              icon={<FaNotesMedical className="mx-auto text-4xl text-blue-500" />}
              title="Internal Medicine"
              description="Prevention, diagnosis, and treatment of adult diseases."
              link="/internal-medicine"
            />
          </div>
        </div>
      </section>
    </div>
  );
};


// Reusable Specialty Card Component
const SpecialtyCard = ({ icon, title, description, link }) => {
  return (
    <div className="p-6 text-center bg-white rounded-lg shadow-md">
      {icon}
      <h3 className="mt-4 text-lg font-bold">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
      <a 
        href={link} 
        className="inline-block px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
      >
        Explore
      </a>
    </div>
  );
};

export default Specialties;