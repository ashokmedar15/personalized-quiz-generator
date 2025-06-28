'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/components/auth-provider'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BookOpen, GraduationCap, Brain, Target, Users, Award, ArrowRight, Play, Code, Globe, Lightbulb, TrendingUp, Sparkles, Zap, Star, Rocket, BookMarked, Headphones, Video, BarChart3 } from 'lucide-react'

export default function HomePage() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleGetStarted = () => {
    if (user) {
      router.push('/dashboard')
    } else {
      router.push('/login')
    }
  }

  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo-video')
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Personalization",
      description: "Advanced algorithms adapt content to your learning style and pace",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: BookOpen,
      title: "Interactive Lessons",
      description: "Engaging multimedia content with real-time feedback",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "Adaptive Learning Paths",
      description: "Dynamic curriculum that evolves with your progress",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "AI Educational Counselor",
      description: "24/7 intelligent guidance and support",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: BarChart3,
      title: "Progress Analytics",
      description: "Detailed insights into your learning journey",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Sparkles,
      title: "Smart Assessments",
      description: "AI-generated quizzes tailored to your knowledge level",
      color: "from-pink-500 to-rose-500"
    }
  ]

  const stats = [
    { number: "10K+", label: "Active Learners", icon: Users },
    { number: "500+", label: "Lessons Available", icon: BookOpen },
    { number: "95%", label: "Success Rate", icon: Award },
    { number: "24/7", label: "AI Support", icon: Brain }
  ]

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your personalized learning experience...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-yellow-500 mr-2" />
              <Badge variant="secondary" className="text-sm font-medium">
                AI-Powered Learning Platform
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Personalized
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Education</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Experience the future of learning with AI-driven personalized lessons, 
              adaptive assessments, and intelligent guidance tailored just for you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                onClick={handleGetStarted}
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Get Started Free
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToDemo}
                className="px-8 py-3 text-lg font-semibold border-2 hover:bg-gray-50 transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience cutting-edge AI technology that revolutionizes how you learn
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Demo Video Section */}
      <div id="demo-video" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              See Our Platform in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch how our AI-powered platform personalizes your learning experience
            </p>
          </div>
          
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <Video className="w-16 h-16 mx-auto mb-4 opacity-80" />
                  <h3 className="text-2xl font-bold mb-2">Platform Demo</h3>
                  <p className="text-lg opacity-90 mb-6">
                    Experience the future of personalized education
                  </p>
                  <div className="flex items-center justify-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                      <span className="text-sm">AI Personalization</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                      <span className="text-sm">Interactive Lessons</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                      <span className="text-sm">Real-time Analytics</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Animated elements */}
              <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-ping"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
            </div>
            
            {/* Feature highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <Card className="text-center p-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <Brain className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">AI-Powered Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Intelligent algorithms adapt content to your unique learning style
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <Target className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">Personalized Paths</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Dynamic curriculum that evolves with your progress and goals
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <BarChart3 className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">Progress Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Real-time insights into your learning journey and achievements
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of learners who have already discovered the power of AI-driven education
          </p>
          <Button 
            onClick={handleGetStarted}
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Zap className="w-5 h-5 mr-2" />
            Start Learning Now
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-yellow-500 mr-2" />
              <span className="text-xl font-bold">AI Education Platform</span>
            </div>
            <p className="text-gray-400">
              © 2024 Personalized Education Platform. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 