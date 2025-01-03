import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useActivityStore } from '../../store/activityStore';
import { useCatsStore } from '../../store/catsStore';
import ActivityRow from './ActivityRow';

export default function ActivityTable() {
  const navigate = useNavigate();
  const activities = useActivityStore((state) => state.activities);
  const getCatById = useCatsStore((state) => state.getCatById);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">From</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">To</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {activities.map((activity) => {
            const cat = getCatById(activity.catId);
            if (!cat) return null;

            return (
              <ActivityRow
                key={activity.id}
                activity={activity}
                cat={cat}
                onClick={() => navigate(`/agent/${activity.catId}`)}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}