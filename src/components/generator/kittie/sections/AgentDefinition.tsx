import React from 'react';
import { Brain, Globe, Target, FileText, Settings } from 'lucide-react';

const prompts = [
  { id: 'heartbeat', label: 'Heartbeat', icon: Brain, emoji: '💓' },
  { id: 'world-info', label: 'World Information', icon: Globe, emoji: '🌍' },
  { id: 'agent-goal', label: 'Agent Goal', icon: Target, emoji: '🎯' },
  { id: 'agent-description', label: 'Agent Description', icon: FileText, emoji: '📝' },
  { id: 'x-prompt', label: 'X Prompt Configuration', icon: Settings, emoji: '⚙️' }
];

export default function AgentDefinition() {
  const [selectedPrompt, setSelectedPrompt] = React.useState<string | null>(null);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <h3 className="text-lg font-semibold text-gray-900">Agent Definition Prompts</h3>
        <span className="text-2xl">🤖</span>
      </div>
      <p className="text-sm text-gray-500">Click on each of them to configure.</p>

      <div className="space-y-2">
        {prompts.map(prompt => {
          const Icon = prompt.icon;
          return (
            <button
              key={prompt.id}
              onClick={() => setSelectedPrompt(prompt.id)}
              className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors
                ${selectedPrompt === prompt.id 
                  ? 'bg-purple-50 text-purple-700 border-2 border-purple-200' 
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-2 border-transparent'}`}
            >
              <span className="text-xl">{prompt.emoji}</span>
              <Icon className="h-5 w-5" />
              <span>{prompt.label}</span>
            </button>
          ))}
      </div>
    </div>
  );
}