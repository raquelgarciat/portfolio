function Contact() {
  return (
    <section className='contact' id='contact'>
      <div className='contact_container'>
        <h3>Get in touch!</h3>
        <p>I'd love to hear from you :)</p>
        <form action='https://formspree.io/f/xwkdbype' method='POST'>
          <div className='form_container'>
            <fieldset>
              <label htmlFor='firstName'>First name</label>
              <input
                placeholder='Name *'
                id='firstName'
                type='text'
                name='firstName'
                required
              />
            </fieldset>
            <fieldset>
              <label htmlFor='email'>Your email</label>
              <input
                placeholder='Email *'
                id='email'
                type='email'
                name='email'
                required
              />
            </fieldset>
          </div>
          <fieldset>
            <label htmlFor='subject'>Subject</label>
            <input
              placeholder='Subject *'
              id='email'
              type='email'
              name='email'
              required
            />
          </fieldset>
          <fieldset>
            <label for='message'>Your message</label>
            <textarea
              id='message'
              name='message'
              rows='8'
              cols='80'
              placeholder='Your message *'
              required
            ></textarea>
          </fieldset>
          <div className='button_container'>
            <input className='button' type='reset' value='Clear all' />
            <input className='button' type='submit' value='Send message' />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
