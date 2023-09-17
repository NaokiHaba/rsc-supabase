import RouterBtn from '@/app/components/router-btn'

export default function BlogPage(){
  return (
    <div className={'m-10 text-center'}>
      <span className={'text-lg'}>
        Click a title on the left to see the blog content
      </span>
      <div className='my-5 flex justify-center'>
        <RouterBtn/>
      </div>
    </div>
  )
}