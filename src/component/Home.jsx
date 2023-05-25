import React from 'react'
import { HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]' >
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-white'>
        <p className='text-xl'>Hi, My name is  </p>
        <h1>Aga Ilham Ferdiansyah </h1>
        <h2>I'm a Front-End Developer. </h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi rerum, dicta deserunt nisi hic corporis ea exercitationem quo explicabo distinctio omnis, voluptate dolor sapiente voluptates placeat tempore, similique officiis laboriosam!</p>

      </div>

    </div>
  )
}

export default Home