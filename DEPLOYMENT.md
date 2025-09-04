# Deployment Guide for ApoLead Agent Dashboard

## Quick Deployment on Vercel (Recommended)

### Step 1: Push to GitHub
1. Initialize git repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: ApoLead Agent Dashboard"
   ```

2. Create a new repository on GitHub
3. Add the remote and push:
   ```bash
   git branch -M main
   git remote add origin https://github.com/your-username/apolead-agent-dashboard.git
   git push -u origin main
   ```

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "New Project"
3. Import your repository
4. Vercel will automatically detect Next.js
5. Click "Deploy"

### Step 3: Custom Domain (Optional)
- In Vercel dashboard, go to your project
- Navigate to "Settings" → "Domains"
- Add your custom domain

## Manual Deployment Steps

### Prerequisites
- Node.js 18+ installed
- Git installed
- GitHub account
- Vercel account (free)

### Local Development
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Features Included

✅ **Zip Code Lookup**
- Real-time validation against ProShield database
- Clear status indicators (Active/Inactive/Not Found)
- Automatic script guidance

✅ **Agent Scripts**
- Inbound call workflows
- Compliance procedures
- Objection handling
- Outbound follow-up scripts

✅ **Mobile Responsive**
- Works on desktop, tablet, and mobile devices
- Clean, professional interface

✅ **Fast Performance**
- Optimized for call center environments
- Quick loading times
- Cached data for better performance

## Data Management

### Updating Zip Code Data
1. Replace the file at `/public/data/zipcodes.csv`
2. Deploy changes to update the live version
3. Data format must match: `zip,lat,lng,city,state_id,state_name,zcta,parent_zcta,population,density,county_fips,county_name,county_weights,county_names_all,county_fips_all,imprecise,military,timezone,active`

### Updating Scripts
- Edit content in `/components/ScriptDisplay.tsx`
- Redeploy to apply changes

## Support & Maintenance

### Regular Updates
- Keep dependencies updated
- Monitor Vercel deployment status
- Check application performance

### Troubleshooting
- Check Vercel function logs for errors
- Verify CSV data format
- Test zip code lookup functionality

## Security Notes
- No sensitive data is stored in the application
- ZIP code data is served statically
- Scripts are embedded in the application code