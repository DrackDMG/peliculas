import { useState } from "react";
import { useEffect } from "react";
import { get } from "../utils/httpcliente";
import { Cargando } from "./Cargando/Cargando";

import { PeliCard } from "./PeliCard/PeliCard";
import styles from "./Peliculas.module.css"

export function Peliculas() {
    const [pelis, setPelis] = useState([]);
    const [isLoad, setIsLoad] = useState(true);

    useEffect(() => {
        setIsLoad(true);
        get("/discover/movie?&language=es")
            .then((data) => {
                setPelis(data.results);
                setIsLoad(false);
            });

    }, []);

    if (isLoad) {
        return <Cargando />
    }

    return (
        <ul className={styles.peliGrid}>
            {pelis.map((peli) => (
                <PeliCard key={peli.id} peli={peli} />
            ))}
        </ul>
    );

} 