import styles from "./App.module.css";
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import { DetallesPeli } from "./paginas/DetallesPeli";
import { PaginaInicio } from "./paginas/PaginaInicio";
import { Buscador } from "./componetes/Buscador/Buscador";

export function App() {
    return (
        <Router>
            <header className={styles.titulo}> <Link to="/"><h1 className={styles.h1}>Peliculas</h1></Link> <Buscador /></header>
            <main>
                <Switch>
                    <Route exact path="/pelis/:idpeli">
                        <DetallesPeli />
                    </Route>
                    <Route exact path="/">
                        <PaginaInicio />
                    </Route>
                    <Route path='*'>
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </main>
        </Router >
    );
}

