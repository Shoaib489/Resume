import React from 'react'

const Education = () => {
  return (
    <div className='max-w-[1200px]  m-auto '>
      <div className='p-[20px]'>
        <p className='text-[28px] font-semibold'>Education</p>
        <div className='text-[16px] text-slate-600 ml-1 p-2'>
          
          <div className='flex flex-row gap-3 '>
            <p className='font-semibold text-[black]'>1.</p>
            <p >Completed 12th (in Non-Medical) from G.G.N. public school </p>
          </div>
          <div className='flex flex-row gap-3 '>
            <p className='font-semibold text-[black]'>2.</p>
            <p >I have complete my (B.A) Graduation in Khalsa Collge Ludhiana in  <span>(2020-23).</span></p>
          </div>
          <div className='flex flex-row gap-3 '>
            <p className='font-semibold text-[black]'>3.</p>
            <p >I've been learning web development for the past year through a course at Staple Apps, gaining valuable skills and experience.". Ludhiana <span> (2023-24).</span></p>
          </div>
         
        </div>
      </div>
      <hr />

    </div>

  )
}

export default Education;