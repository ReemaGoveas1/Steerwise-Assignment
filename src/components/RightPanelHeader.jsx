import { BookOpen } from 'lucide-react';

const RightPanelHeader = () => {
  return (
    <div className="px-6 py-4 bg-white">
      <div className="flex items-center gap-2">
        <BookOpen size={20} />
        <h2 className="text-base font-semibold text-gray-900">
          Well API Unique Well Identifier
        </h2>
        <span className="flex items-center gap-2 bg-gray-100 rounded-2xl px-2.5 py-1.5 text-xs text-gray-600">
          Well
        </span>
      </div>
    </div>
  );
};
export default RightPanelHeader;