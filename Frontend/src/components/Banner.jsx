import React from 'react';

const Banner = () => {
    return (
        <div className='pt-20'>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row'>
                <div className='w-full md:w-1/2 mt-12 md:mt-32'>
                    <div className='space-y-5'>
                        <h1 className='text-5xl font-bold text-gray-900'>Create and sell</h1>
                        <h1 className='text-5xl font-bold text-gray-900 mb-8'>custom products</h1>
                        <ul className="text-lg text-gray-700 mb-8">
                            <li className="flex items-center mb-2">
                                <i className="fas fa-check text-green-500 mr-2"></i>
                                100% Free to use
                            </li>
                            <li className="flex items-center mb-2">
                                <i className="fas fa-check text-green-500 mr-2"></i>
                                900+ High-Quality Products
                            </li>
                            <li className="flex items-center mb-2">
                                <i className="fas fa-check text-green-500 mr-2"></i>
                                Largest global print network
                            </li>
                        </ul>
                        <div className="flex space-x-4 mb-4">
                            <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold">Start for free</button>
                            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-bold flex items-center">
                                <i className="fas fa-play-circle text-gray-700 mr-2"></i>
                                How it works?
                            </button>
                        </div>
                        <p className="text-green-500 font-bold">Trusted by over 8M sellers around the world</p>
                    </div>
                </div>
                <div className='w-full md:w-1/2 flex justify-center items-center'>
                    <div className="flex items-center space-x-4"> {/* Flex container for both images */}
                        {/* T-shirt image */}
                        <img
                            src="https://img.freepik.com/free-photo/opened-white-tshirt-design_1409-4419.jpg?t=st=1727013851~exp=1727017451~hmac=fb974e16e69879019150d4122cc5eb7ca0e5a7f5c2b97282d3f6249a70ea1f99&w=740"
                            alt="White t-shirt with 'Your Design' text in green"
                            className="w-64 h-64 object-contain"
                        />
                        {/* Woman image */}
                        <img
                            src="https://img.freepik.com/free-photo/attractive-enthusiastic-armenian-young-woman-curly-hair-pointing-looking-intrigued-left-show-index-fingers-awesome-blank-space-advertisement-smirking-joyfully-introducing-product-white-background_176420-35016.jpg?size=626&ext=jpg&ga=GA1.1.1316550561.1720691225&semt=ais_hybrid"
                            alt="Illustration of a woman pointing at the t-shirt"
                            className="w-64 h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;




