import React from 'react'


import HTML from "../Assets/html5.png"
import Phaser from "../Assets/phaser.png"
import CSS from "../Assets/css-icon.png"
import Javascript from "../Assets/javascript.png"
import Tailwind from "../Assets/tailwind-css-icon.png"
import TFL from "../Assets/TFL.png"



const Skills = () => {
  return (
    <div name='skills'>
      {/* container */}
      <div>
        <div>
          <p>Experience</p>
          <p>// These are the technologies I've working with </p>
        </div>

        <div>
          <div>
            <img src={HTML} alt='Html Icon' />
            <p>HTML</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills