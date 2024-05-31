import { createClient } from '@supabase/supabase-js'

const supabaseURL = 'https://bmutgzewjiplbnflthee.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtdXRnemV3amlwbGJuZmx0aGVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIzMzU0NjIsImV4cCI6MjAyNzkxMTQ2Mn0.zkrLXH3vb3tTSotOiAea4PdrNgyF6SVfNSsPF4d7Tzw'
const supabase = createClient (supabaseURL, supabaseKey)

export default supabase

export {supabase}