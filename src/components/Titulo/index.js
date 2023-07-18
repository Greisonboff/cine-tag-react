import style from "./Titulo.module.css"

export default function Titulo({children}){
    return(
        <div className={style.texto}>
            {children}
        </div>
    )
}