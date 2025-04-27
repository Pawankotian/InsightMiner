// import axios from 'axios';
import { Insight } from '@/components/InsightCard';
import { searchCannesCampaigns } from '@/utils/webSearchUtils';

// Replace with your actual Replit backend URL when deployed
const API_BASE_URL = 'https://insightminer-backend.example.repl.co/api';

export interface InsightsResponse {
  insights: Insight[];
  query: string;
}

export async function getInsights(query: string): Promise<InsightsResponse> {
  try {
    console.log("Starting getInsights with query:", query);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Extract topic from query
    const queryWithoutNumber = query.replace(/\d+\s+insights\s+about\s+/i, '');
    const topic = queryWithoutNumber || 'marketing';
    console.log("Extracted topic:", topic);
    
    // Use web search to find real campaigns
    console.log("Searching for campaigns...");
    const campaigns = await searchCannesCampaigns(topic);
    console.log("Found campaigns:", campaigns.length);
    
    // Create insights from the campaigns
    console.log("Generating insights from campaigns...");
    const insights = await generateInsightsFromCampaigns(campaigns, topic, query);
    console.log("Generated insights:", insights.length);
    
    // Fall back to default insights if none were generated
    if (!insights || insights.length === 0) {
      console.log("No insights generated, using fallback...");
      // Create dummy insight as fallback
      const fallbackInsight: Insight = {
        id: `fallback-${Date.now()}`,
        text: `People feel deeply connected to ${topic} when it reflects their personal values and experiences.`,
        category: 'emotional',
        campaignTitle: `The Power of ${topic.charAt(0).toUpperCase() + topic.slice(1)}`,
        brand: 'Cannes Lions',
        year: 2023,
        videoLink: `https://www.youtube.com/results?search_query=cannes+lions+${encodeURIComponent(topic)}`
      };
      
      return {
        query,
        insights: [fallbackInsight]
      };
    }
    
    // Return insights
    console.log("Returning insights response");
    return {
      query,
      insights
    };
  } catch (error) {
    console.error('Error fetching insights:', error);
    // Create dummy insight as fallback on error
    const fallbackInsight: Insight = {
      id: `error-${Date.now()}`,
      text: `People feel deeply connected to ${query} when it reflects their personal values and experiences.`,
      category: 'emotional',
      campaignTitle: 'Error Recovery',
      brand: 'InsightMiner',
      year: 2023,
      videoLink: 'https://www.youtube.com/results?search_query=cannes+lions'
    };
    
    return {
      query,
      insights: [fallbackInsight]
    };
  }
}

async function generateInsightsFromCampaigns(
  campaigns: Array<{
    title: string;
    brand: string;
    year: string | number;
    description: string;
    videoLink?: string;
  }>,
  topic: string,
  query: string
): Promise<Insight[]> {
  const categories: Insight['category'][] = ['emotional', 'human truths', 'behavioral', 'cultural', 'religious'];
  
  // Parse the query to determine how many insights to generate
  const numInsightsMatch = query.match(/(\d+)\s+insights/i);
  const numInsights = numInsightsMatch ? parseInt(numInsightsMatch[1]) : 5;
  const limitedInsights = Math.min(numInsights, campaigns.length); // Limit to available campaigns
  
  // Map campaigns to insights
  return Array.from({ length: limitedInsights }).map((_, i) => {
    const campaign = campaigns[i % campaigns.length];
    const category = categories[i % categories.length];
    
    return {
      id: `insight-${i}-${Date.now()}`,
      text: generateInsightTextFromCampaign(campaign, category, topic),
      category: category,
      campaignTitle: campaign.title,
      brand: campaign.brand,
      year: typeof campaign.year === 'string' ? parseInt(campaign.year) : campaign.year,
      videoLink: campaign.videoLink || 'https://www.youtube.com/results?search_query=cannes+lions+' + encodeURIComponent(topic),
    };
  });
}

function generateInsightTextFromCampaign(
  campaign: {
    title: string;
    brand: string;
    year: string | number;
    description: string;
  }, 
  category: Insight['category'],
  topic: string
): string {
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
  
  // Extract key phrases from campaign description
  const keyPhrase = campaign.description.split('.')[0];
  
  return `${prefix} ${keyPhrase.toLowerCase()}.`;
}

// These functions are no longer used, but kept for reference
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