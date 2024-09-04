import { Data } from '@/data'
import { IconEye } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'

const Projects = () => {
    return (
        <div className='max-w-[1200px]  m-auto '>
            <div className='p-[20px]'>
                <p className='text-[26px] font-semibold'>Projects</p>
                <br />
                <div className='' >
                    {Data.map((value, index) => {
                        return <div key={index} className='p-2  text-slate-600 mt-2'>
                            <div>
                                <span className='font-semibold'>{value?.topic}</span> : <span>{value?.describe}</span>
                            </div>
                            <Link target='=main' href={value?.link} >
                                <button className='px-[8px] mt-2 flex items-center gap-1  bg-slate-300 rounded-md'>
                                    <span><IconEye stroke={2} /></span> <span className='pb-1'>view</span>
                                </button>
                            </Link>
                        </div>
                    })}
                </div>
               
                <div className='p-2  text-slate-600 mt-2' >
                    <p>Still working on 3 more self project to improove my self and experience .</p>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Projects