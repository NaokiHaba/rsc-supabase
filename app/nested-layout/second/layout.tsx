import React from 'react'

export default function SecondLayout(
  {
    children
  }: {
    children: React.ReactNode
  }) {
  return (
    <main className='mt-6 text-center'>
      <p>layout 2</p>
      {children}
    </main>
  )
}