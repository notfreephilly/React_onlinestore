import './Home.css';
import { Link } from 'react-router-dom';
import Catalog from './Catalog';

function Home() {
  return (
    <div className="home page">
      <div className="intro">
        <h1>REFLEX</h1>
        <p> &#x1F4AA; Show your pump &#x1F4AA;</p>
      </div>
      <div className="main">
        <div className="img-box1">
          <img src="/images/deadlift.jpg" alt="" />
          <p>
            Where Motion Meets Style. Dive into a world of dynamic energy, with
            vibrant images capturing individuals in motion, sweating it out in
            Reflex's signature workout attire. Feel the pulse of fitness as you
            explore our latest collections, designed to empower your every move.
          </p>
        </div>
        <div className="img-box2">
          <img src="/images/dbtrx.jpg" alt="" />
          <p>
            Step into the Movement with Reflex. Witness the beauty of active
            living through stunning visuals of people embracing their fitness
            journey. From intense workouts to serene yoga sessions, our premium
            workout clothing adapts seamlessly to every pose and movement,
            ensuring you look and feel your best with every stride.
          </p>
        </div>
        <div className="img-box3">
          <img src="/images/ropes.jpg" alt="" />
          <p>
            Experience the Power of Performance. Be inspired by a gallery of
            individuals pushing their limits, clad in Reflex's cutting-edge
            activewear. From high-intensity training to mindful stretches, our
            curated selection of workout clothes reflects your dedication to
            fitness and style. Get ready to elevate your workout experience with
            Reflex.
          </p>
        </div>
      </div>

      <Link className="btn btn-dark" to="/catalog">
        Shop our inventory here!
      </Link>
    </div>
  );
}

export default Home;
