import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://yihcjgspslicuqspvjmm.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpaGNqZ3Nwc2xpY3Vxc3B2am1tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkyOTg4MTIsImV4cCI6MjAyNDg3NDgxMn0.yrwzGh4ov68UkK9b_jsJacvon_9Sj6xGuql8kcf-1kc";
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
