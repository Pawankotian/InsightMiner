import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-light-darker dark:bg-dark-lighter py-6">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © {currentYear} InsightMiner. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <Link href="/about" className="text-sm hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/privacy" className="text-sm hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
        
        <div className="mt-6">
          <p className="text-xs text-center text-gray-500 dark:text-gray-400">
            InsightMiner is not affiliated with Cannes Lions International Festival of Creativity.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 