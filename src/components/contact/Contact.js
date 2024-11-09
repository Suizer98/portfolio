import axios from 'axios'
import { useRef, useState } from 'react'

import classes from './Contact.module.css'

function Contact() {
  const form = useRef()
  const [hidden, setHidden] = useState(false)
  const [error, setError] = useState(false)

  const checkForm = () => {
    if (
      form.current['0'].value.trim() !== '' &&
      form.current['1'].value.trim() !== '' &&
      form.current['2'].value.trim() !== ''
    ) {
      form.current['3'].disabled = false
    }
  }

  const sendEmail = async (e) => {
    e.preventDefault()
    const name = form.current['0'].value
    const email = form.current['1'].value
    const message = form.current['2'].value

    const telegramMessage = `New contact form submission:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`

    try {
      await axios.post(
        `https://api.telegram.org/bot${process.env.REACT_APP_TELEGRAM_TOKEN}/sendMessage`,
        {
          // https://api.telegram.org/bot<token>/getUpdates
          chat_id: `${process.env.REACT_APP_CHAT_ID}`,
          text: telegramMessage
        }
      )
      setHidden(true)
    } catch (err) {
      console.error('Error sending message:', err.response ? err.response.data : err.message)
      setError(true)
    }
  }

  return (
    <section className={classes.contact}>
      <h2>Ping me here!</h2>

      {!hidden && (
        <form ref={form} className={classes.form} onSubmit={sendEmail} onChange={checkForm}>
          <label className={classes.label} htmlFor="name">
            Name
          </label>
          <input
            className={classes.input}
            id="name"
            placeholder="Your name"
            type="text"
            name="user_name"
            required
          />

          <label className={classes.label} htmlFor="mail">
            Email
          </label>
          <input
            className={classes.input}
            id="mail"
            placeholder="Your email"
            type="email"
            name="user_email"
            required
          />

          <label className={classes.label} htmlFor="message">
            Message
          </label>
          <textarea
            className={classes.area}
            id="message"
            placeholder="Your message"
            maxLength="500"
            name="user_message"
            required
          />
          {error && (
            <p className={classes.error}>An error occurred while sending. Try again later.</p>
          )}
          <button className={classes.send} type="submit" disabled>
            Send
          </button>
        </form>
      )}
      {hidden && (
        <div className={classes.field}>
          <p className={classes.succ}>Message successfully sent!</p>
        </div>
      )}

      <ul className={classes.socials}>
        <li>
          <a
            href="https://www.linkedin.com/in/teysuizer1998/"
            className={classes.social}
            rel="noreferrer"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Suizer98"
            className={classes.social}
            rel="noreferrer"
            target="_blank"
          >
            <i className="fa-brands fa-square-github"></i>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Contact
