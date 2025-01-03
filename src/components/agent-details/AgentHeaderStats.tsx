import React from 'react';

interface AgentHeaderStatsProps {
  stats: {
    totalVolume: string;
    floorPrice: string;
    bestOffer: string;
    listed: string;
    owners: string;
  };
}

export default function AgentHeaderStats({ stats }: AgentHeaderStatsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      <StatCard label="Total Volume" value={stats.totalVolume} />
      <StatCard label="Floor Price" value={stats.floorPrice} />
      <StatCard label="Best Offer" value={stats.bestOffer} />
      <StatCard label="Listed" value={stats.listed} />
      <StatCard label="Owners" value={stats.owners} />
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