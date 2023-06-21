import { createClient } from '@supabase/supabase-js'

const url: string = process.env.url || ''
const apiKey = process.env.apiKey || ''

export const supabase = createClient(url, apiKey)