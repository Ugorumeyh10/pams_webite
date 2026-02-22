# Deployment Guide for Render

This guide will help you deploy Pamela Odunna's portfolio website to Render.

## Prerequisites

1. A GitHub, GitLab, or Bitbucket account
2. A Render account (sign up at https://render.com)

## Step-by-Step Deployment

### 1. Push Code to Git Repository

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Portfolio website"

# Add your remote repository
git remote add origin <your-repository-url>

# Push to repository
git push -u origin main
```

### 2. Deploy on Render

1. **Log in to Render**
   - Go to https://dashboard.render.com
   - Sign in or create an account

2. **Create New Web Service**
   - Click "New +" button
   - Select "Web Service"

3. **Connect Repository**
   - Connect your Git provider (GitHub, GitLab, or Bitbucket)
   - Select your repository
   - Click "Connect"

4. **Configure Service**
   - **Name**: `pams-portfolio` (or your preferred name)
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Plan**: Choose Free or Starter plan

5. **Environment Variables** (Optional)
   - Add `NODE_ENV=production` if needed
   - Render will automatically set this

6. **Deploy**
   - Click "Create Web Service"
   - Render will automatically build and deploy your application
   - Wait for the build to complete (usually 5-10 minutes)

### 3. Custom Domain (Optional)

1. Go to your service settings
2. Click "Custom Domains"
3. Add your domain name
4. Follow the DNS configuration instructions

## Alternative: Using render.yaml

If you prefer, you can use the included `render.yaml` file:

1. Push your code with `render.yaml` to your repository
2. In Render dashboard, select "New +" → "Blueprint"
3. Connect your repository
4. Render will automatically detect and use the `render.yaml` configuration

## Post-Deployment

1. **Update Contact Information**
   - Edit `components/Contact.tsx` with your actual email
   - Update social media links

2. **Add Real Images**
   - Replace placeholder images in `public/` folder
   - Update image paths in components

3. **Update Content**
   - Customize experience, projects, and skills in respective component files
   - Add real analytics data in `components/Analytics.tsx`

## Troubleshooting

### Build Fails
- Check build logs in Render dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### Images Not Loading
- Ensure images are in `public/` folder
- Check image paths in components
- Verify Next.js image configuration

### Performance Issues
- Enable Next.js image optimization
- Consider using CDN for static assets
- Optimize images before uploading

## Support

For Render-specific issues, check:
- Render Documentation: https://render.com/docs
- Render Community: https://community.render.com
