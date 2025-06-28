# Personalized Education Platform - AI-Powered Learning

A modern, AI-powered educational platform built with Next.js that provides personalized learning experiences, adaptive content, and intelligent tutoring.

## 🚀 Features

- **AI-Powered Chatbot**: Intelligent educational counselor using Groq AI
- **Personalized Learning Paths**: Adaptive content based on learning style and difficulty
- **Interactive Lessons**: Step-by-step educational content with videos and practice problems
- **Multi-Subject Support**: Mathematics, Physics, Computer Science, Biology, Chemistry, and more
- **Progress Tracking**: Monitor learning progress and achievements
- **Responsive Design**: Modern UI built with Tailwind CSS and shadcn/ui
- **Real-time AI Integration**: Live chat with educational AI assistant

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **AI Integration**: Groq AI API (Llama 3.1 8B Instant)
- **Deployment**: Vercel
- **Package Manager**: npm

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Groq AI API key (free tier available)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd personalized-quiz-generator
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory:

```env
GROQ_API_KEY=your_groq_api_key_here
```

Get your free Groq API key from: https://console.groq.com/

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📚 Available Subjects

- **Mathematics**: Algebra, Calculus, Geometry, Statistics
- **Physics**: Mechanics, Thermodynamics, Electromagnetism, Quantum Physics
- **Computer Science**: Programming, Data Structures, Algorithms, Web Development
- **Biology**: Cell Biology, Genetics, Ecology, Human Anatomy
- **Chemistry**: Organic Chemistry, Inorganic Chemistry, Biochemistry
- **History**: World History, American History, Ancient Civilizations
- **Literature**: Classic Literature, Modern Literature, Poetry
- **Art**: Art History, Drawing, Painting, Digital Art

## 🎯 Key Features Explained

### AI Educational Counselor
- 24/7 availability for student questions
- Context-aware responses based on subject and topic
- Personalized learning recommendations
- Interactive problem-solving assistance

### Adaptive Learning
- Content difficulty adjustment based on performance
- Learning style optimization (visual, auditory, kinesthetic)
- Grade-level appropriate content
- Progress-based recommendations

### Interactive Lessons
- Step-by-step learning modules
- Embedded YouTube video resources
- Practice problems with solutions
- External resource links
- Progress tracking

## 🚀 Deployment

### Deploy to Vercel

1. **Push to GitHub** (see GitHub setup below)
2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Add environment variable: `GROQ_API_KEY`
   - Deploy!

### Environment Variables for Production

In Vercel dashboard, add:
- `GROQ_API_KEY`: Your Groq API key

## 📁 Project Structure

```
personalized-quiz-generator/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   ├── chatbot/       # AI chatbot endpoint
│   │   ├── educational-content/  # Content API
│   │   └── personalize-content/  # Personalization API
│   ├── dashboard/         # Dashboard page
│   ├── lesson/           # Lesson viewer
│   ├── login/            # Login page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # React components
│   ├── ui/              # shadcn/ui components
│   ├── ai-chatbot.tsx   # AI chatbot component
│   ├── ai-educational-counselor.tsx  # Floating chat
│   └── auth-provider.tsx # Authentication context
├── lib/                 # Utility functions
└── public/             # Static assets
```

## 🔧 API Endpoints

- `GET /api/educational-content` - Get personalized educational content
- `POST /api/chatbot` - AI chatbot interactions
- `POST /api/personalize-content` - Content personalization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Groq AI](https://groq.com/) for the fast AI inference API
- [Vercel](https://vercel.com/) for seamless deployment

## 📞 Support

If you have any questions or need help, please:
1. Check the [Issues](https://github.com/yourusername/personalized-quiz-generator/issues) page
2. Create a new issue if your problem isn't already addressed
3. Contact the maintainers

---

**Made with ❤️ for better education**
