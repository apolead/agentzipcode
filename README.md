# ApoLead Agent Call Dashboard

A professional call center dashboard for ApoLead agents featuring zip code lookup and streamlined call scripts.

## Features

### 🎨 **Professional ApoLead Design**
- **Exact Brand Matching**: Colors, fonts, and logo match your website template
- **Responsive Design**: Perfect on desktop, tablet, and mobile devices  
- **Professional Interface**: Clean, modern design optimized for call centers
- **ApoLead Branding**: Cyan/purple color scheme with proper logo styling

### 🔍 **Zip Code Lookup**
- Enter zip codes to check service availability
- Real-time status indicators with color-coded results
- Automatic script guidance based on lookup results
- Interactive service area statistics with gradients

### 📝 **Agent Scripts**
- **Inbound Call Scripts**: Complete greeting and discovery workflow
- **Compliance**: Thumbtack terms and conditions handling  
- **Quote Building**: Step-by-step contractor matching process
- **Objection Handling**: Common objections with proven rebuttals
- **Outbound Scripts**: Follow-up for incomplete leads
- **Expandable Sections**: Click to expand/collapse script sections

## Quick Start

### Development
```bash
npm install
npm run dev
```

### Deployment on Vercel
1. Push this repository to GitHub
2. Connect your GitHub account to Vercel
3. Select this repository for deployment
4. Vercel will automatically detect Next.js and deploy

## File Structure
```
/
├── app/
│   ├── page.tsx          # Main dashboard
│   ├── layout.tsx        # App layout
│   └── globals.css       # Global styles
├── components/
│   ├── ZipCodeLookup.tsx # Zip code functionality
│   └── ScriptDisplay.tsx # Script interface
├── public/
│   └── data/
│       └── zipcodes.csv  # Zip code database
└── package.json
```

## Usage

### For Agents
1. **Zip Code Check**: Enter customer's zip code to verify service availability
2. **Script Reference**: Use the organized scripts for different call scenarios
3. **Objection Handling**: Quick access to rebuttals for common concerns

### For Administrators
- Update zip code data by replacing `/public/data/zipcodes.csv`
- Modify scripts by editing the content in `ScriptDisplay.tsx`

## Technologies
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Papa Parse**: CSV parsing library
- **Lucide React**: Icon library

## Support
Built for ApoLead call center operations. Contact your system administrator for technical support.