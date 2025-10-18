// DottedLine Component
const DottedLine = ({ className = "" }) => {
  return (
    <div className={`flex items-center flex-1 mx-1 ${className}`}>
      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>
      <span className="flex-1 border-b-2 border-dotted border-gray-300 mx-1" style={{ minWidth: '20px' }}></span>
      <span className="w-1.5 h-1.5 border-2 border-gray-400 rounded-full flex-shrink-0 bg-white"></span>
    </div>
  );
};
export default DottedLine;