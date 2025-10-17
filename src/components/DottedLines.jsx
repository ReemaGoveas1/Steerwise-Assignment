import React from 'react';

export default function DottedLine() {
  return (
    <div className="flex items-center flex-1 mx-2">
      {/* Left big dot */}
      <span className="w-2 h-2 bg-gray-400 rounded-full flex-shrink-0"></span>

      {/* Middle stretch dotted line */}
      <span className="flex-1 border-b border-dotted border-gray-300 mx-2" style={{ minWidth: '1px' }}></span>

      {/* Right big dot */}
      <span className="w-2 h-2 border-2 border-gray-300 rounded-full flex-shrink-0"></span>
    </div>
  );
}
