import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [contactVisible, setContactVisible] = useState(false);

  function showData() {
    setContactVisible(!contactVisible);
  }

  return (
    <div className="contact page">
      <h3>Contact Us</h3>

      <p>Click below to view contact details</p>

      {contactVisible ? (
        <div className="box">
          <h4>If you wish to contact us, email here:</h4>
          <h5>
            <strong>support@reflex.com</strong>
          </h5>
        </div>
      ) : null}

      <button onClick={showData}>View contact</button>
    </div>
  );
}

export default Contact;
