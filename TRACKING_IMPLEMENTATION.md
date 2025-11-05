# Tracking Implementation Guide

This document explains the tracking implementation for GTM, UTM, and FPR parameters.

## Features Implemented

### 1. Google Tag Manager (GTM)
- **GTM Container ID**: GTM-MJ868D46
- **Package**: react-gtm-module
- **Initialization**: GTM is automatically initialized when the app loads
- **Events Tracked**:
  - `link_click`: Triggered when users click any external link
  - `button_click`: Triggered when users click CTA buttons

### 2. UTM Tracking
The system automatically tracks and forwards the following UTM parameters:
- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_term`
- `utm_content`

**How it works:**
- When a user visits your site with UTM parameters (e.g., `yoursite.com?utm_source=google&utm_medium=cpc`)
- All links to `app.kombineo.com` will automatically include these UTM parameters
- Example: A link to `https://app.kombineo.com/signup` becomes `https://app.kombineo.com/signup?utm_source=google&utm_medium=cpc`

### 3. FPR Tracking
When a user visits your site with an FPR parameter (e.g., `yoursite.com?fpr=partner123`):

**Automatic actions:**
1. The FPR parameter is forwarded to all `app.kombineo.com` links
2. The following UTM parameters are automatically added:
   - `utm_source=fpr`
   - `utm_medium=referral`
   - `utm_campaign=fpr_[fpr_value]` (e.g., `fpr_partner123`)

**Example:**
- User visits: `yoursite.com?fpr=partner123`
- Link to: `https://app.kombineo.com/signup`
- Becomes: `https://app.kombineo.com/signup?fpr=partner123&utm_source=fpr&utm_medium=referral&utm_campaign=fpr_partner123`

## Implementation Details

### Files Created/Modified

1. **`src/utils/tracking.ts`**
   - Core tracking utilities
   - GTM initialization
   - URL parameter processing functions
   - Button tracking functions (`trackButtonClick`, `handleButtonNavigation`)

2. **`src/Components/LinkTracker.tsx`**
   - React component that intercepts all link clicks
   - Automatically processes URLs with tracking parameters
   - Sends tracking events to GTM

3. **`src/Components/TrackedButton.tsx`** (NEW)
   - Reusable button component with built-in tracking
   - Supports button types: 'cta', 'demo', 'trial', 'other'

4. **`src/shared-components/SharedButton.tsx`** (Updated)
   - Enhanced with tracking capabilities
   - Supports `href`, `buttonType`, and `trackingLabel` props

5. **`src/main.tsx`** (Updated)
   - Initializes GTM on app load
   - Includes LinkTracker component

6. **Button Components Updated**:
   - `src/Components/hero.tsx` - Hero CTA and demo buttons
   - `src/Components/tabs.tsx` - Tabs section trial button
   - `src/Components/secondSection.tsx` - Features section CTA
   - `src/Components/navBar.tsx` - Navbar demo buttons (desktop & mobile)
   - `src/Components/plans.tsx` - All pricing plan buttons

### How It Works

1. **On App Load:**
   - GTM is initialized with container ID GTM-MJ868D46
   - LinkTracker component is mounted

2. **When User Clicks a Link:**
   - LinkTracker intercepts the click
   - Checks if the link is to `app.kombineo.com`
   - If yes, processes the URL to add tracking parameters:
     - Checks for FPR parameter in current URL
     - If FPR exists, adds FPR + UTM parameters
     - If no FPR, checks for existing UTM parameters and forwards them
   - Tracks the click event in GTM
   - Navigates to the final URL

3. **Link Types Processed:**
   - All external links (including app.kombineo.com)
   - Internal links are not affected

4. **Link Types Skipped:**
   - Hash links (`#section`)
   - Mailto links (`mailto:email@example.com`)
   - Tel links (`tel:+1234567890`)
   - Download links (with `download` attribute)

## Testing the Implementation

### Test UTM Tracking
1. Visit your site with UTM parameters:
   ```
   http://localhost:5173/?utm_source=google&utm_medium=cpc&utm_campaign=summer2024
   ```
2. Click any link to `app.kombineo.com`
3. Verify the link includes the UTM parameters

### Test FPR Tracking
1. Visit your site with an FPR parameter:
   ```
   http://localhost:5173/?fpr=partner123
   ```
