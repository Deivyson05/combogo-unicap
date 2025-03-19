import styles from "./styles.module.css"

export function CardProjeto({img, nome, categoria}) {
    return(
        <article className={styles.container}>
            <img src={img} alt="capa" />
            <strong>{nome}</strong>
            <div>
                {
                    categoria.map(cat => {
                        switch(cat){
                            case "Ação":
                                break;
                            case "Aventura":
                                break;
                            case "RPG":
                                break;
                            
                        }
                        
                    })
                }
            </div>
        </article>
    )
}