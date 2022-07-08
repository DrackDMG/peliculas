import { useState } from "react";
import { useEffect } from "react";
import { get } from "../utils/httpcliente";

import { PeliCard } from "./PeliCard/PeliCard";
import styles from "./Peliculas.module.css"

export function Peliculas() {
    const [pelis, setPelis] = useState([]);

    useEffect(() => {
        get("/discover/movie")
            .then((data) => {
                setPelis(data.results);
            });

    }, []);

    return (
        <ul className={styles.peliGrid}>
            {pelis.map((peli) => (
                <PeliCard key={peli.id} peli={peli} />
            ))}
        </ul>
    );

} 