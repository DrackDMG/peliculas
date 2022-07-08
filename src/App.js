import styles from "./App.module.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { DetallesPeli } from "./paginas/DetallesPeli";
import { PaginaInicio } from "./paginas/PaginaInicio";

export function App() {
    return (
        <Router>
            <header className={styles.titulo}> <Link to="/"><h1 className={styles.h1}>Peliculas</h1></Link></header>
            <main>
                <Switch>
                    <Route path="/pelis/:idpeli">
                        <DetallesPeli />
                    </Route>
                    <Route path="/">
                        <PaginaInicio />
                    </Route>
                </Switch>
            </main>
        </Router >
    );
}

