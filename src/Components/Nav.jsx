import React from 'react'
import face from './pic-2.png'

function Nav() {
  return (
    <div className='h-3cm flex flex-row  p-5 space-x-5  spacebetween m-5 rounded-full rounded-5xl bg-emerald-700 pr-4'>
<img src={face} className='w-20 h-30 hover:scale-150 duration-1000  hover:cursor-pointer rounded-3xl'></img>
        <h1 className=' w-full text-center underline m-2'>THOMASKUTTY A</h1>
        <h2 className='text-white list-outside rounded border-solid border-white text-end basis-1/2 pl-2'>Download CV</h2>
        
    </div>
  )
}

export default Nav