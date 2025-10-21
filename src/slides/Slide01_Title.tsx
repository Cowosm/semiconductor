import { Cpu } from 'lucide-react';

const Slide01_Title = () => {
  return (
    <div className="h-full bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="flex flex-col items-center justify-center h-full space-y-8">
        <Cpu className="w-32 h-32 text-blue-600" />
        <h1 className="text-5xl font-bold text-gray-800">Semiconductor Industry</h1>
        <h2 className="text-3xl text-gray-600">Strategic Analysis & Investment Overview</h2>
        <p className="text-xl text-gray-500 mt-8">A Financial Analyst Perspective</p>
      </div>
    </div>
  );
};

export default Slide01_Title;