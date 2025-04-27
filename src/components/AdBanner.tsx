import { useEffect, useRef } from 'react';

interface AdBannerProps {
  client: string;
  slot: string;
  format?: string;
  responsive?: boolean;
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

const AdBanner = ({
  client,
  slot,
  format = 'auto',
  responsive = true,
  className = '',
}: AdBannerProps) => {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      // Insert the ad with the script
      const adScript = document.createElement('script');
      adScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
      adScript.async = true;
      adScript.crossOrigin = 'anonymous';
      adScript.setAttribute('data-ad-client', client);
      document.head.appendChild(adScript);
      
      // Add the ad unit
      const currentAd = adRef.current;
      if (currentAd && window.adsbygoogle) {
        const ins = document.createElement('ins');
        ins.className = 'adsbygoogle';
        ins.style.display = 'block';
        
        // Set attributes
        ins.setAttribute('data-ad-client', client);
        ins.setAttribute('data-ad-slot', slot);
        
        if (responsive) {
          ins.setAttribute('data-ad-format', format);
          ins.setAttribute('data-full-width-responsive', 'true');
        }
        
        currentAd.appendChild(ins);
        
        // Push to adsbygoogle for rendering
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error('Error loading Google AdSense:', error);
    }
    
    return () => {
      // Cleanup if needed
      const currentAd = adRef.current;
      if (currentAd) {
        currentAd.innerHTML = '';
      }
    };
  }, [client, slot, format, responsive]);

  return (
    <div ref={adRef} className={`ad-container my-6 text-center ${className}`}>
      <div className="text-xs text-gray-400 mb-1">Advertisement</div>
    </div>
  );
};

export default AdBanner; 