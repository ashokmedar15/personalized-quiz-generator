'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from './ui/button'
import { toast } from './ui/toast'
import { Send, Brain, Sparkles, BookOpen, Target, Users, Lightbulb, MessageCircle, Bot, User, Clock, Star } from 'lucide-react'

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
  type?: 'text' | 'suggestion' | 'resource'
  suggestions?: string[]
  resources?: Array<{ title: string; url: string; description: string }>
}

interface ChatbotResponse {
  response: string
  timestamp: string
  suggestions: string[]
  resources?: Array<{ title: string; url: string; description: string }>
  confidence?: number
}

export default function AIChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your AI educational counselor. I can help you with course guidance, career advice, study strategies, and academic planning. How can I assist you today?",
      isUser: false,
      timestamp: new Date(),
      type: 'text',
      suggestions: ['Help me choose subjects', 'Career guidance please', 'Study tips for exams', 'How to improve in math?', 'Dealing with academic stress']
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [userContext, setUserContext] = useState({
    educationLevel: 'high',
    grade: 'Grade 10',
    subjects: ['Mathematics', 'Physics', 'Computer Science'],
    learningStyle: 'visual',
    goals: ['Academic Excellence', 'Career Preparation']
  })
  const [chatStats, setChatStats] = useState({
    totalMessages: 0,
    averageResponseTime: 0,
    topicsDiscussed: new Set<string>()
  })

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const simulateTyping = async (text: string) => {
    setIsTyping(true)
    const words = text.split(' ')
    let displayedText = ''
    
    for (let i = 0; i < words.length; i++) {
      displayedText += words[i] + ' '
      await new Promise(resolve => setTimeout(resolve, 50 + Math.random() * 100))
    }
    
    setIsTyping(false)
    return displayedText.trim()
  }

  const sendMessage = async (text: string) => {
    if (!text.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      isUser: true,
      timestamp: new Date(),
      type: 'text'
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    // Update chat stats
    setChatStats(prev => ({
      ...prev,
      totalMessages: prev.totalMessages + 1,
      topicsDiscussed: new Set([...Array.from(prev.topicsDiscussed), text.toLowerCase()])
    }))

    try {
      const startTime = Date.now()
      
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: text.trim(),
          context: 'educational guidance',
          userProfile: {
            educationLevel: userContext.educationLevel,
            grade: userContext.grade,
            subjects: userContext.subjects,
            learningStyle: userContext.learningStyle,
            goals: userContext.goals
          }
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const data = await response.json()
      const responseTime = Date.now() - startTime

      // Update average response time
      setChatStats(prev => ({
        ...prev,
        averageResponseTime: (prev.averageResponseTime + responseTime) / 2
      }))

      // Simulate typing effect
      const finalText = await simulateTyping(data.response)

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: finalText,
        isUser: false,
        timestamp: new Date(),
        type: 'text',
        suggestions: [
          'Tell me more about study strategies',
          'Help me with career planning',
          'How can I improve my grades?',
          'What subjects should I focus on?'
        ]
      }

      setMessages(prev => [...prev, botMessage])
    } catch (error) {
      console.error('Error sending message:', error)
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again.',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(inputValue)
  }

  const handleSuggestionClick = (suggestion: string) => {
    sendMessage(suggestion)
  }

  const quickSuggestions = [
    'Help me choose subjects',
    'Career guidance please',
    'Study tips for exams',
    'How to improve in math?',
    'Dealing with academic stress',
    'College application advice',
    'Time management strategies',
    'Learning style assessment'
  ]

  const getTypingIndicator = () => {
    return (
      <div className="flex justify-start">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 text-gray-800 px-4 py-3 rounded-lg border border-blue-200">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
            <span className="text-sm text-gray-600">AI is thinking...</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
      {/* Enhanced Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-6">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Brain className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold flex items-center">
              AI Educational Counselor
              <Sparkles className="w-5 h-5 ml-2 text-yellow-300" />
            </h2>
            <p className="text-sm opacity-90 flex items-center">
              <MessageCircle className="w-4 h-4 mr-1" />
              Personalized guidance for your academic journey
            </p>
          </div>
          <div className="text-right">
            <div className="text-xs opacity-75">Response Time</div>
            <div className="text-sm font-semibold">{Math.round(chatStats.averageResponseTime)}ms</div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-gray-50 to-white min-h-64">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex items-start space-x-3 max-w-xs lg:max-w-md xl:max-w-lg ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                message.isUser 
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600' 
                  : 'bg-gradient-to-r from-purple-500 to-pink-500'
              }`}>
                {message.isUser ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-white" />}
              </div>
              
              <div className={`px-4 py-3 rounded-2xl shadow-sm ${
                message.isUser
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                  : 'bg-white text-gray-800 border border-gray-200'
              }`}>
                <p className="text-sm whitespace-pre-wrap leading-relaxed max-w-full break-words">{message.text}</p>
                
                {/* Suggestions */}
                {message.suggestions && message.suggestions.length > 0 && (
                  <div className="mt-3 space-y-2">
                    <p className="text-xs text-gray-500 font-medium">Quick suggestions:</p>
                    <div className="flex flex-wrap gap-2">
                      {message.suggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="text-xs bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-1 rounded-full transition-all duration-200 hover:scale-105"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Resources */}
                {message.resources && message.resources.length > 0 && (
                  <div className="mt-3 space-y-2">
                    <p className="text-xs text-gray-500 font-medium flex items-center">
                      <BookOpen className="w-3 h-3 mr-1" />
                      Helpful resources:
                    </p>
                    <div className="space-y-1">
                      {message.resources.map((resource, index) => (
                        <a
                          key={index}
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-xs text-blue-600 hover:text-blue-800 underline"
                        >
                          {resource.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className={`text-xs mt-2 flex items-center ${
                  message.isUser ? 'text-blue-100' : 'text-gray-500'
                }`}>
                  <Clock className="w-3 h-3 mr-1" />
                  {message.timestamp.toLocaleTimeString()}
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {isLoading && getTypingIndicator()}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Suggestions */}
      {messages.length === 1 && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
          <p className="text-sm text-gray-600 mb-3 flex items-center">
            <Lightbulb className="w-4 h-4 mr-2 text-yellow-500" />
            Quick suggestions:
          </p>
          <div className="flex flex-wrap gap-2">
            {quickSuggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="text-xs bg-white hover:bg-blue-50 text-gray-700 px-4 py-2 rounded-full transition-all duration-200 hover:scale-105 border border-gray-200 hover:border-blue-300 shadow-sm"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Enhanced Input */}
      <div className="p-6 border-t border-gray-100 bg-white">
        <form onSubmit={handleSubmit} className="flex space-x-3">
          <div className="flex-1 relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me anything about your education..."
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 pr-12"
              disabled={isLoading}
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Target className="w-5 h-5 text-gray-400" />
            </div>
          </div>
          <Button
            type="submit"
            disabled={isLoading || !inputValue.trim()}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
          </Button>
        </form>
        
        {/* Chat Stats */}
        <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center space-x-4">
            <span>Messages: {chatStats.totalMessages}</span>
            <span>Topics: {chatStats.topicsDiscussed.size}</span>
          </div>
          <div className="flex items-center">
            <Star className="w-3 h-3 mr-1 text-yellow-500" />
            <span>AI Powered</span>
          </div>
        </div>
      </div>
    </div>
  )
} 