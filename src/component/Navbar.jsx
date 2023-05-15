import React from 'react'
import {Fabars, FaTimes } from 'react-icons/fa'
import PP from '../Assets/3x4 (white bg).png'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={PP} alt='profile image' style={{width: '50px'}} />
        </div>
        <div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Experience</li>
            <li>Skills</li>
            <li>Contact</li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar