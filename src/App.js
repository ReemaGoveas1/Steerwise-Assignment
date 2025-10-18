import React, { useState } from 'react';
import Header from './components/Header';
import TreeSectionHeader from './components/TreeSectionHeader';
import TreeNode from './components/TreeNode';
import RightPanelHeader from './components/RightPanelHeader';
import RightPanelContent from './components/RightPanelContent';
import { TreeData } from './utils/Constants';
import { ChevronRight, ChevronDown, Users, Database, GitBranch, User, BookOpen, ListOrdered, Server, Grid3x3, Filter, RotateCcw, ChevronLeft, Search} from 'lucide-react';

export default function App() {
  const [expanded, setExpanded] = useState({
    'user': true,
    'business-domain': true,
    'organization': true,
    'location': true,
  });
  
  const [selectedId, setSelectedId] = useState('user');

  const toggleNode = (id) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSelect = (node) => {
    setSelectedId(node.id);
  };

  return (
    <div className="flex h-screen bg-white">
      <div className="w-1/2 border-r border-gray-200 flex flex-col relative">
        <div className="absolute top-20 right-0 flex flex-col gap-2 translate-x-1/2">
          <div className="w-6 h-6 rounded-full bg-white shadow flex items-center justify-center">
            <User size={20} className="text-gray-700" />
          </div>
          <div className="w-6 h-6 rounded-full bg-white shadow flex items-center justify-center">
            <User size={20} className="text-gray-300" />
          </div>
        </div>

        <Header />
        <TreeSectionHeader />
        <div className="flex-1 overflow-y-auto px-6 py-4">
          <TreeNode
            node={TreeData}
            level={0}
            expanded={expanded}
            onToggle={toggleNode}
            onSelect={handleSelect}
            selectedId={selectedId}
          />
        </div>
      </div>
      {/* Right Panel */}
      <div className="w-1/2 flex flex-col bg-gray-50">
        <RightPanelHeader />
        <RightPanelContent />
      </div>
    </div>
  );
}