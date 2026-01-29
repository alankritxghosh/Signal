import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://yfrhrfgczhsxxakvzful.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

let supabase: SupabaseClient | null = null;

if (supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
  console.warn('Supabase anon key not found. Waitlist submissions will be simulated.');
}

export interface WaitlistEntry {
  email: string;
  source?: string;
  user_agent?: string;
}

export async function addToWaitlist(entry: WaitlistEntry): Promise<{ success: boolean; error?: string }> {
  // If Supabase is not configured, simulate success (for development)
  if (!supabase) {
    console.log('Supabase not configured. Simulating waitlist signup for:', entry.email);
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { success: true };
  }

  try {
    const { error } = await supabase
      .from('waitlist')
      .insert([
        {
          email: entry.email.toLowerCase().trim(),
          source: entry.source || 'website',
          user_agent: entry.user_agent || navigator.userAgent,
        },
      ]);

    if (error) {
      // Handle duplicate email
      if (error.code === '23505') {
        return { success: true }; // Treat duplicate as success (they're already on the list)
      }
      console.error('Supabase error:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    console.error('Failed to add to waitlist:', err);
    return { success: false, error: 'Network error' };
  }
}
