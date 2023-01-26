import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';
import {AiOutlineArrowRight} from 'react-icons/ai'

const serviceID = process.env.REACT_APP_SERVICE_ID;
const templateID = process.env.REACT_APP_TEMPLATE_ID;
const userID = process.env.REACT_APP_USER_ID;

const ContactMe = () => {
  const form = useRef();
  const sendEmail = (e) => {

    e.preventDefault();
    emailjs.sendForm(
      serviceID,
      templateID,
      form.current,
      userID
    ).then((result) => {
      console.log(result.text);
      alert("Message sent!")
    }, (error) => {
      console.log("hit");
      console.log(error.text);
      alert("Error upon sending: " + error.text);
    });
    e.target.reset();
  };
  return (
    <div id='contact' className='section-container'>
      <div className='section-wrap'>
        <h1>Send a message!</h1>
          <form ref={form} onSubmit={sendEmail}>
            <div class='form-row'>
              <div class='input-group'>
                <label>Name:</label>
                <input type="text" name="user_name" placeholder='Enter Name' required/>
              </div>
              <div class='input-group'>
                <label>Email:</label>
                <input type="email" name="user_email" placeholder='Enter email' required/>
              </div>
            </div>
            <div className='form-row'>
              <div className='input-group'>
                 <label>Message:</label>
              <textarea name="message" placeholder='Enter message' required/>

              </div>
             

            </div>
            
            <button type="submit" className='submit-button' >
                <h3>Send</h3>
                <AiOutlineArrowRight />
      
              
            </button>     

          </form>
          
      </div>
    </div>
  )
}

export default ContactMe