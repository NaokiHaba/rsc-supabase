import { Database } from '@/database.types'
import { cookies } from 'next/headers'
import { notFound } from 'next/navigation'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

type PageProps = {
  params: {
    todoId: string
  }
}

export default async function TodoPage({ params }: PageProps) {
  const supabase = createServerComponentClient<Database>({
    cookies: cookies
  })

  const { data: todo, error } = await supabase
    .from('todos')
    .select('*')
    .eq('id', params.todoId)
    .single()

  if (!todo) {
    return notFound()
  }

  return (
    <div className='mt-16 border-2 p-8'>
      <p>Task ID： {todo.id}</p>
      <p>Task Title： {todo.title}</p>
      <p>Task Status： {todo.completed ? 'Done' : 'Not yet'}</p>
      <p>
        Created At： {todo && new Date(todo.created_at).toLocaleString()}
      </p>
    </div>
  )
}