import { FaSpinner } from 'react-icons/fa';
import styles from './Cargando.module.css'

export function Cargando() {
    return (
        <div className={styles.spinner}>
            <FaSpinner className={styles.girar} size={60} />
        </div>
    );
}
