import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail  } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import PP from '../Assets/3x4 (white bg).png'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick =() => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={PP} alt='profile image' style={{width: '50px'}} />
        </div>
        
        {/* menu */}
    
          <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Experience</li>
            <li>Skills</li>
            <li>Contact</li>
          </ul>
        

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars /> : <FaTimes/>}

        </div>

        {/* mobile menu */}

          <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center '}>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Experience</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Contact</li>
          </ul>
        
        {/* social icons */}
        <div className='flex fixed flex-col top-[35%] left-0'>

        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-100'>
            <a href='/' className='flex justify-between items-center w-full text-gray-300'>
             LinkedIn <FaLinkedin size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-100'>
            <a href='/'  className='flex justify-between items-center w-full text-gray-300'>
              Github <FaGithub  size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-100'>
            <a href='/' className='flex justify-between items-center w-full text-gray-300'>
              Email <HiOutlineMail  size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-100'>
            <a href='/' className='flex justify-between items-center w-full text-gray-300'>
              Call <BsFillPersonLinesFill size={30}/>
            </a>
          </li>
        


        </ul>
        </div>
        
    </div>
  )
}

export default Navbar