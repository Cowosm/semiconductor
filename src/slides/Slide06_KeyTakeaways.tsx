const Slide06_KeyTakeaways = () => {
  return (
    <div className="h-full bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8 overflow-auto">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-8">5. Key Takeaways</h1>
        
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-3">Investment Summary</h2>
            <p className="text-xl">Semiconductors: Complex, Capital-Intensive, Strategically Critical</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center">
                <span className="text-2xl mr-3">✅</span>
                Investment Positives
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">▸</span>
                  <span><strong>Secular growth drivers:</strong> AI, EVs, IoT, 5G creating sustained demand</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">▸</span>
                  <span><strong>High barriers to entry:</strong> Protect established players with pricing power</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">▸</span>
                  <span><strong>Government support:</strong> $100B+ in global subsidies reducing investment risk</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">▸</span>
                  <span><strong>Oligopoly structures:</strong> Leading companies have strong moats</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">▸</span>
                  <span><strong>Technology indispensable:</strong> No viable alternatives to semiconductors</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                <span className="text-2xl mr-3">⚠️</span>
                Key Risks
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 mt-1">▸</span>
                  <span><strong>Geopolitical exposure:</strong> Taiwan concentration, US-China tensions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 mt-1">▸</span>
                  <span><strong>Extreme cyclicality:</strong> Boom-bust patterns can destroy capital</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 mt-1">▸</span>
                  <span><strong>Capital intensity:</strong> $15-20B fab costs with uncertain returns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 mt-1">▸</span>
                  <span><strong>Technology obsolescence:</strong> Rapid innovation can strand investments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 mt-1">▸</span>
                  <span><strong>Supply chain complexity:</strong> Multiple single points of failure</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-600">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Financial Analyst Recommendations</h3>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-bold text-gray-800 mb-2">Portfolio Construction</p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Diversify across value chain</li>
                  <li>• Mix growth and defensive</li>
                  <li>• Consider equipment exposure</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-gray-800 mb-2">Timing Considerations</p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Monitor inventory cycles</li>
                  <li>• Track capacity utilization</li>
                  <li>• Watch lead times</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-gray-800 mb-2">Due Diligence Focus</p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Customer concentration</li>
                  <li>• Technology roadmap</li>
                  <li>• Geographic exposure</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-lg text-center">
            <p className="text-lg text-gray-800">
              <strong>Bottom Line:</strong> Semiconductors offer compelling long-term growth opportunities but require sophisticated understanding of technology, geopolitics, and market cycles. <strong>Selectivity is key.</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide06_KeyTakeaways;