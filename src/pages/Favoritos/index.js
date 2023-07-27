import styles from "./Favoritos.module.css"
import Banner from "components/Banner"
import Titulo from "components/Titulo"
import Card from "components/Card"
import { useFavoritoContext } from "contextos/Favoritos"
import { Link } from "react-router-dom"

export default function Favoritos() {
    const { favorito } = useFavoritoContext();
    return (
        <>
            <Banner imagem="favoritos" />
            <Titulo>
                <h1>Meus filmes favoritos</h1>
            </Titulo>
            {favorito.length !== 0 &&
                <section className={styles.container}>
                    {favorito.map((fav) => {
                        return <Card {...fav} key={fav.id} />
                    }
                    )}
                </section>
            }
            {favorito.length === 0 &&
                <section className={styles.containerEmpty}>
                    <Link to={'/'}><h1>Que tal adicionar um filme favorito??</h1></Link>
                </section>
            }
        </>
    )
}