import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({children}){
    const [favorito, setFavorito] = useState([]);

    return(
        <FavoritosContext.Provider value={{favorito, setFavorito}}>
            {children}
        </FavoritosContext.Provider>
    )
}

export function useFavoritoContext(){
    const [favorito, setFavorito] = useContext(FavoritosContext)

    function addFavorito(novoFavorito){
        const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id)

        let novoLista = [...favorito];

        if(!favoritoRepetido){
            novoLista.push(novoFavorito);
            return setFavorito(novoLista);
        }

        novoLista.splice(novoLista.indexOf(novoFavorito), 1 ); 
        return setFavorito(novoLista);
    }
    return{
        favorito,
        addFavorito
    }
}