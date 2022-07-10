import styles from './Buscador.module.css';
import { FaSearch } from 'react-icons/fa'
import { useHistory } from 'react-router-dom';
import { useQuery } from '../../hooks/useQuery';

export function Buscador() {
    const query = useQuery();
    const search = query.get("search");
    const history = useHistory();

    const handleSumnit = (e) => {
        e.preventDefault();
    }

    return (
        <form className={styles.contenedor} onSubmit={handleSumnit}>
            <div className={styles.busqueda}>
                <input placeholder='Buscar…' className={styles.busInput} type='text' value={search}
                    onChange={(e) => {
                        const value = e.target.value;
                        history.push('/?search=' + value);
                    }} />
                <FaSearch size={20} className={styles.busBoton} />
            </div>
        </form>
    )
}
