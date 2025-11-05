import { useEffect } from 'react';
import { processUrlWithTracking, trackLinkClick } from '../utils/tracking';

const LinkTracker: React.FC = () => {
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      // Find the closest anchor element
      const target = (e.target as HTMLElement).closest('a');
      
      // Skip if not an anchor or already tracked
      if (!target || target.getAttribute('data-tracked') === 'true') {
        return;
      }
      
      const href = target.getAttribute('href');
      
      // Skip if no href or it's a hash link
      if (!href || href.startsWith('#')) {
        return;
      }
      
      // Skip if it's a mailto: or tel: link
      if (href.startsWith('mailto:') || href.startsWith('tel:')) {
        return;
      }
      
      // Skip if it's a download link
      if (target.hasAttribute('download')) {
        return;
      }
      
      // Check if this is a relative link or external link
      let isExternal = false;
      try {
        const urlObj = new URL(href, window.location.origin);
        isExternal = urlObj.origin !== window.location.origin;
      } catch (e) {
        // If URL parsing fails, treat as internal
        isExternal = false;
      }
      
      // Only process external links or app.kombineo.com links
      if (!isExternal && !href.includes('app.kombineo.com')) {
        return;
      }
      
      // Prevent default navigation
      e.preventDefault();
      
      // Process URL with tracking
      const finalUrl = processUrlWithTracking(href);
      
      // Track the click
      trackLinkClick(
        finalUrl,
        target.id || target.getAttribute('data-element-id') || target.textContent?.substring(0, 50) || 'unknown'
      );
      
      // Navigate to the final URL
      window.location.href = finalUrl;
    };
    
    // Add event listener to the document
    document.addEventListener('click', handleLinkClick as EventListener, true);
    
    // Cleanup
    return () => {
      document.removeEventListener('click', handleLinkClick as EventListener, true);
    };
  }, []);
  
  return null; // This component doesn't render anything
};

export default LinkTracker;
