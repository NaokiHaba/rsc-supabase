import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '@/database.types'
import { cookies } from 'next/headers'
import TodoItem from '@/app/components/todo-item'

export default async function TodoList() {
  const supabase = createServerComponentClient<Database>({
    cookies: cookies
  })

  const { data: todos } = await supabase
    .from('todos')
    .select()
    .order('created_at', { ascending: true })
  return (
    <ul className='my-6 mx-3'>
      {todos?.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}