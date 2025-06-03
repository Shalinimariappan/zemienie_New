const Contact = () => {
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
          <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">Contact Us</h2>
          <p className="mt-3 text-sm sm:text-base lg:text-lg">
            Our helpline is always open to receive any inquiry or feedback.
            Please feel free to drop us an email from the form below and we will get back to you as soon as we can.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <div className="p-12">
        <form 
          action="https://getform.io/f/bwnqwzza" 
          method="POST" 
          encType="multipart/form-data" 
          className="max-w-lg p-12 mx-auto space-y-4 bg-white rounded shadow-md"
        >
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            className="w-full p-2 border rounded" 
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            className="w-full p-2 border rounded" 
            required 
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            className="w-full h-24 p-2 border rounded" 
            required
          ></textarea>

          {/* Redirect after submission */}
          <input type="hidden" name="_redirect" value="https://yourwebsite.com/thank-you" />

          {/* Anti-spam */}
          <input type="hidden" name="_gotcha" style={{display: 'none !important'}} />

          <button 
            type="submit" 
            className="w-full p-2 text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;