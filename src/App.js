import { Peliculas } from "./componetes/Peliculas";
import styles from "./App.module.css";

export function App() {
    return <div>
        <header className={styles.titulo}><h1>Peliculas</h1> </header>
        <main>
            <Peliculas />
        </main>
    </div>
}

