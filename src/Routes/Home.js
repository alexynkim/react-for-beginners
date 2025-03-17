import { Link } from "react-router-dom";
import style from "./Home.module.css";

function Home() {
  return (
    <div>
      <h1>My Portfolio</h1>
      <div className={style.container}>
        <Link to="/movies" className={style.AppItem}>
          Movie Theater
        </Link>
        <Link to="/crypto" className={style.AppItem}>
          Crypto Currenies
        </Link>
      </div>
    </div>
  );
}

export default Home;
