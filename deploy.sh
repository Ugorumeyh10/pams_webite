#!/bin/bash

echo "🚀 Deploying to GitHub and Render"
echo ""

# Check if authenticated
if ! gh auth status &>/dev/null; then
    echo "⚠️  Not authenticated with GitHub"
    echo ""
    echo "Please choose an authentication method:"
    echo ""
    echo "Option 1: Browser Authentication (Recommended)"
    echo "  Run: gh auth login"
    echo "  Then follow the prompts"
    echo ""
    echo "Option 2: Personal Access Token"
    echo "  1. Create token at: https://github.com/settings/tokens"
    echo "  2. Use token as password when pushing"
    echo ""
    exit 1
fi

echo "✅ Authenticated with GitHub"
echo ""

# Push to GitHub
echo "📤 Pushing to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "🌐 Next Steps for Render:"
    echo "  1. Go to: https://dashboard.render.com"
    echo "  2. Click 'New +' → 'Web Service'"
    echo "  3. Connect GitHub → Select 'Ugorumeyh10/pams_webite'"
    echo "  4. Render will auto-detect settings"
    echo "  5. Enable 'Auto-Deploy'"
    echo "  6. Click 'Create Web Service'"
    echo ""
    echo "🎉 Your site will auto-deploy on every push!"
else
    echo ""
    echo "❌ Push failed. Please check authentication."
fi
