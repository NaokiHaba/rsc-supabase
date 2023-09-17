import { Database } from '@/database.types'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowUturnLeftIcon } from '@heroicons/react/20/solid'

type Blog = Database['public']['Tables']['blogs']['Row']

type PageProps = {
  params: {
    blogId: string
  }
}

async function fetchBlog(blogId: string) {
  const res = await fetch(
    `${process.env.API_URL}/rest/v1/blogs?id=eq.${blogId}&select=*&`,
    {
      headers: {
        apikey: process.env.API_KEY as string
      }
    }
  )

  if (!res.ok) {
    throw new Error('Error fetching blog')
  }

  const blogs: Blog[] = await res.json()

  return blogs[ 0 ]
}

export default async function BlogDetailPage({ params }: PageProps) {
  const blog = await fetchBlog(params.blogId)

  if (!blog) {
    return notFound()
  }

  return (
    <div className='mt-16 p-8'>
      <p>
        <strong className={'mr-3'}>Task ID：</strong>
        {blog.id}
      </p>
      <p>
        <strong className={'mr-3'}>Title：</strong>
        {blog.title}
      </p>
      <p>
        <strong className={'mr-3'}>Content：</strong>
        {blog.content}
      </p>
      <Link href={'/blogs'}>
        <ArrowUturnLeftIcon className='mt-3 h-6 w-6 cursor-pointer text-blue-500' />
      </Link>
    </div>
  )
}

// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
// ビルド時に静的にルートを生成することができます。
export async function generateStaticParams() {
  const res = await fetch(
    `${process.env.API_URL}/rest/v1/blogs?select=*&`,
    {
      headers: {
        apikey: process.env.API_KEY as string
      }
    })


  const blogs: Blog[] = await res.json()

  return blogs.map((blog) => ( {
    blogId: blog.id.toString()
  } ))
}