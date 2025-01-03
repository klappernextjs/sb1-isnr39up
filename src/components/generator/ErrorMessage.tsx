import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="p-4 bg-red-50 text-red-700 rounded-lg flex items-center gap-2">
      <AlertCircle className="h-5 w-5 flex-shrink-0" />
      <p>{message}</p>
    </div>
  );
}