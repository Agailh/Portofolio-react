import React from 'react'

const About = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f] text-white'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-blue-600'>
                    About
                </p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8'>
                  <div className='sm:text-right text-4xl font-bold'>
                    <p>
                    Hi, Im Aga , nice to meet you. Welcome and please take a look around.
                    </p>
                  </div>
                  <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus veniam, eveniet delectus doloribus saepe maxime ratione ipsum nostrum, odit in cupiditate nisi voluptates expedita magni non id quibusdam fugit reiciendis animi quia excepturi aperiam architecto! Nihil reprehenderit unde doloremque cum, voluptatem quam, doloribus earum, eaque fuga ut cumque commodi facilis.
                  </p>
                </div>

                </div>
            
        </div>
    </div>
  )
}

export default About