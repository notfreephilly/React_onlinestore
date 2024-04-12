import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <h2>HugePump&trade; LLC.</h2>
      <div className="footer-btn">
        <Link className="footer-link" to="/contact">
          <button>Contact</button>
        </Link>
        <Link className="footer-link" to="/catalog">
          <button>Shop</button>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
