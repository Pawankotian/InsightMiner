import axios from 'axios';
import { Insight } from '@/components/InsightCard';

// Replace with your actual Replit backend URL when deployed
const API_BASE_URL = 'https://insightminer-backend.example.repl.co/api';

export interface InsightsResponse {
  insights: Insight[];
  query: string;
}

export async function getInsights(query: string): Promise<InsightsResponse> {
  try {
    // For development, we'll use mock data
    // In production, replace this with actual API call
    // const response = await axios.get(`${API_BASE_URL}/insights?query=${encodeURIComponent(query)}`);
    // return response.data;
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Return mock data
    return {
      query,
      insights: mockInsights(query)
    };
  } catch (error) {
    console.error('Error fetching insights:', error);
    throw new Error('Failed to fetch insights. Please try again later.');
  }
}

// Mock data generator function - replace with actual API in production
function mockInsights(query: string): Insight[] {
  const categories: Insight['category'][] = ['emotional', 'human truths', 'behavioral', 'cultural', 'religious'];
  
  // Parse the query to determine how many insights to generate
  const numInsightsMatch = query.match(/(\d+)\s+insights/i);
  const numInsights = numInsightsMatch ? parseInt(numInsightsMatch[1]) : 5;
  const limitedInsights = Math.min(numInsights, 10); // Limit to max 10 insights
  
  // Extract topic from query
  const queryWithoutNumber = query.replace(/\d+\s+insights\s+about\s+/i, '');
  const topic = queryWithoutNumber || 'marketing';
  
  return Array.from({ length: limitedInsights }).map((_, i) => ({
    id: `insight-${i}-${Date.now()}`,
    text: generateInsightText(topic, categories[i % categories.length]),
    category: categories[i % categories.length],
    campaignTitle: generateCampaignTitle(topic),
    brand: generateBrandName(),
    year: 2018 + Math.floor(Math.random() * 5),
    videoLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' // Placeholder
  }));
}

function generateInsightText(topic: string, category: Insight['category']): string {
  const emotionalPrefixes = [
    'People feel deeply connected to',
    'Emotional attachment forms when',
    'The strongest bonds arise when'
  ];
  
  const humanTruthsPrefixes = [
    'Across cultures, humans universally',
    'People fundamentally seek',
    'At our core, we all want'
  ];
  
  const behavioralPrefixes = [
    'Consumer behavior shifts when',
    'People consistently change habits after',
    'Usage patterns reveal that'
  ];
  
  const culturalPrefixes = [
    'Cultural norms around',
    'Social expectations reinforce',
    'Community values center on'
  ];
  
  const religiousPrefixes = [
    'Spiritual connection strengthens when',
    'Faith-based communities emphasize',
    'Transcendent experiences occur when'
  ];
  
  const suffixes = [
    `${topic} represents personal identity rather than just utility`,
    `${topic} bridges generational divides through shared experiences`,
    `${topic} creates moments of genuine human connection`,
    `${topic} challenges established social norms in surprising ways`,
    `${topic} provides a sense of belonging in an increasingly isolated world`,
    `${topic} embodies aspirational values beyond practical benefits`,
    `${topic} enables authentic self-expression in constrained environments`
  ];
  
  let prefixes: string[] = [];
  
  switch(category) {
    case 'emotional':
      prefixes = emotionalPrefixes;
      break;
    case 'human truths':
      prefixes = humanTruthsPrefixes;
      break;
    case 'behavioral':
      prefixes = behavioralPrefixes;
      break;
    case 'cultural':
      prefixes = culturalPrefixes;
      break;
    case 'religious':
      prefixes = religiousPrefixes;
      break;
  }
  
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
  
  return `${prefix} ${suffix}.`;
}

function generateCampaignTitle(topic: string): string {
  const prefixes = [
    'The Power of',
    'Reimagining',
    'Beyond',
    'Celebrating',
    'Disrupting'
  ];
  
  const suffixes = [
    'Connection',
    'Tomorrow',
    'Barriers',
    'Diversity',
    'Expectations'
  ];
  
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
  
  return `${prefix} ${topic}: ${suffix}`;
}

function generateBrandName(): string {
  const brands = [
    'Nike',
    'Apple',
    'Coca-Cola',
    'Samsung',
    'Amazon',
    'Microsoft',
    'Toyota',
    'Mercedes-Benz',
    'McDonald\'s',
    'Disney',
    'Adidas',
    'BMW',
    'Louis Vuitton',
    'Netflix',
    'Gucci'
  ];
  
  return brands[Math.floor(Math.random() * brands.length)];
} 