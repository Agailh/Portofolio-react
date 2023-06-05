import React from 'react'
import { HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]' >
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-white'>
        <p className='text-xl text-[#1d4b98]'>Hi, My name is  </p>
        <h1 className='text-4xl sm:text-6xl font-bold '>Aga Ilham Ferdiansyah </h1>
        <h2 className='text-xl sm:text-5xl font-bold text-[#bfbfbf]'>I'm a Front-End Developer. </h2>
        <p className='text-[#bfbfbf] py-4 max-w'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi rerum, dicta deserunt nisi hic corporis ea exercitationem quo explicabo distinctio omnis, voluptate dolor sapiente voluptates placeat tempore, similique officiis laboriosam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, amet atque error velit eius ab dignissimos sunt dolorem eos, tempore soluta nam deleniti in quae voluptate vel natus, rem provident?</p>

      <div>
        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#1d4b98] hover:border-[#1d4b98]'>
         View Work
          <span className=' group-hover:rotate-90 duration-300'>
          <HiArrowNarrowRight  className='ml-3'/>
          </span>
        </button>
      </div>
      </div>

    </div>
  )
}

export default Home