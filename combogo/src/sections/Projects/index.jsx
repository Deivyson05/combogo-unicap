import styles from "./styles.module.css";
import { CardProjeto } from "../../components/CardProjeto";

import OResgateDeFarya from "../../assets/projetos/oresgatedefarya.png";
import IlustracoesRPG from "../../assets/projetos/ilustracoesrpg.png";
import Impressao3DOrgaosHumanos from "../../assets/projetos/impressao3dorgaoshumanos.png";
import MVPFisioterapiaComAR from "../../assets/projetos/mvpfisioterapiacomar.png";
import TrilhaDasMemorias from "../../assets/projetos/trilhamaringa.png";
import Neon from "../../assets/projetos/neonumafantasiadometaverso.png";
import Rugido from "../../assets/projetos/rugido.png";
import AnimacaoUnicap from "../../assets/projetos/animacaodeseguranca.png";
import UmaAventuraNoNatal from "../../assets/projetos/umaaventuranonatal.png";
import CorreAscensinho from "../../assets/projetos/correascensinho.png";

import { useTranslation } from "react-i18next";
import "../../i18n";

import { projects } from "./projects";


export function Projects({ lang }) {
    const { t, i18n } = useTranslation();

    console.log(lang);

    return (
        <section id="projetos" className={styles.container}>
            <h2>{t("projects.title")}</h2>
            <div>
                {
                    projects.map((proj, index) => (
                        <CardProjeto
                            link={proj.link}
                            img={proj.img}
                            nome={lang == 'pt'? proj.nome.pt : proj.nome.en}
                            categoria={proj.categoria}
                        />
                    ))
                }

            </div>
        </section>
    )
}