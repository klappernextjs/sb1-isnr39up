import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs';
import AgentDefinition from './sections/AgentDefinition';
import FunctionConfig from './sections/FunctionConfig';
import SimulationPanel from './sections/SimulationPanel';

export default function KittieBuilder() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-4 md:p-6 lg:p-8">
      <Tabs defaultValue="definition">
        <TabsList>
          <TabsTrigger value="definition">Agent Definition</TabsTrigger>
          <TabsTrigger value="functions">Configure Functions</TabsTrigger>
          <TabsTrigger value="simulation">Simulation</TabsTrigger>
        </TabsList>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 space-y-6">
            <TabsContent value="definition">
              <AgentDefinition />
            </TabsContent>
            <TabsContent value="functions">
              <FunctionConfig />
            </TabsContent>
          </div>

          <div className="lg:col-span-8">
            <SimulationPanel />
          </div>
        </div>
      </Tabs>
    </div>
  );
}