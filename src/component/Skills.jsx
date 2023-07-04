import React from 'react'


import HTML from "../Assets/html5.png"
import Phaser from "../Assets/phaser.png"
import CSS from "../Assets/css-icon.png"
import Javascript from "../Assets/javascript.png"
import Tailwind from "../Assets/tailwind-css-icon.png"
import TFL from "../Assets/TFL.png"



const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f]'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div >
          <p className=' text-white text-4xl font-bold inline border-b-4 border-blue-600'>Skills</p>
          <p className='text-[#bfbfbf] py-4'>// These are the technologies I've working with </p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 '>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Phaser} alt='Phaser Icon' />
            <p className='my-4 text-white'>Phaser</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt='Html Icon' />
            <p className='my-4 text-white'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt='CSS Icon' />
            <p className='my-4 text-white'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Javascript} alt='Javascript Icon' />
            <p className='my-4 text-white'>Javascript</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Tailwind} alt='Tailwind Icon' />
            <p className='my-4 text-white'>Tailwind</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={TFL} alt='TFL Icon' />
            <p className='my-4 text-white'>TFL</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills