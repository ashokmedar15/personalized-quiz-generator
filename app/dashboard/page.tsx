'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/components/auth-provider'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/toast'
import { 
  Brain, 
  BookOpen, 
  Target, 
  TrendingUp, 
  Clock, 
  Award, 
  GraduationCap,
  BarChart3,
  Lightbulb,
  Users,
  Calendar,
  Star,
  ArrowRight,
  Play,
  CheckCircle,
  BookMarked,
  Zap,
  Sparkles,
  Rocket,
  Trophy,
  Flame,
  Target as TargetIcon,
  BarChart,
  Activity,
  Crown,
  Heart,
  Shield,
  Globe,
  Code,
  Palette,
  Music,
  Camera,
  Map,
  Settings,
  Briefcase,
  Scale
} from 'lucide-react'
import AIChatbot from '@/components/ai-chatbot'

interface LearningPath {
  id: string
  title: string
  subject: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  progress: number
  estimatedTime: number
  description: string
  isRecommended: boolean
}

interface UserProgress {
  totalLessons: number
  averageScore: number
  totalTime: number
  streak: number
  level: number
  learningStyle: string
  subjects: string[]
  completedLessons: number
  currentStreak: number
}

interface Recommendation {
  id: string
  type: 'lesson' | 'practice' | 'review'
  title: string
  description: string
  priority: 'high' | 'medium' | 'low'
}

const educationLevels = {
  'primary': ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5'],
  'middle': ['Grade 6', 'Grade 7', 'Grade 8'],
  'high': ['Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'],
  'undergraduate': ['Bachelor Year 1', 'Bachelor Year 2', 'Bachelor Year 3', 'Bachelor Year 4'],
  'graduate': ['Master Year 1', 'Master Year 2'],
  'phd': ['PhD Year 1', 'PhD Year 2', 'PhD Year 3', 'PhD Year 4', 'PhD Year 5']
}

const comprehensiveSubjects = {
  'primary': ['Mathematics', 'English'],
  'middle': ['Mathematics', 'English', 'Computer Science', 'History'],
  'high': ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'History', 'Computer Science', 'Economics', 'Psychology'],
  'undergraduate': ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science', 'English', 'History', 'Economics', 'Psychology', 'Philosophy', 'Law'],
  'graduate': ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science', 'English', 'History', 'Economics', 'Psychology', 'Philosophy', 'Law'],
  'phd': ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science', 'English', 'History', 'Economics', 'Psychology', 'Philosophy', 'Law'],
}

export default function DashboardPage() {
  const { user } = useAuth()
  const router = useRouter()
  const [learningPaths, setLearningPaths] = useState<LearningPath[]>([])
  const [recommendations, setRecommendations] = useState<Recommendation[]>([])
  const [progress, setProgress] = useState<UserProgress>({
    totalLessons: 0,
    averageScore: 0,
    totalTime: 0,
    streak: 0,
    level: 1,
    learningStyle: 'Visual',
    subjects: [],
    completedLessons: 0,
    currentStreak: 0
  })
  const [loading, setLoading] = useState(true)
  const [showChatbot, setShowChatbot] = useState(false)
  const [selectedEducationLevel, setSelectedEducationLevel] = useState('high')
  const [selectedGrade, setSelectedGrade] = useState('Grade 10')
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([])

  useEffect(() => {
    // Mock data loading
    const mockLearningPaths: LearningPath[] = [
      {
        id: '1',
        title: 'Introduction to Machine Learning',
        subject: 'Computer Science',
        difficulty: 'intermediate',
        progress: 75,
        estimatedTime: 120,
        description: 'Learn the fundamentals of ML algorithms and their applications',
        isRecommended: true
      },
      {
        id: '2',
        title: 'Advanced Calculus',
        subject: 'Mathematics',
        difficulty: 'advanced',
        progress: 45,
        estimatedTime: 180,
        description: 'Master complex mathematical concepts and problem-solving techniques',
        isRecommended: false
      },
      {
        id: '3',
        title: 'Creative Writing Workshop',
        subject: 'Literature',
        difficulty: 'beginner',
        progress: 90,
        estimatedTime: 60,
        description: 'Develop your writing skills through interactive exercises',
        isRecommended: true
      },
      {
        id: '4',
        title: 'Physics Fundamentals',
        subject: 'Science',
        difficulty: 'intermediate',
        progress: 30,
        estimatedTime: 150,
        description: 'Explore the laws of physics through simulations and experiments',
        isRecommended: false
      }
    ]

    const mockRecommendations: Recommendation[] = [
      {
        id: '1',
        type: 'lesson',
        title: 'Complete ML Module 3',
        description: 'Based on your progress, you should continue with neural networks',
        priority: 'high'
      },
      {
        id: '2',
        type: 'practice',
        title: 'Practice Calculus Problems',
        description: 'Review integration techniques to improve your understanding',
        priority: 'medium'
      },
      {
        id: '3',
        type: 'review',
        title: 'Review Creative Writing',
        description: 'Revisit character development concepts',
        priority: 'low'
      }
    ]

    const mockProgress: UserProgress = {
      totalLessons: 24,
      averageScore: 87,
      totalTime: 360,
      streak: 7,
      level: 5,
      learningStyle: 'Visual',
      subjects: ['Computer Science', 'Mathematics', 'Literature'],
      completedLessons: 15,
      currentStreak: 7
    }

    setTimeout(() => {
      setLearningPaths(mockLearningPaths)
      setRecommendations(mockRecommendations)
      setProgress(mockProgress)
      setSelectedSubjects(mockProgress.subjects)
      setLoading(false)
    }, 1000)
  }, [])

  const handleContinueLearning = (path: LearningPath) => {
    router.push(`/lesson?subject=${encodeURIComponent(path.subject)}&topic=${encodeURIComponent(path.title)}&difficulty=${path.difficulty}&learningStyle=${progress.learningStyle.toLowerCase()}&educationLevel=${selectedEducationLevel}&grade=${selectedGrade}`)
  }

  const handleStartNewLesson = () => {
    router.push('/lesson')
  }

  const handleViewAnalytics = () => {
    alert('Analytics feature coming soon!')
  }

  const handleJoinStudyGroup = () => {
    alert('Study group feature coming soon!')
  }

  const handleScheduleSession = () => {
    alert('Scheduling feature coming soon!')
  }

  const handleStartLesson = (subject: string) => {
    router.push(`/lesson?subject=${encodeURIComponent(subject)}&topic=Introduction&difficulty=intermediate&learningStyle=${progress.learningStyle.toLowerCase()}&educationLevel=${selectedEducationLevel}&grade=${selectedGrade}`)
  }

  const handleLogout = () => {
    // In a real app, this would clear auth tokens
    router.push('/')
    toast({
      title: 'Logged out',
      description: 'You have been successfully logged out.',
    })
  }

  const getProgressPercentage = () => {
    return Math.round((progress.completedLessons / progress.totalLessons) * 100)
  }

  const getAvailableSubjects = () => {
    return comprehensiveSubjects[selectedEducationLevel as keyof typeof comprehensiveSubjects] || []
  }

  const getAvailableGrades = () => {
    return educationLevels[selectedEducationLevel as keyof typeof educationLevels] || []
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Please log in to access your dashboard</h1>
          <Button onClick={() => router.push('/')}>Go to Login</Button>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p>Loading your personalized dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">AI Personalized Education</h1>
              <span className="text-sm text-gray-500">Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => setShowChatbot(!showChatbot)}
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                {showChatbot ? 'Hide' : 'Show'} AI Counselor
              </Button>
              <Button onClick={handleLogout} variant="outline">
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* User Profile & Settings */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Profile & Settings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Education Level
                  </label>
                  <select
                    value={selectedEducationLevel}
                    onChange={(e) => {
                      setSelectedEducationLevel(e.target.value)
                      setSelectedGrade(educationLevels[e.target.value as keyof typeof educationLevels]?.[0] || '')
                      setSelectedSubjects([])
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="primary">Primary School (1st-5th Grade)</option>
                    <option value="middle">Middle School (6th-8th Grade)</option>
                    <option value="high">High School (9th-12th Grade)</option>
                    <option value="undergraduate">Undergraduate (Bachelor's)</option>
                    <option value="graduate">Graduate (Master's)</option>
                    <option value="phd">PhD Level</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Grade/Year
                  </label>
                  <select
                    value={selectedGrade}
                    onChange={(e) => setSelectedGrade(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {getAvailableGrades().map((grade) => (
                      <option key={grade} value={grade}>{grade}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subjects of Interest
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {getAvailableSubjects().map((subject) => (
                    <label key={subject} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={selectedSubjects.includes(subject)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedSubjects([...selectedSubjects, subject])
                          } else {
                            setSelectedSubjects(selectedSubjects.filter(s => s !== subject))
                          }
                        }}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{subject}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Progress Overview */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Learning Progress</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{progress.completedLessons}</div>
                  <div className="text-sm text-gray-600">Lessons Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{progress.currentStreak}</div>
                  <div className="text-sm text-gray-600">Day Streak</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{progress.averageScore}%</div>
                  <div className="text-sm text-gray-600">Average Score</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">{getProgressPercentage()}%</div>
                  <div className="text-sm text-gray-600">Overall Progress</div>
                </div>
              </div>
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${getProgressPercentage()}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Available Subjects */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Available Subjects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {selectedSubjects.map((subject) => (
                  <div
                    key={subject}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => handleStartLesson(subject)}
                  >
                    <h3 className="font-semibold text-gray-900 mb-2">{subject}</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Personalized lessons tailored to your learning style
                    </p>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Start Learning
                    </Button>
                  </div>
                ))}
              </div>
              {selectedSubjects.length === 0 && (
                <p className="text-gray-500 text-center py-8">
                  Please select subjects from the profile settings above to start learning.
                </p>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Learning Style:</span>
                  <span className="font-medium capitalize">{progress.learningStyle}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Current Level:</span>
                  <span className="font-medium">{selectedEducationLevel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Active Subjects:</span>
                  <span className="font-medium">{selectedSubjects.length}</span>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Completed Physics lesson</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Started Mathematics module</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Achieved 90% on quiz</span>
                </div>
              </div>
            </div>

            {/* AI Chatbot */}
            {showChatbot && (
              <div className="bg-white rounded-lg shadow">
                <AIChatbot />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 