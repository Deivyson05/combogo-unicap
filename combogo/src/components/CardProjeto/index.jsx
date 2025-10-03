import styles from "./styles.module.css"

export function CardProjeto({ img, nome, categoria, link }) {
    return (
        <a href={link} className={styles.container} target="_blank">
            <img src={img} alt="capa" />
            <strong>{nome}</strong>
            <div>
                {
                    categoria.map((cat, index) => {
                        if (cat.pt == "Aventura" || cat.pt == "Adventure") {
                            return <span
                                key={index}
                                style={{ background: "rgba(185, 3, 33, 0.72)" }}
                            >{cat.pt}</span>
                        } else if (cat.pt == "RPG") {
                            return <span
                                key={index}
                                style={{ background: "rgba(3, 145, 185, 0.72)" }}
                            >{cat.pt}</span>
                        } else if (cat.pt == "Simulação" || cat.pt == "Simulation") {
                            return <span
                                key={index}
                                style={{ background: "rgba(3, 76, 185, 0.72)" }}
                            >{cat.pt}</span>
                        } else if (cat.pt == "App") {
                            return <span
                                key={index}
                                style={{ background: "#715D4C" }}
                            >{cat.pt}</span>
                        } else if (cat.pt == "Educacional" || cat.pt == "Educat.ptional") {
                            return <span
                                key={index}
                                style={{ background: "rgba(21, 29, 116, 0.61)" }}
                            >{cat.pt}</span>
                        } else {
                            return <span
                                key={index}
                                style={{ background: "#A544CB" }}
                            >{cat.pt}</span>
                        }

                    })
                }
            </div>
        </a>
    )
}