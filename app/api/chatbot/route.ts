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

    // Create a concise, optimized prompt for faster responses
    const systemPrompt = `You are an AI Educational Counselor. Provide concise, practical advice (max 150 words). Focus on actionable steps. Be encouraging and supportive.`;

    const userPrompt = `Student Question: "${message}"

Provide a helpful, concise response with practical advice.`;

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
      temperature: 0.5,
      max_tokens: 200,
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
    
    // Fast fallback response
    const fallbackResponse = `I'm here to help with your educational journey! You can ask me about:

📚 Study habits and learning techniques
💼 Career paths in various fields  
🧮 Math problem-solving strategies
💻 Programming and coding guidance
📝 Exam preparation tips
🔬 Subject-specific help

What would you like to know more about?`;

    return NextResponse.json({
      response: fallbackResponse,
      timestamp: new Date().toISOString(),
      context: context || 'general',
      userProfile: userProfile || {},
      error: 'AI service temporarily unavailable, using fallback response'
    });
  }
} 