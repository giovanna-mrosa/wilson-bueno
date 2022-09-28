import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

import style from '../styles/FormContact.module.scss'

export function FormContact() {
  const form = useRef();

  async function handleSubmit(event){
    event.preventDefault();
    await emailjs.sendForm(
      process.env.SERVICE_ID_EMAILJS,
      process.env.TEMPLATE_ID_EMAILJS,
      form.current,
      process.env.PUBLIC_KEY_EMAILJS,
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });    
  }

  return (
    <form className={style.formSendEmail} action="submit" ref={form} onSubmit={handleSubmit}>
      <input 
        type="text" 
        name='from_name'
        id="name" 
        placeholder="Nome"
        autoComplete="off"
      />
      <div className={style.mailPhone}>
        <input
          type="email"
          name='reply_to'
          id="email"
          placeholder="E-mail"
          autoComplete="off"
        />
          <input
          type="tel"
          name="call_to"
          id="tel"
          placeholder="Telefone"
          autoComplete="off"
        />
      </div>
      <textarea 
        name="message" 
        id="message" 
        cols="30" 
        rows="10" 
        placeholder="Olá,
        
        Gostaria de saber mais sobre o Synolis."
      />
      <button value="Send" type="submit">ENVIAR</button>
    </form>
  )
}