import React from 'react'
import { InstagramEmbed } from 'react-social-media-embed'
import '../Pages/AboutUs.css'
import Navbar from '../Components/Navbar'

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <InstagramEmbed url='https://www.instagram.com/p/C8pA85mSx5S' width={323} />
    </div>
  )
}

export default AboutUs