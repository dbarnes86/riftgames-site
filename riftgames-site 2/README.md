# RIFT Games Website - GitHub Pages Migration

A modern, self-hosted recreation of the RIFT Games website with a bold futuristic gaming aesthetic.

## Features

- **Modern Design**: Futuristic gaming aesthetic with Orbitron and Space Mono fonts
- **Smooth Animations**: Scroll-triggered animations, parallax effects, and gradient animations
- **Fully Responsive**: Works beautifully on desktop, tablet, and mobile
- **Fast Loading**: Optimized CSS and vanilla JavaScript (no frameworks)
- **SEO Friendly**: Semantic HTML5 structure

## Setup Instructions

### 1. Download Images

You need to download these images from your Framer site and place them in the `images/` folder:

**Required Images:**
1. `logo.png` - Main RIFT logo (from navigation)
   - URL: https://framerusercontent.com/images/eScqRAD2OoTODaplXUbRVWmsv4.png

2. `hero-1.png` - First hero image (woman zoom pose, left)
   - URL: https://framerusercontent.com/images/24PMDpfVavCEFStdd4SIaETbDmc.png

3. `hero-2.png` - Second hero image (woman zoom pose, right)
   - URL: https://framerusercontent.com/images/o2FnfJ8E6xvlYEEK59gYYBhqb8.png

4. `man-side.png` - Man side view image
   - URL: https://framerusercontent.com/images/cJmmqzCsOTGyUFGXWtQVg8Mj0U.png
   - OR: https://framerusercontent.com/images/264exEtYwaDW0lHSIubNKB40zQw.png

5. `car-blur.png` - Car blur image for StoryEngine
   - URL: https://framerusercontent.com/images/LChsnEHhjuH4Tv6XwGeyrlt8XWY.png

6. `woman-blur.png` - Woman blur image for TCD
   - URL: https://framerusercontent.com/images/gX6uAFwhE2dtnK4NpVizmVn9g.png

7. `man-sunglasses.png` - Man wearing sunglasses
   - URL: https://framerusercontent.com/images/dEDWnApV3vOgpUc6fIDmQ2neqJo.png

8. `logo-footer.png` - Footer logo
   - URL: https://framerusercontent.com/images/aQOFyZHDQWbf1ZE8P8x1KTx8ZM.png

**How to download images:**
1. Open each URL in your browser
2. Right-click → "Save image as..."
3. Save with the corresponding filename in the `images/` folder

### 2. Set Up GitHub Repository

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - RIFT Games website"

# Create repository on GitHub (via github.com)
# Then connect it:
git remote add origin https://github.com/YOUR-USERNAME/riftgames-site.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings**
3. Scroll to **Pages** in the left sidebar
4. Under "Source", select **main** branch
5. Click **Save**
6. Your site will be live at: `https://YOUR-USERNAME.github.io/riftgames-site/`

### 4. Configure Custom Domain (www.riftgames.com)

1. In GitHub Pages settings, enter your custom domain: `www.riftgames.com`
2. Create a `CNAME` file in the root of your repository:
   ```
   www.riftgames.com
   ```
3. Update your DNS settings with your domain provider:
   - Add a **CNAME record**:
     - Name/Host: `www`
     - Value: `YOUR-USERNAME.github.io`
   - OR use **A records** pointing to GitHub's IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

4. Wait for DNS propagation (can take up to 48 hours, usually much faster)

## Project Structure

```
riftgames-site/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript functionality
├── README.md           # This file
├── CNAME              # Custom domain configuration
└── images/            # Image assets folder
    ├── logo.png
    ├── hero-1.png
    ├── hero-2.png
    ├── man-side.png
    ├── car-blur.png
    ├── woman-blur.png
    ├── man-sunglasses.png
    └── logo-footer.png
```

## Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --color-primary: #00ff88;      /* Main accent color */
    --color-secondary: #0099ff;    /* Secondary accent */
    --color-accent: #ff0066;       /* Highlight color */
    --color-bg-dark: #0a0a0f;      /* Background */
}
```

### Fonts
The site uses Google Fonts:
- **Orbitron** - Display/headings
- **Space Mono** - Body text

Change in both `index.html` (link) and `styles.css` (variables).

### Content
All content is in `index.html`. Simply edit the text within the HTML tags.

## Performance

- No external dependencies except Google Fonts
- Vanilla JavaScript (no jQuery or frameworks)
- Optimized CSS with minimal render-blocking
- Lazy loading for scroll animations

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Troubleshooting

**Images not showing:**
- Make sure all images are downloaded and named correctly
- Check that they're in the `images/` folder
- Verify file extensions match (`.png`)

**Custom domain not working:**
- Wait for DNS propagation (can take 24-48 hours)
- Verify CNAME file contains only your domain
- Check DNS settings with your provider

**Animations not working:**
- Ensure JavaScript is enabled
- Check browser console for errors
- Try clearing browser cache

## License

© RIFT 2024 - All rights reserved

## Contact

For issues or questions: story@riftgames.com
