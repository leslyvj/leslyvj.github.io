# Modern Minimalist Portfolio Website

A clean, professional portfolio website built with React and TypeScript, featuring a minimalist design with smooth animations and responsive layout.

## Features

- **Modern Design**: Clean typography-focused layout with monochromatic color scheme
- **Responsive**: Mobile-first design that works perfectly on all device sizes
- **Smooth Navigation**: Animated scrolling between sections with active state highlighting
- **Interactive Elements**: Hover effects, micro-animations, and form validation
- **Accessibility**: WCAG 2.1 AA compliant with proper ARIA labels and keyboard navigation
- **Performance Optimized**: Fast loading with optimized images and minimal JavaScript

## Tech Stack

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Vite** for build tooling
- **Lucide React** for icons
- **Intersection Observer API** for scroll-based animations

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/johndoe/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Customization

### Personal Information

Update the following files with your personal information:

1. **src/components/Hero/Hero.tsx**: Change name, title, and bio
2. **src/components/About/About.tsx**: Update about section, skills, and location
3. **src/components/Projects/Projects.tsx**: Add your projects with descriptions and links
4. **src/components/Experience/Experience.tsx**: Update work experience and education
5. **src/components/Contact/Contact.tsx**: Update contact information and social links

### Design Customization

- **Colors**: Modify color classes in Tailwind CSS (primary color is `blue-600`)
- **Typography**: Font sizes and weights can be adjusted in individual components
- **Spacing**: Built on 8px grid system - modify spacing using Tailwind's spacing scale
- **Animations**: Customize transitions and animations in the CSS file

### Content Guidelines

- **Images**: Replace placeholder images with your actual project screenshots
- **Links**: Update all social media and project links
- **SEO**: Update meta tags in `index.html` with your information

## Project Structure

```
src/
├── components/
│   ├── Header/           # Navigation header with mobile menu
│   ├── Hero/             # Hero section with introduction
│   ├── About/            # About section with skills
│   ├── Projects/         # Featured projects showcase
│   ├── Experience/       # Work experience and education
│   └── Contact/          # Contact form and information
├── App.tsx               # Main application component
├── main.tsx              # Application entry point
└── index.css             # Global styles and animations
```

## Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

## Deployment

This portfolio can be deployed to various platforms:

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use the build files in the `gh-pages` branch

## Performance Features

- Optimized images with proper aspect ratios
- Lazy loading for heavy content
- Minimal JavaScript bundle size
- Semantic HTML for better SEO
- Accessible design with proper ARIA labels

## Browser Support

- Chrome 90+
- Firefox 90+
- Safari 14+
- Edge 90+

## License

MIT License - feel free to use this template for your own portfolio!

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Support

If you have any questions or need help customizing the portfolio, please open an issue on GitHub.