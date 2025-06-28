# AI-Powered Personalized Education Platform

A comprehensive Next.js application that provides personalized learning experiences through AI integration, adaptive learning paths, and interactive educational content.

## 🚀 Features

### Core Features
- **Personalized Learning Paths**: AI-driven content adaptation based on learning style and progress
- **Interactive Lessons**: Step-by-step notes, video links, and practice problems for each topic
- **AI Educational Counselor**: Intelligent chatbot powered by Groq AI for personalized guidance
- **Progress Tracking**: Real-time monitoring of learning progress and achievements
- **Multi-Subject Support**: Comprehensive content across 15+ subjects and 50+ topics

### Available Subjects
- **Mathematics**: Introduction, Algebra, Geometry, Calculus, Statistics
- **Computer Science**: Introduction, Programming, Data Structures, Algorithms, Web Development
- **Physics**: Introduction, Mechanics, Electromagnetism, Thermodynamics
- **Chemistry**: Introduction, Organic Chemistry, Physical Chemistry, Inorganic Chemistry
- **Biology**: Introduction, Cell Biology, Genetics, Ecology
- **English**: Introduction, Literature, Grammar
- **History**: Introduction, World History, American History
- **Law**: Introduction, Constitutional Law, Criminal Law
- **Economics**: Introduction, Microeconomics, Macroeconomics
- **Psychology**: Introduction, Cognitive Psychology, Social Psychology
- **Philosophy**: Introduction, Ethics, Logic
- **Art**: Introduction, Art History, Digital Art

### Technology Stack
- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Radix UI Components
- **AI Integration**: Groq AI (llama-3.1-8b-instant model)
- **Authentication**: Supabase Auth
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Vercel-ready

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Groq AI API key

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/ai-personalized-education-platform.git
cd ai-personalized-education-platform
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Create a `.env.local` file in the root directory:
```env
# Groq AI Configuration
GROQ_API_KEY=your_groq_api_key_here

# Supabase Configuration (optional for full features)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

### 4. Run the Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 📚 Usage

### For Students
1. **Landing Page**: Visit the homepage to explore available subjects
2. **Dashboard**: Access personalized learning recommendations
3. **Lesson Pages**: Interactive lessons with step-by-step guidance
4. **AI Counselor**: Chat with the AI for personalized help and guidance
5. **Progress Tracking**: Monitor your learning journey

### For Educators
1. **Content Management**: Access comprehensive educational content
2. **Student Progress**: Track individual and class progress
3. **AI Integration**: Leverage AI for personalized teaching assistance

## 🏗️ Project Structure

```
├── app/
│   ├── api/                    # API routes
│   │   ├── chatbot/           # AI counselor endpoint
│   │   ├── educational-content/ # Educational content API
│   │   └── personalize-content/ # Content personalization
│   ├── dashboard/             # User dashboard
│   ├── lesson/                # Interactive lesson pages
│   └── page.tsx               # Landing page
├── components/                # Reusable UI components
│   ├── ui/                   # Base UI components
│   ├── ai-educational-counselor.tsx
│   ├── auth-provider.tsx
│   ├── dashboard.tsx
│   └── lesson-page.tsx
├── lib/                      # Utility functions
├── types/                    # TypeScript type definitions
└── public/                   # Static assets
```

## 🔧 API Endpoints

### Educational Content API
- `GET /api/educational-content?subject={subject}&topic={topic}`
- Returns comprehensive lesson content with step-by-step notes and video links

### AI Counselor API
- `POST /api/chatbot`
- Body: `{"message": "user message"}`
- Returns AI-powered educational guidance

### Content Personalization API
- `POST /api/personalize-content`
- Personalizes content based on user preferences and learning style

## 🎯 Key Features in Detail

### AI-Powered Personalization
- Learning style detection (visual, auditory, kinesthetic)
- Adaptive content difficulty adjustment
- Personalized study recommendations
- Real-time progress analysis

### Interactive Learning Experience
- Step-by-step lesson notes
- Curated YouTube video links
- Practice problems and exercises
- Progress tracking and achievements

### Comprehensive Content Library
- 15+ subjects with 50+ topics
- Rich multimedia content
- Real-world applications
- Assessment questions

## 🚀 Deployment

### Vercel Deployment (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment
```bash
npm run build
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Groq AI for providing the AI integration capabilities
- Next.js team for the excellent framework
- Radix UI for the accessible component library
- All contributors and users of this platform

## 📞 Support

For support, email support@ai-education-platform.com or create an issue in this repository.

---

**Built with ❤️ for the future of education**
