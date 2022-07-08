import pelic from "../pelic.json"
import { PeliCard } from "./PeliCard/PeliCard";
import styles from "./Peliculas.module.css"

export function Peliculas() {

    return (
        <ul className={styles.peliGrid}>
            {pelic.map((peli) => (
                <PeliCard key={peli.id} peli={peli} />
            ))}
        </ul>
    );

} 