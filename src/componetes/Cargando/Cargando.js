import { ImSpinner10 } from 'react-icons/im';
import styles from './Cargando.module.css'

export function Cargando() {
    return (
        <div className={styles.spinner}>
            <ImSpinner10 className={styles.girar} size={40} />
        </div>
    );
}
