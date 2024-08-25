import React from 'react';
import Link from 'next/link';
import classes from "./navbar.module.css"
import { IconBrandGithub, IconLink, IconMail, IconPhoneCall } from '@tabler/icons-react';

const Navbar = () => {

    return (
        <div className='max-w-[1280px]  m-auto  '>

            <div className='flex p-[20px] justify-between items-center flex-wrap'>
                <div className='flex-col'>
                    <p className={`${classes.nameHead} text-[40px] font-bold`}>Mohammad Shoaib</p>
                    <div className='flex-col gap-10'>
                        <p className='flex gap-2 text-slate-600 items-center'>
                            <IconPhoneCall stroke={1.5} className='text-blue-600' />
                            <Link href="tel:77195-34499">77195-34499</Link>
                        </p>

                        <p className='flex gap-2 text-slate-600 items-center  '>
                            <IconMail stroke={1.5} className='text-blue-600 ' />
                            <Link href="mailto:shoaib22657@gmail.com">shoaib22657@gmail.com</Link>
                        </p>
                        <p className='flex gap-2 text-slate-600 items-center '>
                            <IconBrandGithub stroke={1.5} className='text-blue-600 ' />
                            <Link className='underline ' target='main' href={"https://github.com/Shoaib489"}>github.Shoaib489</Link>.
                        </p>
                        <p className='flex gap-2 text-slate-600 items-center '>
                            <IconLink stroke={1.5} className='text-blue-600 ' />
                            <Link className='underline ' target='main' href={"https://resume-steel-psi.vercel.app/"}>resume link</Link>.
                        </p>

                    </div>
                </div>
                <img className={`${classes.imageSize} rounded-[50%] object-cover  `} src="images/resume2.jpg"   alt="" />
            </div>
            <hr />
        </div>
    );
};

export default Navbar;
