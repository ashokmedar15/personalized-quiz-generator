'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Brain, Loader2, BookOpen, Target, Zap } from 'lucide-react'

interface ContentGeneratorProps {
  onContentGenerated?: (content: any) => void
}

export default function ContentGenerator({ onContentGenerated }: ContentGeneratorProps) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    subject: 'Mathematics',
    difficulty: 'intermediate',
    topic: '',
    learningStyle: 'visual',
    contentType: 'lesson'
  })
  const [loading, setLoading] = useState(false)

  const subjects = [
    'Mathematics',
    'Science',
    'History',
    'Literature',
    'Geography',
    'Computer Science',
    'Art',
    'Music',
    'Physics',
    'Chemistry',
    'Biology',
    'Economics'
  ]

  const difficulties = [
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' }
  ]

  const learningStyles = [
    { value: 'visual', label: 'Visual', icon: '👁️' },
    { value: 'auditory', label: 'Auditory', icon: '🎧' },
    { value: 'kinesthetic', label: 'Kinesthetic', icon: '🤲' },
    { value: 'reading', label: 'Reading/Writing', icon: '📝' }
  ]

  const contentTypes = [
    { value: 'lesson', label: 'Lesson', icon: BookOpen },
    { value: 'practice', label: 'Practice', icon: Target },
    { value: 'summary', label: 'Summary', icon: Zap }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.topic.trim()) return

    setLoading(true)
    try {
      const response = await fetch('/api/personalize-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const data = await response.json()
        if (onContentGenerated) {
          onContentGenerated(data)
        } else {
          // Navigate to lesson page with the generated content
          router.push(`/lesson?subject=${encodeURIComponent(formData.subject)}&topic=${encodeURIComponent(formData.topic)}&difficulty=${formData.difficulty}&learningStyle=${formData.learningStyle}`)
        }
      } else {
        throw new Error('Failed to generate content')
      }
    } catch (error) {
      console.error('Error generating content:', error)
      alert('Failed to generate content. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center space-x-3 mb-6">
        <Brain className="h-6 w-6 text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-900">Generate Personalized Content</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Subject
          </label>
          <select
            value={formData.subject}
            onChange={(e) => handleInputChange('subject', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Topic
          </label>
          <input
            type="text"
            value={formData.topic}
            onChange={(e) => handleInputChange('topic', e.target.value)}
            placeholder="e.g., Linear Equations, World War II, Shakespeare's Sonnets..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Difficulty Level
            </label>
            <div className="space-y-2">
              {difficulties.map((difficulty) => (
                <label key={difficulty.value} className="flex items-center">
                  <input
                    type="radio"
                    name="difficulty"
                    value={difficulty.value}
                    checked={formData.difficulty === difficulty.value}
                    onChange={(e) => handleInputChange('difficulty', e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-700">{difficulty.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Learning Style
            </label>
            <div className="space-y-2">
              {learningStyles.map((style) => (
                <label key={style.value} className="flex items-center">
                  <input
                    type="radio"
                    name="learningStyle"
                    value={style.value}
                    checked={formData.learningStyle === style.value}
                    onChange={(e) => handleInputChange('learningStyle', e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-700">{style.icon} {style.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Content Type
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {contentTypes.map((type) => (
              <label key={type.value} className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                <input
                  type="radio"
                  name="contentType"
                  value={type.value}
                  checked={formData.contentType === type.value}
                  onChange={(e) => handleInputChange('contentType', e.target.value)}
                  className="mr-2"
                />
                <div className="flex items-center">
                  <type.icon className="h-4 w-4 mr-2 text-blue-600" />
                  <span className="text-sm text-gray-700">{type.label}</span>
                </div>
              </label>
            ))}
          </div>
        </div>

        <Button
          type="submit"
          disabled={loading || !formData.topic.trim()}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Generating Personalized Content...
            </>
          ) : (
            <>
              <Brain className="h-4 w-4 mr-2" />
              Generate with AI
            </>
          )}
        </Button>
      </form>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-800">
          <strong>AI-Powered Personalization:</strong> Our AI analyzes your learning style and creates content 
          specifically tailored to help you learn more effectively. Be specific with your topic for the best results.
        </p>
      </div>
    </div>
  )
} 