import Layout from '@/components/Layout';
import Link from 'next/link';

export default function Privacy() {
  return (
    <Layout title="Privacy Policy - InsightMiner">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        
        <div className="card mb-6">
          <h2 className="text-xl font-semibold mb-4">Introduction</h2>
          <p className="mb-4">
            At InsightMiner, we respect your privacy and are committed to protecting your personal data. 
            This privacy policy explains how we collect, use, and safeguard your information when you use our website.
          </p>
          <p>
            Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
            please do not access the site.
          </p>
        </div>
        
        <div className="card mb-6">
          <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
          <p className="mb-4">We may collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Search Queries:</strong> The text you enter into our search bar to generate insights.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you use our website, including your browser type, 
              time spent on pages, and pages visited.
            </li>
            <li>
              <strong>Cookies:</strong> We use cookies to enhance your experience on our site.
            </li>
          </ul>
        </div>
        
        <div className="card mb-6">
          <h2 className="text-xl font-semibold mb-4">How We Use Your Information</h2>
          <p className="mb-4">We use the collected information for various purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide and maintain our service</li>
            <li>To improve our website and user experience</li>
            <li>To analyze usage patterns and optimize our service</li>
            <li>To develop new features and functionality</li>
            <li>To communicate with you about updates or changes to our service</li>
          </ul>
        </div>
        
        <div className="card mb-6">
          <h2 className="text-xl font-semibold mb-4">Data Storage</h2>
          <p>
            We store your search queries and the generated insights in our database to improve our service. 
            No personally identifiable information is associated with these queries unless you explicitly 
            provide such information.
          </p>
        </div>
        
        <div className="card mb-6">
          <h2 className="text-xl font-semibold mb-4">Third-Party Services</h2>
          <p className="mb-4">
            We use the following third-party services:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Google Analytics:</strong> To track and analyze website usage.
            </li>
            <li>
              <strong>Google AdSense:</strong> To display advertisements on our website.
            </li>
            <li>
              <strong>Airtable:</strong> To store and manage our database of insights and queries.
            </li>
          </ul>
          <p className="mt-4">
            Each of these services has its own privacy policies governing the use of your information.
          </p>
        </div>
        
        <div className="card mb-6">
          <h2 className="text-xl font-semibold mb-4">Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by 
            posting the new Privacy Policy on this page. You are advised to review this Privacy Policy 
            periodically for any changes.
          </p>
        </div>
        
        <div className="card">
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
            <br />
            <a href="mailto:privacy@insightminer.com" className="text-primary hover:underline">
              privacy@insightminer.com
            </a>
          </p>
        </div>
        
        <div className="mt-8 text-center">
          <Link href="/" className="btn btn-primary">
            Return to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
} 