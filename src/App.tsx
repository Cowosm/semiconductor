import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Slide01_Title,
  Slide02_IndustryOverview,
  Slide07_ValueChainSegments,
  Slide04_MarketTrends,
  Slide05_InvestmentConsiderations,
  Slide06_KeyTakeaways,
  SLIDE_TITLES
} from './slides';

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    <Slide01_Title key="slide-1" />,
    <Slide02_IndustryOverview key="slide-2" />,
    <Slide07_ValueChainSegments key="slide-3" />,
    <Slide04_MarketTrends key="slide-4" />,
    <Slide05_InvestmentConsiderations key="slide-5" />,
    <Slide06_KeyTakeaways key="slide-6" />
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full h-screen bg-gray-900 flex flex-col">
      {/* Main Slide Display */}
      <div className="flex-1 overflow-auto">
        {slides[currentSlide]}
      </div>

      {/* Navigation Controls */}
      <div className="bg-gray-800 p-2 md:p-4 flex justify-between items-center gap-2">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="flex items-center px-2 md:px-4 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-600 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors text-sm md:text-base"
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 md:mr-1" />
          <span className="hidden md:inline">Previous</span>
        </button>

        <div className="flex items-center space-x-2 md:space-x-4">
          {/* Slide Navigation Dots */}
          <div className="flex space-x-1.5 md:space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-blue-500' : 'bg-gray-500'
                }`}
                title={SLIDE_TITLES[index]}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-white text-xs md:text-sm font-medium">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="flex items-center px-2 md:px-4 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-600 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors text-sm md:text-base"
        >
          <span className="hidden md:inline">Next</span>
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5 md:ml-1" />
        </button>
      </div>

      {/* Slide Title Bar */}
      <div className="bg-gray-700 px-3 md:px-6 py-2 text-center">
        <p className="text-white text-xs md:text-sm font-medium line-clamp-2">
          {SLIDE_TITLES[currentSlide]}
        </p>
      </div>
    </div>
  );
};

export default App;