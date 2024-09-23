import React from 'react';

function Home() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-white mt-0"> {/* Ensure no top margin */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="text-center">
                    <img 
                        src="https://printify.com/pfh/assets/legacy/higher-profits.svg" 
                        className="mx-auto mb-4 rounded-full" 
                        style={{ width: '100px', height: '100px' }} 
                        alt="Higher Profits"
                    />
                    <h3 className="text-xl font-bold text-gray-800">Higher Profits</h3>
                    <p className="text-gray-600 mt-2">We offer some of the lowest prices in the industry because print providers continuously compete to win your business.</p>
                </div>
                <div className="text-center">
                    <img 
                        src="https://printify.com/pfh/assets/legacy/robust-scaling.svg" 
                        alt="Rocket taking off with a graph showing growth" 
                        className="mx-auto mb-4 rounded-full" 
                        style={{ width: '100px', height: '100px' }} 
                    />
                    <h3 className="text-xl font-bold text-gray-800">Robust Scaling</h3>
                    <p className="text-gray-600 mt-2">Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.</p>
                </div>
                <div className="text-center">
                    <img 
                        src="https://printify.com/pfh/assets/legacy/best-selection.svg" 
                        alt="Hand holding a phone with a t-shirt and price tag on the screen" 
                        className="mx-auto mb-4 rounded-full" 
                        style={{ width: '100px', height: '100px' }} 
                    />
                    <h3 className="text-xl font-bold text-gray-800">Best Selection</h3>
                    <p className="text-gray-600 mt-2">With 900+ products and top quality brands, you can choose the best products for your business.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;











/*import React from 'react';

function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="text-center">
          <img 
            src="https://printify.com/pfh/assets/legacy/higher-profits.svg" 
            className="mx-auto mb-4 rounded-full" 
            style={{ width: '100px', height: '100px' }} 
            alt="Higher Profits"
          />
          <h3 className="text-xl font-bold text-gray-800">Higher Profits</h3>
          <p className="text-gray-600 mt-2">We offer some of the lowest prices in the industry because print providers continuously compete to win your business.</p>
        </div>
        <div className="text-center">
          <img 
            src="https://printify.com/pfh/assets/legacy/robust-scaling.svg" 
            alt="Rocket taking off with a graph showing growth" 
            className="mx-auto mb-4 rounded-full" 
            style={{ width: '1000px', height: '100px' }} 
          />
          <h3 className="text-xl font-bold text-gray-800">Robust Scaling</h3>
          <p className="text-gray-600 mt-2">Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.</p>
        </div>
        <div className="text-center">
          <img 
            src="https://printify.com/pfh/assets/legacy/best-selection.svg" 
            alt="Hand holding a phone with a t-shirt and price tag on the screen" 
            className="mx-auto mb-4 rounded-full" 
            style={{ width: '100px', height: '100px' }} 
          />
          <h3 className="text-xl font-bold text-gray-800">Best Selection</h3>
          <p className="text-gray-600 mt-2">With 900+ products and top quality brands, you can choose the best products for your business.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
*/