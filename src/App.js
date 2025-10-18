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
      {/* Left Panel */}
      <div className="w-1/2 border-r border-gray-200 flex flex-col">
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