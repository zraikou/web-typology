
import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar = ({ current, total }: ProgressBarProps) => {
  const progress = (current / total) * 100;
  
  return (
    <div className="w-full mb-6">
      <div className="flex justify-between mb-2 text-sm">
        <span className="text-muted-foreground">{Math.round(progress)}% Completed</span>
        <span className="text-muted-foreground">Question {current} of {total}</span>
      </div>
      <div className="w-full bg-muted/50 rounded-full h-2 overflow-hidden glass">
        <div 
          className="h-full rounded-full gradient-bg transition-all duration-500 ease-out" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
