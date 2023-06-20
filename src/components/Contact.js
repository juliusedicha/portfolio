import React from 'react';
import './Contact.css'; // Path to the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub, faWhatsapp, faFacebook} from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <header>
      <button className="contact-button">Contact Me!</button>
      <ul className="social-media">
  <li>
  <a href="https://twitter.com/JuliusEdicha">
      <FontAwesomeIcon icon={faTwitter} />
    </a>
  </li>
  <li>
  <a href="https://www.linkedin.com/in/julius-edicha-41b895264">
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
  </li>
  <li>
  <a href="https://github.com/juliusedicha">
      <FontAwesomeIcon icon={faGithub} />
    </a>
  </li>
  <li>
  <a href="https://wa.me/2349167594782">
      <FontAwesomeIcon icon={faWhatsapp} />
    </a>
  </li>
  

  <li>
  <a href="https://www.facebook.com/100072958796487">
      <FontAwesomeIcon icon={faFacebook} />
    </a>
  </li>
  </ul>

    </header>
    
    

  );
};

export default Contact;
