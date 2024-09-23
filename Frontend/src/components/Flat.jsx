import React from 'react';

function Flat() {
  return (
    <div className="bg-gray-100">
      <div className="flex justify-center items-center min-h-screen">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <img src="https://printify.com/pfh/assets/legacy/custom-products.png" alt="Custom products including a t-shirt, a tag, and a button with Printify logo" className="mx-auto mb-4 w-24 h-24"/>
              <h3 className="text-green-600 font-bold text-lg">CREATE</h3>
              <h2 className="text-2xl font-bold mb-2">custom products</h2>
              <p className="text-gray-600">Easily add your designs to a wide range of products using our free tools</p>
            </div>
            <div>
              <img src="https://printify.com/pfh/assets/legacy/your-products.png" alt="Tags with logos of various platforms like Etsy, Wix, and eBay" className="mx-auto mb-4 w-24 h-24"/>
              <h3 className="text-green-600 font-bold text-lg">SELL</h3>
              <h2 className="text-2xl font-bold mb-2">on your terms</h2>
              <p className="text-gray-600">You choose the products, sale price, and where to sell</p>
            </div>
            <div>
              <img src="https://printify.com/pfh/assets/legacy/fullfillment.png" alt="A package ready for fulfillment" className="mx-auto mb-4 w-24 h-24"/>
              <h3 className="text-green-600 font-bold text-lg">WE HANDLE</h3>
              <h2 className="text-2xl font-bold mb-2">fulfillment</h2>
              <p className="text-gray-600">Once an order is placed, we automatically handle all the printing and delivery logistics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flat;

