import React from 'react'
import Banner from './Banner'
import Freebooks from './Freebooks'
import Navbar from './Navbar'
import Footer from './Footer'

function Home() {
  return (
    <div className=' dark:bg-slate-900 dark:text-white'>
      <Navbar/>
     <Banner/>
     <Freebooks/>
     <Footer/>
    </div>
  )
}

export default Home