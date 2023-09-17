import { Database } from '@/database.types'

type Blog = Database['public']['Tables']['blogs']['Row']

const fetchBlogs = async () => {
  // 6秒遅延
  await new Promise(resolve => setTimeout(resolve, 6000))

  const res = await fetch(
    `${process.env.API_URL}/rest/v1/blogs?select=*&`,
    {
      headers: {
        apikey: process.env.API_KEY as string
      }
    })

  if (!res.ok) {
    throw new Error('Error fetching blogs')
  }

  const blogs: Blog[] = await res.json()
  return blogs
}

export default async function BlogList() {
  const blogs = await fetchBlogs()

  return (
    <div className='p-4'>
      <p className="mb-4 pb-3 text-xl font-medium underline underline-offset-4">
        Blogs
      </p>
      <ul className='text-sm'>
        {blogs.map(blog => (
          <li key={blog.id} className='my-1 text-base'>
            {blog.title}
          </li>
        ))}
      </ul>
    </div>
  )
}