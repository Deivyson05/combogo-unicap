import styles from "./styles.module.css";

export function About() {
    return (
        <section className={styles.container} id="sobre">                                                                      
            <section className={styles.about}>
                <div className={styles.title}>
                    <h1>Sobre a Combogó</h1>
                    <div className={styles.paragraph}>
                        <p>A Combogó é um grande projeto de extensão do curso de Jogos Digitais da Universidade Católica de Pernambuco. Realizamos trabalhos na área de Design, Computação e Jogos.</p>
                         
                        <p>Criada em outubro de 2016, a Combogó Unicap é uma agência de soluções interativas que tem como objetivo o desenvolvimento de resoluções criativas para problemas reais, através de inovação e engenhosidade.</p>
                    </div>
                    <a href="#" className={styles.button}>Saiba Mais</a>
                </div>
            </section>
            
            <div className={styles.Card}>
                <h2>+20</h2>
                <p>Projetos</p>
            </div>
        </section>
    );
}
