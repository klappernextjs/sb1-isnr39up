import React from 'react';
import { ChevronRight } from 'lucide-react';

const prompts = [
  { id: 'heartbeat', label: 'Heartbeat' },
  { id: 'world-info', label: 'World Information' },
  { id: 'agent-goal', label: 'Agent Goal' },
  { id: 'agent-description', label: 'Agent Description' },
  { id: 'x-prompt', label: 'X Prompt Configuration' },
];

export default function AgentDefinition() {
  const [selectedPrompt, setSelectedPrompt] = React.useState<string | null>(
    null
  );

  return (
    <div className="bg-[#0D1D2D] rounded-lg p-6 space-y-4">
      <h3 className="font-mono text-lg font-semibold text-[#4FD1C5]">
        Agent Definition Prompts
      </h3>
      <p className="font-mono text-sm text-gray-400">
        Click on each of them to configure.
      </p>

      <div className="space-y-2">
        {prompts.map((prompt) => (
          <button
            key={prompt.id}
            onClick={() => setSelectedPrompt(prompt.id)}
            className={`w-full flex items-center justify-between p-3 rounded-lg text-left font-mono transition-colors duration-200 ${
              selectedPrompt === prompt.id
                ? 'bg-[#1A2B3B] text-[#4FD1C5] border border-[#4FD1C5]/20'
                : 'bg-[#0D1D2D] text-gray-300 hover:bg-[#162636] border border-transparent'
            }`}
          >
            <span>{prompt.label}</span>
            <ChevronRight
              className={`h-4 w-4 transition-transform duration-200 ${
                selectedPrompt === prompt.id ? 'rotate-90' : ''
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
