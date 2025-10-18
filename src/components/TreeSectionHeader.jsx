import { ChevronRight, ChevronDown, Grid3x3, Filter, RotateCcw, ChevronLeft, Search, ChevronLeftCircle, ChevronRightCircle, ChevronsLeft, ChevronsRight, Settings, ListChevronsDownUp} from 'lucide-react';

const TreeSectionHeader = () => {
  return (
    <div className="px-6 py-3 border-gray-200">
      <div className="flex items-center gap-2 text-xs text-gray-600 mb-3">
        <span className="text-gray-700">User</span>
        <ChevronRight size={14} className="text-gray-400" />
        <span className="text-gray-600">hova.davis@steerwise.com</span>
        <ChevronRight size={14} className="text-gray-400" />
        <span className="text-gray-600">Data Fields</span>
        <ChevronRight size={14} className="text-gray-400" />
        <span className="text-gray-600">Organization</span>
        <ChevronRight size={14} className="text-gray-400" />
        <span className="text-gray-600">steerwise.com</span>
        <ChevronRight size={14} className="text-gray-400" />
        <span className="text-gray-900 font-medium">Data Fields</span>
        <div className="flex items-center gap-2">
          <ChevronLeftCircle size={16} className="text-gray-400" />
          <ChevronRightCircle
           size={16} className="text-gray-400" />
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <div 
          className="flex items-center justify-center"
          style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            backgroundColor: '#1f2937'
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white">
            <circle cx="12" cy="6" r="3" fill="currentColor"/>
            <circle cx="6" cy="18" r="3" fill="currentColor"/>
            <circle cx="18" cy="18" r="3" fill="currentColor"/>
            <path d="M12 8v4M10 14l-2 2M14 14l2 2" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
        <button className="hover:bg-gray-200 rounded p-1">
          <ChevronDown size={16} className="text-gray-600" />
        </button>
        <span className="text-sm font-semibold text-gray-900">User</span>
        
        <div className="flex items-center gap-2 text-xs text-gray-500 ml-4">
            <svg width="10" height="10" viewBox="0 0 12 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 3 V17" class="symbol-stroke"/>
                <path d="M10 3 L4 10 L10 17" class="symbol-stroke"/>
            </svg>
          <ChevronsLeft size={16} className="text-gray-400" />
          <ChevronLeft size={12} className="text-gray-400"/>
          <span className="font-semibold text-gray-900">301-310</span>
          <ChevronRight size={12} className="text-gray-400" />
          <ChevronsRight size={16} className="text-gray-400" />
          <span className="text-gray-600">of</span>
          <svg width="10" height="10" viewBox="0 0 12 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 3 L8 10 L2 17" class="symbol-stroke"/>
            <path d="M10 3 V17" class="symbol-stroke"/>
          </svg>
          <span className="font-semibold text-gray-900">8,857</span>
          <span className="text-gray-600">Objects</span>
        </div>
        <div className="w-px h-4 bg-gray-300 mx-1"></div>
        <div className="flex items-center gap-2">
          <div 
            className="flex items-center justify-center"
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-gray-400">
              <circle cx="12" cy="6" r="3" fill="currentColor"/>
              <circle cx="6" cy="18" r="3" fill="currentColor"/>
              <circle cx="18" cy="18" r="3" fill="currentColor"/>
              <path d="M12 8v4M10 14l-2 2M14 14l2 2" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <Grid3x3 size={16} className="text-gray-400" />
          <div className="w-px h-4 bg-gray-300 mx-1"></div>
          <Search size={16} className="text-gray-400" />
          <div className="w-px h-4 bg-gray-300 mx-1"></div>
          <ListChevronsDownUp size={16} className="text-gray-400" />
          <Filter size={16} className="text-gray-400" />
          <svg width="15" height="15" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 4h18l-7 8v5l-4 3v-8L3 4z" class="funnel"/>
            <path d="M10 19l3 3 5-5" class="check"/>
          </svg>
          <Settings size={16} className="text-gray-400" />
          <RotateCcw size={16} className="text-gray-400" />
        </div>
      </div>
    </div>
  );
};
export default TreeSectionHeader;