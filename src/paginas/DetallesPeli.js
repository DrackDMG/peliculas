import styles from "./DetallesPeli.module.css"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../utils/httpcliente";
export function DetallesPeli() {
    const { idpeli } = useParams();
    const [peli, setPeli] = useState(null);

    useEffect(() => {
        get("/movie/" + idpeli + "?&language=es")
            .then((data) => {
                setPeli(data)
                console.log(data);
            });
    }, [idpeli]);

    if (!peli) {
        return null;
    }

    const imgurl = "https://image.tmdb.org/t/p/w500" + peli.poster_path
    return <div className={styles.detallesCont}>
        <img className={styles.col + " " + styles.peliImg} src={imgurl} alt={peli.title}></img>
        <div className={styles.col + " " + styles.detalles}>
            <p className={styles.p1}><b>Titulo:</b> {peli.title}</p>
            <p><b>Genero: </b> {peli.genres.map(genero => genero.name).join(", ")}</p>
            <p><b>Sinopsis:</b> {peli.overview}</p>
        </div>
    </div>
}