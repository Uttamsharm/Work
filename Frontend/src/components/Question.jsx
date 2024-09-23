import React from 'react';

function Question() {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="flex items-center bg-green-100 rounded-lg p-6 shadow-lg">
                <div className="text-green-800 text-lg font-semibold">
                    Are you a large business looking for custom solutions?
                </div>
                <div className="ml-6 bg-gradient-to-r from-green-200 via-green-300 to-green-400 rounded-lg p-1">
                    <button className="bg-white text-gray-800 font-semibold py-2 px-4 rounded">
                        Talk to sales
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Question;

