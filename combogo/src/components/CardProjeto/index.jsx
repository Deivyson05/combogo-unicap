import styles from "./styles.module.css"

export function CardProjeto({img, nome, categoria, link}) {
    return(
        <a href={link} className={styles.container} target="_blank">
            <img src={img} alt="capa" />
            <strong>{nome}</strong>
            <div>
                {
                    categoria.map(cat => {
                        switch(cat){
                            case "Ação":
                                return <span
                                    style={{background: "rgba(185, 3, 33, 0.72)"}}
                                >{cat}</span>
                                break;
                            case "Aventura":
                                return <span
                                    style={{background: "#95B75E"}}
                                >{cat}</span>
                                break;
                            case "RPG":
                                return <span
                                    style={{background: "rgba(3, 145, 185, 0.72)"}}
                                >{cat}</span>
                                break;
                            
                            case "Simulação":
                                return <span
                                    style={{background: "rgba(3, 76, 185, 0.72)"}}
                                >{cat}</span>;

                            case "App":
                                return <span
                                style={{background: "#715D4C"}}
                                >{cat}</span>
                                break;

                            case "Educacional":
                                 return <span
                                    style={{background: "rgba(21, 29, 116, 0.61)"}}
                                 >{cat}</span>
                                break;

                            default:
                                return <span
                                    style={{background: "#A544CB"}}
                                >{cat}</span>
                                break;
                            
                        }
                        
                    })
                }
            </div>
        </a>
    )
}