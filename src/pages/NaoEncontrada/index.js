import { Link } from "react-router-dom"
import styles from "./NaoEncontrada.module.css"

export default function NaoEncontrada() {
    return (
        <section className={styles.container}>
            <h2>Ops!</h2>
            <p>O conteudo que você procura não foi encontrado!</p>
            <Link to={`/`}>
                <h3>Voltar para Home</h3>
            </Link>
        </section>
    )
}