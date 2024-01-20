const Contact = () => {
  return (
    <div className="fixed z-10 top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-60 bg-black" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
      <div className="relative  bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
        <button className="absolute top-0 right-0 p-3 text-red-500 text-xl font-medium">X</button>

        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Kerroucha Abdelbari Sarim</h2>
          <div className="flex items-center justify-center">
            <span className="text-gray-600">// Add credential name and logo here</span>
          </div>

          <div className="flex flex-col space-y-4">
            <a href="tel:+2130549022271" className="text-blue-600 hover:text-blue-800">
              <i className="fa-solid fa-phone"></i>
              <span className="ml-2 font-medium">+213 0549022271</span>
            </a>
            <a href="https://www.linkedin.com/in/sarim-abdelbari-kerroucha-090869242/" className="text-blue-600 hover:text-blue-800">
              <i className="fa-brands fa-linkedin"></i>
              <span className="ml-2 font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
