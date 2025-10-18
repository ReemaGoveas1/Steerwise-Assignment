import { User } from 'lucide-react';
import DottedLine from './DottedLines';
const DetailRow = ({ number, label, value, valueColor = "text-gray-900" }) => {
  const labelColor = label.includes('Object') || label.includes('Reference') || label.includes('Uniqueness') || label.includes('Hash') ? 'text-gray-700' : 'text-gray-500';
  
  return (
//     <div className="flex items-center gap-3">
//   <span className="text-sm text-gray-600 w-6 flex-shrink-0">{number}</span>
//   <div className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
//   <div className="flex items-center justify-center flex-shrink-0 w-5 h-5 rounded-full bg-gray-200">
//     <User size={12} className="text-gray-600" />
//   </div>

//   {/* Label + dotted line */}
//   <div className="flex items-center flex-1 min-w-0">
//     <span className={`text-sm ${labelColor} whitespace-nowrap`}>{label}</span>
//     <DottedLine className="flex-1 mx-2" />
//   </div>

//   {/* Fixed-width value for alignment */}
//   <span className={`text-sm font-medium text-right w-40 flex-shrink-0 ${valueColor}`}>
//     {value}
//   </span>
// </div>
<div className="flex items-center gap-3">
      {/* Number */}
      <span className="text-sm text-gray-600 w-6 flex-shrink-0">{number}</span>

      {/* Status Dot */}
      <div className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />

      {/* Icon */}
      <div className="flex items-center justify-center flex-shrink-0 w-5 h-5 rounded-full bg-gray-200">
        <User size={12} className="text-gray-600" />
      </div>

      {/* Label + Dotted Line + Value */}
      <div className="grid grid-cols-[1fr_10rem] items-center flex-1 min-w-0">
        {/* Left Column: Label + Dotted Line */}
        <div className="flex items-center min-w-0">
          <span className={`text-sm ${labelColor} whitespace-nowrap`}>{label}</span>
          <DottedLine className="flex-1 mx-2" />
        </div>

        {/* Right Column: Value */}
        <span className={`text-sm font-medium text-right ${valueColor}`}>
          {value}
        </span>
      </div>
    </div>
  );
};
export default DetailRow;