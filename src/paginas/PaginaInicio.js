import { Buscador } from "../componetes/Buscador/Buscador";
import { Peliculas } from "../componetes/Peliculas";

export function PaginaInicio() {
    return <div>
        <Buscador />
        <Peliculas />
    </div>
}