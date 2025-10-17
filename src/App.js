import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Users, Database, GitBranch, File, Layers, User, BookOpenText, ListOrdered, Server, Box, Grid3X3, Funnel, RotateCcw, CircleChevronLeft, CircleChevronRight, ChevronLeft, Search} from 'lucide-react';

const DottedLine = ({ className = "" }) => {
  return (
    <div className={`flex items-center flex-1 mx-1 ${className}`}>
      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>
      <span className="flex-1 border-b-2 border-dotted border-gray-300 mx-1" style={{ minWidth: '20px' }}></span>
      <span className="w-1.5 h-1.5 border-2 border-gray-400 rounded-full flex-shrink-0 bg-white"></span>
    </div>
  );
};

const TreeNode = ({ node, level = 0, expanded, onToggle, onSelect, selectedId, isLast = false, parentIsLast = [] }) => {
  const hasChildren = node.children && node.children.length > 0;
  const isExpanded = expanded[node.id];
  const isSelected = selectedId === node.id;
  
  return (
    <div>
      <div
        onClick={() => onSelect(node)}
        className={`flex items-center gap-2 py-1.5 cursor-pointer transition-colors relative ${
          isSelected ? 'bg-blue-50' : 'hover:bg-gray-50'
        }`}
        style={{ paddingLeft: `${level * 24 + 12}px`, paddingRight: '12px' }}
      >
        {/* Vertical and horizontal connection lines */}
        {level > 0 && (
          <>
            {/* Vertical line from parent */}
            {!isLast && (
              <div 
                className="absolute top-0 bottom-0 border-l border-gray-300"
                style={{ left: `${(level - 1) * 24 + 18}px` }}
              />
            )}
            
            {/* Horizontal connecting line */}
            <div 
              className="absolute top-1/2 border-t border-gray-300"
              style={{ 
                left: `${(level - 1) * 24 + 18}px`,
                width: '18px'
              }}
            />
            
            {/* Vertical lines for ancestors */}
            {parentIsLast.map((isParentLast, idx) => (
              !isParentLast && (
                <div 
                  key={idx}
                  className="absolute top-0 bottom-0 border-l border-gray-300"
                  style={{ left: `${idx * 24 + 18}px` }}
                />
              )
            ))}
          </>
        )}
        
        {/* Branch/Fork icon on the left */}
        <div className="flex-shrink-0 w-4 h-4 flex items-center justify-center z-10 relative">
          <GitBranch size={14} className="text-gray-400" />
        </div>
        
        {/* Expand/collapse chevron */}
        {hasChildren ? (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggle(node.id);
            }}
            className="flex-shrink-0 w-4 h-4 flex items-center justify-center z-10 relative"
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
        
        {/* Node label and metadata */}
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <div className="min-w-0 flex-1">
            <div className="text-sm text-gray-900 truncate">{node.label}</div>
            {node.email && <div className="text-xs text-gray-500 truncate">{node.email}</div>}
          </div>
        </div>
        
        {/* Object count and additional icons */}
        {(node.range || node.objectCount || node.additionalIcons) && (
          <div className="flex items-center gap-2 ml-auto flex-shrink-0">
            {node.range && <span className="text-xs text-gray-400">{node.range}</span>}
            {node.objectCount && <span className="text-xs text-gray-500">{node.objectCount}</span>}
            {node.additionalIcons && (
              <div className="flex items-center gap-1">
                {node.additionalIcons.map((IconComponent, idx) => (
                  <IconComponent key={idx} size={14} className="text-gray-400" />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      
      {/* Render children */}
      {hasChildren && isExpanded && (
        <div>
          {node.children.map((child, idx) => (
            <TreeNode
              key={child.id}
              node={child}
              level={level + 1}
              expanded={expanded}
              onToggle={onToggle}
              onSelect={onSelect}
              selectedId={selectedId}
              isLast={idx === node.children.length - 1}
              parentIsLast={[...parentIsLast, isLast]}
            />
          ))}
        </div>
      )}
    </div>
  );
};

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

  const treeData = {
    id: 'user',
    label: 'User',
    range: '301-310',
    objectCount: '8,857 Objects',
    email: 'hova.davis@steerwise.com',
    additionalIcons: [Database, GitBranch],
    children: [
      {
        id: 'user-1',
        label: 'User/john.doe@steerwise.com',
        additionalIcons: [GitBranch],
      },
      {
        id: 'user-2',
        label: 'User/alendra.smith@innovatech.com',
        additionalIcons: [GitBranch],
      },
      {
        id: 'user-3',
        label: 'User/sophia.wilson@techworld.com',
        additionalIcons: [GitBranch],
      },
      {
        id: 'user-4',
        label: 'User/nova.davis@steerwise.com',
        additionalIcons: [GitBranch],
      },
      {
        id: 'business-domain',
        label: 'Business Domain',
        objectCount: '8,857 Objects',
        additionalIcons: [Database, Server],
        children: [
          {
            id: 'organization',
            label: 'Organization',
            range: '301-310',
            objectCount: '8,857 Objects',
            additionalIcons: [Database, Users, Server],
            children: [
              { 
                id: 'org-1', 
                label: 'Organization/techworld.com',
                additionalIcons: [GitBranch],
              },
              { 
                id: 'org-2', 
                label: 'Organization/innovatech.com',
                additionalIcons: [GitBranch],
              },
              { 
                id: 'org-3', 
                label: 'Organization/techguru.com',
                additionalIcons: [GitBranch],
              },
              { 
                id: 'org-4', 
                label: 'Organization/steerwise.com',
                additionalIcons: [GitBranch],
              },
            ]
          },
          { 
            id: 'position', 
            label: 'Position',
            objectCount: '8,857 Objects',
            additionalIcons: [Database, Server],
          },
          { 
            id: 'partner', 
            label: 'Partner Organization',
            objectCount: '8,857 Objects',
            additionalIcons: [Database, Server],
          },
        ]
      },
      {
        id: 'location',
        label: 'Location',
        objectCount: '8,857 Objects',
        additionalIcons: [Database, Grid3X3],
        children: [
          { 
            id: 'user-loc-1', 
            label: 'User/charlie.martin@nextgeninnovations.com',
            additionalIcons: [GitBranch],
          },
          { 
            id: 'user-loc-2', 
            label: 'User/sophia.brown@steerwise.com',
            additionalIcons: [GitBranch],
          },
          { 
            id: 'user-loc-3', 
            label: 'User/ava.jones@techworld.com',
            additionalIcons: [GitBranch],
          },
          { 
            id: 'user-loc-4', 
            label: 'User/sophia.wilson@innovatech.com',
            additionalIcons: [GitBranch],
          },
          { 
            id: 'user-loc-5', 
            label: 'User/noah.moore@techworld.com',
            additionalIcons: [GitBranch],
          },
          { 
            id: 'user-loc-6', 
            label: 'User/olivia.martinez@techworld.com',
            additionalIcons: [GitBranch],
          },
          { 
            id: 'user-loc-7', 
            label: 'User/patrick.doe@steerwise.com',
            additionalIcons: [GitBranch],
          },
        ]
      }
    ]
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Left Panel */}
      <div className="w-1/2 border-r border-gray-200 flex flex-col">
        {/* Header */}
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

        {/* Tree Section Header */}
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
            <div className="ml-auto flex items-center gap-2">
              <CircleChevronLeft size={16} className="text-gray-400" />
              <CircleChevronRight size={16} className="text-gray-400" />
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
              <span>K</span>
              <span>«</span>
              <ChevronLeft size={12} className="text-gray-400"/>
              <span className="font-semibold text-gray-900">301-310</span>
              <ChevronRight size={12} className="text-gray-400" />
              <span>»</span>
              <span className="text-gray-600">of</span>
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
              <Grid3X3 size={16} className="text-gray-400" />
              <div className="w-px h-4 bg-gray-300 mx-1"></div>
              <Search size={16} className="text-gray-400" />
              <div className="w-px h-4 bg-gray-300 mx-1"></div>
              <button className="w-6 h-6 rounded hover:bg-gray-200 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                  <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              <Funnel size={16} className="text-gray-400" />
              <Funnel size={16} className="text-gray-400" />
              <button className="w-6 h-6 rounded hover:bg-gray-200 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                  <circle cx="12" cy="12" r="1" fill="currentColor"/>
                  <circle cx="12" cy="5" r="1" fill="currentColor"/>
                  <circle cx="12" cy="19" r="1" fill="currentColor"/>
                </svg>
              </button>
              <RotateCcw size={16} className="text-gray-400" />
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
      <div className="w-1/2 flex flex-col bg-gray-50">
        <div className="px-6 py-4 bg-white">
          <div className="flex items-center gap-2">
            <BookOpenText/>
            <h2 className="text-base font-semibold text-gray-900">
              Well API Unique Well Identifier
            </h2>
            <span className="flex items-center gap-2 bg-gray-100 rounded-2xl px-2.5 py-1.5 text-xs text-gray-600">
              Well
            </span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 bg-white">
          <div className="p-4">
            <div className="flex items-start gap-3 mb-3">
              <User size={18} className="text-gray-500 mt-0.5" />
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-900 mb-1">
                  Hydrocarbon Well American Petroleum Institute Unique Well Identifier
                </h3>
                <p className="text-xs text-gray-500">Standardized Name</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-900 font-medium">well_api_unique_well_id</p>
                <p className="text-xs text-gray-500">Machine Name</p>
              </div>
            </div>
          </div>

                    {/* Domain Value Type Section */}
          <div className="mb-4 overflow-hidden">
            <div className="px-4 py-3">
              <h3 className="text-sm font-semibold text-gray-900">Domain Value Type</h3>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600 w-6">01</span>
                <div 
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: '#10b981' }}
                ></div>
                <div 
                  className="flex items-center justify-center flex-shrink-0"
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: '#e5e7eb'
                  }}
                >
                  <User size={12} className="text-gray-600" />
                </div>
                <span className="text-sm text-gray-500">Data Type</span>
                <DottedLine/>
                <span className="text-sm text-gray-900 font-medium">Number Special String</span>
              </div>
              

              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600 w-6">02</span>
                <div 
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: '#10b981' }}
                ></div>
                <div 
                  className="flex items-center justify-center flex-shrink-0"
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: '#e5e7eb'
                  }}
                >
                  <User size={12} className="text-gray-600" />
                </div>
                  {/* <div className="flex items-center gap-2 flex-1"> */}
                    <span className="text-sm text-gray-500 flex-shrink-0">Statistical Variable Type</span>
                    <DottedLine className="flex-1 mx-2"/>
                    <span className="text-sm text-gray-900 font-medium flex-shrink-0">Categorical</span>
                  {/* </div> */}
                </div>

              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600 w-6">01</span>
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                <div className="flex items-center justify-center flex-shrink-0 w-5 h-5 rounded-full bg-gray-200">
                  <User size={12} className="text-gray-600" />
                </div>

                <span className="text-sm text-gray-500 flex-shrink-0">Is An Array</span>

                <DottedLine className="flex-1 mx-2" />

                <span className="text-sm text-gray-900 font-medium flex-shrink-0">
                  FALSE
                </span>
              </div>
            </div>
          </div>

             {/* Domain Object Identity Section */}
          <div className="mb-4 overflow-hidden">
            <div className="px-4 py-3">
              <h3 className="text-sm font-semibold text-gray-900">Domain Object Identity</h3>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600 w-6">01</span>
                <div 
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: '#10b981' }}
                ></div>
                <div 
                  className="flex items-center justify-center flex-shrink-0"
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: '#e5e7eb'
                  }}
                >
                  <User size={12} className="text-gray-600" />
                </div>
                <span className="text-sm text-gray-700">Object Identifier Type</span>
                <DottedLine/>
                <span className="text-sm text-gray-900 font-medium">Object Real ID</span>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600 w-6">02</span>
                <div 
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: '#10b981' }}
                ></div>
                <div 
                  className="flex items-center justify-center flex-shrink-0"
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: '#e5e7eb'
                  }}
                >
                  <User size={12} className="text-gray-600" />
                </div>
                <span className="text-sm text-gray-700">Reference Identifier Type</span>
                <DottedLine/>
                <span className="text-sm text-gray-900 font-medium">Not A Reference Identifier</span>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600 w-6">03</span>
                <div 
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: '#10b981' }}
                ></div>
                <div 
                  className="flex items-center justify-center flex-shrink-0"
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: '#e5e7eb'
                  }}
                >
                  <User size={12} className="text-gray-600" />
                </div>
                <span className="text-sm text-gray-700">Reference Thing RefURID</span>
                <DottedLine/>
                <span className="text-sm text-gray-400">Not Applicable</span>
              </div>


              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600 w-6">04</span>
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                <div className="flex items-center justify-center flex-shrink-0 w-5 h-5 rounded-full bg-gray-200">
                  <User size={12} className="text-gray-600" />
                </div>
                <span className="text-sm text-gray-700 flex-shrink-0">Uniqueness Constraint Type</span>
                <DottedLine className="flex-1 mx-2"/>
                <span className="text-sm text-gray-900 font-medium flex-shrink-0">Unique</span>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600 w-6">05</span>
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                <div className="flex items-center justify-center flex-shrink-0 w-5 h-5 rounded-full bg-gray-200">
                  <User size={12} className="text-gray-600" />
                </div>
                <span className="text-sm text-gray-700 flex-shrink-0">Is Object Hash Compute Constituent</span>
                <DottedLine className="flex-1 mx-2"/>
                <span className="text-sm text-gray-900 font-medium flex-shrink-0">True</span>
              </div>
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="px-4 py-3">
              <h3 className="text-sm font-semibold text-gray-900">Data Privacy Protection</h3>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600 w-6">01</span>
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                <div className="flex items-center justify-center flex-shrink-0 w-5 h-5 rounded-full bg-gray-200">
                  <User size={12} className="text-gray-600" />
                </div>
                <span className="text-sm text-gray-500 flex-shrink-0">Sensitive Information Type</span>
                <DottedLine className="flex-1 mx-2"/>
                <span className="text-sm text-gray-900 font-medium flex-shrink-0">Not A Sensitive Information</span>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600 w-6">02</span>
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                <div className="flex items-center justify-center flex-shrink-0 w-5 h-5 rounded-full bg-gray-200">
                  <User size={12} className="text-gray-600" />
                </div>
                <span className="text-sm text-gray-500 flex-shrink-0">Security & Privacy Classification</span>
                <DottedLine className="flex-1 mx-2"/>
                <span className="text-sm text-gray-900 font-medium flex-shrink-0">Public</span>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600 w-6">03</span>
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                <div className="flex items-center justify-center flex-shrink-0 w-5 h-5 rounded-full bg-gray-200">
                  <User size={12} className="text-gray-600" />
                </div>
                <span className="text-sm text-gray-500 flex-shrink-0">Applicable Data Privacy Regulation</span>
                <DottedLine className="flex-1 mx-2"/>
                <span className="text-sm text-gray-400 flex-shrink-0">Not Applicable</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
