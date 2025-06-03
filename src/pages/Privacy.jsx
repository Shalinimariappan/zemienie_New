import React from 'react';

const PrivacyPolicy = () => {
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
          <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">Privacy Policy</h2>
          <p className="mt-3 text-sm sm:text-base lg:text-lg">
            Our expertise covers hospitals, clinics, telemedicine, diagnostics, and multi-specialty practices to ensure seamless financial operations.
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <div className="max-w-4xl p-6 mx-auto text-gray-700">
        <h2 className="text-lg font-bold">Our Privacy Policy page!</h2>
        <p className="mt-2">
          This privacy policy applies to the Site and all services offered by Zemienie.
        </p>
        <p className="mt-2">
          When you use our website services, you trust us with your information. This Privacy Policy is designed 
          to help you understand what information we collect, why we collect this information, and what we do 
          with this information. When you share information with us, we can enhance the user experience and want 
          you to feel that you are in good hands.
        </p>
    
        <h3 className="mt-6 text-lg font-bold">Cookies</h3>
        <p className="mt-2">
          A cookie is a small piece of data sent from a website and stored on your computer system by your web 
          browser that allows your preferences to be recorded when visiting the website. It also recognizes when 
          you return to the website and in no way gives us access to your computer system or any information about 
          you, other than the data you choose to share with us.
        </p>
        <p className="mt-2">You can choose to accept or decline cookies.</p>
    
        <h3 className="mt-6 text-lg font-bold">Changes to this privacy policy</h3>
        <p className="mt-2">
          We reserve the right to revise this privacy policy at any time. When we do, we will revise the updated 
          date at the bottom of this page. You acknowledge and agree that it is your responsibility to review this 
          privacy policy periodically and become aware of any modifications done at intervals of time. By using 
          this Site, you proclaim acceptance of this policy and terms of service.
        </p>
    
        <p className="mt-2">You can do the following at any time by contacting us via the email address or phone number given on our website:</p>
        
        <ul className="mt-2 list-disc list-inside">
          <li>See what data we have about you, if any.</li>
          <li>Change/correct any data we have about you.</li>
          <li>Have us delete any data we have about you.</li>
          <li>Express any concern you have about our use of your data.</li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicy;