import { useState } from "react";
import { useEffect } from "react";
import { get } from "../utils/httpcliente";
import { Cargando } from "./Cargando/Cargando";
import { PeliCard } from "./PeliCard/PeliCard";
import styles from "./Peliculas.module.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { SinResultados } from "./SinResultados/SinResultados";

export function Peliculas({ search }) {
    const [pelis, setPelis] = useState([]);
    const [isLoad, setIsLoad] = useState(true);
    const [pagina, setPagina] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        setIsLoad(true);
        const searchUrl = search ? "/search/movie?query=" + search + "&page=" + pagina + "&language=es" : "/discover/movie?page=" + pagina + "&language=es"
        get(searchUrl)
            .then((data) => {
                setPelis((prevPelis) => prevPelis.concat(data.results));
                setHasMore(data.page < data.total_pages);
                setIsLoad(false);
            });
    }, [search, pagina]);

    if (!isLoad && pelis.length === 0) {
        return <SinResultados />
    }

    return (<>
        <InfiniteScroll dataLength={pelis.length} hasMore={hasMore} next={() => setPagina((prevPage) => prevPage + 1)} loader={<Cargando />}>
            <ul className={styles.peliGrid}>
                {pelis.map((peli) => (
                    <PeliCard key={peli.id} peli={peli} />
                ))}
            </ul>
        </InfiniteScroll>

    </>
    );

} 