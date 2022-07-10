import { Link } from "react-router-dom";
import styles from "./PeliCard.module.css"
import placeholder from "../../placeholder.jpg";
export function PeliCard({ peli }) {
  const imgurl = peli.poster_path ? "https://image.tmdb.org/t/p/w500" + peli.poster_path : placeholder
  // const imgurl = peli.poster_path ? "https://image.tmdb.org/t/p/w1280" + peli.poster_path : placeholder
  return (
    <li className={styles.peliCard}>
      <Link to={"/pelis/" + peli.id}>
        <img className={styles.peliImg} src={imgurl} alt={peli.title} />
        <div className={styles.titulo}>{peli.title}</div>
      </Link>
    </li>
  );
}