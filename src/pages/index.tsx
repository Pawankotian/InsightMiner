import { useState } from 'react';
import Layout from '@/components/Layout';
import SearchBar from '@/components/SearchBar';
import InsightCard, { Insight } from '@/components/InsightCard';
import AdBanner from '@/components/AdBanner';
import { getInsights } from '@/api/insightApi';
import { motion } from 'framer-motion';

export default function Home() {
  const [insights, setInsights] = useState<Insight[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    setError(null);
    setSearchQuery(query);
    setHasSearched(true);
    
    try {
      const response = await getInsights(query);
      setInsights(response.insights);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      setInsights([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-3">
            <span className="text-primary">Insight</span>Miner
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Generate creative, relatable, and emotionally-driven insights from 
            award-winning Cannes Lions advertising campaigns.
          </p>
        </motion.div>
        
        <SearchBar onSearch={handleSearch} isLoading={isLoading} />
        
        {error && (
          <div className="mt-8 p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 rounded-lg max-w-2xl w-full">
            {error}
          </div>
        )}
        
        {hasSearched && !isLoading && !error && insights.length === 0 && (
          <div className="mt-8 text-center">
            <p>No insights found for "{searchQuery}". Try a different query.</p>
          </div>
        )}
        
        {insights.length > 0 && (
          <div className="mt-8 w-full">
            <h2 className="text-2xl font-semibold mb-4">
              Insights for "{searchQuery}"
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {insights.slice(0, 2).map((insight, index) => (
                <InsightCard key={insight.id} insight={insight} index={index} />
              ))}
            </div>
            
            {insights.length > 2 && (
              <>
                <AdBanner 
                  client="ca-pub-xxxxxxxxxxxxxxxx" 
                  slot="xxxxxxxxxx" 
                  format="auto"
                  responsive={true}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {insights.slice(2).map((insight, index) => (
                    <InsightCard key={insight.id} insight={insight} index={index + 2} />
                  ))}
                </div>
              </>
            )}
          </div>
        )}
        
        {!insights.length && !isLoading && (
          <motion.div 
            className="mt-12 max-w-2xl w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold mb-4">Example Searches</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "5 insights about mothers",
                "3 insights about Gen Z",
                "4 insights about sustainability",
                "5 insights about mental health"
              ].map((example, index) => (
                <button
                  key={index}
                  onClick={() => handleSearch(example)}
                  className="card hover:shadow-md transition-shadow text-left p-4"
                >
                  {example}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </Layout>
  );
} 