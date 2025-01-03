import React from 'react';
import ActivityHeader from '../components/activity/ActivityHeader';
import ActivityTable from '../components/activity/ActivityTable';
import ActivityFilters from '../components/activity/ActivityFilters';

export default function Activity() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <ActivityHeader />
      <ActivityFilters />
      <ActivityTable />
    </div>
  );
}