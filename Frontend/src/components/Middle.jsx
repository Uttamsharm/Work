import React from 'react';

function Middle() {
  return (
    <div className="flex justify-center items-center min-h-screen ml-40 w-3/4 h-[600px]"> {/* Adjusted width and height */}
      <div className="bg-green-500 p-8 rounded-l-lg flex flex-wrap justify-center items-center relative w-1/2 h-full"> {/* Adjusted width and height */}
        <img src="/mug.jpg" alt="White mug with a plus icon" className="w-24 h-24 m-4 relative z-10" />
        <img src="/cap.jpg" alt="White cap with a plus icon" className="w-24 h-24 m-4 relative z-10" />
        <img src="/bag.jpg" alt="White bag with a plus icon" className="w-24 h-24 m-4 relative z-10" />
        <img src="/hoodie.jpg" alt="White hoodie with a plus icon" className="w-24 h-24 m-4 relative z-10" />
        <div className="absolute bottom-0 right-0 bg-white p-4 rounded-lg shadow-lg">
          <div className="flex justify-between mb-2">
            <button className="text-gray-600">Edit</button>
            <button className="text-gray-600">Preview</button>
          </div>
          <img src="/design-sample.jpg" alt="T-shirt with 'Your Design' text" className="w-24 h-24 mx-auto mb-2" />
          <div className="bg-green-500 h-2 rounded-full"></div>
        </div>
      </div>
      <div className="bg-white p-8 rounded-r-lg w-1/2 h-full"> 
        <h1 className="text-2xl font-semibold text-gray-900 mb-4 mt-20">Easily add your design to a <br/> wide range of products</h1>
        <p className="text-gray-500 mb-4">With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.</p>
        <a href="#" className="text-green-500 font-semibold">All products <i className="fas fa-arrow-right"></i></a>
      </div>
    </div>
  );
}

export default Middle;







/*import React from 'react';

function Middle() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-green-500 p-8 rounded-l-lg flex flex-wrap justify-center items-center relative">
        <img src="/mug.jpg" alt="White mug with a plus icon" className="w-24 h-24 m-4 relative z-10" />
        <img src="/cap.jpg" alt="White cap with a plus icon" className="w-24 h-24 m-4 relative z-10" />
        <img src="/bag.jpg" alt="White bag with a plus icon" className="w-24 h-24 m-4 relative z-10" />
        <img src="/hoodie.jpg" alt="White hoodie with a plus icon" className="w-24 h-24 m-4 relative z-10" />
        <div className="absolute bottom-0 right-0 bg-white p-4 rounded-lg shadow-lg">
          <div className="flex justify-between mb-2">
            <button className="text-gray-600">Edit</button>
            <button className="text-gray-600">Preview</button>
          </div>
          <img src="/design-sample.jpg" alt="T-shirt with 'Your Design' text" className="w-24 h-24 mx-auto mb-2" />
          <div className="bg-green-500 h-2 rounded-full"></div>
        </div>
      </div>
      <div className="bg-white p-8 rounded-r-lg">
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">Easily add your design to a wide range of products</h1>
        <p className="text-gray-500 mb-4">With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.</p>
        <a href="#" className="text-green-500 font-semibold">All products <i className="fas fa-arrow-right"></i></a>
      </div>
    </div>
  );
}

export default Middle;
*/