import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://qgvssenardkgfmbwoytz.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFndnNzZW5hcmRrZ2ZtYndveXR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIyNTA1OTAsImV4cCI6MjAyNzgyNjU5MH0.sCUrvnpH325FTuOqzW0AEcgd7iaVhy3nxngEeh9vxw8"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)