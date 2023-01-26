import React from 'react'
import profilePic from '../assets/images/profilePic.jpg'
import {AiFillInstagram, AiFillLinkedin, AiFillGithub,AiFillMail  }  from 'react-icons/ai'
import {Fade} from 'react-awesome-reveal'
const Hero = () => {
  return (
    <div id='hero'>
      
      <div className="intro">

        <div className='intro-content-top'>
        <Fade cascade direction='down' triggerOnce delay={1000} duration={700}>
          <div className="intro-text">
            <div>
              <h3>Hello, my name is</h3>
              <h1>David Quines</h1>
              <h3>Fullstack Developer</h3>
            </div>
          </div>
          <div className="intro-pic">
            <img src={profilePic} className='profile-pic'/>
          </div>
          </Fade>
        </div>

        <div className='intro-content-bottom'>
          <ul className='highlights'>
            <Fade cascade direction='down' delay={2000} duration={500} triggerOnce>
              <li>
              Passionate about create applications that deliver customer satisfaction 
              </li>
              <li>
              Hard working, team-player, and self-starter with experience in developing in all aspects of web applications. 
              </li>
            </Fade>
           
          </ul>
          <div>
          <Fade direction='up' delay={2000} duration={500} triggerOnce>
            <ul className='social-media-icons'>
              
              <li><a href='https://www.instagram.com/dsqsfl' target='_blank'><AiFillInstagram/></a></li>
              <li><a href='https://github.com/davidsquines' target='_blank'><AiFillGithub/></a></li>
              <li><a href='https://www.linkedin.com/in/david-quines7' target='_blank'><AiFillLinkedin/></a></li>
              <li><a href="mailto:davidasquines@gmail.com" target='_blank'><AiFillMail/></a></li>
              
            </ul>
            </Fade>
          </div>
          
        </div>
      </div>

    </div>

  )
}

export default Hero