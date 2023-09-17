'use client'

import { useEffect, useState } from 'react'

export default function TimerCounter() {
  // 関数コンポーネント内で状態を管理するために使用
  const [ count, setCount ] = useState(0)

  // useEffectは副作用（API呼び出し、DOM操作など）を関数コンポーネント内で行うためのフック
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1)
    }, 500)
    return () => clearInterval(timer)
  }, [count])

  return (
    <>
      <p>{count}</p>
      <button className='font-sm my-3 rounded bg-indigo-600 py-1 px-3 text-white hover:bg-indigo-700'
              onClick={() => setCount(0)}>Reset
      </button>
    </>
  )
}