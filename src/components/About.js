import React from 'react'
import {Fade} from 'react-awesome-reveal'

const About = () => {
  return (
    <div id='about' className='section-container'>
      <div className='section-wrap'>
        <Fade direction='up' duration={1400} triggerOnce >
          <h1>About Me</h1>
            <div className="about-content">
              <div className="bio">
                <h3>Get to know me!</h3>
                <p>
                Hello, I am David and I enjoy creating things on the internet. My interest in     coding began when I took my first coding class in 2014. Since then, I began my passion of creating web applications
                </p>
                <br/>
                <p>I graduated Cum Laude from the California State University of Northridge with a degree of Computer Science.</p>
                <br/>
                <p>Some of my interest include Powerlifting, reading, and going to concerts of small artists.</p>
              </div>
              <div className="technologies">
                <h3>Some Technologies I've been using:</h3>
                  <div className='tech-container'>
                      <div className='skill'>CSS</div>
                      <div className='skill'>HTML</div>
                      <div className='skill'>Javascript</div>
                      <div className='skill'>Node.js</div>
                      <div className='skill'>React.js</div>
                      <div className='skill'>Express</div>
                      <div className='skill'>AWS</div>
                      <div className='skill'>Rest API</div>
                      <div className='skill'>MongoDB</div>
                      <div className='skill'>Flutter</div>
                  </div>
              </div>
            </div>
          </Fade>
      </div>
       
    </div>
  )
}

export default About