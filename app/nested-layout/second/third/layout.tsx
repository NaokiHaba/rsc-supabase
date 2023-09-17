import React from 'react'

export default function ThirdLayout(
  {
    children
  }: {
    children: React.ReactNode
  }) {
  return (
    <main className='mt-6 text-center'>
      <p>layout 3</p>
      {children}
    </main>
  )
}