import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import type { EarlyAccessFormData } from '@/lib/supabase'

export const useEarlyAccess = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const submitEarlyAccess = async (data: EarlyAccessFormData) => {
    setIsLoading(true)
    setError(null)

    try {
      // Check if email already exists
      const { data: existingUser, error: checkError } = await supabase
        .from('early_access_users')
        .select('email')
        .eq('email', data.email)
        .single()

      if (checkError && checkError.code !== 'PGRST116') {
        throw checkError
      }

      if (existingUser) {
        setError('This email is already registered for early access.')
        return false
      }

      // Insert new user
      const { error: insertError } = await supabase
        .from('early_access_users')
        .insert([
          {
            email: data.email,
          }
        ])

      if (insertError) {
        throw insertError
      }

      setIsSubmitted(true)
      return true
    } catch (err) {
      console.error('Error submitting early access:', err)
      setError(err instanceof Error ? err.message : 'An error occurred while submitting your request.')
      return false
    } finally {
      setIsLoading(false)
    }
  }

  return {
    submitEarlyAccess,
    isLoading,
    error,
    isSubmitted,
    reset: () => {
      setIsSubmitted(false)
      setError(null)
    }
  }
} 