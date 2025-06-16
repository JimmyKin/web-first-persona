# Personal Website Template

A beautiful, minimalistic, and content-first personal website template built with React, TypeScript, and Tailwind CSS.

## ✨ Features

- **Extremely Simple Design**: Clean, uncluttered layout with neutral colors and plenty of white space
- **Content-First Architecture**: All content lives in easily editable JSON files
- **Full Media Support**: Built-in support for images, videos, and audio with graceful fallbacks
- **Responsive Design**: Looks great on all devices
- **Developer Friendly**: Modern tech stack with clear code organization
- **Easy to Deploy**: Ready for GitHub Pages, Netlify, or Vercel

## 🚀 Quick Start

1. **Clone and Install**
   ```bash
   git clone <your-repo-url>
   cd <your-project-name>
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Customize Your Content**
   - Edit `src/data/siteConfig.json` for basic site information
   - Update `src/data/projects.json` for your projects
   - Modify `src/data/blog.json` for your blog posts
   - Add your media files to the `public/media/` folder

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Hero.tsx        # Hero section with profile image
│   ├── About.tsx       # About section with skills
│   ├── Projects.tsx    # Project showcase with media support
│   ├── Blog.tsx        # Blog post listings
│   ├── Contact.tsx     # Contact form and social links
│   ├── Navigation.tsx  # Site navigation
│   └── Footer.tsx      # Site footer
├── data/               # Content configuration files
│   ├── siteConfig.json # Site settings, hero, about, navigation
│   ├── projects.json   # Project portfolio data
│   └── blog.json       # Blog post metadata
└── pages/
    └── Index.tsx       # Main page component
```

## 🎨 Customization Guide

### 1. Site Configuration (`src/data/siteConfig.json`)

Update your basic site information:

```json
{
  "site": {
    "title": "Huaidong Jin",
    "tagline": "Your Professional Title",
    "description": "Brief description of your site",
    "author": "Huaidong Jin",
    "email": "your.email@example.com"
  },
  "hero": {
    "headline": "Your compelling headline",
    "subheadline": "Brief description of what you do",
    "profileImage": "/media/your-profile.jpg"
  }
}
```

### 2. Adding Projects (`src/data/projects.json`)

Add your projects with media support:

```json
[
  {
    "id": 1,
    "title": "Project Name",
    "description": "Project description",
    "image": "/media/project-image.jpg",
    "video": "/media/project-demo.mp4",
    "audio": "/media/project-audio.mp3",
    "technologies": ["React", "TypeScript"],
    "links": {
      "demo": "https://demo.example.com",
      "github": "https://github.com/username/repo"
    },
    "featured": true
  }
]
```

### 3. Managing Blog Posts (`src/data/blog.json`)

Add your writing:

```json
[
  {
    "id": 1,
    "title": "Post Title",
    "excerpt": "Brief excerpt of your post",
    "date": "2024-06-16",
    "readTime": "5 min read",
    "tags": ["Web Development", "React"],
    "slug": "post-url-slug",
    "featured": true
  }
]
```

### 4. Adding Media Files

Create a `public/media/` folder and add your files:

```
public/media/
├── profile.jpg          # Your profile photo
├── project1-thumb.jpg   # Project thumbnails
├── project1-demo.mp4    # Project demo videos
├── project1-audio.mp3   # Audio files (for audio projects)
└── ...
```

**Media Guidelines:**
- **Images**: Use .jpg or .webp, optimize for web (under 500KB)
- **Videos**: Use .mp4, keep under 10MB for web performance
- **Audio**: Use .mp3, compress for web streaming

## 🎯 Content Management Tips

### Adding New Sections

1. Create a new component in `src/components/`
2. Add the component to `src/pages/Index.tsx`
3. Update navigation in `src/data/siteConfig.json`

### Updating Styles

- All styling uses Tailwind CSS
- Colors and spacing are defined in `tailwind.config.ts`
- Component styles are inline with Tailwind classes

### SEO Optimization

- Update meta tags in `index.html`
- Modify site title and description in `siteConfig.json`
- Add alt text to all images

## 🚀 Deployment

### Deploy to Netlify (Recommended)

1. Push your code to GitHub
2. Connect your repo to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run build && npm run deploy`

## 🔧 Technical Details

**Built With:**
- React 18 + TypeScript
- Tailwind CSS for styling
- Vite for build tooling
- Lucide React for icons
- Radix UI for components

**Browser Support:**
- Chrome, Firefox, Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Android Chrome)

## 📝 Content Guidelines

### Writing Blog Posts

Blog posts are managed through `blog.json`. For actual blog content, you can:

1. **Simple Approach**: Link to external platforms (Medium, Dev.to)
2. **Advanced Approach**: Add a blog detail page and use Markdown files

### Project Descriptions

- Keep descriptions concise (2-3 sentences)
- Focus on the problem solved and technologies used
- Include live demo links when possible

### Media Best Practices

- **Profile Image**: 400x400px, professional headshot
- **Project Images**: 16:9 aspect ratio, 800x450px recommended
- **Videos**: Keep under 30 seconds for demo videos
- **Audio**: Provide 30-60 second samples for audio projects

## 🤝 Contributing

This template is designed to be easily customizable. Common modifications:

1. **Color Scheme**: Update Tailwind config
2. **Typography**: Change font imports in `index.html`
3. **Layout**: Modify component structures
4. **Animations**: Add Framer Motion for enhanced interactions

## 📄 License

MIT License - feel free to use this template for your personal website!

---

## 🆘 Need Help?

**Common Issues:**

1. **Images not loading**: Check file paths in JSON files match your `public/media/` structure
2. **Build errors**: Ensure all imported components exist and are properly typed
3. **Styling issues**: Verify Tailwind classes are correct and config is properly set up

**Performance Tips:**

- Optimize images before adding them
- Use lazy loading for below-the-fold content
- Consider using a CDN for media files in production

**Customization Ideas:**

- Add a dark mode toggle
- Integrate with a headless CMS
- Add animation libraries (Framer Motion, AOS)
- Include a search functionality for blog posts
- Add internationalization (i18n) support

Happy building! 🎉
