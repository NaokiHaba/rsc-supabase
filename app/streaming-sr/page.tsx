import { Suspense } from 'react'
import Spinner from '@/app/components/spinner'
import BlogList from '@/app/components/blog-list'
import NewsList from '@/app/components/news-list'

export const revalidate = 0

export default function StreamingServerRenderingPage() {
  return (
    <section className='flex'>
      <aside className='w-1/4'>
        <section className='flex m-1 h-full w-1/4 border border-blue-500 bg-gray-200 p-1'>
          <Suspense
            fallback={<Spinner color='border-green-500' />}>
            <BlogList />
          </Suspense>
        </section>
      </aside>

      <main>
        <section className='flex w-3/4'>
          <Suspense fallback={<Spinner />}>
            <NewsList />
          </Suspense>
        </section>
      </main>
    </section>
  )
}