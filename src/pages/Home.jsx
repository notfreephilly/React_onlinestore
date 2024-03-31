import './Home.css';
import { Link } from 'react-router-dom';
import Catalog from './Catalog';

function Home() {
  return (
    <div className="home page">
      <h1>REFLEX</h1>
      <p>Show your pump</p>

      <Link className="btn btn-dark" to="/catalog">
        Shop our inventory here!
      </Link>
    </div>
  );
}

export default Home;
