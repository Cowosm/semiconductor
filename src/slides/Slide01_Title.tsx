import { Cpu } from 'lucide-react';

const Slide01_Title = () => {
  return (
    <div className="h-full bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8">
      <div className="flex flex-col items-center justify-center h-full space-y-4 md:space-y-8">
        <Cpu className="w-20 h-20 md:w-32 md:h-32 text-blue-600" />
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 text-center">Semiconductor Industry</h1>
        <h2 className="text-xl md:text-3xl text-gray-600 text-center px-4">Strategic Analysis & Investment Overview</h2>
        <p className="text-base md:text-xl text-gray-500 mt-4 md:mt-8 text-center">A Financial Analyst Perspective</p>
        <div className="mt-6 md:mt-8 text-center">
          <p className="text-lg md:text-2xl font-semibold text-gray-700">Jainam Shah</p>
          <p className="text-base md:text-xl text-gray-600 mt-2">UC Davis</p>
          <p className="text-sm md:text-lg text-gray-500 mt-2">October 2025</p>
        </div>
      </div>
    </div>
  );
};

export default Slide01_Title;