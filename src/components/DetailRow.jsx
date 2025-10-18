import { User } from 'lucide-react';
import DottedLine from './DottedLines';
const DetailRow = ({ number, label, value, valueColor = "text-gray-900" }) => {
  const labelColor = label.includes('Object') || label.includes('Reference') || label.includes('Uniqueness') || label.includes('Hash') ? 'text-gray-700' : 'text-gray-500';
  
  return (
      <div className="flex items-center gap-3">
      {/* Number */}
      <span className="text-sm text-gray-600 w-6 flex-shrink-0">{number}</span>
      
      {/* Status Dot */}
      <div className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
      
      {/* Icon */}
      <div className="flex items-center justify-center flex-shrink-0 w-5 h-5 rounded-full bg-gray-200">
        <User size={12} className="text-gray-600" />
      </div>
      
      {/* Label - Natural width */}
      <span className={`text-sm ${labelColor} flex-shrink-0`}>{label}</span>
      
      {/* Dotted Line - Fills remaining space */}
      <DottedLine className="flex-1 mx-2" />
      
      {/* Value - Fixed width container to align start position */}
      <div className="w-64 flex-shrink-0">
        <span className={`text-sm font-medium ${valueColor}`}>
          {value}
        </span>
      </div>
    </div>
  );
};
export default DetailRow;