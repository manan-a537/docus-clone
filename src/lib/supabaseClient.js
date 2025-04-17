import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tsieaypouomrnbidvxpa.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzaWVheXBvdW9tcm5iaWR2eHBhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4MzQ4MDMsImV4cCI6MjA2MDQxMDgwM30.VuHyTsZD2WL2t88O8L4xuQFFSIHyjZ6T0k__GFnTqoM'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
