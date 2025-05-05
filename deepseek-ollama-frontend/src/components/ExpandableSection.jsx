// Inside your AnalysisSection component
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const ExpandableSection = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-blue-50 p-4 rounded-lg">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between font-semibold text-blue-900 mb-3 hover:text-blue-700 transition-colors"
      >
        <span>{title}</span>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5" />
        ) : (
          <ChevronDown className="w-5 h-5" />
        )}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="text-blue-800 text-sm space-y-2">
          {content.split('\n').map((line, index) => (
            line.trim() && (
              <p key={index} className="leading-relaxed">
                {line.trim()}
              </p>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpandableSection;