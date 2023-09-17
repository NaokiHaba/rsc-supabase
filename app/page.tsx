import NotesList from '@/app/components/notes-list'
import TimerCounter from '@/app/components/timer-counter'
import { Suspense } from 'react'
import Spinner from '@/app/components/spinner'
import RefreshBtn from '@/app/components/RefreshBtn'

export default function Page() {
  return (
    <main>
      <div className='m-10 text-center'>
        <p>Hello World</p>
        {/*Suspense
        非同期操作（通常はデータの読み込み）が完了するまで一部のコンポーネントのレンダリングを「一時停止」する
        */}
        <Suspense fallback={<Spinner color='border-green-500' />}>
          <NotesList />
        </Suspense>
        <TimerCounter />
        <RefreshBtn/>
      </div>
    </main>
  )
}
