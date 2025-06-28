'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

interface User {
  id: string
  email: string
  name: string
  educationLevel: string
  grade: string
  learningStyle: string
  interests: string[]
  goals: string
}

interface AuthContextType {
  user: User | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, userData: Partial<User>) => Promise<void>
  signOut: () => Promise<void>
  updateProfile: (data: Partial<User>) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for existing session in localStorage
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch (error) {
        console.error('Error parsing saved user:', error)
        localStorage.removeItem('user')
      }
    }
    setLoading(false)
  }, [])

  const signIn = async (email: string, password: string) => {
    // For demo purposes, allow any email/password combination
    // In production, this would validate against a backend
    const demoUser: User = {
      id: 'user-' + Date.now(),
      email: email,
      name: email.split('@')[0] || 'Student',
      educationLevel: 'high',
      grade: 'Grade 10',
      learningStyle: 'visual',
      interests: ['mathematics', 'computer_science'],
      goals: 'academic_excellence'
    }
    
    setUser(demoUser)
    localStorage.setItem('user', JSON.stringify(demoUser))
  }

  const signUp = async (email: string, password: string, userData: Partial<User>) => {
    const newUser: User = {
      id: 'user-' + Date.now(),
      email: email,
      name: userData.name || email.split('@')[0] || 'Student',
      educationLevel: userData.educationLevel || 'high',
      grade: userData.grade || 'Grade 10',
      learningStyle: userData.learningStyle || 'visual',
      interests: userData.interests || ['mathematics', 'computer_science'],
      goals: userData.goals || 'academic_excellence'
    }
    
    setUser(newUser)
    localStorage.setItem('user', JSON.stringify(newUser))
  }

  const signOut = async () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  const updateProfile = async (data: Partial<User>) => {
    if (!user) return

    const updatedUser = { ...user, ...data }
    setUser(updatedUser)
    localStorage.setItem('user', JSON.stringify(updatedUser))
  }

  const value = {
    user,
    loading,
    signIn,
    signUp,
    signOut,
    updateProfile
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
} 