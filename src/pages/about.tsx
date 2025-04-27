import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function About() {
  return (
    <Layout title="About InsightMiner - AI-Powered Creative Insights">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-6">About InsightMiner</h1>
          
          <div className="card mb-6">
            <h2 className="text-xl font-semibold mb-4">What We Do</h2>
            <p className="mb-4">
              InsightMiner is a free, AI-powered platform that generates creative, relatable, 
              and emotionally-driven insights by analyzing award-winning advertising campaigns 
              from the Cannes Lions International Festival of Creativity.
            </p>
            <p>
              Our technology searches through these campaigns to extract meaningful 
              insights across five key categories: emotional, human truths, behavioral, 
              cultural, and religious.
            </p>
          </div>
          
          <div className="card mb-6">
            <h2 className="text-xl font-semibold mb-4">How It Works</h2>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong>You ask a question</strong> - Enter a query like "5 insights about mothers" 
                in our search bar.
              </li>
              <li>
                <strong>We analyze award-winning campaigns</strong> - Our system searches through 
                Cannes Lions-winning advertising campaigns.
              </li>
              <li>
                <strong>AI generates insights</strong> - We use advanced AI to analyze the campaigns 
                and generate relevant insights based on your query.
              </li>
              <li>
                <strong>Explore the results</strong> - Review the insights, complete with campaign 
                information and video links.
              </li>
            </ol>
          </div>
          
          <div className="card mb-6">
            <h2 className="text-xl font-semibold mb-4">Use Cases</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Marketers seeking fresh perspectives on audience segments</li>
              <li>Advertising professionals looking for creative inspiration</li>
              <li>Brand strategists researching emotional connections</li>
              <li>Students learning about effective advertising campaigns</li>
              <li>Researchers studying cultural and behavioral trends</li>
            </ul>
          </div>
          
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Disclaimer</h2>
            <p className="text-sm">
              InsightMiner is not affiliated with Cannes Lions International Festival of Creativity. 
              All insights are generated using AI and should be considered as creative inspiration rather 
              than definitive research. Campaign information is collected from publicly available sources.
            </p>
          </div>
          
          <div className="mt-8 text-center">
            <Link href="/" className="btn btn-primary">
              Start Exploring Insights
            </Link>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
} 