import contact from './contact.png';
import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import Footer from './footer';


export default function Contact() {
   
  const [name, setName] = useState('');
  const [phoneno,setPhoneno] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_53r1mek';
    const templateId = 'template_q5sff2f';
    const publicKey = 'BNvoP6f5bouQvkNtq';

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Tejasvi',
      phoneno: phoneno,
      subject: subject,
      message: message,
    };

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        console.log(name,email,phoneno,subject,message)
        setName('');
        setPhoneno('');
        setEmail('');
        setSubject('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  }

   
   
    return (
        <section>
            <div className="contact">
                <div className="container">
                    <br></br><br></br>
                    <div className="row justify-content-center" id="first-row">
                        <div className="col">
                            <p id="features-title">CONTACT</p>
                            <h1 style={{ color: "rgb(201, 198, 198)" }}>Contact With Me</h1>
                        </div>
                    </div>
                    <div className="row" id='contact-form'>
                        <div className="col-md-4" id="first-contact">
                            <img src={contact}></img><br></br>
                            <h1>Tejasvi Vichare</h1><br></br>
                            <p style={{ color: "rgb(201, 198, 198)" }} id="title">Frontend Developer</p><br></br>
                            <p style={{ color: "rgb(201, 198, 198)" }}>I'm a front end developer with 1 years of experience in web development. 
                            I'm passionate about creating great user experiences and have a strong understanding of usability and accessibility standards.</p><br></br>
                            <p style={{ color: "rgb(201, 198, 198)" }}>Phone: <a href='tel:+91-9834593628'>+91 9834593628</a> </p><br></br>
                            <p style={{ color: "rgb(201, 198, 198)" }}>Email: <a href='mailto:tejasvivichare2121@gmail.com'>tejasvivichare2121@gmail.com</a> </p><br></br><br></br>
                            <p style={{ color: "rgb(201, 198, 198)" }}>FIND ME IN</p><br></br>
                          
                            <Link to="https://www.linkedin.com/in/tejasvi-vichare/"><i class="fa-brands fa-linkedin-in"></i></Link> 
                            <Link to="https://github.com/TejasviVichare"> <i class="fa-brands  fa-github"></i></Link>                                                   
                        </div>

                        <div className="col-md-7 justify-content-center" id="first-contact">
                            <form onSubmit={handleSubmit}>
                                <div className='name-pno justify-content-center ' >
                                    <div className='name'>
                                        <p>YOUR NAME</p>
                                        <input type='text' value={name}  onChange={(e) => setName(e.target.value)} className='form-control'></input>
                                    </div>
                                    <div className='name'>
                                        <p>PHONE NUMBER</p>
                                        <input type='text' value={phoneno} onChange={(e) => setPhoneno(e.target.value)}  className='form-control'></input>
                                    </div>
                                </div>
                                <div className='email'>
                                    <p>EMAIL</p>
                                    <input type="email" value={email}  onChange={(e) => setEmail(e.target.value)} className='form-control'></input>
                                </div>
                                <div className='subject'>
                                    <p>SUBJECT</p>
                                    <input type='text' value={subject} onChange={(e) => setSubject(e.target.value)}  className='form-control'></input>
                                </div>
                                <div className='message'>
                                    <p>MESSAGE</p>
                                    <textarea type='text' value={message} onChange={(e) => setMessage(e.target.value)} className='form-control'></textarea>
                                </div>
                                <button type='submit' className='contact-btn' >Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </section>
    )
}