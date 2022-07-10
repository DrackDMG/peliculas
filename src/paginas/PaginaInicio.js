
import { Peliculas } from "../componetes/Peliculas";
import { useDebounce } from "../hooks/useDebounce";
import { useQuery } from "../hooks/useQuery";

export function PaginaInicio() {
    const query = useQuery();
    const search = query.get("search");
    const useDebounceSearch = useDebounce(search, 100);
    return <Peliculas key={search} search={useDebounceSearch} />
}