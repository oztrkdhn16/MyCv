import React from 'react'

const HeaderSocials = () => {
  const options = {
    whatsapp: '905354423811'
  };
  return (
    <div className="home__socials">
        <a href="https://www.instagram.com/oztrkdhn16/" className="home__social-link" target="_blank" >
        <i class="fa-brands fa-instagram"></i>
        </a>
        
        <a href="https://www.twitter.com" className="home__social-link" target="_blank">
        <i class="fa-brands fa-twitter"></i>
        </a>

        <a href="https://www.linkedin.com/in/dhnoztrk/" className="home__social-link" target="_blank">
        <i class="fa-brands fa-linkedin"></i>
        </a>

        <a href="https://github.com/oztrkdhn16" className="home__social-link" target="_blank">
        <i class="fa-brands fa-github"></i>
        </a>

        {/* <a href="https://web.whatsapp.com/" className="home__social-link" target="_blank">
        <i class="fa-brands fa-whatsapp"></i>
        </a> */}

        <a href={`https://wa.me/${options.whatsapp}`} className="home__social-link" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-whatsapp"></i>
        </a>
    </div>
  )
}

export default HeaderSocials