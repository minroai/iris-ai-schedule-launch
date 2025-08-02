import { createClient } from '@supabase/supabase-js'
import type { Database } from '@/types/database'

// For development, use environment variables
// For production, these will be set via GitHub secrets
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || import.meta.env.SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your GitHub secrets configuration.')
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey) 