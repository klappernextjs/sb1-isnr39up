import React from 'react';
import { AlertCircle, X } from 'lucide-react';

interface ErrorAlertProps {
  message: string;
  onClose?: () => void;
}

export default function ErrorAlert({ message, onClose }: ErrorAlertProps) {
  return (
    <div className="fixed bottom-4 right-4 max-w-md bg-red-50 text-red-700 p-4 rounded-lg shadow-lg flex items-start gap-3">
      <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
      <div className="flex-1">
        <p className="font-medium">Error</p>
        <p className="text-sm">{message}</p>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="p-1 hover:bg-red-100 rounded"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}