import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/components/auth-provider'
import { Toaster } from '@/components/ui/toaster'
import AIEducationalCounselor from '@/components/ai-educational-counselor'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI-Powered Personalized Education Platform',
  description: 'An intelligent platform that adapts to your learning style and progress, delivering personalized lessons and content.',
  keywords: ['AI', 'Education', 'Personalized Learning', 'Adaptive Learning', 'Machine Learning', 'Lessons', 'Content Generation'],
  authors: [{ name: 'Personalized Education Team' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
          <Toaster />
          <AIEducationalCounselor />
        </AuthProvider>
      </body>
    </html>
  )
} 