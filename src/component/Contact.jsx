import { useState } from "react";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
let Contact = ()=>{
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_p135l8q', 'template_qqn2sry', form.current, 'FWjRwgdaiNq5Nklal')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  //sendemail end
  //see  what is say users start
  let [data,setdata] = useState({
    name:"",
    email:"",
    message:""
  });
  let submitevent = ()=>{
    alert(`Your name is ${data.name}. Your email is ${data.email}. And you want to say me ${data.message} and you can within 24 hours.`);
document.getElementById("name").value = "";
document.getElementById("email").value = "";
document.getElementById("message").value = "";
  }
  let InputEvent = (event)=>{
    const{name,value} = event.target;
    setdata((previousData)=>{
      return{...previousData,[name]:value};
    })
  };
//see  what is say users start
  return(
    <>
    <div id="Contact">
      <div className="blur contactblur2"></div>
      <div className="contactleft">
        <h1>Get in Touch</h1>
        <h2>Contact me</h2>
      </div>
      <div className="contactright">
        <form ref={form} action="" onSubmit={sendEmail}  >
          <input type="text" id="name" name="name" placeholder="Name" value={data.name}  onChange={InputEvent}/>
          <input type="email" id="email" name="email" placeholder="Email" value={data.email}  onChange={InputEvent}/><br />
          <textarea type="text" id="message" name="message" placeholder="Message" value={data.message}  onChange={InputEvent}/><br />
          <button className="button" type="submit" value='Send'  onClick={submitevent}>Send</button>
        </form>
        <div className="blur"></div>
      </div>
    </div>
    </>
  )
};
export default Contact;