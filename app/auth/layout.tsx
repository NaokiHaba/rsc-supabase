import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '@/database.types'
import { cookies, headers } from 'next/headers'
import SupabaseListener from '@/app/components/supabase-litener'

export default async function AuthLayout(
  {
    children
  }: {
    children: React.ReactNode
  }
) {
  const supabase = createServerComponentClient<Database>({
    cookies
  })

  const {data:{session}} = await supabase.auth.getSession()

  return (
    <>
      <SupabaseListener accessToken={session?.access_token} />
      {children}
    </>
  )
}