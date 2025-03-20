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



export function Projects() {
    return (
        <section id="projetos" className={styles.container}>
            <h2>Nossos Projetos</h2>
            <div>
                <CardProjeto
                    link={"https://oresgatedefarya.itch.io/o-resgate-de-farya"}
                    img = {OResgateDeFarya}
                    nome = {"O Resgate de Fárya"}
                    categoria={["Aventura"]}
                />
                <CardProjeto
                    link={"https://combogounicap.itch.io/ilustraes-rpg"}
                    img = {IlustracoesRPG}
                    nome = {"Ilustrações RPG"}
                    categoria={["RPG"]}
                />
                <CardProjeto
                    link={"https://combogounicap.itch.io/impresso-3d-orgos-humanos"}
                    img = {Impressao3DOrgaosHumanos}
                    nome = {"Impressão 3D - Orgãos Humanos"}
                    categoria={["Outro"]}
                />
                <CardProjeto
                    link={"https://combogounicap.itch.io/mvp-fisioterapia-com-ar"}
                    img = {MVPFisioterapiaComAR}
                    nome = {"MVP - Fisioterapia com AR"}
                    categoria={["Outro"]}
                />
                <CardProjeto
                    link = {"https://combogounicap.itch.io/trilha-das-memrias-maring"}
                    img = {TrilhaDasMemorias}
                    nome = {"Trilha das Memórias - Maringá"}
                    categoria={["Outro"]}
                />
                <CardProjeto
                    link={"https://combogounicap.itch.io/neon-metaverso"}
                    img = {Neon}
                    nome = {"Neon: uma fantasia do Metaverso"}
                    categoria={["Simulação"]}
                />
                <CardProjeto
                    link={"https://combogounicap.itch.io/rugido"}
                    img = {Rugido}
                    nome = {"Rugido: Denúncias e Apoio LGBTQI+"}
                    categoria={["App"]}
                />
                <CardProjeto
                    link={"https://combogounicap.itch.io/animao-de-segurana-unicap"}
                    img = {AnimacaoUnicap}
                    nome = {"Animação de Segurança Unicap"}
                    categoria={["Educacional"]}
                />
                <CardProjeto
                    link={"https://combogounicap.itch.io/uma-aventura-no-natal"}
                    img = {UmaAventuraNoNatal}
                    nome = {"Uma Aventura no Natal"}
                    categoria={["Outro"]}
                />
                <CardProjeto
                    link={"https://combogounicap.itch.io/corre-ascensinho"}
                    img = {CorreAscensinho}
                    nome = {"Corre Ascensinho"}
                    categoria={["Outro"]}
                />
            </div>
        </section>
    )}