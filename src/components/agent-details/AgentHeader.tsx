import React from 'react';
import { Share2, Heart, Globe, ExternalLink } from 'lucide-react';
import { generateCatAvatar } from '../../utils/avatar';

interface AgentHeaderProps {
  id?: string;
}

export default function AgentHeader({ id }: AgentHeaderProps) {
  const agent = {
    name: 'G.A.M.E',
    type: 'Productivity',
    symbol: '$GAME',
    description: 'An advanced AI cat agent specialized in productivity enhancement and task management.',
    stats: {
      totalVolume: '4,971 ETH',
      floorPrice: '5.35 USDC.e',
      bestOffer: '4.3 USDC.e',
      listed: '2%',
      owners: '10,770 (15%)'
    }
  };

  return (
    <div>
      <div className="bg-[#04111d] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-8">
            <Globe className="h-4 w-4" />
            <span>CatAgents</span>
            <ExternalLink className="h-4 w-4" />
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-[540px] h-[540px] rounded-xl overflow-hidden bg-gray-800">
              <img
                src={generateCatAvatar(agent.name)}
                alt={agent.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-5xl font-bold mb-2">{agent.name}</h1>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">Created by</span>
                      <span className="text-blue-500 hover:text-blue-400 cursor-pointer">CatAgents</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">Chain</span>
                      <span className="text-white">Polygon</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                    <Share2 className="h-5 w-5" />
                  </button>
                  <button className="p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                    <Heart className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-gray-400">Current Price</div>
                  <div className="text-sm text-gray-400">Last Updated: 2 mins ago</div>
                </div>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-3xl font-bold">{agent.stats.floorPrice}</span>
                  <span className="text-gray-400">($10.70)</span>
                </div>
                <div className="flex gap-4">
                  <button className="flex-1 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold transition-colors">
                    Buy Now
                  </button>
                  <button className="flex-1 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-xl font-semibold transition-colors">
                    Make Offer
                  </button>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-6">
                <div className="flex items-center gap-2 text-lg font-semibold mb-4">
                  Description
                </div>
                <p className="text-gray-400">{agent.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <StatCard label="Total Volume" value={agent.stats.totalVolume} />
          <StatCard label="Floor Price" value={agent.stats.floorPrice} />
          <StatCard label="Best Offer" value={agent.stats.bestOffer} />
          <StatCard label="Listed" value={agent.stats.listed} />
          <StatCard label="Owners" value={agent.stats.owners} />
        </div>
      </div>
    </div>
  );
}

interface StatCardProps {
  label: string;
  value: string;
}

function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="text-lg font-semibold text-gray-900 mt-1">{value}</div>
    </div>
  );
}