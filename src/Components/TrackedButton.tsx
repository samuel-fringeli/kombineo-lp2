import React, { type ButtonHTMLAttributes, type MouseEvent } from 'react';
import { handleButtonNavigation, trackButtonClick } from '../utils/tracking';

interface TrackedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  href?: string;
  buttonType?: 'cta' | 'demo' | 'trial' | 'other';
  trackingLabel?: string;
  children?: React.ReactNode;
}

const TrackedButton: React.FC<TrackedButtonProps> = ({
  label,
  href,
  buttonType = 'other',
  trackingLabel,
  onClick,
  children,
  ...props
}) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    // Track the button click
    trackButtonClick(
      trackingLabel || label,
      buttonType,
      href
    );
    
    // Call the original onClick handler if provided
    if (onClick) {
      onClick(e);
    }
    
    // Navigate to href if provided
    if (href) {
      e.preventDefault();
      handleButtonNavigation(href, trackingLabel || label, buttonType);
    }
  };
  
  return (
    <button
      onClick={handleClick}
      data-button-type={buttonType}
      data-tracking-label={trackingLabel || label}
      {...props}
    >
      {children || label}
    </button>
  );
};

export default TrackedButton;
