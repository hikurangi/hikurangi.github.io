import React from 'react'

const About = () => {
  return (
    <div>
      <article className="body-copy">
        <p>
          Learning, teaching, coding, composing and performing around Aotearoa and the world.
        </p>
      </article>
      <div className="social-div">
        <a href="https://github.com/hikurangi" className="svg-link">
          <img className="social-icons" src="../../img/github.svg" alt="github icon" />
        </a>
        <a href="https://www.instagram.com/ignarukih" className="svg-link">
          <img className="social-icons" src="../../img/instagram.svg" alt="instagram icon" />
        </a>
        <a href="https://twitter.com/ignarukih" className="svg-link">
          <img className="social-icons" src="../../img/twitter.svg" alt="twitter icon" />
        </a>
        <a href="https://www.youtube.com/channel/UC6RNtVlmmJa_vrexY5DgPqw" className="svg-link">
          <img className="social-icons" src="../../img/youtube.svg" alt="youtube icon" />
        </a>
        <a href="mailto:" className="svg-link">
          <img className="social-icons" src="../../img/mail.svg" alt="email icon" />
        </a>
      </div>
    </div>
  )
}

export default About;
