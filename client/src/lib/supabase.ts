import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

export type UserRole = 'citizen' | 'planner';

export interface UserProfile {
  id: string;
  email: string;
  role: UserRole;
  full_name?: string;
  created_at: string;
}
