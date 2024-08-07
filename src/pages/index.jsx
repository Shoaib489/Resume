import Education from '@/components/education'
import Experience from '@/components/experience'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import Summary from '@/components/summary'
import React from 'react'


const index = () => {
  return (
    <div>
        <Navbar/>
        <Education/>
        <Skills/>
        <Projects/>
        <Experience/>
        <Summary/>
        <Footer/>
    </div>
  )
}

export default index