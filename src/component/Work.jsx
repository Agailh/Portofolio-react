import React from 'react'
import Project1 from '../Assets/netflix.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl text-white font-bold inline border-b-4 border-blue-600'>Work</p>
                <p className='py-6 text-[#bfbfbf]'>//Check out some of my recent work</p>
            </div>
        

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <div style={{backgroundImage: `url(${Project1})`}} className='shadow-lg shadow-[#040c16] group container rounded-md justify-center items-center mx-auto content-div'>
                
                {/* hover effect */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                    React JS application
                    </span>
                    <div>
                        <a href="/" className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            <button>Demo</button>
                        </a>
                        <a href="/" className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            <button>Code</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Work