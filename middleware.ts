import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextRequest, NextResponse } from 'next/server'

// https://supabase.com/docs/guides/auth/auth-helpers/nextjs
export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const { data: { session } } = await supabase.auth.getSession()

  if (!session && req.nextUrl.pathname.startsWith('/auth/todo-crud')) {
    const redirectTo = req.nextUrl.clone()
    redirectTo.pathname = '/auth'
    return NextResponse.redirect(redirectTo)
  }

  return res
}
