const Slide07_ValueChainSegments = () => {
  return (
    <div className="h-full bg-gradient-to-br from-blue-50 to-indigo-100 p-8 overflow-auto">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">2. Semiconductor Value Chain: Three Major Segments</h1>
        
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">Highly Complex & Globally Distributed</h3>
            <p className="text-lg">Each segment requires distinct capabilities and investment</p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-50 p-6 rounded-lg border-t-4 border-blue-600">
              <h4 className="text-xl font-bold text-blue-900 mb-4">1. DESIGN</h4>
              <p className="text-sm text-gray-700 mb-3 font-semibold">Skill & Research Intensive</p>
              
              <div className="mb-4">
                <p className="font-semibold text-sm text-blue-800 mb-2">Key Players:</p>
                <ul className="space-y-1 text-xs text-gray-700">
                  <li>• Fabless: NVIDIA ($3.6T), AMD ($221B), Qualcomm ($171B)</li>
                  <li>• System: Apple, Tesla, Google, Meta</li>
                  <li>• IP/EDA: Arm, Synopsys, Cadence</li>
                  <li>• Memory: Micron, Western Digital</li>
                </ul>
              </div>
              
              <div className="mb-4">
                <p className="font-semibold text-sm text-blue-800 mb-2">Business Model:</p>
                <ul className="space-y-1 text-xs text-gray-700">
                  <li>• Asset-light, high margins (60-80%)</li>
                  <li>• R&D intensive: 25-52% of revenue</li>
                  <li>• IP licensing & royalties</li>
                  <li>• Design service partnerships</li>
                </ul>
              </div>
              
              <div className="mt-4 pt-4 border-t">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <p className="font-bold text-blue-900">Market Cap:</p>
                    <p className="text-gray-600">$5.2T (top 10)</p>
                  </div>
                  <div>
                    <p className="font-bold text-blue-900">Growth:</p>
                    <p className="text-gray-600">15-25% CAGR</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-t-4 border-green-600">
              <h4 className="text-xl font-bold text-green-900 mb-4">2. FABRICATION</h4>
              <p className="text-sm text-gray-700 mb-3 font-semibold">Capital Intensive</p>
              
              <div className="mb-4">
                <p className="font-semibold text-sm text-green-800 mb-2">Key Players:</p>
                <ul className="space-y-1 text-xs text-gray-700">
                  <li>• Foundries: TSMC (70.2%), Samsung (7.2%), GF (6%)</li>
                  <li>• IDMs: Intel, TI, Infineon, STMicro</li>
                  <li>• Memory: Samsung, SK Hynix, Micron</li>
                  <li>• Emerging: SMIC (China), Tower (Israel)</li>
                </ul>
              </div>
              
              <div className="mb-4">
                <p className="font-semibold text-sm text-green-800 mb-2">Economics:</p>
                <ul className="space-y-1 text-xs text-gray-700">
                  <li>• Leading fab cost: $15-20B</li>
                  <li>• Gross margins: 45-55%</li>
                  <li>• Utilization critical: 85%+ target</li>
                  <li>• Depreciation: 3-5 year cycles</li>
                </ul>
              </div>
              
              <div className="mt-4 pt-4 border-t">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <p className="font-bold text-green-900">CapEx 2024:</p>
                    <p className="text-gray-600">$150B+ global</p>
                  </div>
                  <div>
                    <p className="font-bold text-green-900">Concentration:</p>
                    <p className="text-gray-600">Top 3: 85%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border-t-4 border-purple-600">
              <h4 className="text-xl font-bold text-purple-900 mb-4">3. ASSEMBLY/TEST/PACKAGING</h4>
              <p className="text-sm text-gray-700 mb-3 font-semibold">Labor & Service Intensive</p>
              
              <div className="mb-4">
                <p className="font-semibold text-sm text-purple-800 mb-2">Key Players:</p>
                <ul className="space-y-1 text-xs text-gray-700">
                  <li>• OSATs: ASE Group ($15B), Amkor ($7B), JCET ($5B)</li>
                  <li>• Integrated: TSMC, Intel (advanced packaging)</li>
                  <li>• Regional: Powertech, ChipMOS, UTAC</li>
                  <li>• Test: Teradyne, Advantest equipment</li>
                </ul>
              </div>
              
              <div className="mb-4">
                <p className="font-semibold text-sm text-purple-800 mb-2">Market Dynamics:</p>
                <ul className="space-y-1 text-xs text-gray-700">
                  <li>• Gross margins: 15-25%</li>
                  <li>• Advanced packaging growing 20%+</li>
                  <li>• SE Asia concentration (Malaysia, Philippines)</li>
                  <li>• Near-shoring trends emerging</li>
                </ul>
              </div>
              
              <div className="mt-4 pt-4 border-t">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <p className="font-bold text-purple-900">Market Size:</p>
                    <p className="text-gray-600">$65B (2024)</p>
                  </div>
                  <div>
                    <p className="font-bold text-purple-900">Growth:</p>
                    <p className="text-gray-600">8-12% CAGR</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Competitive Dynamics & Value Creation</h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Design Dominance</h4>
                <p className="text-sm text-gray-600 mb-3">Winner-take-most dynamics</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• NVIDIA: 93% AI GPU share</li>
                  <li>• Arm: 95% mobile processor IP</li>
                  <li>• Qualcomm: 60% premium mobile</li>
                  <li>• Network effects & ecosystem lock-in</li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Fab Concentration</h4>
                <p className="text-sm text-gray-600 mb-3">Scale economics drive consolidation</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• TSMC market share: 59%→70.2%</li>
                  <li>• Samsung declining: 11%→7.2%</li>
                  <li>• Intel foundry: Not in top 10</li>
                  <li>• $20B+ fabs required for leading edge</li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Assembly Evolution</h4>
                <p className="text-sm text-gray-600 mb-3">Shifting to advanced packaging</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Traditional packaging: Commoditizing</li>
                  <li>• Advanced packaging: 20%+ growth</li>
                  <li>• TSMC CoWoS: 330K→660K wafers</li>
                  <li>• Foundries integrating vertically</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg border border-gray-200">
              <h4 className="text-lg font-bold text-gray-800 mb-4">📊 Financial Profile Comparison</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Gross Margins:</span>
                  <span className="text-sm font-semibold">Design: 70% | Fab: 50% | ATP: 20%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">R&D Intensity:</span>
                  <span className="text-sm font-semibold">Design: 25% | Fab: 8% | ATP: 3%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">CapEx/Revenue:</span>
                  <span className="text-sm font-semibold">Design: 2% | Fab: 25% | ATP: 8%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Asset Turnover:</span>
                  <span className="text-sm font-semibold">Design: 3.0x | Fab: 0.6x | ATP: 1.2x</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg border border-gray-200">
              <h4 className="text-lg font-bold text-gray-800 mb-4">⚡ Investment Implications</h4>
              <div className="space-y-2">
                <div className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1 font-bold">•</span>
                  <span className="text-sm text-gray-700"><strong>Design:</strong> Highest returns but technology risk</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1 font-bold">•</span>
                  <span className="text-sm text-gray-700"><strong>Fab:</strong> Stable cash flows but cyclical</span>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-600 mr-2 mt-1 font-bold">•</span>
                  <span className="text-sm text-gray-700"><strong>ATP:</strong> Lower returns but defensive</span>
                </div>
                <div className="flex items-start">
                  <span className="text-orange-600 mr-2 mt-1 font-bold">•</span>
                  <span className="text-sm text-gray-700"><strong>Portfolio:</strong> Diversify across segments</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-lg text-center">
            <p className="text-sm font-bold text-gray-800">
              💡 Investment Insight: Specialization creates interdependence - no single company can dominate entire value chain
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide07_ValueChainSegments;