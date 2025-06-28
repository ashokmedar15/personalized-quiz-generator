# Setup Instructions for AI-Powered Personalized Education Platform

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd personalized-quiz-generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory with:
   ```
   # Groq AI API Key (Required for chatbot functionality)
   # Get your API key from: https://console.groq.com/
   GROQ_API_KEY=your_actual_groq_api_key_here
   ```

4. **Get your Groq API Key**
   - Go to https://console.groq.com/
   - Sign up or log in
   - Navigate to API Keys section
   - Create a new API key
   - Copy the key and paste it in your `.env.local` file

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to http://localhost:3000

## 🔧 Features Working

✅ **Landing Page** - Dynamic welcome page with features overview  
✅ **Dashboard** - Personalized learning dashboard with subject selection  
✅ **Lesson Pages** - Interactive lessons with step-by-step content  
✅ **AI Chatbot** - Floating chat button (bottom-right corner) for educational guidance  
✅ **Educational Content API** - Comprehensive subject content  
✅ **Responsive Design** - Works on desktop, tablet, and mobile  

## 🎯 How to Use the Chatbot

1. **Floating Chat Button**: Click the chat icon in the bottom-right corner of any page
2. **Dashboard Chat**: Use the "Show AI Counselor" button in the dashboard
3. **Ask Questions**: The AI can help with:
   - Study strategies and learning techniques
   - Career guidance in various fields
   - Math problem-solving approaches
   - Programming and coding help
   - Exam preparation tips
   - Subject-specific resources

## 📚 Available Subjects

- **Mathematics**: Introduction, Algebra, Geometry, Calculus, Statistics
- **Computer Science**: Introduction, Programming, Data Structures, Algorithms, Web Development
- **Physics**: Introduction, Mechanics, Electromagnetism, Thermodynamics
- **Chemistry**: Introduction, Organic Chemistry, Physical Chemistry, Inorganic Chemistry
- **Biology**: Introduction, Cell Biology, Genetics, Ecology
- **English**: Literature, Grammar
- **History**: World History, American History
- **Economics**: Microeconomics, Macroeconomics
- **Psychology**: Cognitive Psychology, Social Psychology
- **Philosophy**: Ethics, Logic
- **Law**: Constitutional Law, Criminal Law

## 🚀 Deployment

### Vercel Deployment
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your `GROQ_API_KEY` environment variable in Vercel dashboard
4. Deploy!

### Other Platforms
- **Netlify**: Similar process, add environment variables in dashboard
- **Railway**: Add environment variables in project settings
- **Heroku**: Use `heroku config:set GROQ_API_KEY=your_key`

## 🔍 Troubleshooting

### Chatbot Not Working
- Ensure `GROQ_API_KEY` is set in `.env.local`
- Check that the API key is valid at https://console.groq.com/
- Restart the development server after adding environment variables

### 404 Errors for Subjects
- All subjects listed above have content
- If you see 404s, try refreshing the page
- Check the browser console for any errors

### Build Errors
- Run `npm run build` to check for any issues
- Ensure all dependencies are installed with `npm install`

## 📝 Notes

- The chatbot uses Groq's `llama-3.1-8b-instant` model for fast responses
- All educational content is comprehensive with step-by-step notes and YouTube links
- The platform is fully responsive and works on all devices
- No database required - all content is served from the API

## 🎉 Ready to Deploy!

Your AI-Powered Personalized Education Platform is now ready for production deployment! 