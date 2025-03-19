import styles from "./styles.module.css";
import { CardProjeto } from "../../components/CardProjeto";

export function Projects() {
    return (
        <section id="projetos" className={styles.container}>
            <h2>Nossos Projetos</h2>
            <div>
                <CardProjeto
                    img = {"https://placehold.co/600x400"}
                    nome = {"Teste"}
                    categoria={["Ação", "Aventura", "Outro"]}
                />
                <CardProjeto
                    img = {"https://placehold.co/600x400"}
                    nome = {"Teste"}
                    categoria={["Ação", "Aventura", "Outro"]}
                />
                <CardProjeto
                    img = {"https://placehold.co/600x400"}
                    nome = {"Teste"}
                    categoria={["Ação", "Aventura", "Outro"]}
                />
            </div>
        </section>
    )}