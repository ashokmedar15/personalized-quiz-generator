import { NextRequest, NextResponse } from 'next/server'
import Groq from 'groq-sdk'

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
})

// GET endpoint for chatbot
export async function GET() {
  return NextResponse.json({ 
    message: 'AI Educational Counselor API is running',
    capabilities: ['Study guidance', 'Career advice', 'Subject help', 'Learning strategies']
  });
}

// POST endpoint for chatbot
export async function POST(request: NextRequest) {
  let context: string | undefined;
  let userProfile: any;
  
  try {
    const { message, context: reqContext, userProfile: reqUserProfile } = await request.json();
    context = reqContext;
    userProfile = reqUserProfile;

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    // Create a comprehensive prompt for better responses
    const systemPrompt = `You are an AI Educational Counselor. Provide helpful, comprehensive advice for students. Your responses should be:

- Clear and well-structured
- Practical and actionable
- Encouraging and supportive
- Complete without being cut off
- Focused on the student's specific question

Use bullet points or numbered lists when helpful. Keep responses informative but concise.`;

    const userPrompt = `Student Question: "${message}"

Please provide a comprehensive, helpful response with practical advice and actionable steps.`;

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: systemPrompt
        },
        {
          role: "user", 
          content: userPrompt
        }
      ],
      model: "llama-3.1-8b-instant",
      temperature: 0.7,
      max_tokens: 800,
      top_p: 0.9,
      stream: false,
    });

    const response = completion.choices[0]?.message?.content || 
      "I'm here to help with your educational journey! What specific topic would you like guidance on?";

    return NextResponse.json({
      response,
      timestamp: new Date().toISOString(),
      context: context || 'general',
      userProfile: userProfile || {},
      model: "llama-3.1-8b-instant"
    });

  } catch (error) {
    console.error('Chatbot API Error:', error);
    
    // Comprehensive fallback response
    const fallbackResponse = `I'm here to help with your educational journey! You can ask me about:

📚 Study Habits & Learning Techniques
• Effective note-taking methods
• Time management strategies
• Memory improvement techniques
• Active learning approaches

💼 Career Guidance
• Career paths in various fields
• Industry trends and opportunities
• Skill development recommendations
• Professional networking tips

🧮 Math & Problem Solving
• Step-by-step problem-solving approaches
• Mathematical concept explanations
• Practice strategies for different topics
• Common mistake prevention

💻 Programming & Technology
• Learning programming languages
• Project-based learning approaches
• Debugging and problem-solving
• Industry best practices

📝 Exam Preparation
• Study schedule planning
• Test-taking strategies
• Stress management techniques
• Review and revision methods

🔬 Subject-Specific Help
• Physics, Chemistry, Biology concepts
• Literature and writing skills
• History and social studies
• Language learning strategies

What specific area would you like to explore?`;

    return NextResponse.json({
      response: fallbackResponse,
      timestamp: new Date().toISOString(),
      context: context || 'general',
      userProfile: userProfile || {},
      error: 'AI service temporarily unavailable, using fallback response'
    });
  }
} 