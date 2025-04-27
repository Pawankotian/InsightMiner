# InsightMiner

InsightMiner is a free, modern, AI-powered website that generates creative, relatable, and emotionally-driven insights by searching through Cannes Lions-winning advertising campaigns.

## Features

- **AI-Powered Insights**: Get creative insights about any topic by simply entering a query
- **Categorized Results**: Insights are categorized into emotional, human truths, behavioral, cultural, and religious
- **Source Attribution**: Each insight is linked to its source campaign with brand, year, and video link
- **Responsive Design**: Works beautifully on any device - mobile, tablet, or desktop
- **Dark/Light Mode**: Switch between dark and light themes based on your preference

## Tech Stack

- **Frontend**: Next.js with TypeScript and Framer Motion for animations
- **Styling**: TailwindCSS for responsive, utility-first styling
- **Backend**: Replit with Puppeteer for scraping and AI handling (mock data in this version)
- **Database**: Airtable (configured for production use)
- **Analytics**: Google Analytics (configured but not active in this version)
- **Ads**: Google AdSense integration (configured but not active in this version)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/insightminer.git
   cd insightminer
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application

## Project Structure

```
insightminer/
├── public/             # Static files
├── src/
│   ├── api/            # API utilities
│   ├── components/     # Reusable components
│   ├── pages/          # Next.js pages
│   ├── styles/         # Global styles
│   ├── types/          # TypeScript type definitions
│   └── utils/          # Utility functions
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── tailwind.config.js  # TailwindCSS configuration
└── README.md           # Project documentation
```

## Deployment

### Development

For local development, run:

```bash
npm run dev
# or
yarn dev
```

### Production

Build the application for production:

```bash
npm run build
# or
yarn build
```

Start the production server:

```bash
npm run start
# or
yarn start
```

## Backend Implementation (Production)

For a production implementation, you would need to:

1. Set up a Replit backend with Puppeteer to scrape Cannes Lions campaigns
2. Configure browser automation to interact with ChatGPT via a web wrapper
3. Set up an Airtable database to store queries and insights
4. Update the API endpoint in `src/api/insightApi.ts` to point to your Replit backend

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Cannes Lions International Festival of Creativity for being the source of inspiration
- All the brands and creative agencies whose work is referenced 