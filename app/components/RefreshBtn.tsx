'use client'


import { useRouter } from 'next/navigation'

export default function RefreshBtn() {
  const router = useRouter()

  return (
    <button className='font-sm my-3 rounded bg-indigo-600 py-1 px-3 text-white hover:bg-indigo-700'
            onClick={() => {
              // 現在のページが再取得される
              // Reactの状態（State）がリセットされない
              // データを最新のものに更新する必要があるが、ユーザーが行った操作や入力を維持したい場合。
              router.refresh()
            }}>
      useRouter Refresh
    </button>
  )
}