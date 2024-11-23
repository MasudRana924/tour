import React from 'react';
import backImg from '../../../assets/Rectangle 26.png';

const CreatePerfectLayout = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div
                className="w-full lg:mx-auto lg:w-3/4 bg-cover bg-center rounded-lg shadow-lg relative overflow-hidden"
                style={{ backgroundImage: `url(${backImg})`, height: '640px' }}
            >
                <div className="flex h-full">
                    {/* Left Side */}
                    <div className="w-1/2 p-6 bg-opacity-50 text-gray-900">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Create Your</h1>
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Perfect Adventure</h1>
                    </div>
                    {/* Right Side */}
                    <div className="w-full lg:w-1/2 p-6 flex flex-col bg-opacity-40 text-white relative">
                        <p className="absolute bottom-20  right-6 text-sm md:text-base">
                            Craft your own public or private tours, invite friends, or join exciting journeys created by fellow travelers. Discover new destinations and make unforgettable memories together.
                        </p>
                        <div className="absolute bottom-4 lg:bottom-6 left-0 flex gap-4 ">
                            <button className="lg:px-4 lg:py-2 create-tour-btn text-white rounded ">Create Tour </button>
                            <button className="lg:px-4 lg:py-2 create-tour-btn text-white rounded ">Join Tour </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePerfectLayout;
