import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <h2>HugePump&trade; LLC.</h2>
      <div className="footer-btn">
        <button>
          <Link className="footer-link" to="/contact">
            Contact
          </Link>
        </button>
        <button>Leave Feedback</button>
      </div>
    </div>
  );
}

export default Footer;
