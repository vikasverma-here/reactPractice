import React from 'react'

function ContactForm() {
  return (
    <div>
       <form action="">
      <input type="text" placeholder="Enter your name" />
      <input type="email" placeholder="Enter your email" />
      <input type="password" placeholder="Enter your password" />
      <input type="tel" placeholder="Enter your phone number" />
      <input type="date" placeholder="Select a date" />
    </form>
    </div>
  )
}

export default ContactForm
