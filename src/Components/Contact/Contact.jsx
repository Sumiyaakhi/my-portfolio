import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        
        e.preventDefault();
    
        emailjs.sendForm('service_x49zjca', 'template_xfspx48', form.current, 'PyhSH_rK3wRZ8_idL')
          .then((result) => {
              console.log(result.text);
              alert('Send Successfully')
              
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <section id='contact'>
             <div className="text-center">
             <h5 className="text-slate-400 font-semibold text-2xl mb-4">Send message</h5>
        <h1 className="text-3xl font-bold text-white">Contact With Me</h1>
        <div className="text-sky-500">______________________________________________</div>
        <div className="text-sky-500">______________________________</div>
        </div>
            <div className='flex items-center justify-center bg-blue-900 rounded-lg py-8 my-8'>
            <form ref={form} onSubmit={sendEmail}>
      <label className='text-white'>Name</label>
      <br />
      <input type="text" name="user_name" placeholder="Your Name" className="input input-bordered input-info w-full my-3 max-w-xs" />
      <br />
      <label className='text-white'>Email</label>
      <br />
      <input type="text" name="user_email" placeholder="Your Email" className="input input-bordered my-3 input-info w-full max-w-xs" />
      <br />
      <label className='text-white '>write Message</label>
      <br />
      <textarea name="message" placeholder="Write message" className="textarea my-3 textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
      <br />
      <input className='text-white btn btn-outline my-2' type="submit" value="Send" />
    </form>
            </div>
        </section>
    );
};

export default Contact;