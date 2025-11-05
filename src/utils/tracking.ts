import TagManager from 'react-gtm-module';

// Initialize GTM
export const initGTM = () => {
  const tagManagerArgs = {
    gtmId: 'GTM-MJ868D46'
  };
  TagManager.initialize(tagManagerArgs);
};

// Get UTM parameters from URL
export const getUtmParams = (): Record<string, string> => {
  if (typeof window === 'undefined') return {};
  
  const searchParams = new URLSearchParams(window.location.search);
  const utmParams: Record<string, string> = {};
  
  const utmKeys = ['source', 'medium', 'campaign', 'term', 'content'];
  utmKeys.forEach(key => {
    const value = searchParams.get(`utm_${key}`);
    if (value) {
      utmParams[`utm_${key}`] = value;
    }
  });
  
  return utmParams;
};

// Get FPR parameter from URL
export const getFprParam = (): string | null => {
  if (typeof window === 'undefined') return null;
  
  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.get('fpr');
};

// Check if URL is an app.kombineo.com link
export const isAppKombineoLink = (url: string): boolean => {
  try {
    const urlObj = new URL(url, window.location.origin);
    return urlObj.hostname === 'app.kombineo.com';
  } catch (e) {
    return false;
  }
};

// Add parameters to a URL
export const addParamsToUrl = (url: string, params: Record<string, string>): string => {
  try {
    const urlObj = new URL(url, window.location.origin);
    
    // Add parameters if they don't already exist
    Object.entries(params).forEach(([key, value]) => {
      if (!urlObj.searchParams.has(key)) {
        urlObj.searchParams.set(key, value);
      }
    });
    
    return urlObj.toString();
  } catch (e) {
    return url;
  }
};

// Process URL with tracking parameters
export const processUrlWithTracking = (url: string): string => {
  let finalUrl = url;
  
  // Get current UTM parameters
  const utmParams = getUtmParams();
  
  // Get FPR parameter
  const fprValue = getFprParam();
  
  // If FPR is present, add FPR-specific tracking
  if (fprValue) {
    const fprParams: Record<string, string> = {
      fpr: fprValue,
      utm_source: 'fpr',
      utm_medium: 'referral',
      utm_campaign: `fpr_${fprValue}`,
    };
    
    // Add FPR parameters to app.kombineo.com links
    if (isAppKombineoLink(finalUrl)) {
      finalUrl = addParamsToUrl(finalUrl, fprParams);
    }
  } else if (Object.keys(utmParams).length > 0) {
    // If no FPR but we have UTM parameters, add them to app.kombineo.com links
    if (isAppKombineoLink(finalUrl)) {
      finalUrl = addParamsToUrl(finalUrl, utmParams);
    }
  }
  
  return finalUrl;
};

// Track link clicks in GTM
export const trackLinkClick = (url: string, elementId?: string) => {
  TagManager.dataLayer({
    dataLayer: {
      event: 'link_click',
      link_url: url,
      link_id: elementId || 'unknown',
      timestamp: new Date().toISOString(),
    },
  });
};

// Track button clicks in GTM
export const trackButtonClick = (
  buttonLabel: string,
  buttonType: 'cta' | 'demo' | 'trial' | 'other',
  destinationUrl?: string
) => {
  TagManager.dataLayer({
    dataLayer: {
      event: 'button_click',
      button_label: buttonLabel,
      button_type: buttonType,
      destination_url: destinationUrl || '',
      timestamp: new Date().toISOString(),
    },
  });
};

// Handle button navigation with tracking
export const handleButtonNavigation = (
  url: string,
  buttonLabel: string,
  buttonType: 'cta' | 'demo' | 'trial' | 'other' = 'other'
) => {
  // Process URL with tracking parameters
  const finalUrl = processUrlWithTracking(url);
  
  // Track the button click
  trackButtonClick(buttonLabel, buttonType, finalUrl);
  
  // Navigate to the URL
  window.location.href = finalUrl;
};
