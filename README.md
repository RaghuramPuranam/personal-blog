# 👨‍💻 Raghuram Puranam – Personal Portfolio

A modern, responsive React-based portfolio showcasing 10+ years of full-stack software engineering expertise. Built with **React**, **React Router**, and styled with custom CSS for optimal performance and user experience.

---

## 🎯 Features

✨ **Modern Design**  
Clean, minimalist interface with smooth animations and responsive layout across all devices.

🏠 **Multi-Page Navigation**  
- **Home** – Hero section with animated name and social links  
- **About** – Professional bio and expertise highlights  
- **Contact** – Easy-to-use contact information and collaboration opportunities  

⚡ **Performance Optimized**  
- Lazy-loaded components  
- Efficient CSS styling  
- SEO-friendly metadata  

📱 **Fully Responsive**  
Mobile-first design that works seamlessly on phones, tablets, and desktops.

🎨 **Custom Typography**  
Premium Google Fonts (Montserrat, Merriweather) for professional appearance.

---

## 🛠️ Tech Stack

- **Frontend:** React 18, React Router v6
- **Styling:** CSS3 with custom animations
- **Icons:** FontAwesome
- **SEO:** React Helmet
- **Build Tool:** Create React App

---

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/RaghuramPuranam/personal-blog.git
   cd personal-blog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

The app will open at `http://localhost:3000`.

---

## 🚀 Running in Production

Build the optimized production version:

```bash
npm run build
```

This creates a `build/` folder ready for deployment.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── about/              # About section components
│   │   └── socials.jsx
│   ├── common/             # Shared components
│   │   ├── card.jsx
│   │   ├── footer.jsx
│   │   ├── logo.jsx
│   │   └── navBar.jsx
│   └── homepage/           # Homepage-specific components
│       └── (components)
│
├── data/
│   ├── user.js             # Profile data (name, socials, projects)
│   ├── seo.js              # SEO metadata
│   ├── styles.css          # Global CSS variables
│   └── tracking.js         # Analytics config
│
├── pages/
│   ├── 404.jsx             # Not found page
│   ├── about.jsx           # About page
│   ├── contact.jsx         # Contact page
│   ├── homepage.jsx        # Home page
│   └── styles/             # Page-specific styles
│
├── App.js                  # Main app routing
├── index.js                # React entry point
└── index.css               # Global styles
```

---

## 🎨 Customization

### Update Profile Information
Edit `src/data/user.js`:
```javascript
const INFO = {
  main: {
    title: "Your Title",
    name: "Your Name",
    email: "your.email@example.com",
  },
  homepage: {
    title: "Your headline",
    description: "Your bio",
  },
  // ... more config
};
```

### Change Colors
Modify CSS variables in `src/data/styles.css`:
```css
:root {
  --primary-color: #27272a;
  --secondary-color: #65656d;
  --link-color: #14b8a6;
}
```

### Update SEO
Edit `src/data/seo.js` with your keywords and descriptions for each page.

---

## 📚 Available Scripts

```bash
npm start      # Run dev server
npm test       # Run tests
npm run build  # Build for production
npm run eject  # Eject from Create React App (⚠️ irreversible)
```

---

## 🌐 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag & drop the build/ folder into Netlify
```

### Deploy to GitHub Pages
Update `package.json`:
```json
"homepage": "https://yourusername.github.io/personal-blog"
```

Then run:
```bash
npm run build
npm install -g gh-pages
gh-pages -d build
```

---

## 🎯 Key Highlights

- ✅ **10+ Years Enterprise Experience**  
Seasoned full-stack engineer with expertise in Java, Spring Boot, React, and cloud platforms.

- ✅ **Microservices & System Design**  
Specialized in scalable architecture and modern DevOps practices.

- ✅ **Open to Collaboration**  
Mentoring, architecture discussions, and innovative project partnerships.

---

## 📞 Contact & Links

- 📧 **Email:** [raghuramp.tech@gmail.com](mailto:raghuramp.tech@gmail.com)
- 🐙 **GitHub:** [RaghuramPuranam](https://github.com/RaghuramPuranam)
- 💼 **LinkedIn:** [raghuram](https://linkedin.com/in/raghuram)

---

## 📄 License

This project is open source. Feel free to use it as a template for your own portfolio!

---

**Built with ❤️ by Raghuram Puranam**
