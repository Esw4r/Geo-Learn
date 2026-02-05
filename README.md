# 🌍 GeoLearn

**A Place to Learn about the World**

GeoLearn is an interactive geography learning platform built with React that helps users explore and master knowledge about countries, capitals, and flags from around the world. Track your progress, practice with interactive exercises, and test your knowledge!

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7.12.0-CA4245?logo=react-router&logoColor=white)

## ✨ Features

### 📘 Training Mode
- Learn about countries one at a time with detailed information
- View country flags and capitals
- Interactive learning experience with instant feedback
- Progress automatically tracked as you learn

### ✏️ Test Mode
- Multiple-choice quiz to test your geography knowledge
- Random selection of countries for varied practice
- Instant feedback on correct/incorrect answers
- Score tracking to monitor your performance

### 📊 Progress Tracking
- Real-time dashboard showing your learning statistics
- Track countries learned vs. total countries
- Monitor number of tests completed
- Earn achievement badges:
  - 🏅 **Beginner Explorer** - Learn 5+ countries
  - 🌍 **Geo Explorer** - Master 15+ countries

### 🎨 Modern UI/UX
- Clean, intuitive interface
- Responsive design for all devices
- Smooth navigation with React Router
- Real-time progress updates

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd geoLearn
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Build the app for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 🛠️ Tech Stack

### Core Technologies
- **React 19.2.0** - UI framework
- **Vite 7.2.4** - Build tool and dev server
- **React Router DOM 7.12.0** - Client-side routing

### Development Tools
- **ESLint** - Code linting and quality checks
- **Vite Plugin React** - Fast refresh and JSX support

### APIs
- **REST Countries API** - Fetches real-time country data including names, capitals, and flags

## 📁 Project Structure

```
geoLearn/
├── src/
│   ├── components/        # Reusable UI components
│   │   └── Navbar.jsx    # Navigation bar component
│   ├── pages/            # Page components
│   │   ├── Dashboard.jsx # Main dashboard with progress tracking
│   │   ├── Training.jsx  # Learning mode
│   │   ├── Practice.jsx  # Practice exercises
│   │   └── Test.jsx      # Quiz mode
│   ├── context/          # React Context for state management
│   │   └── ProgressContext.jsx  # Global progress tracking
│   ├── data/             # Static data and constants
│   │   └── countries.js  # Country data structure
│   ├── App.jsx           # Main app component with routing
│   ├── App.css           # Component-specific styles
│   ├── index.css         # Global styles
│   └── main.jsx          # App entry point
├── public/               # Static assets
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
└── vite.config.js        # Vite configuration
```

## 🎯 How to Use

1. **Start on Dashboard**
   - View your current progress and achievements
   - See how many countries you've learned
   - Track completed tests

2. **Training Mode**
   - Click "📘 Training" to start learning
   - Study countries one by one
   - Learn capitals and view country flags
   - Progress is automatically saved

3. **Test Mode**
   - Click "✏️ Test" to quiz yourself
   - Answer multiple-choice questions
   - Get instant feedback
   - Track your score

## 🌐 Data Source

GeoLearn fetches live data from the [REST Countries API](https://restcountries.com/), ensuring you always have up-to-date information about:
- Country names
- Capital cities
- National flags
- Country codes

## 🎨 Customization

### Styling
All styles are located in:
- `src/index.css` - Global styles and CSS variables
- `src/App.css` - Component-specific styles

### Adding Features
The modular structure makes it easy to add new features:
1. Create new components in `src/components/`
2. Add new pages in `src/pages/`
3. Update routing in `src/App.jsx`
4. Extend `ProgressContext.jsx` for new state management needs

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available for educational purposes.

## 👨‍💻 Author

Created as part of a Full Stack Framework course project (SEM-6).

## 🙏 Acknowledgments

- [REST Countries API](https://restcountries.com/) [Wikipedia](https://en.wikipedia.org/wiki/List_of_countries_by_population_(United_Nations_member_states)) for providing country data
- [React](https://react.dev/) for the amazing UI library
- [Vite](https://vitejs.dev/) for lightning-fast development experience

---

**Happy Learning! 🌍📚**
