import { Database } from '@/database.types'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

// https://supabase.com/docs/guides/auth/auth-helpers/nextjs
export default createClientComponentClient<Database>()