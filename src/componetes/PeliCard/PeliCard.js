import { Link } from "react-router-dom";
import styles from "./PeliCard.module.css"
export function PeliCard({ peli }) {
  const imgurl = "https://image.tmdb.org/t/p/w300" + peli.poster_path
  return (
    <li className={styles.peliCard}>
      <Link to={"/pelis/" + peli.id}>
        <img className={styles.peliImg} src={imgurl} alt={peli.title} />
        <div>{peli.title}</div>
      </Link>
    </li>
  );
}