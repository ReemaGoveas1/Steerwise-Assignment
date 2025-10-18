import { ListOrdered, Server } from 'lucide-react';

const Header = () => {
  return (
    <div className="px-6 py-5 border-gray-200">
      <div className="flex items-center gap-3 mb-2">
        <h1 className="text-2xl font-bold text-gray-900">User Profiles</h1>
        <div className="flex items-center gap-2 bg-gray-100 rounded-2xl px-2.5 py-1.5">
          <ListOrdered size={14} className="text-gray-600" />
          <span className="text-xs font-semibold text-gray-900">1,243,856</span>
          <span className="text-xs text-gray-600">Objects</span>
        </div>
        <div className="flex items-center gap-2 bg-gray-100 rounded-2xl px-2.5 py-1.5">
          <Server size={14} className="text-gray-600" />
          <span className="text-xs font-semibold text-gray-900">1.191 GB</span>
          <span className="text-xs text-gray-600">(1,857,573,355 Bytes)</span>
        </div>
      </div>
      
      <p className="text-sm text-gray-600 mb-4">
        Standardizes and defines terminology related to hydrocarbon well domain
      </p>
      
      <div className="text-sm text-gray-700 mb-4">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some
      </div>

      <div className="flex items-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div 
            className="flex items-center justify-center"
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              backgroundColor: '#1f2937'
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-white">
              <circle cx="12" cy="6" r="3" fill="currentColor"/>
              <circle cx="6" cy="18" r="3" fill="currentColor"/>
              <circle cx="18" cy="18" r="3" fill="currentColor"/>
              <path d="M12 8v4M10 14l-2 2M14 14l2 2" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <span className="font-semibold text-gray-900">8,857</span>
          <span className="text-gray-600">Objects</span>
        </div>
        <div className="flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gray-400">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-semibold text-gray-900">3</span>
          <span className="text-gray-600">Tree Depth</span>
        </div>
        <div className="flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gray-400">
            <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-semibold text-gray-900">200</span>
          <span className="text-gray-600">Fields</span>
        </div>
        <div className="flex items-center gap-2">
          <Server size={16} className="text-gray-400" />
          <span className="font-semibold text-gray-900">1.191</span>
          <span className="text-gray-600">GB</span>
        </div>
      </div>
    </div>
  );
};
export default Header;