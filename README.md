# Data Analytics Portfolio

A modern, responsive portfolio website showcasing data analytics projects and skills. Built with HTML, CSS (Tailwind), and JavaScript, featuring smooth animations and interactive elements.

## 🌟 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Navigation**: Smooth scrolling with active section highlighting
- **Project Showcase**: Dedicated section for displaying data analytics projects
- **Skills Display**: Organized technical skills with visual categorization
- **Contact Form**: Functional contact form with validation
- **Animations**: Scroll-triggered animations using AOS library
- **Mobile Menu**: Responsive navigation for mobile devices
- **Accessibility**: Semantic HTML and proper ARIA attributes

## 🚀 Live Demo

Visit the live portfolio: [Your Portfolio URL]

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── Js/
│   └── script.js           # JavaScript functionality
├── img/
│   └── Rizwar.png          # Profile image
├── README.md               # Project documentation
└── assets/                 # Additional assets (if any)
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Styling with modern features
- **Tailwind CSS**: Utility-first CSS framework
- **JavaScript**: Interactive functionality
- **AOS Library**: Animate On Scroll effects
- **Feather Icons**: Lightweight icon library
- **Google Fonts**: Poppins font family

## 📋 Prerequisites

No special prerequisites are needed. The project uses CDN links for all external libraries, making it easy to run in any modern web browser.

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/data-analytics-portfolio.git
   cd data-analytics-portfolio
   ```

2. **Open the project**
   - Simply open `index.html` in your preferred web browser
   - Or use a local development server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

3. **View the portfolio**
   - Navigate to `http://localhost:8000` (if using a server)
   - Or open `index.html` directly in your browser

## ⚙️ Customization

### Personal Information

Update the following in `index.html`:

```html
<!-- Hero Section - Update name and title -->
<h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
    Hi, I'm <span class="text-blue-600">Your Name</span>
</h1>
<h2 class="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
    Your Title
</h2>

<!-- About Section - Update bio -->
<p class="text-gray-600 mb-6 leading-relaxed">
    Your personal description here...
</p>

<!-- Contact Information -->
<a href="mailto:your-email@gmail.com" class="text-indigo-100">your-email@gmail.com</a>
<a href="tel:+your-phone" class="text-indigo-100">+your-phone</a>
```

### Projects

Add or modify projects in the projects section:

```html
<div class="project-card bg-white rounded-xl overflow-hidden shadow-md transition duration-300">
    <div class="h-48 overflow-hidden">
        <img src="your-project-image.jpg" alt="Project Name">
    </div>
    <div class="p-6">
        <h3 class="text-xl font-semibold text-gray-800">Project Name</h3>
        <p class="text-gray-600 mb-4">Project description...</p>
        <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Technology</span>
        </div>
    </div>
</div>
```

### Skills

Update the skills in each category:

```html
<div class="flex flex-wrap gap-2">
    <span class="skill-badge px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Your Skill</span>
</div>
```

### Colors and Styling

The project uses Tailwind CSS. Main color scheme:
- Primary: `sky-600` (blue)
- Secondary: `indigo-600` (indigo)
- Text: `gray-800`, `gray-600`
- Background: `white`, `gray-50`

To change colors, replace the color classes throughout the HTML:
```html
<!-- Example: Change primary color from sky to emerald -->
<a href="#projects" class="px-6 py-3 bg-emerald-500 text-white rounded-md hover:bg-emerald-700 transition">
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Animation Configuration

Customize AOS animations in `script.js`:

```javascript
AOS.init({
    duration: 800,        // Animation duration
    easing: 'ease-in-out', // Animation easing
    once: true,           // Animate only once
    offset: 100           // Offset from trigger point
});
```

## 📧 Contact Form

The contact form includes:
- Name validation
- Email format validation
- Message content validation
- Success/error notifications

To connect to a backend service, modify the form submission in `script.js`:

```javascript
// Replace the simulation with actual form submission
fetch('/api/contact', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name: name,
        email: email,
        message: message
    })
})
.then(response => response.json())
.then(data => {
    showNotification('Message sent successfully!', 'success');
});
```

## 🌐 Browser Compatibility

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 📦 Dependencies

All dependencies are loaded via CDN:

- **Tailwind CSS**: `https://cdn.tailwindcss.com`
- **AOS**: `https://unpkg.com/aos@2.3.1/`
- **Feather Icons**: `https://cdn.jsdelivr.net/npm/feather-icons/`
- **Google Fonts**: `https://fonts.googleapis.com/css2?family=Poppins`

## 🚀 Deployment

### GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://yourusername.github.io/repository-name`

### Netlify

1. Connect your GitHub repository to Netlify
2. Deploy settings:
   - Build command: (leave empty)
   - Publish directory: `/` (root)

### Vercel

1. Import your GitHub repository to Vercel
2. Deploy with default settings

## 📝 Performance Tips

- **Images**: Optimize images for web (WebP format recommended)
- **Loading**: Consider lazy loading for images below the fold
- **Caching**: Implement proper caching headers for production
- **Minification**: Minify CSS and JavaScript for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Rizwar Adi Nugroho**
- Email: rizwarnugroho@gmail.com
- LinkedIn: [linkedin.com/in/rizwar-adi-nugroho](https://www.linkedin.com/in/rizwar-adi-nugroho-675487271/)
- GitHub: [github.com/Rizwar10](https://github.com/Rizwar10)

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [AOS Library](https://michalsnik.github.io/aos/) for scroll animations
- [Feather Icons](https://feathericons.com/) for beautiful icons
- [Google Fonts](https://fonts.google.com/) for typography

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to:
- Open an issue on GitHub
- Send an email to rizwarnugroho@gmail.com
- Connect on LinkedIn

---

⭐ If you found this portfolio template helpful, please give it a star on GitHub!