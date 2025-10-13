import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative bg-gray-900 text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          <span className="block">Build your next idea</span>
          <span className="block text-indigo-400">even faster</span>
        </h1>
        <p className="mt-6 max-w-lg mx-auto text-xl sm:max-w-3xl">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
        </p>
        <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
          <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
            <a
              href="#"
              className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 hover:bg-indigo-600 sm:px-8"
            >
              Get started
            </a>
            <a
              href="#"
              className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-300 bg-gray-800 hover:bg-gray-700 sm:px-8"
            >
              Live demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
