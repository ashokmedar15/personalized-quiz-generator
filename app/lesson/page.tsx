'use client'

import React, { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { BookOpen, Play, Code, Target, Lightbulb, ExternalLink, Clock, Users, Award, CheckCircle, ArrowRight, Video, FileText, Brain, Globe } from 'lucide-react'
import { Suspense } from 'react'
import { ReadonlyURLSearchParams } from 'next/navigation'

interface LessonContent {
  title: string
  description: string
  content: string
  examples: string[]
  keyConcepts: string[]
  estimatedTime: number
  difficulty: string
  learningStyle: string
  educationLevel: string
  grade: string
  interactiveElements: string[]
  nextSteps: string
  aiInsights: string
  prerequisites: string[]
  learningObjectives: string[]
  realWorldApplications: string[]
  assessmentQuestions: string[]
  externalResources: string[]
  videoLinks: string[]
  practiceProblems: string[]
  stepByStepNotes?: string[]
}

interface LessonPageProps {
  searchParams: ReadonlyURLSearchParams;
}

function LessonPage({ searchParams }: LessonPageProps) {
  const router = useRouter()
  const [lessonData, setLessonData] = useState<LessonContent | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentStep, setCurrentStep] = useState(0)

  const subject = searchParams.get('subject') || 'Mathematics'
  const topic = searchParams.get('topic') || 'Algebra'
  const difficulty = searchParams.get('difficulty') || 'intermediate'
  const learningStyle = searchParams.get('learningStyle') || 'visual'
  const educationLevel = searchParams.get('educationLevel') || 'high'
  const grade = searchParams.get('grade') || 'Grade 10'

  useEffect(() => {
    if (!subject || !topic) {
      setError('Subject and topic are required')
      setLoading(false)
      return
    }

    const fetchLessonData = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const response = await fetch(`/api/educational-content?subject=${encodeURIComponent(subject)}&topic=${encodeURIComponent(topic)}&difficulty=${difficulty}&learningStyle=${learningStyle}&educationLevel=${educationLevel}&grade=${grade}`)
        
        if (!response.ok) {
          throw new Error('Failed to fetch lesson data')
        }
        
        const data = await response.json()
        setLessonData(data)
      } catch (err) {
        console.error('Error fetching lesson content:', err)
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchLessonData()
  }, [subject, topic, difficulty, learningStyle, educationLevel, grade])

  const handleCompleteLesson = () => {
    // Redirect to dashboard after lesson completion
    router.push('/dashboard')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-4 bg-gray-200 rounded"></div>
                ))}
              </div>
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-32 bg-gray-200 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !lessonData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
        <div className="max-w-6xl mx-auto">
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-800">Error Loading Lesson</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-red-700">{error || 'Lesson not found'}</p>
              <Button 
                onClick={() => router.back()} 
                className="mt-4"
                variant="outline"
              >
                Go Back
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{lessonData.title}</h1>
          <p className="text-xl text-gray-600 mb-4">{lessonData.description}</p>
          
          {/* Progress and Stats */}
          <div className="flex flex-wrap gap-4 items-center text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{lessonData.estimatedTime} minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              <span>Difficulty: {lessonData.difficulty}</span>
            </div>
            <div className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              <span>Style: {lessonData.learningStyle}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>{lessonData.grade}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Lesson Content */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Lesson Content
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  {lessonData.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Step-by-Step Notes */}
            {lessonData.stepByStepNotes && lessonData.stepByStepNotes.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Step-by-Step Notes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {lessonData.stepByStepNotes.map((note, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                        <div className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                          {index + 1}
                        </div>
                        <p className="text-gray-700">{note}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Key Concepts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  Key Concepts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {lessonData.keyConcepts.map((concept, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {concept}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Examples */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  Examples
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {lessonData.examples.map((example, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                      <p className="text-gray-700">{example}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Practice Problems */}
            {lessonData.practiceProblems && lessonData.practiceProblems.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Practice Problems
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {lessonData.practiceProblems.map((problem, index) => (
                      <div key={index} className="p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <p className="text-gray-700">{problem}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Video Links */}
            {lessonData.videoLinks && lessonData.videoLinks.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Video className="w-5 h-5" />
                    Video Resources
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {lessonData.videoLinks.map((link, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="w-full justify-start"
                        onClick={() => window.open(link, '_blank')}
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Video {index + 1}
                        <ExternalLink className="w-4 h-4 ml-auto" />
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* External Resources */}
            {lessonData.externalResources && lessonData.externalResources.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5" />
                    External Resources
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {lessonData.externalResources.map((resource, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="w-full justify-start"
                        onClick={() => window.open(resource, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Resource {index + 1}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* AI Insights */}
            <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-800">
                  <Brain className="w-5 h-5" />
                  AI Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-700 text-sm">{lessonData.aiInsights}</p>
              </CardContent>
            </Card>

            {/* Next Steps */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ArrowRight className="w-5 h-5" />
                  Next Steps
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm mb-4">{lessonData.nextSteps}</p>
                <Button 
                  onClick={handleCompleteLesson}
                  className="w-full"
                  size="sm"
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Complete Lesson
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

function LessonPageWrapper() {
  const searchParams = useSearchParams()
  return <LessonPage searchParams={searchParams} />
}

export default function Lesson() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LessonPageWrapper />
    </Suspense>
  )
} 