2. Click any link to `app.kombineo.com`
3. Verify the link includes:
   - `fpr=partner123`
   - `utm_source=fpr`
   - `utm_medium=referral`
   - `utm_campaign=fpr_partner123`

### Test GTM Events
1. Open browser developer tools
2. Navigate to Console
3. Type: `dataLayer` and press Enter
4. You should see the GTM data layer with tracking events
5. Click any link to `app.kombineo.com`
6. Check for a new `link_click` event in the data layer

## Usage in Code

### Automatic Link Tracking

The tracking is automatic for all links. No code changes needed!

Simply use regular anchor tags in your components:

```tsx
<a href="https://app.kombineo.com/signup">Sign Up</a>
```

The LinkTracker component will automatically handle the tracking.

### Button Tracking

All buttons that navigate to `app.kombineo.com` now include tracking. Here are the different ways to use it:

#### 1. Using SharedButton Component (Recommended)

```tsx
import SharedButton from './shared-components/SharedButton';

<SharedButton
  label="Essayez gratuitement"
  href="https://app.kombineo.com/signup"
  buttonType="trial"
  trackingLabel="My Section - Try Free"
  gradientDirection="btt"
/>
```

**Props:**
- `label`: Button text (required)
- `href`: Destination URL (optional, will add tracking if provided)
- `buttonType`: Type of button - `'cta' | 'demo' | 'trial' | 'other'` (optional, default: 'cta')
- `trackingLabel`: Custom label for GTM tracking (optional, defaults to `label`)
- `gradientDirection`: Button gradient style (optional)

#### 2. Using handleButtonNavigation Function

For custom buttons, use the `handleButtonNavigation` function directly:

```tsx
import { handleButtonNavigation } from './utils/tracking';

<button 
  onClick={() => handleButtonNavigation(
    'https://app.kombineo.com/demo',
    'Custom Button - View Demo',
    'demo'
  )}
>
  View Demo
</button>
```

#### 3. Using TrackedButton Component

For more control:

```tsx
import TrackedButton from './Components/TrackedButton';

<TrackedButton
  label="Get Started"
  href="https://app.kombineo.com/signup"
  buttonType="cta"
  trackingLabel="Footer - Get Started"
  className="my-custom-class"
/>
```

### All Tracked Buttons

The following buttons are currently tracked:

1. **Hero Section**:
   - "Essayez gratuitement" (Trial) → `https://app.kombineo.com/signup`
   - "Voir démo" (Demo) → `https://app.kombineo.com/demo`

2. **Navbar** (Desktop & Mobile):
   - "Demander une démo" (Demo) → `https://app.kombineo.com/demo`

3. **Tabs Section**:
   - "Essai gratuit de 7 jours" (Trial) → `https://app.kombineo.com/trial`

4. **Features Section**:
   - "Essayez gratuitement" (Trial) → `https://app.kombineo.com/signup`

5. **Pricing Page**:
   - "Get Started" (Scale plan) → `https://app.kombineo.com/signup?plan=scale`
   - "Start 7-day free trial" (Power plan) → `https://app.kombineo.com/trial?plan=power`
   - "Booker une démo" (Enterprise) → `https://app.kombineo.com/enterprise-demo`

### For Programmatic Navigation

If you need to generate a tracked URL programmatically without clicking:

```tsx
import { processUrlWithTracking } from './utils/tracking';

const url = 'https://app.kombineo.com/signup';
const trackedUrl = processUrlWithTracking(url);
// Use trackedUrl for navigation
```

## GTM Configuration

The GTM container ID `GTM-MJ868D46` should be configured in your Google Tag Manager account to receive the following events:

- **Event**: `link_click`
- **Variables**:
  - `link_url`: The final URL being clicked
  - `link_id`: The ID of the link element
  - `timestamp`: When the click occurred

## Notes

- Existing parameters in the target URL are preserved (not overwritten)
- The tracking only affects links to `app.kombineo.com`
- Other external links are not modified
- Internal navigation is not affected

## Troubleshooting

If tracking is not working:

1. Check browser console for errors
2. Verify GTM container ID is correct
3. Check that `react-gtm-module` package is installed
4. Verify LinkTracker component is mounted in the app
5. Check that links have the correct format (not hash links, mailto, etc.)
