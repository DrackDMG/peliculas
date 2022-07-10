import styles from "./DetallesPeli.module.css"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../utils/httpcliente";
import { Cargando } from "../componetes/Cargando/Cargando";
import { useQuery } from "../hooks/useQuery";
import { Peliculas } from "../componetes/Peliculas";
import placeholder from "../placeholder.jpg";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export function DetallesPeli() {
    const { idpeli } = useParams();
    const [isLoad, setIsLoad] = useState(true);
    const [peli, setPeli] = useState(null);

    const query = useQuery();
    const search = query.get("search");

    useEffect(() => {
        setIsLoad(true);
        const searchUrl = search ? "/search/movie?query=" + search + "?&language=es" : "/discover/movie?&language=es"
        get(searchUrl)
            .then((data) => {
                <Peliculas />
            });

    }, [search]);



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

    const imgurl = peli.poster_path ? "https://image.tmdb.org/t/p/w500" + peli.poster_path : placeholder
    // const imgurl2 = "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces" + peli.backdrop_path
    // const bg = {
    //     backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${imgurl2})`,
    // }

    return <div className={styles.detallesCont} >
        <div className={styles.col + " " + styles.contImg}><img className={styles.contImg + " " + styles.peliImg} src={imgurl} alt={peli.title}></img></div>
        <div className={styles.col + " " + styles.detalles}>
            <p className={styles.p1}> {peli.title}</p>
            <div style={{ width: 50, height: 50, margin: 10 }}>
                <CircularProgressbar value={peli.vote_average * 10} text={peli.vote_average * 10} />
            </div>
            <p className={styles.fecha}> {peli.release_date}</p>
            <p className={styles.p2}><b>Genero: </b> {peli.genres.map(genero => genero.name).join(", ")}</p>
            <p className={styles.p3}><b>Sinopsis:</b> {peli.overview}</p>
        </div>
    </div >

}