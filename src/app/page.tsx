import Blog1 from '@/components/Blog1'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Layout240 from '@/components/Layout240'
import Sec3 from '@/components/Sec3'
import Team16 from '@/components/Team16'
import React from 'react'
import Team5 from '@/components/Team5'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'





const HomePage = () => {
  return (
    <div className='w-[1280px] h-auto '>
      <Header/>
      <Hero/>
      <Sec3/>
      <Team16/>
      <Layout240/>
      <Blog1/>
      <Team5/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}



export default HomePage
