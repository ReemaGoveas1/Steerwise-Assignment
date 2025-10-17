import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Users, Database, GitBranch, File, Layers } from 'lucide-react';

const TreeNode = ({ node, level = 0, expanded, onToggle, onSelect, selectedId }) => {
  const hasChildren = node.children && node.children.length > 0;
  const isExpanded = expanded[node.id];
  const isSelected = selectedId === node.id;
  
  return (
    <div>
      <div
        onClick={() => onSelect(node)}
        className={`flex items-center gap-2 py-1 cursor-pointer transition-colors relative ${
          isSelected ? 'bg-blue-50' : 'hover:bg-gray-50'
        }`}
        style={{ paddingLeft: `${level * 24 + 12}px`, paddingRight: '12px' }}
      >
        {/* Vertical line for tree structure */}
        {level > 0 && (
          <div 
            className="absolute left-0 top-0 bottom-0 border-l border-gray-200"
            style={{ left: `${(level - 1) * 24 + 24}px` }}
          />
        )}
        
        {hasChildren ? (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggle(node.id);
            }}
            className="flex-shrink-0 w-4 h-4 flex items-center justify-center z-10"
          >
            {isExpanded ? (
              <ChevronDown size={14} className="text-gray-500" />
            ) : (
              <ChevronRight size={14} className="text-gray-500" />
            )}
          </button>
        ) : (
          <div className="w-4" />
        )}
        
        <div 
          className="flex-shrink-0 flex items-center justify-center text-white font-bold z-10"
          style={{ 
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            fontSize: '10px',
            backgroundColor: node.bgColor === 'bg-gray-800' ? '#1f2937' : 
                           node.bgColor === 'bg-gray-700' ? '#374151' : 
                           node.bgColor === 'bg-gray-600' ? '#4b5563' : 
                           node.bgColor === 'bg-gray-500' ? '#6b7280' : 
                           node.bgColor === 'bg-blue-600' ? '#2563eb' : 
                           node.bgColor === 'bg-green-600' ? '#16a34a' : 
                           node.bgColor === 'bg-purple-600' ? '#9333ea' : 
                           node.bgColor === 'bg-orange-600' ? '#ea580c' : '#6b7280'
          }}
        >
          {node.icon}
        </div>
        
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <div className="min-w-0">
            <div className="text-sm text-gray-900 truncate">{node.label}</div>
            {node.email && <div className="text-xs text-gray-500 truncate">{node.email}</div>}
          </div>
          
          {node.range && (
            <span className="text-xs text-gray-400 flex-shrink-0">{node.range}</span>
          )}
        </div>
        
        {node.count && (
          <div className="flex items-center gap-3 ml-auto flex-shrink-0">
            {node.objectCount && <span className="text-xs text-gray-500">{node.objectCount}</span>}
            {node.icons && (
              <div className="flex items-center gap-1">
                {node.icons.map((icon, idx) => (
                  <span key={idx} className="text-gray-400">{icon}</span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      
      {hasChildren && isExpanded && (
        <div>
          {node.children.map((child) => (
            <TreeNode
              key={child.id}
              node={child}
              level={level + 1}
              expanded={expanded}
              onToggle={onToggle}
              onSelect={onSelect}
              selectedId={selectedId}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const DetailRow = ({ number, icon, label, value, sublabel }) => (
  <div className="flex items-start gap-3 py-2.5">
    <div 
      className="flex-shrink-0 flex items-center justify-center text-xs font-semibold text-white"
      style={{ 
        width: '22px',
        height: '22px',
        borderRadius: '50%',
        backgroundColor: '#9ca3af'
      }}
    >
      {number}
    </div>
    <div className="flex items-center gap-2 flex-1">
      {icon && <span className="text-gray-400">{icon}</span>}
      <span className="text-sm text-gray-700">{label}</span>
    </div>
    <div className="text-right">
      <div className="text-sm text-gray-900 font-medium">{value}</div>
      {sublabel && <div className="text-xs text-gray-500">{sublabel}</div>}
    </div>
  </div>
);

export default function App() {
  const [expanded, setExpanded] = useState({
    'user': true,
    'business-domain': true,
    'organization': true,
  });
  
  const [selectedId, setSelectedId] = useState('user');

  const toggleNode = (id) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSelect = (node) => {
    setSelectedId(node.id);
  };

  const treeData = {
    id: 'user',
    label: 'User',
    icon: 'U',
    bgColor: 'bg-gray-800',
    range: '301-310',
    objectCount: '8,857 Objects',
    email: 'hova.davis@steerwise.com',
    count: true,
    children: [
      {
        id: 'business-domain',
        label: 'Business Domain',
        icon: 'B',
        bgColor: 'bg-gray-700',
        objectCount: '8,857 Objects',
        count: true,
        children: [
          {
            id: 'organization',
            label: 'Organization',
            icon: 'O',
            bgColor: 'bg-blue-600',
            objectCount: '301-310 Objects',
            count: true,
            children: [
              { id: 'org-1', label: 'Organization/techworld.com', icon: 'T', bgColor: 'bg-gray-500' },
              { id: 'org-2', label: 'Organization/innovatech.com', icon: 'I', bgColor: 'bg-gray-500' },
              { id: 'org-3', label: 'Organization/techguru.com', icon: 'T', bgColor: 'bg-gray-500' },
              { id: 'org-4', label: 'Organization/steerwise.com', icon: 'S', bgColor: 'bg-gray-500' },
            ]
          },
          { 
            id: 'position', 
            label: 'Position', 
            icon: 'P', 
            bgColor: 'bg-green-600', 
            objectCount: '8,857 Objects',
            count: true 
          },
          { 
            id: 'partner', 
            label: 'Partner Organization', 
            icon: 'P', 
            bgColor: 'bg-green-600', 
            objectCount: '8,857 Objects',
            count: true 
          },
        ]
      },
      {
        id: 'location',
        label: 'Location',
        icon: 'L',
        bgColor: 'bg-purple-600',
        objectCount: '8,857 Objects',
        count: true,
        children: [
          { id: 'user-2', label: 'User/charlie.martin@nextgeninnovations.com', icon: 'C', bgColor: 'bg-gray-500' },
          { id: 'user-3', label: 'User/sophia.brown@steerwise.com', icon: 'S', bgColor: 'bg-gray-500' },
          { id: 'user-4', label: 'User/ava.jones@techworld.com', icon: 'A', bgColor: 'bg-gray-500' },
          { id: 'user-5', label: 'User/sophia.wilson@innovatech.com', icon: 'S', bgColor: 'bg-gray-500' },
          { id: 'user-6', label: 'User/noah.moore@techworld.com', icon: 'N', bgColor: 'bg-gray-500' },
          { id: 'user-7', label: 'User/olivia.martinez@techworld.com', icon: 'O', bgColor: 'bg-gray-500' },
          { id: 'user-8', label: 'User/patrick.doe@steerwise.com', icon: 'P', bgColor: 'bg-gray-500' },
        ]
      }
    ]
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Left Panel */}
      <div className="w-1/2 border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="px-6 py-5 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">User Profiles</h1>
          <p className="text-sm text-gray-600 mb-4">
            Standardizes and defines terminology related to hydrocarbon well domain
          </p>
          
          <div className="text-sm text-gray-700 mb-4">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some
          </div>

          {/* Stats Box */}
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <div className="flex items-center gap-4 mb-3">
              <div 
                className="flex items-center justify-center text-white font-bold"
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  backgroundColor: '#1f2937',
                  fontSize: '12px'
                }}
              >
                8
              </div>
              <span className="text-sm font-semibold text-gray-900">8,857 Objects</span>
            </div>
            
            <div className="flex items-center gap-6 text-xs text-gray-600 pl-1">
              <div className="flex items-center gap-1.5">
                <GitBranch size={14} className="text-gray-500" />
                <span><span className="font-semibold">3</span> Tree Depth</span>
              </div>
              <div className="flex items-center gap-1.5">
                <File size={14} className="text-gray-500" />
                <span><span className="font-semibold">200</span> Fields</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Database size={14} className="text-gray-500" />
                <span><span className="font-semibold">1.191</span> GB</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tree Section Header */}
        <div className="px-6 py-3 bg-gray-50 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users size={16} className="text-gray-500" />
              <span className="text-sm font-medium text-gray-700">hova.davis@steerwise.com</span>
              <ChevronRight size={14} className="text-gray-400" />
              <span className="text-sm text-gray-600">Data Fields</span>
              <ChevronRight size={14} className="text-gray-400" />
              <span className="text-sm text-gray-600">Organization</span>
              <ChevronRight size={14} className="text-gray-400" />
              <span className="text-sm text-gray-600">steerwise.com</span>
              <ChevronRight size={14} className="text-gray-400" />
              <span className="text-sm text-gray-600">Data Fields</span>
            </div>
          </div>
        </div>

        {/* Tree View */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          <TreeNode
            node={treeData}
            level={0}
            expanded={expanded}
            onToggle={toggleNode}
            onSelect={handleSelect}
            selectedId={selectedId}
          />
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-1/2 flex flex-col">
        <div className="px-6 py-5 border-b border-gray-200">
          <div className="flex items-center gap-3 mb-1">
            <div 
              className="flex items-center justify-center rounded-lg"
              style={{
                width: '36px',
                height: '36px',
                backgroundColor: '#dbeafe'
              }}
            >
              <Users size={18} className="text-blue-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-base font-semibold text-gray-900">
                Well API Unique Well Identifier
              </h2>
            </div>
            <span className="px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-700 rounded">
              Well
            </span>
          </div>
          <p className="text-sm text-gray-600 ml-12">
            Hydrocarbon Well American Petroleum Institute Unique Well Identifier
          </p>
          <p className="text-xs text-gray-500 ml-12 mt-0.5">Standardized Name</p>
          <p className="text-xs text-gray-500 ml-12">well_api_unique_well_id</p>
          <p className="text-xs text-gray-400 ml-12">Machine Name</p>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          <div className="space-y-6">
            {/* Domain Value Type */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Domain Value Type</h3>
              <div className="space-y-1">
                <DetailRow number="01" icon="✕" label="Data Type" value="Number Special String" />
                <DetailRow number="02" icon="✕" label="Statistical Variable Type" value="Categorical" />
                <DetailRow number="03" icon="✕" label="Is An Array" value="FALSE" />
              </div>
            </div>

            {/* Domain Object Identity */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Domain Object Identity</h3>
              <div className="space-y-1">
                <DetailRow number="01" icon="✕" label="Object Identifier Type" value="Object Real ID" />
                <DetailRow number="02" icon="✕" label="Reference Identifier Type" value="Not A Reference Identifier" />
                <DetailRow number="03" icon="✕" label="Reference Thing RefURID" value="Not Applicable" />
                <DetailRow number="04" icon="✕" label="Uniqueness Constraint Type" value="Unique" />
                <DetailRow number="05" icon="✕" label="Is Object Hash Compute Constituent" value="True" />
              </div>
            </div>

            {/* Data Privacy Protection */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Data Privacy Protection</h3>
              <div className="space-y-1">
                <DetailRow number="01" icon="✕" label="Sensitive Information Type" value="Not A Sensitive Information" />
                <DetailRow number="02" icon="✕" label="Security & Privacy Classification" value="Public" />
                <DetailRow number="03" icon="✕" label="Applicable Data Privacy Regulation" value="Not Applicable" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}