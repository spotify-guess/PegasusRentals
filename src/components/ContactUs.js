import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css'
import { motion } from "motion/react"
import { useNavigate } from 'react-router-dom'


const ContactUs = () => {

  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ehblpqv', 'template_ug6sgdr', form.current, {
        publicKey: 'FTP_7O1m9Ki-JCgLb',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
    );

    alert("Message successfully sent!")
    navigate("/");



  };


  var defaultValue = "Hi, I am interested in the "

  if(localStorage.getItem("car") != null){
    defaultValue += localStorage.getItem("car")
    defaultValue += ". I'd like to book it from [begin] to [end]."
  }
  else
    defaultValue = ""


  return (
    <div className='contactUs'>

        <motion.h1
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{amount: 1,  once:true}}
        >
          Contact Us</motion.h1>

        <motion.h3
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{delay:0.1}}
         viewport={{amount: 1,  once:true}}
         >
        Please contact us below for inquiries about renting a vehicle or for any questions/concerns.
        </motion.h3>

        <form ref={form} onSubmit={sendEmail}>
            
            <motion.input 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{delay:0.2}}
            viewport={{amount: 1,  once:true}}
            type="text" name="from_name" placeholder=' Name...' required/>

            <motion.input
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{delay:0.3}}
            viewport={{amount: 1,  once:true}}
            type="email" name="user_name" placeholder=' Email Address...' required/>

            <motion.textarea
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{delay:0.4}}
            viewport={{amount: 1,  once:true}}
            name="message" defaultValue={defaultValue} placeholder='Message..' required/>

            <motion.input
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{delay:0.5}}
            viewport={{amount: 1,  once:true}}
             type="submit" value="Send" className='button'/>

        </form>

    </div>
  )
}

export default ContactUs