# 🚀 Render Deployment Setup

## Step 1: Push to GitHub First

You need to authenticate and push to GitHub. Choose one method:

### Method A: Complete GitHub CLI Authentication

1. **Open browser and authenticate:**
   ```bash
   gh auth login
   ```
   - Follow the prompts
   - Authorize in browser
   - Enter the code shown

2. **Then push:**
   ```bash
   git push -u origin main
   ```

### Method B: Use Personal Access Token

1. **Create token:**
   - Go to: https://github.com/settings/tokens
   - Click "Generate new token (classic)"
   - Name: "Pams Website"
   - Select scope: `repo` (full control)
   - Click "Generate token"
   - **Copy the token** (you won't see it again!)

2. **Push with token:**
   ```bash
   git push -u origin main
   # Username: Ugorumeyh10
   # Password: [paste your token]
   ```

### Method C: Use SSH (if you have SSH keys)

```bash
git remote set-url origin git@github.com:Ugorumeyh10/pams_webite.git
git push -u origin main
```

---

## Step 2: Deploy to Render

Once code is on GitHub:

1. **Go to Render Dashboard**
   - Visit: https://dashboard.render.com
   - Sign in or create account (free)

2. **Create New Web Service**
   - Click **"New +"** button (top right)
   - Select **"Web Service"**

3. **Connect GitHub Repository**
   - Click **"Connect GitHub"** or **"Connect account"**
   - Authorize Render to access your repositories
   - Search for: `pams_webite`
   - Click **"Connect"** next to `Ugorumeyh10/pams_webite`

4. **Configure Service**
   Render will auto-detect these settings from `render.yaml`:
   - **Name**: `pams-portfolio` (or change if you want)
   - **Environment**: `Node`
   - **Region**: Choose closest to your users
   - **Branch**: `main`
   - **Root Directory**: (leave empty)
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Plan**: `Free` (or upgrade later)

5. **Enable Auto-Deploy**
   - ✅ Check **"Auto-Deploy"** (deploys on every push)
   - ✅ Optional: Enable **"Pull Request Previews"**

6. **Create Service**
   - Click **"Create Web Service"**
   - Render will start building immediately

7. **Wait for Deployment**
   - First build takes 5-10 minutes
   - You'll see build logs in real-time
   - Site will be live at: `https://pams-portfolio.onrender.com`

---

## ✅ Auto-Deploy Pipeline

Once set up, every time you:
1. Make changes locally
2. Commit: `git commit -m "your message"`
3. Push: `git push`
4. Render automatically detects the push
5. Builds and deploys your site
6. Your site updates in real-time! 🎉

---

## 🔗 Your Live Site

After deployment, your site will be available at:
- **Default**: `https://pams-portfolio.onrender.com`
- **Custom Domain**: Add your own domain in Render settings

---

## 📊 Monitor Deployments

- View build logs in Render dashboard
- Check deployment status
- View site metrics
- Manage environment variables

---

## 🆘 Troubleshooting

### Build Fails
- Check build logs in Render
- Verify Node.js version (should be 18+)
- Ensure all dependencies are in `package.json`

### Site Not Loading
- Check if deployment completed successfully
- Verify start command is correct
- Check Render service logs

### Auto-Deploy Not Working
- Verify GitHub connection in Render
- Check that auto-deploy is enabled
- Ensure you're pushing to `main` branch

---

## 📝 Quick Commands

```bash
# Check git status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub (triggers Render auto-deploy)
git push

# Check deployment status
# Visit: https://dashboard.render.com
```

---

**Need Help?**
- Render Docs: https://render.com/docs
- Render Support: https://community.render.com
