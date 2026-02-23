# Quick Deploy Guide

## 🚀 Push to GitHub

Run this command (you'll be prompted for GitHub credentials):

```bash
git push -u origin main
```

**If authentication fails:**
1. Create a Personal Access Token: https://github.com/settings/tokens
2. Use token as password when prompted
3. Or install GitHub CLI: `brew install gh && gh auth login`

## 🌐 Deploy to Render

1. Go to: https://dashboard.render.com
2. Click "New +" → "Web Service"
3. Connect GitHub → Select `Ugorumeyh10/pams_webite`
4. Settings:
   - Build: `npm install && npm run build`
   - Start: `npm start`
   - Enable Auto-Deploy ✅
5. Click "Create Web Service"

**That's it!** Every push to `main` will auto-deploy. 🎉
