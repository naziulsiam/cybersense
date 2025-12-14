# 🛡️ CyberSense - Cybersecurity Awareness Training

An interactive, web-based platform for learning and testing cybersecurity awareness. Master the art of recognizing phishing, social engineering, and other cyber threats through engaging real-world scenarios.

![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-active-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34C26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 🌟 Features

- **📚 10+ Interactive Scenarios** - Real-world cybersecurity challenges
- **🎯 Real-time Feedback** - Instant explanations for correct and incorrect answers
- **📊 Progress Tracking** - Score, streak count, and difficulty levels
- **🎨 Modern UI** - Beautiful, responsive design with dark theme
- **⌨️ Keyboard Navigation** - Press 1-4 to answer questions quickly
- **📱 Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- **🚀 Lightweight** - No dependencies, pure vanilla JavaScript

## 📋 Quiz Categories

- **Phishing & Email Security** - Identify fraudulent emails
- **Social Engineering** - Recognize manipulation tactics
- **Password Security** - Create and manage strong passwords
- **Two-Factor Authentication** - Protect your accounts
- **Physical Security** - Secure your devices in public
- **Web Security** - Identify legitimate websites
- **USB & Malware** - Avoid infected devices
- **Business Email Compromise** - Detect CEO fraud attempts

## 🚀 Quick Start

### Option 1: Direct Browser
Simply open `index.html` in your web browser:
```bash
open index.html
```

### Option 2: Local Server
For a better experience, serve using Python:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Then visit: `http://localhost:8000`

### Option 3: Live Deployment
Deploy to GitHub Pages, Netlify, or any static hosting:
1. Enable GitHub Pages in repository settings
2. Point to `main` branch
3. Access via your GitHub Pages URL

## 📁 Project Structure

```
cybersense/
├── index.html          # Main HTML structure
├── styles/
│   └── main.css        # Complete styling and animations
├── js/
│   └── script.js       # Quiz logic and interactivity
└── README.md           # Project documentation
```

## 🎮 How to Use

1. **Read the Scenario** - Carefully read each cybersecurity situation
2. **Choose an Answer** - Click an option or press 1-4 on your keyboard
3. **Get Feedback** - Receive instant explanation and learn the concept
4. **Track Progress** - Monitor your score, streak, and difficulty level
5. **Continue Learning** - Click "Next Question" to progress through scenarios

## 💡 Sample Scenario

```
You receive an email from 'noreply@applesupport.com' asking you to verify 
your Apple ID immediately. The email mentions suspicious activity on your 
account and includes a link to update your password.

What should you do?
A) Click the link and update your password immediately
B) Go directly to the official Apple website and log in ✓ CORRECT
C) Reply to the email asking for more information
D) Forward the email to another contact for verification
```

## 🎨 Customization

### Add New Questions
Edit `js/script.js` and add to the `quizData` array:
```javascript
{
    scenario: "Your scenario here...",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correct: 1,  // Index of correct answer (0-3)
    explanation: "Why this is correct..."
}
```

### Change Colors
Modify CSS variables in `styles/main.css`:
```css
:root {
  --primary: #06b6d4;        /* Cyan/Teal */
  --secondary: #8b5cf6;      /* Purple */
  --accent: #ec4899;         /* Pink */
  /* ... more variables ... */
}
```

## 📊 Performance

- **Load Time**: <1s
- **File Size**: ~40KB total (HTML + CSS + JS combined)
- **Browser Support**: All modern browsers (Chrome, Firefox, Safari, Edge)
- **Mobile Friendly**: Optimized for all screen sizes

## 🔒 Security Notes

- No external dependencies = no supply chain risks
- No data collection or tracking
- No server-side processing
- Safe to use on any device

## 🚀 Deployment Options

### GitHub Pages
```bash
git push origin main
# Enable Pages in Settings → GitHub Pages
```

### Netlify
```bash
# Drag and drop this folder to netlify.com
```

### Vercel
```bash
vercel
```

### Traditional Hosting
Upload all files to your web hosting via FTP/SFTP

## 📈 Future Enhancements

- [ ] Certificate generation on completion
- [ ] Difficulty levels (Beginner → Expert)
- [ ] Timed quizzes
- [ ] Multi-language support
- [ ] Mobile app version
- [ ] Company-specific customization
- [ ] Analytics dashboard
- [ ] Integration with LMS platforms

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 About the Author

Built with 🔐 by [Ali Siam](https://github.com/naziulsiam)

**Connect with me:**
- GitHub: [@naziulsiam](https://github.com/naziulsiam)
- Portfolio: Check out my other projects

## 🙏 Acknowledgments

- Inspired by real cybersecurity training best practices
- Built for educational purposes
- Community feedback and contributions welcome

## 📞 Support

Have questions or found a bug?
- Open an [Issue](https://github.com/naziulsiam/cybersense/issues)
- Check existing discussions
- Submit a pull request

---

**Remember:** Stay vigilant, stay secure! 🛡️
