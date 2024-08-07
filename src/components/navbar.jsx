import React from 'react';
import Link from 'next/link';
import { IconLink, IconMail, IconPhoneCall } from '@tabler/icons-react';

const Navbar = () => {
    return (
        <div className='max-w-[1280px]  m-auto  '>
            <div className='flex p-7 justify-between items-center'>
                <div className='flex-col'>
                    <p className='text-[40px] font-bold'>Mohammad Shoaib</p>
                    <div className='flex-col gap-10'>
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
                            <Link className='underline ' target='main' href={"https://github.com/Shoaib489"}>github.Shoaib489</Link>.
                        </p>

                    </div>
                </div>
                <img className='rounded-[50%] object-cover ' src="https://media.licdn.com/dms/image/D4D12AQFUrM6o_8m-WQ/article-inline_image-shrink_1500_2232/0/1705940547574?e=1726704000&v=beta&t=tB2U17HhRC9XmhfdlWNk9PEOFAfGxhvApxsyJHisw4s" width="170px" alt="" />
            </div>
            <hr />
        </div>
    );
};

export default Navbar;
