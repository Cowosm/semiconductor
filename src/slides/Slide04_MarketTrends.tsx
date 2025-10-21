const Slide04_MarketTrends = () => {
  return (
    <div className="h-full bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8 overflow-auto">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-8">3. Key Market Trends Driving Growth</h1>
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-gradient-to-br from-purple-500 to-blue-500 text-white p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">🤖 AI & Machine Learning</h3>
              <div className="space-y-3">
                <div className="bg-white bg-opacity-20 p-3 rounded">
                  <p className="font-semibold mb-1">Market Size & Growth</p>
                  <p className="text-sm">Gen AI chips: $125B (2024) → $150B+ (2025) → $250B (2030)</p>
                  <p className="text-sm">CAGR: 35%+ through 2030</p>
                </div>
                <div className="bg-white bg-opacity-20 p-3 rounded">
                  <p className="font-semibold mb-1">Key Drivers</p>
                  <p className="text-sm">• ChatGPT: 100M users in 2 months</p>
                  <p className="text-sm">• Enterprise AI adoption: 65% by 2025</p>
                  <p className="text-sm">• Training compute: 4x annually</p>
                </div>
                <div className="bg-white bg-opacity-20 p-3 rounded">
                  <p className="font-semibold mb-1">Winners</p>
                  <p className="text-sm">• NVIDIA: 93% server GPU share</p>
                  <p className="text-sm">• Advanced packaging: CoWoS, HBM</p>
                  <p className="text-sm">• Data center capex: $209B → $492B (2030)</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-teal-500 text-white p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">⚡ Electric Vehicles</h3>
              <div className="space-y-3">
                <div className="bg-white bg-opacity-20 p-3 rounded">
                  <p className="font-semibold mb-1">Market Transformation</p>
                  <p className="text-sm">EV sales: 14M (2023) → 30M (2030)</p>
                  <p className="text-sm">Penetration: 18% → 50% by 2030</p>
                </div>
                <div className="bg-white bg-opacity-20 p-3 rounded">
                  <p className="font-semibold mb-1">Semiconductor Content</p>
                  <p className="text-sm">• ICE vehicle: $600 chips</p>
                  <p className="text-sm">• EV: $1,800 chips (3x more)</p>
                  <p className="text-sm">• Autonomous: $5,000+ chips</p>
                </div>
                <div className="bg-white bg-opacity-20 p-3 rounded">
                  <p className="font-semibold mb-1">Key Technologies</p>
                  <p className="text-sm">• Power: SiC ($2.8B → $8.9B by 2030)</p>
                  <p className="text-sm">• Battery mgmt: $3.2B market</p>
                  <p className="text-sm">• ADAS/AV: $15B+ by 2030</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">☁️ Cloud & Data Centers</h3>
              <div className="space-y-3">
                <div className="bg-white bg-opacity-20 p-3 rounded">
                  <p className="font-semibold mb-1">Infrastructure Boom</p>
                  <p className="text-sm">Hyperscale CapEx: $200B+ (2024)</p>
                  <p className="text-sm">Server shipments: 15M → 20M (2030)</p>
                </div>
                <div className="bg-white bg-opacity-20 p-3 rounded">
                  <p className="font-semibold mb-1">5G & Edge Computing</p>
                  <p className="text-sm">• 5G base stations: 3M → 15M</p>
                  <p className="text-sm">• Edge sites: 10K → 1M+</p>
                  <p className="text-sm">• Latency critical apps growing</p>
                </div>
                <div className="bg-white bg-opacity-20 p-3 rounded">
                  <p className="font-semibold mb-1">Semiconductor Impact</p>
                  <p className="text-sm">• Server processors: $35B market</p>
                  <p className="text-sm">• HPC accelerators: $25B+</p>
                  <p className="text-sm">• Memory intensity: 2x by 2028</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-500 to-orange-500 text-white p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">🔗 Supply Chain Evolution</h3>
              <div className="space-y-3">
                <div className="bg-white bg-opacity-20 p-3 rounded">
                  <p className="font-semibold mb-1">Post-Shortage Response</p>
                  <p className="text-sm">2021-22 shortage cost: $240B</p>
                  <p className="text-sm">Inventory days: 80 → 120 target</p>
                </div>
                <div className="bg-white bg-opacity-20 p-3 rounded">
                  <p className="font-semibold mb-1">Diversification Efforts</p>
                  <p className="text-sm">• Nearshoring: Mexico, India</p>
                  <p className="text-sm">• Friendshoring: Allied nations</p>
                  <p className="text-sm">• Multi-sourcing strategies</p>
                </div>
                <div className="bg-white bg-opacity-20 p-3 rounded">
                  <p className="font-semibold mb-1">Strategic Stockpiling</p>
                  <p className="text-sm">• Critical materials reserves</p>
                  <p className="text-sm">• Buffer inventory buildup</p>
                  <p className="text-sm">• Long-term agreements</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Government Policy Impact & Investment (2024-25 Update)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-2">🇺🇸</span>
                  <h4 className="font-bold text-blue-900">U.S. CHIPS Act</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <p><strong>Funding:</strong> $52B allocated</p>
                  <p><strong>Projects:</strong> TSMC AZ ($40B), Intel OH ($20B)</p>
                  <p><strong>Progress:</strong> 25% funds deployed</p>
                  <p><strong>Impact:</strong> 10% US fab share by 2030</p>
                </div>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-2">🇪🇺</span>
                  <h4 className="font-bold text-purple-900">EU Chips Act</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <p><strong>Funding:</strong> €43B committed</p>
                  <p><strong>Projects:</strong> Intel Ireland (€12B), TSMC Germany</p>
                  <p><strong>Goal:</strong> 20% global production by 2030</p>
                  <p><strong>Focus:</strong> Advanced packaging, materials</p>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-2">🇨🇳</span>
                  <h4 className="font-bold text-red-900">China Response</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <p><strong>Funding:</strong> $150B+ mobilized</p>
                  <p><strong>Export controls:</strong> Gallium, germanium bans</p>
                  <p><strong>Self-reliance:</strong> 70% domestic by 2030</p>
                  <p><strong>SMIC progress:</strong> 7nm achieved</p>
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-2">🌏</span>
                  <h4 className="font-bold text-green-900">Export Controls</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <p><strong>US restrictions:</strong> Advanced AI chips to China</p>
                  <p><strong>Netherlands:</strong> EUV export controls</p>
                  <p><strong>Japan:</strong> Materials export restrictions</p>
                  <p><strong>Impact:</strong> Supply chain fragmentation</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border-l-4 border-yellow-600">
            <h4 className="text-lg font-bold text-yellow-900 mb-3">📊 Market Impact Analysis</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-semibold text-gray-800 mb-2">Winners by Trend</p>
                <ul className="text-gray-700 space-y-1">
                  <li>• AI: NVIDIA, TSMC, SK Hynix</li>
                  <li>• EV: Infineon, ON Semi, Wolfspeed</li>
                  <li>• Cloud: AMD, Marvell, Broadcom</li>
                  <li>• Supply chain: Regional players</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-2">Investment Flows</p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Fab construction: $200B+ globally</li>
                  <li>• Equipment orders: $100B (2024)</li>
                  <li>• R&D intensity: Record 52% of EBIT</li>
                  <li>• Talent acquisition: 25% premium</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-2">Risk Factors</p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Overcapacity risk in mature nodes</li>
                  <li>• Geopolitical trade disruptions</li>
                  <li>• Technology transition risks</li>
                  <li>• Talent shortage constraints</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide04_MarketTrends;