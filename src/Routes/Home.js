import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Select Project</h1>
      <nav>
        <ul>
          <li>
            <Link to="/movies">Movie Theater</Link>
          </li>
          <li>
            <Link to="/crypto">Crypto Currenies</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
