import styles from './Buscador.module.css';
import { FaSearch } from 'react-icons/fa'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export function Buscador() {
    const [buscador, setbuscador] = useState("");
    const history = useHistory();

    const handleSumnit = (e) => {
        e.preventDefault();
        history.push('/?search=' + buscador)
    }

    return (
        <form className={styles.contenedor} onSubmit={handleSumnit}>
            <div className={styles.busqueda}>
                <input value={buscador} onChange={(e) => setbuscador(e.target.value)} className={styles.busInput} type='text' />
                <button className={styles.busBoton} type='submit'><FaSearch size={20} /></button>
            </div>
        </form>
    )
}
