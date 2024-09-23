import React from 'react';
import { FaShopify, FaPiedPiperHat } from "react-icons/fa"; 
import { BiLogoEtsy } from "react-icons/bi";
import { SiReactbootstrap } from "react-icons/si"; 

function Connect() {
    return (
        <div className="text-center relative">

            <h1 className="text-4xl font-bold text-gray-900 m-0">Connect your store</h1>
            <p className="text-gray-500 m-0">Printify easily integrates with major e-commerce platforms and marketplaces</p>

            
            <div className="flex flex-wrap justify-center items-center gap-4 mt-4">
                <div className="w-20 h-20 bg-white shadow-lg rounded-lg flex items-center justify-center">
                    <FaPiedPiperHat size="3em" />
                </div>
                <div className="w-20 h-20 bg-white shadow-lg rounded-lg flex items-center justify-center">
                    <SiReactbootstrap size="3em" />
                </div>
                <div className="w-20 h-20 bg-white shadow-lg rounded-lg flex items-center justify-center">
                    <FaShopify size="3em" />
                </div>
                <div className="w-20 h-20 bg-white shadow-lg rounded-lg flex items-center justify-center">
                    <BiLogoEtsy size="3em" />
                </div>
                <div className="w-20 h-20 bg-white shadow-lg rounded-lg flex items-center justify-center">
                    <FaShopify size="3em" />
                </div>
            </div>

            
            <div className="w-20 h-20 bg-green-500 shadow-lg rounded-lg flex items-center justify-center mt-4">
                <FaShopify size="3em" color="white" />
               
            </div>
           
        </div>
    );
}

export default Connect;













