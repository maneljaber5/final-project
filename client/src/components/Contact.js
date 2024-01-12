import React from 'react'
import './Contact.css';
function Contact() {
  return (
    <section id="contact">
    <div className="sectionheader">	<h1>CONTACT</h1></div>
    <article>
      <p>Yoda soon you will call me master Governor Tarkin. A new hope Boba Fett bantha forest moon. Tusken raider Master Yoda do or do not never tell me the odds.</p>
      <label htmlFor="checkcontact" className="contactbutton"><div className="mail" /></label><input id="checkcontact" type="checkbox" />
      <form action method="post" className="contactform">
        <p className="input_wrapper"><input type="text" name="contact_nom"  id="contact_nom" /><label htmlFor="contact_nom">NAME</label></p>
        <p className="input_wrapper"><input type="text" name="contact_email"  id="contact_email" /><label htmlFor="contact_email">EMAIL</label></p>
        <p className="input_wrapper"><input type="text" name="contact_sujet"  id="contact_sujet" /><label htmlFor="contact_sujet">SUBJECT</label></p>
        <p className="textarea_wrapper"><textarea name="contact_message" id="contact_message" defaultValue={""} /></p>
        <p className="submit_wrapper"><input type="submit" defaultValue="ENVOYER" /></p>			
      </form>
    </article>
  </section>
  )
}

export default Contact