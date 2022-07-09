import styles from "./DetallesPeli.module.css"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../utils/httpcliente";
import { Cargando } from "../componetes/Cargando/Cargando";
export function DetallesPeli() {
    const { idpeli } = useParams();
    const [isLoad, setIsLoad] = useState(true);
    const [peli, setPeli] = useState(null);

    useEffect(() => {
        setIsLoad(true);
        get("/movie/" + idpeli + "?&language=es")
            .then((data) => {
                setPeli(data)
                setIsLoad(false);
                console.log(data);
            });
    }, [idpeli]);

    if (isLoad) {
        return <Cargando />;
    }

    const imgurl = "https://image.tmdb.org/t/p/w500" + peli.poster_path
    // const imgurl2 = "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces" + peli.backdrop_path
    // const bg = {
    //     backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${imgurl2})`,
    // }

    return <div className={styles.detallesCont} >
        <img className={styles.col + " " + styles.peliImg} src={imgurl} alt={peli.title}></img>
        <div className={styles.col + " " + styles.detalles}>
            <p className={styles.p1}> {peli.title}</p>
            <p><b>Genero: </b> {peli.genres.map(genero => genero.name).join(", ")}</p>
            <p><b>Sinopsis:</b> {peli.overview}</p>
        </div>
    </div>

}