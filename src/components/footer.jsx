import { IconLink, IconMail, IconPhoneCall } from '@tabler/icons-react'
import classes from "./footer.module.css"
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (

        <div className='max-w-[1300px]  m-auto '>
            <div className='p-[20px]'>
            <div className='flex-col'>
                    <p className='text-[20px] font-bold text-center'>Mohammad Shoaib</p>
                    <div className={`${classes.lastline} flex flex-row justify-between mt-6`}>
                        <p className='flex gap-2 text-slate-600  items-center '>
                            <IconPhoneCall stroke={1.5} className='text-blue-600 ' />
                            <Link href={"tel-:77195-34499"}>77195-34499</Link>
                        </p>
                        <p className='flex gap-2 text-slate-600 items-center  '>
                            <IconMail stroke={1.5} className='text-blue-600 ' />
                            <Link href="mailto:shoaib22657@gmail.com">shoaib22657@gmail.com</Link>
                        </p>
                        <p className='flex gap-2 text-slate-600 items-center '>
                            <IconLink stroke={1.5} className='text-blue-600 ' />
                            <Link className='underline ' target='main' href={"https://www.linkedin.com/in/mohammad-shoaib-a89a73284/"}>LinkedIn Profile</Link>.
                        </p>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer