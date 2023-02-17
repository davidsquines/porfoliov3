import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import eureqapic from '../assets/images/eureqa.png'
import chorosx from '../assets/images/chorosx.jpg'
import gotgains from '../assets/images/gotgains.png'
import {AiOutlineFolder} from 'react-icons/ai'
import {GoLinkExternal} from 'react-icons/go'
import {Fade} from 'react-awesome-reveal'

const Projects = () => {
  return (
    <div id='projects' className='section-container'>
      <div className='section-wrap'>
        <Fade direction='up' duration={1000} triggerOnce >
        <h1>Projects</h1>
        
        <h3>Here are some of the projects I have developed:</h3>
        </Fade>
        <div className="project-container">
          <div class="project-tile">
            <Fade duration={1000} delay={300} triggerOnce direction='up'>
            <div className="project-pic">
              <img src={gotgains} alt='Got Gains landing page'/>
            </div>
            <div className="project-content">
              <h2>Got Gains</h2>
              <p>Got Gains is a web application that is used as a logbook for exercises and routines. Users can log in and store exercise related information such as sets, reps, and weight.</p>
              <span className="technologies-used">
                <ul>
                  <li>MongoDB</li>
                  <li>Express</li>
                  <li>React.js</li>
                  <li>Node.js</li>
                </ul>
                <a href="https://github.com/davidsquines/GotGainsFrontend" target="_blank" rel="noreferrer"><AiFillGithub/></a>
                
              </span>
              
            </div>
            </Fade>
          </div>

          <div className="project-tile">
            <Fade duration={1000} delay={300}triggerOnce direction='up'>
              <div className="project-pic">
                <img src={eureqapic} alt='Eureqa Landing Page'/>
              </div>
              <div className="project-content">
                <h2>Eureqa</h2>
                <p>A mobile application designed to connect users together to answer questions. Users can post and answer questions that relate to categories such as lifestyle, education, and technology.</p>
                <span className="technologies-used">
                  <ul>
                    <li>Flutter</li>
                    <li>Springboot</li>
                    <li>Cloud Firestore</li>
                    <li>Java</li>
                  </ul>
                  <a href="https://github.com/davidsquines/GotGainsFrontend" target="_blank" rel="noreferrer"><AiFillGithub/></a>
                  
                </span>
                
              </div>
            </Fade>
          </div>
          
          <div className="project-tile">
          <Fade duration={1000}  triggerOnce direction='up'>
              <div className="project-pic">
                <img src={chorosx} alt='ChorosX landing page'/>
              </div>
              <div className="project-content">
                <h2>ChorosX</h2>
                <p>A web application designed to show users the real time positions of well known statelites over a 3D model of the globe. This applciation was created for the 2021 Matahacks Hackathon where our team took First Place.</p>
                <span className="technologies-used">
                  <ul>
                    <li>Python</li>
                    <li>Flask</li>
                    <li>Cloud Firestore</li>
                    <li>React</li>
                  </ul>
                  <a href="https://github.com/davidsquines/GotGainsFrontend" target="_blank" rel="noreferrer"><AiFillGithub/></a>
                  
                </span>
                
              </div>
            </Fade>
          </div>


        </div>
        <div className='other-projects'>
          <h2>Other noteworthy projects</h2>
          <div className='card-container'>
            <Fade cascade direction='left' duration={300} triggerOnce>
            <div className='card'>
              <span className='card-icons'>
                <AiOutlineFolder/>
                <a href='https://github.com/Dictionary-Attack' target='_blank' rel="noreferrer"><GoLinkExternal/></a>
              </span>
              <h3>Dictionary Attack</h3>
              <p>A Scrabble like game where users try to find the most amount of words from a given set of letters</p>
              <ul>
                <li>React.js</li>
                <li>MongoDB</li>
                <li>Node.js</li>
              </ul>
            </div>
            <div className='card'>
              <span className='card-icons'>
                <AiOutlineFolder/>
                <a href='https://github.com/davidsquines/Eleos' target='_blank' rel="noreferrer"><GoLinkExternal/></a>
              </span>
              <h3>Eleos</h3>
              <p>A virtual desktop assistant made to help me as I work on my computer</p>
              <ul>
                <li>Python</li>
                <li>Speech Recognition</li>
              </ul>
            </div>
            <div className='card'>
              <span className='card-icons'>
                <AiOutlineFolder/>
                <a href='https://github.com/davidsquines/PostgresRDS_Springboot_Docker_EC2' target='_blank' rel="noreferrer"><GoLinkExternal/></a>
              </span>
              <h3>AWS Springboot Microservice</h3>
              <p>A RESTful API created using Springboot and hosted via AWS EC2 and Docker</p>
              <ul>
                <li>Docker</li>
                <li>Springboot</li>
                <li>AWS EC2</li>
              </ul>
            </div>
            </Fade>

          </div>
          
        </div>

      </div>
      
    </div>
  )
}

export default Projects