import { IconEye } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'

const Projects = () => {
    return (
        <div className='max-w-[1200px]  m-auto '>
            <div className='p-7'>
                <p className='text-[26px] font-semibold'>Projects</p>
                <br />
                <div className='pl-4  text-slate-600 mt-2'>
                    <p> <span className='font-semibold'>Wedding photography</span> : in this website i have created many reusable cards, dyanamic data.
                        fully functioning and responsive to any device of differnet catogeries and size .
                    </p>
                    <Link target='main' href={"https://wedding-orcin-two.vercel.app/"} >
                        <button className='px-[8px]  flex items-center gap-1  bg-slate-300 rounded-md'>
                            <span><IconEye stroke={2} /></span> view
                        </button>
                    </Link>
                </div>
                <br />
                <div className='pl-4  text-slate-600 mt-2'>
                    <p> <span className='font-semibold'>Maxion </span> : in this website i have created many reusable cards, dyanamic data. & very good looking Ui and each navbar componentes are unique and decent animation are used on hover and  ia hve adde a shopping site which  is just for Ui.
                        fully functioning and responsive to any device of differnet catogeries and size .
                    </p>
                    <Link target='main' href={"https://demo-ten-delta-41.vercel.app/"} >
                        <button className='px-[8px]  flex items-center gap-1  bg-slate-300 rounded-md'>
                            <span><IconEye stroke={2} /></span> view
                        </button>
                    </Link>
                </div>
                <br />
                <div className='pl-4  text-slate-600 mt-2'>
                    <p> <span className='font-semibold'> Live Weather Data </span> : A live weather data app provides real-time information on weather conditions, including temperature, humidity, wind speed, and forecasts. It typically uses data from various meteorological sources and satellites to offer up-to-date weather updates and alerts. Users can view current conditions. 
                    </p>
                    <Link target='main' href={"https://weather-dun-beta.vercel.app/"} >
                        <button className='px-[8px]  flex items-center gap-1  bg-slate-300 rounded-md'>
                            <span><IconEye stroke={2} /></span> view
                        </button>
                    </Link>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Projects