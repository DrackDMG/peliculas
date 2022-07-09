import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { get } from "../utils/httpcliente";
import { Cargando } from "./Cargando/Cargando";
import { PeliCard } from "./PeliCard/PeliCard";
import styles from "./Peliculas.module.css";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export function Peliculas() {
    const [pelis, setPelis] = useState([]);
    const [isLoad, setIsLoad] = useState(true);
    const query = useQuery();
    const search = query.get("search");

    useEffect(() => {
        setIsLoad(true);
        const searchUrl = search ? "/search/movie?query=" + search + "?&language=es" : "/discover/movie?&language=es"
        get(searchUrl)
            .then((data) => {
                setPelis(data.results);
                setIsLoad(false);
            });

    }, [search]);

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