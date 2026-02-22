# Deployment Instructions

## GitHub Repository Setup

The code has been initialized and is ready to push to GitHub.

### Step 1: Push to GitHub

You need to authenticate and push. Choose one of these methods:

#### Option A: Using GitHub CLI (Recommended)
```bash
# Install GitHub CLI if not installed
# Then authenticate
gh auth login

# Push to GitHub
git push -u origin main
```

#### Option B: Using Personal Access Token
```bash
# When prompted for username, enter: Ugorumeyh10
# When prompted for password, use a GitHub Personal Access Token
# Create one at: https://github.com/settings/tokens
# Required scopes: repo

git push -u origin main
```

#### Option C: Using SSH (If you have SSH keys set up)
```bash
# Change remote to SSH
git remote set-url origin git@github.com:Ugorumeyh10/pams_webite.git

# Push
git push -u origin main
```

## Render Deployment Setup

### Step 2: Connect to Render

1. **Go to Render Dashboard**
   - Visit: https://dashboard.render.com
   - Sign in or create an account

2. **Create New Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub account
   - Select repository: `Ugorumeyh10/pams_webite`

3. **Configure Service**
   - **Name**: `pams-portfolio` (or your preferred name)
   - **Environment**: `Node`
   - **Region**: Choose closest to your users
   - **Branch**: `main`
   - **Root Directory**: (leave empty)
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Plan**: Free (or upgrade if needed)

4. **Auto-Deploy Settings**
   - ✅ Enable "Auto-Deploy" (deploys on every push to main)
   - ✅ Enable "Pull Request Previews" (optional)

5. **Environment Variables**
   - `NODE_ENV=production` (automatically set by Render)

6. **Click "Create Web Service"**

### Step 3: Verify Deployment

- Render will automatically:
  1. Clone your repository
  2. Install dependencies
  3. Build the Next.js app
  4. Deploy it

- Your site will be available at: `https://pams-portfolio.onrender.com` (or your custom domain)

## CI/CD Pipeline

The repository includes:
- ✅ GitHub Actions workflow (`.github/workflows/render-deploy.yml`)
- ✅ Render configuration (`render.yaml`)
- ✅ Auto-deploy enabled

### How It Works

1. **Push to GitHub** → Triggers GitHub Actions
2. **GitHub Actions** → Builds and validates the code
3. **Render** → Automatically detects the push and deploys
4. **Live Site** → Updates in real-time

### Manual Deployment

If you need to manually trigger a deployment:
- Go to Render Dashboard → Your Service → Manual Deploy

## Custom Domain (Optional)

1. In Render Dashboard → Your Service → Settings
2. Click "Custom Domains"
3. Add your domain
4. Follow DNS configuration instructions

## Troubleshooting

### Build Fails
- Check build logs in Render dashboard
- Verify Node.js version (should be 18+)
- Check for missing dependencies

### Images Not Loading
- Ensure images are in `public/` folder
- Check image paths in components
- Verify Next.js image configuration

### Deployment Not Triggering
- Verify GitHub connection in Render
- Check that auto-deploy is enabled
- Ensure you're pushing to `main` branch

## Support

- Render Docs: https://render.com/docs
- GitHub Actions: https://docs.github.com/en/actions
