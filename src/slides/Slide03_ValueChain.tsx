const Slide03_ValueChain = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Complete Value Chain: Market Caps & Dependencies (2025)</h1>
        
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 rounded-lg text-center">
            <p className="text-lg font-bold">Total Top 10 Semiconductor Market Cap: $6.5 Trillion</p>
          </div>

          {/* Design Phase */}
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
            <h3 className="text-lg font-bold text-blue-900 mb-3 flex items-center">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
              DESIGN & IP (R&D Intensive: 25-52% of revenue)
            </h3>
            <div className="grid grid-cols-4 gap-3 text-xs">
              <div className="bg-white p-3 rounded shadow">
                <p className="font-bold text-gray-800">NVIDIA 🇺🇸</p>
                <p className="text-blue-600 font-semibold">$3.6T</p>
                <p className="text-gray-600 mt-1">AI GPU Leader</p>
                <p className="text-gray-500 text-xs mt-1">93% AI GPU share</p>
              </div>
              <div className="bg-white p-3 rounded shadow">
                <p className="font-bold text-gray-800">Broadcom 🇺🇸</p>
                <p className="text-blue-600 font-semibold">$1.2T</p>
                <p className="text-gray-600 mt-1">Custom AI/5G</p>
                <p className="text-gray-500 text-xs mt-1">VMware acquired</p>
              </div>
              <div className="bg-white p-3 rounded shadow">
                <p className="font-bold text-gray-800">AMD 🇺🇸</p>
                <p className="text-blue-600 font-semibold">$221B</p>
                <p className="text-gray-600 mt-1">HPC & AI</p>
                <p className="text-gray-500 text-xs mt-1">MI400 series</p>
              </div>
              <div className="bg-white p-3 rounded shadow">
                <p className="font-bold text-gray-800">Qualcomm 🇺🇸</p>
                <p className="text-blue-600 font-semibold">$171B</p>
                <p className="text-gray-600 mt-1">Mobile/Auto</p>
                <p className="text-gray-500 text-xs mt-1">5G leader</p>
              </div>
            </div>
            <div className="mt-2 text-xs text-gray-600 bg-blue-100 p-2 rounded">
              <strong>Key Dependencies:</strong> TSMC for manufacturing (100%), Arm/Synopsys/Cadence for IP/EDA
            </div>
          </div>

          {/* Materials & Equipment */}
          <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-600">
            <h3 className="text-lg font-bold text-orange-900 mb-3 flex items-center">
              <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
              MATERIALS & EQUIPMENT (Capital Intensive)
            </h3>
            <div className="grid grid-cols-5 gap-3 text-xs">
              <div className="bg-white p-3 rounded shadow border-t-2 border-red-500">
                <p className="font-bold text-gray-800">ASML 🇳🇱</p>
                <p className="text-orange-600 font-semibold">$312B</p>
                <p className="text-gray-600 mt-1">EUV Lithography</p>
                <p className="text-red-600 text-xs mt-1 font-bold">100% monopoly</p>
              </div>
              <div className="bg-white p-3 rounded shadow">
                <p className="font-bold text-gray-800">Applied Mat 🇺🇸</p>
                <p className="text-orange-600 font-semibold">$174B</p>
                <p className="text-gray-600 mt-1">Deposition/Etch</p>
                <p className="text-gray-500 text-xs mt-1">Diversified</p>
              </div>
              <div className="bg-white p-3 rounded shadow">
                <p className="font-bold text-gray-800">Lam Research 🇺🇸</p>
                <p className="text-orange-600 font-semibold">$178B</p>
                <p className="text-gray-600 mt-1">Etch/Deposition</p>
                <p className="text-gray-500 text-xs mt-1">HBM strong</p>
              </div>
              <div className="bg-white p-3 rounded shadow">
                <p className="font-bold text-gray-800">Tokyo Electron 🇯🇵</p>
                <p className="text-orange-600 font-semibold">~$85B</p>
                <p className="text-gray-600 mt-1">Etch/Deposit</p>
                <p className="text-gray-500 text-xs mt-1">Asia focus</p>
              </div>
              <div className="bg-white p-3 rounded shadow border-t-2 border-yellow-500">
                <p className="font-bold text-gray-800">Materials 🇯🇵</p>
                <p className="text-orange-600 font-semibold">Various</p>
                <p className="text-gray-600 mt-1">Shin-Etsu, JSR</p>
                <p className="text-yellow-600 text-xs mt-1 font-bold">50%+ wafers</p>
              </div>
            </div>
          </div>

          {/* Fabrication */}
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
            <h3 className="text-lg font-bold text-green-900 mb-3 flex items-center">
              <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
              FABRICATION (Highest CapEx: $15-20B per fab)
            </h3>
            <div className="grid grid-cols-4 gap-3 text-xs">
              <div className="bg-white p-3 rounded shadow border-t-2 border-red-500">
                <p className="font-bold text-gray-800">TSMC 🇹🇼</p>
                <p className="text-green-600 font-semibold">$951B</p>
                <p className="text-gray-600 mt-1">Pure Foundry</p>
                <p className="text-red-600 text-xs mt-1 font-bold">68-70% share (Q1 '25)</p>
              </div>
              <div className="bg-white p-3 rounded shadow">
                <p className="font-bold text-gray-800">Samsung 🇰🇷</p>
                <p className="text-green-600 font-semibold">$467B</p>
                <p className="text-gray-600 mt-1">IDM + Foundry</p>
                <p className="text-orange-600 text-xs mt-1">7.7% foundry</p>
              </div>
              <div className="bg-white p-3 rounded shadow">
                <p className="font-bold text-gray-800">Intel 🇺🇸</p>
                <p className="text-green-600 font-semibold">$100B</p>
                <p className="text-gray-600 mt-1">IDM → IFS 2.0</p>
                <p className="text-yellow-600 text-xs mt-1">18A node 2H'25</p>
              </div>
              <div className="bg-white p-3 rounded shadow">
                <p className="font-bold text-gray-800">UMC/GF/SMIC</p>
                <p className="text-green-600 font-semibold">Combined ~15%</p>
                <p className="text-gray-600 mt-1">Mature nodes</p>
              </div>
            </div>
          </div>

          {/* Critical Dependencies */}
          <div className="bg-red-50 p-4 rounded-lg border-2 border-red-600">
            <h3 className="text-lg font-bold text-red-900 mb-3">🚨 Critical Dependencies & Vulnerabilities</h3>
            <div className="grid grid-cols-3 gap-3 text-xs">
              <div className="bg-white p-3 rounded shadow">
                <p className="font-bold text-red-900 mb-2">Equipment Monopolies</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• ASML: 100% EUV (no alternatives)</li>
                  <li>• High-NA EUV: $380M each</li>
                  <li>• Applied/Lam: Duopoly deposition/etch</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded shadow">
                <p className="font-bold text-red-900 mb-2">Geopolitical Concentration</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Taiwan: 70% foundry (TSMC)</li>
                  <li>• China: 98% gallium, 68% germanium</li>
                  <li>• Japan: 51%+ silicon wafers</li>
                  <li>• Turkey: 60%+ refined borax</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded shadow">
                <p className="font-bold text-red-900 mb-2">Trade Dependencies</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• 49 dependencies (2020-22)</li>
                  <li>• 59% from China (29 of 49)</li>
                  <li>• Doubled since 2012-14</li>
                  <li>• 58% downstream flows → China</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide03_ValueChain;