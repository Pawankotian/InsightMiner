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
  
  // Topic-specific phrases to make insights more relevant
  const topicPhrases: Record<string, string[]> = {
    'mothers': [
      'maternal instinct creates deep bonds',
      'motherhood transforms personal identity',
      'mother-child relationships shape future generations',
      'mothers balance nurturing with empowerment',
      'maternal sacrifice resonates across cultures'
    ],
    'gen z': [
      'digital natives seek authentic connections',
      'value social causes over brand loyalty',
      'prefer experiences over material possessions',
      'demand transparency and ethical practices',
      'blend online and offline identities seamlessly'
    ],
    'sustainability': [
      'ecological responsibility feels personally meaningful',
      'sustainable choices reflect core values',
      'environmental action creates community bonds',
      'eco-conscious decisions reduce anxiety about the future',
      'green initiatives connect personal choices to global impact'
    ],
    'mental health': [
      'vulnerability builds stronger connections',
      'self-care rituals create necessary boundaries',
      'open conversations reduce stigma and isolation',
      'mindfulness practices reshape daily experiences',
      'mental wellbeing connects physical and emotional states'
    ]
  };
  
  // Default phrases for topics not specifically defined
  const defaultPhrases = [
    `${topic} represents personal identity rather than just utility`,
    `${topic} bridges generational divides through shared experiences`,
    `${topic} creates moments of genuine human connection`,
    `${topic} challenges established social norms in surprising ways`,
    `${topic} provides a sense of belonging in an increasingly isolated world`
  ];
  
  // Find relevant phrases for this topic
  let relevantPhrases = defaultPhrases;
  Object.keys(topicPhrases).forEach(key => {
    if (topic.toLowerCase().includes(key)) {
      relevantPhrases = topicPhrases[key];
    }
  });
  
  return Array.from({ length: limitedInsights }).map((_, i) => ({
    id: `insight-${i}-${Date.now()}`,
    text: generateInsightText(topic, categories[i % categories.length], relevantPhrases[i % relevantPhrases.length]),
    category: categories[i % categories.length],
    campaignTitle: generateCampaignTitle(topic),
    brand: generateBrandForTopic(topic),
    year: 2018 + Math.floor(Math.random() * 5),
    videoLink: getRelevantVideoLink(topic, i)
  }));
}

function generateInsightText(topic: string, category: Insight['category'], relevantPhrase: string): string {
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
  
  return `${prefix} ${relevantPhrase}.`;
}

function generateBrandForTopic(topic: string): string {
  // Common brands by industry
  const brandsByTopic: Record<string, string[]> = {
    'mothers': ['Pampers', 'Johnson & Johnson', 'Huggies', 'Dove', 'P&G'],
    'gen z': ['TikTok', 'Nike', 'Spotify', 'Snapchat', 'Adidas'],
    'sustainability': ['Patagonia', 'Tesla', 'IKEA', 'Seventh Generation', 'The Body Shop'],
    'mental health': ['Headspace', 'Calm', 'BetterHelp', 'Talkspace', 'Nike'],
    'food': ['McDonald\'s', 'Coca-Cola', 'Nestlé', 'Unilever', 'PepsiCo'],
    'technology': ['Apple', 'Google', 'Samsung', 'Microsoft', 'Amazon'],
    'fashion': ['Nike', 'Adidas', 'H&M', 'Zara', 'Louis Vuitton'],
    'automotive': ['Toyota', 'BMW', 'Mercedes-Benz', 'Tesla', 'Volvo'],
    'travel': ['Airbnb', 'Expedia', 'Booking.com', 'Marriott', 'Delta']
  };
  
  // Default brands if no specific match
  const defaultBrands = [
    'Nike', 'Apple', 'Coca-Cola', 'Samsung', 'Amazon', 
    'Microsoft', 'Disney', 'Adidas', 'Google', 'Spotify'
  ];
  
  // Find relevant brands for this topic
  let relevantBrands = defaultBrands;
  Object.keys(brandsByTopic).forEach(key => {
    if (topic.toLowerCase().includes(key)) {
      relevantBrands = brandsByTopic[key];
    }
  });
  
  return relevantBrands[Math.floor(Math.random() * relevantBrands.length)];
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
  
  return `${prefix} ${topic.charAt(0).toUpperCase() + topic.slice(1)}: ${suffix}`;
}

function getRelevantVideoLink(topic: string, index: number): string {
  // Real videos relevant to common topics
  const videosByTopic: Record<string, string[]> = {
    'mothers': [
      'https://www.youtube.com/watch?v=RQ9W-vANzxQ', // P&G Thank You Mom
      'https://www.youtube.com/watch?v=9UtDfYKYt9M', // Dove Real Beauty
      'https://www.youtube.com/watch?v=BPZ9bnh8lVc', // Pampers Stinky Booty
    ],
    'gen z': [
      'https://www.youtube.com/watch?v=WXoIJq6byCU', // Nike Dream Crazy
      'https://www.youtube.com/watch?v=BGIv-NI7qbc', // TikTok #ForYou
      'https://www.youtube.com/watch?v=C4jfMIeTkLc', // Spotify Wrapped
    ],
    'sustainability': [
      'https://www.youtube.com/watch?v=eG9fmhRyqMM', // Patagonia Don't Buy This Jacket
      'https://www.youtube.com/watch?v=8iAGXq3SvKs', // IKEA Sustainability
      'https://www.youtube.com/watch?v=epTB_2eRq6c', // The Body Shop Bio-Bridges
    ]
  };
  
  // Get videos for this topic if available
  for (const key in videosByTopic) {
    if (topic.toLowerCase().includes(key)) {
      const videos = videosByTopic[key];
      return videos[index % videos.length];
    }
  }
  
  // Default Cannes Lions winning ads if no topic match
  const defaultVideos = [
    'https://www.youtube.com/watch?v=WXoIJq6byCU', // Nike Dream Crazy
    'https://www.youtube.com/watch?v=tuIrvRcPYjc', // Always Like a Girl
    'https://www.youtube.com/watch?v=yzcn-_h_4MU', // Volvo Epic Split
    'https://www.youtube.com/watch?v=ABz2m0olmPU', // Apple 1984
    'https://www.youtube.com/watch?v=eG9fmhRyqMM', // Patagonia Don't Buy This Jacket
  ];
  
  return defaultVideos[index % defaultVideos.length];
} 