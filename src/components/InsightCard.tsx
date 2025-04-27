import { useState } from 'react';
import { motion } from 'framer-motion';

export interface Insight {
  id: string;
  text: string;
  category: 'emotional' | 'human truths' | 'behavioral' | 'cultural' | 'religious';
  campaignTitle: string;
  brand: string;
  year: number;
  videoLink: string;
}

interface InsightCardProps {
  insight: Insight;
  index: number;
}

const categoryColors = {
  'emotional': 'bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-100',
  'human truths': 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100',
  'behavioral': 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100',
  'cultural': 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100',
  'religious': 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100'
};

const InsightCard = ({ insight, index }: InsightCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <motion.div
      className="card overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${categoryColors[insight.category]}`}>
            {insight.category}
          </span>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-500 hover:text-primary"
            aria-label={isExpanded ? "Collapse insight" : "Expand insight"}
          >
            {isExpanded ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </div>
        
        <h3 className="text-lg font-medium mb-2">{insight.text}</h3>
        
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isExpanded ? 'auto' : 0,
            opacity: isExpanded ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="pt-3 border-t border-gray-200 dark:border-gray-700 mt-2">
            <p className="text-sm font-medium">
              {insight.campaignTitle}
            </p>
            <div className="flex justify-between items-center mt-2">
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {insight.brand}, {insight.year}
                </p>
              </div>
              <a 
                href={insight.videoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm"
              >
                Watch
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default InsightCard; 