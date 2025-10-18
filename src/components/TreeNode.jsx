import { ChevronRight, ChevronDown, GitBranch } from 'lucide-react';
import Subbranch from './Subbranch';

const TreeNode = ({ node, level = 0, expanded, onToggle, onSelect, selectedId, isLast = false, parentIsLast = [] }) => {
  const hasChildren = node.children && node.children.length > 0;
  const isExpanded = expanded[node.id];
  const isSelected = selectedId === node.id;
  
  return (
    <div>
      <div
        onClick={() => onSelect(node)}
        className={`flex items-center gap-2 py-1.5 cursor-pointer transition-colors relative`} 
        style={{ paddingLeft: `${level * 24 + 12}px`, paddingRight: '12px' }}
      >
        {level > 0 && (
          <>
            {!isLast && (
              <div 
                className="absolute top-0 bottom-0 border-l border-gray-300"
                style={{ left: `${(level - 1) * 24 + 18}px` }}
              />
            )}
            <div 
              className="absolute top-1/2 border-t border-gray-300"
              style={{ 
                left: `${(level - 1) * 24 + 18}px`,
                width: '18px'
              }}
            />
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
        
        <div className="flex-shrink-0 w-4 h-4 flex items-center justify-center z-10 relative">
          <Subbranch/>
        </div>
        
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
        
        <div className="flex items-center gap-2 min-w-0">
          <div className="min-w-0 flex-1">
            <div className="text-sm text-gray-900 truncate">{node.label}</div>
            {node.email && <div className="text-xs text-gray-500 truncate">{node.email}</div>}
          </div>
        </div>
        
        {(node.range || node.objectCount || node.additionalIcons) && (
          <div className="flex items-center gap-2 flex-shrink-0">
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
export default TreeNode;