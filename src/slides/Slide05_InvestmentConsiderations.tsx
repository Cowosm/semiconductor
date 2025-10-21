import { DollarSign, TrendingUp } from 'lucide-react';

const Slide05_InvestmentConsiderations = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">4. Investment & Finance Considerations</h1>
        
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-red-600">
              <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                <DollarSign className="w-6 h-6 mr-2" />
                Capital Intensity
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">▸</span>
                  <span><strong>Leading-edge fab:</strong> $15-20B investment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">▸</span>
                  <span><strong>Equipment depreciation:</strong> 3-5 year cycles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">▸</span>
                  <span><strong>Long payback periods:</strong> 5-7 years typical</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">▸</span>
                  <span><strong>Economies of scale:</strong> Essential for profitability</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-orange-600">
              <h3 className="text-xl font-bold text-orange-900 mb-4 flex items-center">
                <TrendingUp className="w-6 h-6 mr-2" />
                Industry Cyclicality
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">▸</span>
                  <span><strong>Boom-bust cycles:</strong> 2-4 year patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">▸</span>
                  <span><strong>Inventory volatility:</strong> Bullwhip effect</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">▸</span>
                  <span><strong>End-market sensitivity:</strong> Consumer electronics, PCs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">▸</span>
                  <span><strong>Counter-cyclical:</strong> Some segments (automotive, industrial)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-blue-900 mb-4">M&A Activity & Consolidation</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded shadow">
                <p className="font-semibold text-gray-800 mb-2">Recent Trends</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Vertical integration</li>
                  <li>• Technology acquisition</li>
                  <li>• Portfolio consolidation</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <p className="font-semibold text-gray-800 mb-2">Drivers</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Scale requirements</li>
                  <li>• IP acquisition</li>
                  <li>• Market access</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <p className="font-semibold text-gray-800 mb-2">Regulatory Scrutiny</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Antitrust concerns</li>
                  <li>• National security</li>
                  <li>• Tech sovereignty</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border-l-4 border-yellow-600">
            <h4 className="text-lg font-bold text-yellow-900 mb-3">Key Investment Metrics to Watch</h4>
            <div className="grid grid-cols-4 gap-4 text-sm">
              <div>
                <p className="font-semibold text-gray-800">Capacity Utilization</p>
                <p className="text-gray-600">85%+ indicates tight supply</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Book-to-Bill Ratio</p>
                <p className="text-gray-600">&gt;1.0 shows growing demand</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Inventory Days</p>
                <p className="text-gray-600">80-120 days is healthy</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">R&D % of Revenue</p>
                <p className="text-gray-600">15-25% for sustainability</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide05_InvestmentConsiderations;