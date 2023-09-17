import { Database } from '@/database.types'
import Link from 'next/link'

type Blog = Database['public']['Tables']['blogs']['Row']

async function fetchBlogs(): Promise<Blog[]> {
  const res = await fetch(
    `${process.env.API_URL}/rest/v1/blogs?select=*`,
    {
      headers: {
        apikey: process.env.API_KEY as string
      },
      // キャッシュを無効化
      // https://developer.mozilla.org/ja/docs/Web/HTTP/Headers/Cache-Control
      // cache: 'no-store'

      cache:'force-cache'
    })

  if (!res.ok) {
    throw new Error('Error fetching blogs')
  }

  return await res.json()
}

export default async function BlogListStatic() {
  const blogs = await fetchBlogs()

  return (
    <div className='p-4'>
      <p>Blog List Static</p>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            {/*
            プリフェッチを無効化
            https://nextjs.org/docs/api-reference/next/link#if-the-linked-page-uses-getstaticprops-getstaticpaths-or-getserversideprops
             <Link />コンポーネントが使用されると、そのリンク先のページはバックグラウンドで事前に読み込まれます。
             ウェブページのパフォーマンスを向上させるためのテクニック
             ユーザーが次にアクセスする可能性が高いリソース（ページ、画像、CSS、JavaScriptファイルなど）を事前に読み込む（取得する）行為
             デフォルトは true
            */}
            <Link prefetch={false} href={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}