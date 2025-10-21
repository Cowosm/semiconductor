import { Globe, Zap } from 'lucide-react';

const Slide02_IndustryOverview = () => {
  return (
    <div className="h-full bg-gradient-to-br from-blue-50 to-indigo-100 p-8 overflow-auto">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">1. Industry Overview: Why Semiconductors Matter</h1>
        
        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Critical to Modern Technology</h3>
            <p className="text-lg text-gray-700 mb-3">Semiconductors are the backbone of virtually all modern electronic devices and digital infrastructure</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold text-blue-800">Global Penetration:</p>
                <p className="text-gray-600">• 1+ trillion chips manufactured annually</p>
                <p className="text-gray-600">• Present in 99% of electronic devices</p>
                <p className="text-gray-600">• Enable $8+ trillion digital economy</p>
              </div>
              <div>
                <p className="font-semibold text-blue-800">Strategic Importance:</p>
                <p className="text-gray-600">• National security implications</p>
                <p className="text-gray-600">• Economic competitiveness driver</p>
                <p className="text-gray-600">• Innovation catalyst across industries</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                <Globe className="w-6 h-6 mr-2 text-blue-600" />
                2024-2025 Market Scale & Growth
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">2024 sales:</span>
                  <span className="font-bold text-green-600">$627B (+19%)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">2025 forecast:</span>
                  <span className="font-bold text-blue-600">$697B (new record)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">2030 projection:</span>
                  <span className="font-bold text-purple-600">$1+ trillion</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Top 10 market cap:</span>
                  <span className="font-bold text-orange-600">$6.5T</span>
                </div>
                <div className="border-t pt-2 mt-3">
                  <p className="text-xs text-gray-500">CAGR 2024-2030: ~8.5%</p>
                  <p className="text-xs text-gray-500">Outpacing global GDP growth (3-4%)</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                <Zap className="w-6 h-6 mr-2 text-yellow-600" />
                Market Segments & Applications
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">AI & Data Centers:</span>
                  <span className="font-bold text-purple-600">$209B (33%)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Mobile/Consumer:</span>
                  <span className="font-bold text-blue-600">$188B (30%)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Automotive:</span>
                  <span className="font-bold text-green-600">$94B (15%)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Industrial/IoT:</span>
                  <span className="font-bold text-orange-600">$82B (13%)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Communications:</span>
                  <span className="font-bold text-red-600">$54B (9%)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
              <h5 className="font-bold text-green-900 mb-2">Growth Drivers 🚀</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Gen AI boom ($125B→$150B+)</li>
                <li>• EV adoption (3x chip content)</li>
                <li>• 5G infrastructure rollout</li>
                <li>• Edge computing expansion</li>
                <li>• IoT device proliferation</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
              <h5 className="font-bold text-blue-900 mb-2">Investment Intensity 💰</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• R&D: 52% of EBIT (2024)</li>
                <li>• CapEx: $200B+ annually</li>
                <li>• Leading fab: $15-20B</li>
                <li>• Equipment depreciation: 3-5 years</li>
                <li>• Talent costs: 25-30% of revenue</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
              <h5 className="font-bold text-purple-900 mb-2">Technology Trends 🔬</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Node progression: 3nm→2nm→1.4nm</li>
                <li>• Advanced packaging (2.5D/3D)</li>
                <li>• Chiplet architectures</li>
                <li>• New materials (GaN, SiC)</li>
                <li>• Quantum computing emergence</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg mt-6">
            <p className="text-gray-700"><strong>2024-25 Market Update:</strong> R&D spending reached 52% of EBIT (up from 45% in 2015). Gen AI chips exceeded $125B in 2024, forecast &gt;$150B in 2025. TSMC&apos;s CoWoS advanced packaging capacity doubled to 660K wafers/year to meet AI demand.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide02_IndustryOverview;