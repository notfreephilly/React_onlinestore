import { useState } from 'react';
import './About.css';

function About() {
  const [contactVisible, setContactVisible] = useState(false);

  function showData() {
    setContactVisible(!contactVisible);
  }

  return (
    <div className="about page">
      <h3>Philip Yoder</h3>

      {contactVisible ? (
        <div className="box">
          <h4>If you wish to contact us, email here:</h4>
          <h5>
            <strong>support@reflex.com</strong>
          </h5>
        </div>
      ) : null}

      <button className="btn btn-outline-dark" onClick={showData}>
        View contact
      </button>
    </div>
  );
}

export default About;
